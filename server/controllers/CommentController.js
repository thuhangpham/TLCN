'use strict';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Post = require('../models/Post.js');
const Comment = require('../models/comment');
const Reply = require('../models/Reply');
const async = require('async');
var comments = {
    insertComment: (req, res) => {
        console.log(req.body);
        // areasExperController.countPostByAreaEx();
        Comment.create(req.body)
            .then((data) => {
                Comment.findOne({ '_id': data._id })
                    .populate({ path: 'owner', select: ['info', 'image'] })
                    .limit(parseInt(req.params.limit, 5)).skip(parseInt(req.params.skip, 0))
                    .sort({ '_id': -1 })
                    .then(data => {
                        handelData(res, data);
                    }).catch(err => {
                        console.log(err);
                        handelError(res, err);
                    });
            })
            .catch((err) => { console.log(err); handelError(res, err) });
    },
    updateComment: (req, res) => {
        Comment.findByIdAndUpdate({ _id: req.body.comment._id },
            { 'content': req.body.comment.content },
            { 'last_update': req.body.comment.last_update }, (err, data) => {
                console.log(data.last_update);
                if (err)
                    handelError(res, err);
                else handelData(res, data);
            });
    },
    deleteComment: (req, res) => {
        Comment.findByIdAndRemove({ _id: req.params._id }, (err, data) => {
            console.log(data.last_update);
            if (err)
                handelError(res, err);
            else handelData(res, data);
        });
    },
    getComments: (req, res) => {
        console.log(req.params);
        Comment.find({ 'post': req.params.post_id })
            .populate({ path: 'owner', select: ['info', 'image'] })
            .limit(parseInt(req.params.limit) || 3)
            .skip(parseInt(req.params.skip) || 0)
            .sort({ '_id': -1 })
            .then(data => {
                Comment.find({ 'post': req.params.post_id })
                    .sort({ '_id': -1 })
                    .skip((parseInt(req.params.skip)+parseInt(req.params.limit))||0)
                    .count((err, count) => {
                        if (err)
                            handelError(res, err);
                        else res.json({ result: 1, msg: "", data: data || 0 , number: count});
                        console.log(count);
                    });
            }).catch(err => {
                console.log(err);
                handelError(res, err);
            });
    },
    countCommentsByPostId: (req, res) => {
        console.log(req.body);
        let _count = 0;
        Comment.find({ 'post': req.body.post_id })
            .sort({ '_id': -1 })
            .skip(parseInt(req.body.skip, 0))
            .then((cmts)=>{
                async.eachSeries(cmts, (item,callback)=>{
                    Reply.count({'comment':item._id}, (err, count)=>{
                        console.log(err || count);
                        _count += count + 1;
                        callback();
                    })
                }, (err)=>{
                    console.log('iterating done');
                    res.json({result:1,msg:'', data: _count});
                });
            })
            .catch(err=>{
                handelError(res, err);
            });
            // .count((err, count) => {
            //     if (err)
            //         handelError(res, err);
            //     else{
            //         Reply.count("comment":)
            //          res.json({ result: 1, msg: "", data: count || 0 });
            //     }
            //     console.log(count);
            // });
    }

}
var handelData = (res, data) => {
    res.json({ result: 1, msg: "", data: data || {} });
}
var handelError = (res, err) => {
    res.json({ result: 0, msg: `Server error` || err, data: {} });
}

module.exports = comments;