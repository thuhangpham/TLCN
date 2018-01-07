var nodemailer = require('nodemailer');
 module.exports =  {
    DB_HOST   :   "mongodb://localhost:27017/meandb",
    PORT      :   4000,
    JWT_SECRET:   "hahahahatncrz",
    transporter: nodemailer.createTransport(
        {
        service: 'gmail',
        port: 587,
        tls: {
            rejectUnauthorized:false,
          },
        auth: {
            user: 'volunteer.crz@gmail.com',
            pass: 'exxewahlyevfimhn'
        },
        rejectUnauthorized: false
    }
    )
    
};

