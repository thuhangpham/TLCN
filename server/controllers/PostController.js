'use strict';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Post = require('../models/Post.js');
const areasExperController = require('../controllers/AreasExperController');
const user = require('../models/Users');

var posts = {

    getAllPost: (req, res) => {
        Post.find({})
            .then((data) => { res.json({ result: 1, msg: "", data: data || {} }); })
            .catch((err) => { res.json({ result: 0, msg: `Server error`, data: {} }); })
    },

    getPosts: (req, res) => {
        console.log(req.params);
        Post.find({})
            // .sort({ '_id': -1 })
            .populate('owner')
            .populate({ path: 'info.areas_expertise', select: 'name' })
            .populate({
                path: 'info.areas_expertise_detail',
                populate: { path: 'info.areas_expertise_detail' }
            })
            .populate({
                path: 'comments.owner', select: ['info', 'image']
            })
            .limit(parseInt(req.params.limit)||3).skip(parseInt(req.params.skip)||0)
            
            .then(data => {
                // console.log(data);
                res.json({ result: 1, msg: '', data: data || {} });
            }).catch(err => {
                console.log(err);
                res.json({ result: 0, msg: `Server error ${err}`, data: {} });
            });
    },
    
    getPostsByArea: (req, res) => {
        console.log(req.body);
        Post.find({'info.areas_expertise': req.body.area_id})
            .populate('owner')
            .populate({ path: 'info.areas_expertise', select: 'name' })
            .populate({
                path: 'info.areas_expertise_detail',
                populate: { path: 'info.areas_expertise_detail' }
            })
            .populate({
                path: 'comments.owner', select: ['info', 'image']
            })
            .populate({
                path: 'comments.reply.owner', select: ['info', 'image']
            })
            .limit(parseInt(req.body.limit)||4).skip(parseInt(req.body.skip)||0)
            // .sort({ 'create_at': -1 })
            .then(data => {
                // console.log(data);
                res.json({ result: 1, msg: '', data: data || {} });
            }).catch(err => {
                console.log(err);
                res.json({ result: 0, msg: `Server error ${err}`, data: {} });
            })
    },
    
    getPostsByUserId: (req, res) => {
        console.log(req.params);
        Post.find({'owner': req.params.user_id})
            .populate('owner')
            .populate({ path: 'info.areas_expertise', select: 'name' })
            .populate({
                path: 'info.areas_expertise_detail',
                populate: { path: 'info.areas_expertise_detail' }
            })
            .populate({
                path: 'apply', select: ['info', 'image']
            })
            .populate({
                path: 'comments.reply.owner', select: ['info', 'image']
            })
            .limit(parseInt(req.params.limit)||3)
            .skip(parseInt(req.params.skip)||0)
            .then(data => {
                console.log(data);
                res.json({ result: 1, msg: '', data: data || {} });
            }).catch(err => {
                console.log(err);
                res.json({ result: 0, msg: `Server error ${err}`, data: {} });
            });
    },
    
    getPostById: (req, res) => {
        Post.findById(req.params.id)
            .populate('comments.owner')
            .populate({ path: 'info.areas_expertise', select: 'name' })
            .populate('owner')
            .then((data) => { console.log(data); res.json({ result: 1, msg: "", data: data || {} }); })
            .catch((err) => { console.log(err); res.json({ result: 0, msg: `Server error`, data: {} }); })
    },

    insertPost: (req, res) => {
        console.log(req.body);
        let body = req.body;
        body.info.title = body.info.title.toUpperCase();
        // areasExperController.countPostByAreaEx();
        Post.create(body)
            .then((data) => { res.json({ result: 1, msg: "", data: data || {} }); })
            .catch((err) => { console.log(err); res.json({ result: 0, msg: `Server error` || err, data: {} }); })
        console.log("ddd");
    },

    updatePost: (req, res) => {
        req.body.last_update = new Date();
        Post.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
            if (err) {
                res.json({ result: 0, msg: `Server error`, data: {} });
            } else res.json({ result: 1, msg: "", data: data || {} });
        })
    },
    addComment: (req, res) => {
        req.body.last_update = new Date();
        Post.findByIdAndUpdate(req.body._id, { $push: { "comments": req.body.comments[0] } }, (err, data) => {
            if (err) {
                res.json({ result: 0, msg: `Server error`, data: {} });
            } else res.json({ result: 1, msg: "", data: data || {} });
        })
    },
    addApply: (req, res) => {
        Post.findByIdAndUpdate(req.body._id, { $push: { "apply": req.body.user } }, (err, data) => {
            if (err) {
                res.json({ result: 0, msg: `Server error`, data: {} });
            } else {
                user.findByIdAndUpdate(req.body.user, { $push: { "apply": req.body._id } }
                    , (er, rs) => {
                        if (err)
                            res.json({ result: 0, msg: `Server error`, data: {} });
                        else
                            res.json({ result: 1, msg: "", data: data || {} });
                    }
                );
            }
        });
    },
    unApply: (req, res) => {
        Post.findByIdAndUpdate(req.body._id, { $pull: { "apply": req.body.user } }, (err, data) => {
            if (err) {
                res.json({ result: 0, msg: `Server error`, data: {} });
            } else {
                user.findByIdAndUpdate(req.body.user, { $pull: { "apply": req.body._id } }
                    , (er, rs) => {
                        if (err)
                            res.json({ result: 0, msg: `Server error`, data: {} });
                        else
                            res.json({ result: 1, msg: "", data:{} });
                    }
                );
            }
        });
    },
    addReply: (req, res) => {
        req.body.last_update = new Date();
        Post.findById(
            { '_id': req.body._id }
            , (err, data) => {
                var p = new Post(data);
                p.comments.forEach(e => {
                    if (e._id == req.body.id) {
                        e.reply.push(req.body.reply);
                        p.save(err => {
                            if (err) {
                                console.log(err || 'add reply err');
                                res.json({ result: 0, msg: `Server error ${err}`, data: {} });
                            }
                            else {
                                res.json({ result: 1, msg: "", data: data || {} });
                                console.log('add reply ok.');
                            }
                        });
                    }
                });
            });
    },
    deletePost: (req, res) => {
        Post.findByIdAndRemove(req.params.id, req.body, (err, data) => {
            if (err) {
                res.json({ result: 0, msg: `Server error`, data: {} });
            } else res.json({ result: 1, msg: "", data: data || {} });
        })
    }
};
module.exports = posts;