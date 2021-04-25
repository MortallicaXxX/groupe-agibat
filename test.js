const nodemailer = require('nodemailer');

// let transport = nodemailer.createTransport(options[, defaults])

let transport = nodemailer.createTransport({
    host: 'smtp.domain.com',
    port: 465,
    auth: {
       user: 'contact@groupe-agibat.fr',
       pass: 'Bcagibat81'
    }
});

const message = {
    from: 'contact@groupe-agibat.fr', // Sender address
    to: 'guillaume.houthoofd@gmail.com',         // List of recipients
    subject: 'Design Your Model S | Tesla', // Subject line
    text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
};
transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});
