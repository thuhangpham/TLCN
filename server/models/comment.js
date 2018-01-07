'use strict';
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const Reply = require('./Reply');

var cmtSchema = new schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    content: { type: String, trim: true },
    reply: { type: [Reply.schema] },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'posts' }
},{ timestamps: true});

cmtSchema.pre('save', (next) => {
    let now = new Date();
    this.last_update = now;
    if (!this.create_at) {
        this.create_at = now;
    }
    next();
});

module.exports = mongoose.model('comment', cmtSchema);