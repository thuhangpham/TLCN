const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var areaExDetail = mongoose.Schema({
    name        : {type : String, unique : true, required : 'Name is required!'},
    description : {type : String}
}  ,{ timestamps: true} );
module.exports = mongoose.model('area_ex_detail', areaExDetail);