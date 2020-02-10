const Subscriber = require('../../db/models/Subscriber.js');
const sendMail = require('../mail-notifications/index.js');

const insert = function(req, res) {
  let { emailAddress } = req.body;
  Subscriber.insertOne(emailAddress)
    .then(async () => {
      res.sendStatus(201);
      const currentSubscriberList = await Subscriber.retrieveAll();
      sendMail({
        subject: 'New Mailing List Subscriber',
        html: `<h1>New Subscriber: <strong>${emailAddress}</strong></h1>
        <h3>Current Subscriber List:</h3>
        <p>${currentSubscriberList
          .map((sub, sI, sArr) => sub.emailAddress)
          .toString()}</p>
        `
      });
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
};

module.exports = { insert };
