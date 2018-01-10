'use strict';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Conversation = require('../models/Conversation');
const Message = require('../models/Message');
const async = require('async');
var cons = {
    checkConversation: (req, res, next) => {
        Conversation.find({ participants: { $in: req.body } })
            .catch(err => { handelError(res, err) })
            .then(data => {
                if (data.length > 0) handelData(res, {}, 'Conversation is exist!');
                else handelError(res, 'Conversation is not exist!');
            });
    },
    getConversations: (req, res, next) => {
        // Only return one message from each conversation to display as snippet
        Conversation.find({ participants: req.params._id })
            .select('participants')
            .populate({ path: 'participants', select: ['info.last_name', 'info.first_name', 'image'] })
            .exec((err, conversations) => {
                if (err) {
                    handelError(res, err);
                    return next(err);
                }
                // Set up empty array to hold conversations + most recent message
                let fullConversations = [];
                async.forEachSeries(conversations, (item, callback) => {
                    Message.find({ 'conversationId': item._id })
                        .sort('createdAt')
                        .limit(1)
                        .populate({
                            path: "author",
                            select: "info.first_name info.last_name"
                        })
                        .exec(function (err, message) {
                            if (err) {
                                console.log(err);
                                // handelError(res, err);                                
                                // return next(err);                                
                            }
                            let m = (message) ? message[0] : [];
                            fullConversations.push({ message: (message.length > 0) ? message[0] : {}, conversation: item });
                            callback();
                        });

                }, err => {
                    handelData(res, fullConversations, '');
                });
            });
    },
    getConversation: (req, res, next) => {
        console.log(req.params);
        Message.find({ conversationId: req.params._id })
            .select('createdAt body author')
            .sort('createdAt')
            .populate({
                path: 'author',
                select: 'info.first_name info.last_name image'
            })
            .exec(function (err, messages) {
                if (err) {
                    handelError(res, err);
                    return next(err);
                }
                if(messages instanceof Array)
                    handelData(res, messages, '');
                else handelData(res, [], '');
            });
    },
    newConversation: (req, res, next) => {
        console.log(JSON.stringify(req.body));
        if (!req.body.recipient) {
            handelError(res, 'Please choose a valid recipient for your message.');
            return next();
        }
        let body = [];
        if(req.body.recipient === req.body._id)
            body.push(req.body._id);
        else body = [req.body._id, req.body.recipient];
        Conversation.find({$and:[
             { participants: { $all: body } },
             { participants: { "$size": body.length } }
            ] } )
            .catch(err => { handelError(res, err) })
            .then(data => {
                console.log('check conv ' + data);
                if (data && data.length > 0) {
                    // get all message of this conversation
                    // handelData(res,{},'Conversation is exist!');
                    console.log('Check new conversation ' + data);
                    Message.find({ conversationId: data[0]._id })
                        .select('createdAt body author')
                        .sort('createdAt')
                        .populate({
                            path: 'author',
                            select: 'info.first_name info.last_name image'
                        })
                        .exec(function (err, messages) {
                            if (err) {
                                handelError(res, err);
                                return next(err);
                            }
                            if(messages instanceof Array)
                            // console.log('new convers mesg '+ messages);
                                handelData(res, { conversation: data[0], messages: messages }, '');
                            else handelData(res, { conversation: data[0], messages: [] }, '');
                        });
                }
                else {
                    // Create a new conversation
                    // handelError(res,'Conversation is not exist!');
                    Conversation.create({
                        participants: body
                    }).catch(err => {
                        console.log(err);
                        handelError(res, err);
                    })
                        .then(data => {
                            console.log(data);
                            handelData(res, { conversation: data, message: [] }, 'Create new conversation!');
                        })
                }
            });

        // conversation.save(function (err, newConversation) {
        //     if (err) {
        //         res.send(handelError(res, err));
        //         return next(err);
        //     }

        // const message = new Message({
        //     conversationId: newConversation._id,
        //     body: req.body.composedMessage,
        //     author: req.user._id
        // });

        // message.save(function (err, newMessage) {
        //     if (err) {
        //         res.send(handelError(res, err));
        //         return next(err);
        //     }

        // res.status(200).json(handelData(res, conversation._id, 'Conversation started!'));
        // return next();
        // });
        // });
    },
    sendReply: (req, res, next) => {
        const reply = new Message({
            conversationId: req.body.conversationId,
            body: req.body.composedMessage,
            author: req.body._id
        });
        reply.save(function (err, sentReply) {
            if (err) {
                handelError(res, err);
                return next(err);
            }
            handelData(res, {}, 'Reply successfully sent!');
            return (next);
        });
    },
    deleteConversation: (req, res, next) => {
        Conversation.findOneAndRemove({
            $and: [
                { '_id': req.params.conversationId }, { 'participants': req.params._id }
            ]
        }, function (err) {
            if (err) {
                handelError(res, err);
                return next(err);
            }

            handelData(res, {}, 'Deleted Conversation!!!');
            return next();
        });
    },
    updateMessage: (req, res, next) => {
        Conversation.find({
            $and: [
                { '_id': req.body.messageId }, { 'author': req.body._id }
            ]
        }, function (err, message) {
            if (err) {
                handelError(res, err);
                return next(err);
            }
            message.body = req.body.composedMessage;

            message.save(function (err, updatedMessage) {
                if (err) {
                    handelError(res, err);
                    return next(err);
                }

                handelData(res, {}, 'Message updated!');
                return next();
            });
        });
    }
}

var handelData = (res, data, msg) => {
    res.json({ result: 1, msg: msg, data: data || {} });
}
var handelError = (res, msg) => {
    res.json({ result: 0, msg: `Server error` || msg, data: {} });
}
module.exports = cons;