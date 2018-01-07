'use strict';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const user = require('../models/Users');
const config = require('../config/config');

var nodemailer = require('nodemailer');
var otpGenerator = require('otp-generator')


var sendMail = {

    sendEmail: (req, res) => {
        let email = req.params.email;
        user.findOne({ "contact.email": email })
            .then(data => {
                console.log('Data send Email ' + JSON.stringify(data));
                if (!data)
                    res.json({ result: 0, msg: 'Account not exits!', data: {} });
                else {

                    let password = otpGenerator.generate(6, { upperCase: false, specialChars: false, alphabets: false });

                    var mailOptions = {
                        to: email,
                        subject: 'Volunteer: Request change password',
                        //   text: 'New your password: ' + password, 
                        html: '<h1>Welcome</h1><p>Hi! You requested change password from Mean Volunteer. This is code for you:</p>'
                        + '<p style="color:red">' + password + '</p>'
                        //  +'<br/><a href="tlcn-mean.herokuapp.com/login">Click this lick to login again!</a>'
                    };
                    config.transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            res.json({ result: 0, msg: 'Send mail error!', data: {} });
                            return console.log(error);
                        } else {
                            res.json({ result: 1, msg: 'Mail send!', data: password });
                            console.log('Message sent: ' + info.response);
                        }
                    });

                }
            })
            .catch(err => {
                res.json({ result: 0, msg: 'Send mail error!', data: {} });
                console.log('Error send email: ' + err);
            });
    }
}
module.exports = sendMail;
