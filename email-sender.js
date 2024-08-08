
// email-sender.js
const nodemailer = require('nodemailer');

// Configurez le transporteur de messagerie
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'boudaw200309@gmail.com', // votre email
    pass: 'ivxd cphi ytaf kjhp' // votre mot de passe d'application
  }
});

// Définissez les options de l'e-mail
let mailOptions = {
  from: 'boudaw200309@gmail.com',
  to: 'mariamkande945@gmail.com',
  subject: 'Hello from Node.js',
  text: 'Hello Node.js, this is a test email!'
};

// Envoyez l'e-mail
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
