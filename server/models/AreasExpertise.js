'use strict';
const mongoose = require('mongoose');
const schema = mongoose.Schema;
const areaaExDetail = require('./AreasExpertiseDetail');

var etSchema = new schema({
    name                : {type : String, unique : true, required : 'Name is required!' },
    description         : {type : String},
    areas_ex_details    : [ areaaExDetail.schema ]
},{ timestamps: true} );
module.exports = mongoose.model('areas_expertise', etSchema);
