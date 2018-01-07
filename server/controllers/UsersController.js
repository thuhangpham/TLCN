'use strict';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Users = require('../models/Users.js');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const gravatar = require('gravatar');

var users = {

    getAllUser: (req, res) => {
        Users.find({})
            .then((data) => { res.json({ result: 1, msg: "", data: data || {} }); })
            .catch((err) => { res.json({ result: 0, msg: 'Server error', data: {} }); console.log(err); })
    },

    getUserById: (req, res) => {
        Users.findById(req.params.id)
            // .populate('info.employment_sitution')
            .populate({ path: 'info.areas_expertise', select: 'name' })
            .populate({ path: 'info.employment_sitution', select: 'name' })
            .then((data) => { res.json({ result: 1, msg: "", data: data || {} }); })
            .catch((err) => { console.log(err); res.json({ result: 0, msg: `Server error`, data: {} }); })
    },
    getUserByIdApply: (req, res) => {
        Users.findById(req.params.id)
            .populate('apply')
            .then((data) => { res.json({ result: 1, msg: "", data: data || {} }); })
            .catch((err) => { console.log(err); res.json({ result: 0, msg: `Server error`, data: {} }); })
    },
    checkLoginFB: (req, res) => {
        console.log(req.params);
        let body = {
            id: req.params.id,
            provider: req.params.provider
        };
        Users.find({ $or: [body, { 'contact.email': req.params.email }] })
            // .or(body).
            // or({ email: req.params.email })
            //({ $or: [ body, {email: req.params.email}] })
            //.findOne(body).or({'email': res.params.email})
            .then((data) => {
                console.log('check fb ' + data);
                if (!data || data.length == 0)
                    res.json({ result: 0, msg: `User not exist!`, data: {} });
                else {
                    console.log(JSON.stringify(data));
                    res.json({ result: 1, msg: "", data: data || {} });
                }
            })
            .catch((err) => { console.log(err); res.json({ result: 0, msg: `Server error`, data: {} }); })
    },

    authWithFB: (req, res) => {
        console.log("body: " + JSON.stringify(req.body));
        if (req.body)
            Users.findOne({ "contact.email": req.body.email }, (err, user) => {
                if (err) {
                    console.log(err);
                    res.json({ result: 0, msg: 'Error..., please try again!', data: {} });
                }
                else {
                    let token = jwt.sign({ data: req.body }, config.JWT_SECRET, {
                        expiresIn: 200 * 60 // expires in *1 min
                    });
                    res.json({ result: 1, msg: 'Successful!', data: user, token: token });
                }
            })
        else res.end.json({ result: 0, msg: 'Request error', data: {} });
    },

    insertUser: (req, res) => {
        console.log('insert user ' + JSON.stringify(req.body));
        let body = {};
        body = {
            'contact.email': req.body.contact.email
        };
        if (req.body.id) {
            body = {
                'contact.email': req.body.contact.email,
                'id': req.body.id
            };
        }
        Users.findOne(body)
            .then(user => {
                if (user) {
                    res.json({ result: 0, msg: "User already exists!", data: {} });
                } else {
                    console.log(req.body);
                    var hash = Users.schema.methods.generateHash(req.body.password);
                    req.body.password = hash;
                    if (!req.body.image)
                        req.body.image = gravatar.url(req.body.contact.email, { s: '100' }, false) || '';
                    console.log(req.body.password);
                    Users.create(req.body)
                        .then((data) => {
                            let token = jwt.sign({ data: req.body }, config.JWT_SECRET, {
                                expiresIn: 200 * 60 // expires in *1 min
                            });
                            res.json({ result: 1, msg: 'Create successful!', data: data, token: token });
                            //  res.json({ result: 1, msg: "", data: data || {} }); 
                        })
                        .catch((err) => {
                            console.log(err);
                            res.json({ result: 0, msg: `${err}`, data: {} });
                        })
                }
            }).catch(err => { res.json({ result: 0, msg: `${err}`, data: {} }); })
    },

    updateUser: (req, res) => {
        console.log(req.body);
        Users.findByIdAndUpdate(req.body._id, req.body, (err, data) => {
            if (err || !data) {
                console.log(`Update user error ${err}`);
                res.json({ result: 0, msg: `${err}`, data: {} });
            }
            else
                res.json({ result: 1, msg: data || {} });
        })
    },
    updatePassword: (req, res) => {
        console.log('update pwd ' + JSON.stringify(req.body));
        req.body.last_update = new Date();
        var hash = Users.schema.methods.generateHash(req.body.password);
        Users.findOneAndUpdate({ 'contact.email': req.body.email }, { 'password': hash }, (err, data) => {
            if (err || !data) {
                console.log(`Update pwd user error ${err}`);
                res.json({ result: 0, msg: `${err}`, data: {} });
            } else
                res.json({ result: 1, msg: data || {} });
        })
    },
    // updatePassword: (req, res) => {
    //     console.log('update pass '+JSON.stringify(req.body));
    //     req.body.last_update = new Date();
    //     var hash = Users.schema.methods.generateHash(req.body.password);
    //     Users.findOneAndUpdate({ 'contact.email': req.body.email}, {'password':hash} , (err, data) => {
    //         if (err || !data) {
    //             console.log(`Update pwd user error ${err}`);
    //             res.json({ result: 0, msg: `${err}`, data: {} });
    //         }else
    //             res.json({ result: 1, msg: data || {} });
    //     })
    // },
    changePassword: (req, res) => {
        console.log(req.params + '');
        Users.findById(req.params.id, (err, data) => {
            if (err || !data) {
                res.json({ result: 0, msg: `${err}`, data: data || {} });
            }
            else {
                Users.schema.methods.comparePassword(req.body.old_pass, data.password, (err, isMatch) => {
                    console.log(req.body);
                    if (err || !isMatch)
                        res.json({ result: 0, msg: 'Enter old password is not true!', data: data || {} });
                    else {
                        Users.findByIdAndUpdate(req.params.id,
                            { 'password': Users.schema.methods.generateHash(req.body.password) }, (err, r) => {
                                if (!err)
                                    res.json({ result: 1, msg: 'Password updated!', data: data || {} });
                                else
                                    res.json({ result: 0, msg: 'Update password is failed!', data: data || {} });
                            })
                    }
                });
            }
        })
    },
    deleteUser: (req, res) => {
        Users.findByIdAndRemove(req.params.id, req.body, (err, data) => {
            if (err) {
                console.log(`Update user error ${err}`);
                res.json({ result: 0, msg: `Error: ${err}`, data: {} });
            } else res.json({ result: 1, msg: "", data: req.body || {} });
        })
    },
    authentication: (req, res) => {
        console.log("body: " + JSON.stringify(req.body));
        if (req.body)
            Users.findOne({ "contact.email": req.body.email }, (err, user) => {
                if (err) {
                    console.log(err);
                    res.json({ result: 0, msg: 'Email or Password incorrect!', data: {} });
                }
                if (user) {
                    Users.schema.methods.comparePassword(req.body.password, user.password, function (err, isMatch) {
                        if (err) {
                            console.log(err);
                            res.json({ result: 0, msg: 'Server error!', data: {} });
                        }
                        else
                            if (isMatch) {

                                let token = jwt.sign({ data: user }, config.JWT_SECRET, {
                                    expiresIn: 200 * 60 // expires in  200*1 min
                                });
                                res.json({ result: 1, msg: 'Login successful!', data: user, token: token });
                            }
                            else res.json({ result: 0, msg: 'Password incorrect!', data: {} });
                        console.log("Password " + req.body.password, isMatch); //
                    });
                }
                else {
                    res.json({ result: 0, msg: 'Account not exist! Please try again!', data: {} });
                }
                console.log(user);
            })
        else res.end.json({ result: 0, msg: 'Request error', data: {} });

    },
    verify: (req, res) => {
        let content = {
            result: 1,
            msg: "Successfully logged in."
        }
        res.json(content);
    }
};
module.exports = users;
