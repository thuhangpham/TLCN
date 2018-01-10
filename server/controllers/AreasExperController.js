'use strict';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const AreaEx = require('../models/AreasExpertise');
const Post = require('../models/Post.js');
const async = require('async');
var areaEx = {

    getAllAreaEx: (req, res) => {
        AreaEx.find({})
            .then((data) => { res.json({ result: 1, msg: '', data: data || {} }); })
            .catch((err) => { res.json({ result: 0, msg: 'Server error', data: data || {} }); console.log(err); })
    },

    getAreaExById: (req, res) => {
        AreaEx.findById(req.params.id)
            .then((data) => { res.json({ result: 1, msg: "", data: data || {} }); })
            .catch((err) => { res.status(400).json({ result: 0, msg: "Server error", data: {} }); })
    },

    insertAreaEx: (req, res) => {
        console.log(req.body);
        AreaEx.create(req.body)
            .then((data) => { res.json({ result: 1, msg: "", data: data || {} }); })
            .catch((err) => {
                res.status(400)
                    .json({ result: 0, msg: `Error: ${err}`, data: {} });
            })
    },

    updateAreaEx: (req, res) => {
        req.body.last_update = new Date();
        AreaEx.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
            if (err) {
                console.log(`Update AreaEx error ${err}`);
                res.status(400).json({ result: 0, msg: `Error: ${err}`, data: {} });
            } else res.json({ result: 1, msg: "", data: data || {} });
        })
    },

    deleteAreaEx: (req, res) => {
        AreaEx.findByIdAndRemove(req.params.id, req.body, (err, data) => {
            if (err) {
                console.log(`Update AreaEx error ${err}`);
                res.status(400).json({ result: 0, msg: `Error: ${err}`, data: {} });
            } else res.json({ result: 1, msg: '', data: req.body || {} });
        })
    },

    countPostByAreaEx: (req, res) => {
        let results = [];
        AreaEx.find().exec((err, data) => {
            if (err) {
                console.log(err);
                console.log('aaaaaaaaaa');
                res.json({ result: 0, msg: `Error: ${err}`, data: {} });
            } else {
                async.forEachSeries(data, function (item, callback) {

                    Post.count({
                        $and: [{ 'info.areas_expertise': item._id },
                        { 'info.close_post': '1' }
                    ]
                    },
                        (err, count) => {
                            console.log(err || count);
                            let data = {
                                area_ex: "",
                                count: 0
                            };
                            data.area_ex = item;
                            data.count = count;
                            results.push(data);
                            callback();
                        })
                }, function (err) {
                    console.log('iterating done');
                    // console.log(results.forEach(e=>{console.log(e);}));
                    res.json({ result: 1, msg: '', data: results });
                });
            }
        });
    }
};
module.exports = areaEx;
