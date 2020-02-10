require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  `smtps://${process.env.MAIL_NOTIF_ADDRESS}%40gmail.com:${process.env.MAIL_NOTIF_PASS}@smtp.gmail.com`
);

module.exports = ({
  to = `${process.env.MAIL_NOTIF_ADDRESS}@gmail.com`,
  subject,
  text,
  html
}) => {
  transporter.sendMail({ to, subject, text, html }, function(error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });
};
