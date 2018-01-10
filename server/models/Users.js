'use strict';
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;
const schema = mongoose.Schema;
const gravatar = require('gravatar');
require('./Post');
mongoose.Promise = global.Promise;

var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

var userSchema = new schema({
    info:
    {
        name: { type: String, trim: true },
        first_name: { type: String, trim: true, },
        last_name: { type: String, trim: true },
        gender: { type: String },
        dob: { type: Date },
        employment_sitution: { type: objectId, ref: 'employment_situation' },
        areas_expertise: { type: objectId, ref: 'areas_expertise' },
        intro: String
    },
    address_residence:
    {
        address: String,
        latitude: String,
        longitude: String,
        city: { type: String },
        district: { type: String },
        ward: { type: String },
    },
    contact:
    {
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        phone: { type: String, trim: true },
        web_page: { type: String }
    },
    password: { type: String, trim: true },
    image: { type: String },
    apply: [{ type: objectId, ref: 'post'}],
    provider: String,
    id: String
}
    ,{ timestamps: true} // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
);
userSchema.virtual('fullname').get(function () {
    return this.first_name + ' ' + this.last_name;
});

userSchema.pre('remove', function (next) {
    mongoose.model('post').update(
        { _id: { $in: this.apply } },
        { $pull: { apply: this._id } }, // apply of post
        { multi: true },
        next
    );
});
userSchema.methods.comparePassword = function (candidatePassword, pwd, callback) {
    console.log(pwd);
    bcrypt.compare(candidatePassword, pwd, function (err, isMatch) {
        if (err) return callback(err, false);
        callback(null, isMatch);
    });
};
userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};
userSchema.methods.getAvartarEmail = function (email, callback) {
    var url = gravatar.url(email, { s: '200', r: 'pg', d: '404' });
    callback(url);
}
module.exports = mongoose.model('users', userSchema);
