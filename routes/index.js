var express = require('express');
var router = express.Router();
var cors = require('cors')
var app = express()

router.use(cors())

function sendMail(obj_to_send){
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
      to: 'contact@groupe-agibat.fr',         // List of recipients
      subject: JSON.stringify(obj_to_send.obj), // Subject line
      text: JSON.stringify(obj_to_send.body) // Plain text body
  };
  return Promise.resolve(transport.sendMail(message, function(err, info) {
      if (err) {
        return err;
      } else {
        return info;
      }
  }))
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.post('/contact',async function(req,res,next){
  sendMail({obj:'contact',body:req.body})
  .then(res.send(true))
})

router.post('/rappel',async function(req,res,next){
  sendMail({obj:'rappel',body:req.body})
  .then(res.send(true))
})

router.post('/eligibilite',async function(req,res,next){
  sendMail({obj:'eligibilite',body:req.body})
  .then(res.send(true))
})

router.post('/diagnostic',async function(req,res,next){
  sendMail({obj:'diagnostic',body:req.body})
  .then(res.send(true))
})

module.exports = router;
