'use strict';
const mongoose = require('mongoose');
const schema = mongoose.Schema;

var rpSchema = new schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    comment: { type: mongoose.Schema.Types.ObjectId, ref: 'comment' },
    content: { type: String, trim: true }
}
,{ timestamps: true} );
module.exports = mongoose.model('replies', rpSchema);