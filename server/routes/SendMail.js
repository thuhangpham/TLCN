'use strict';
const sendMail = require('../controllers/SendMail');

module.exports = (app) => {
    app.route('/private/api/send_email_reset_pass/:email')
        .get(sendMail.sendEmail);

}