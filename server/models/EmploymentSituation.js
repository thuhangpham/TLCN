'use strict';
const mongoose = require('mongoose');
const schema = mongoose.Schema;

var esSchema = new schema({
    name                : {type : String, unique : true, trim: true, required: 'Name is required' },
    description         : {type : String, trim: true},
},{ timestamps: true} );
module.exports = mongoose.model('employment_situation', esSchema);