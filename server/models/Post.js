'use strict';
const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;
const schema = mongoose.Schema;
const comment = require('./comment.js');
const user = require('./Users');

var postSchema = new schema({
    owner: { type: objectId, ref: 'users' },
    info: {
        title: String,
        desciption: String,
        start_date: Date,
        end_date: Date,
        number: Number,
        address: String,
        latitude: String,
        longitude: String,
        areas_expertise: { type: objectId, ref: 'areas_expertise' },
        areas_expertise_detail: { type: objectId, ref: 'areas_expertise' }
    },
    content:
    {
        tasks: { type: String, trim: true, required: 'Tasks is required' },
        objective: { type: String, trim: true, Objective: 'Objective is required' },
        requirement: { type: String, trim: true, Objective: 'Requirement is required' },
        comment: String
    },
    contact: {
        address: String,
        phone: String,
        email: String
    },
    comments: [comment.schema],
    apply: [{ type: objectId, ref: 'users' }]
}, { timestamps: true} );

postSchema.pre('remove', function(next){
    mongoose.model('users').update(
        {_id: {$in: this.apply}},
        {$pull: {apply: this._id}}, // apply of user
        {multi: true},
        next
    );
});

module.exports = mongoose.model('post', postSchema);