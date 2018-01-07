'use strict';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Post = require('../models/Post.js');
const Reply = require('../models/Reply');
var Replys = {
    insertReply: (req, res) => {
        console.log(req.body);
        // areasExperController.countPostByAreaEx();
        Reply.create(req.body)
            .then((data) => {
                Reply.findOne({ '_id': data._id })
                    .populate({ path: 'owner', select: ['image', 'info'] })
                    .limit(parseInt(req.params.limit) || 0)
                    .skip(parseInt(req.params.skip) || 0)
                    .then(result => {
                        res.json({ result: 1, msg: "", data: result });
                    }).catch(er => {
                        console.log(er);
                        handelError(res, er);
                    });
            })
            .catch((err) => { console.log(err); handelError(res, err) });
    },
    updateReply: (req, res) => {
        console.log('edit reply '+JSON.stringify(req.body));
        Reply.findByIdAndUpdate({ '_id': req.body.reply._id },
            { 'content': req.body.reply.content },
            { 'last_update': req.body.reply.last_update }, (err, data) => {
                console.log(data.last_update);
                if (err){
                    handelError(res, err);
                    console.log('error when esit reply ' + err );
            }
                else handelData(res, data);
            });
    },
    deleteReply: (req, res) => {
        Reply.findByIdAndRemove({ _id: req.params._id }, (err, data) => {
            console.log(data.last_update);
            if (err)
                handelError(res, err);
            else handelData(res, data);
        });
    },
    getReplys: (req, res) => {
        console.log(req.body);
        Reply.find({ 'comment': req.params.cmt_id })
            .sort({ 'create_at': -1 })
            .populate({ path: 'owner', select: ['image', 'info'] })
            .limit(parseInt(req.params.limit) || 0)
            .skip(parseInt(req.params.skip) || 0)
            .then(data => {
                Reply.find({ 'comment': req.params.cmt_id })
                    .skip((parseInt(req.params.skip) + parseInt(req.params.limit)) || 0)
                    .count((err, count) => {
                        if (err)
                            handelError(res, err);
                        else res.json({ result: 1, msg: "", data: data, number: count || 0 });
                    });
            }).catch(err => {
                console.log(err);
                handelError(res, err);
            });
    },
    countReplysByCommentId: (req, res) => {
        console.log(req.body);
        Reply.find({ 'comment': req.body.cmt_id })
            .sort({ '_id': -1 })
            .skip(parseInt(req.body.skip, 0))
            .count((err, number) => {
                if (err)
                    handelError(res, err);
                else res.json({ result: 1, msg: "", data: number || 0 });
            });
    }

}
var handelData = (res, data) => {
    res.json({ result: 1, msg: "", data: data || {} });
}
var handelError = (res, err) => {
    res.json({ result: 0, msg: `Server error` || err, data: {} });
}

module.exports = Replys;