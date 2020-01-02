const { SubscriberModel: Subscriber } = require('../mongoClient.js');

const retrieveAll = function() {
  return Subscriber.find({}).catch(console.error);
};

const insertOne = function(emailAddress) {
  return Subscriber.create({ emailAddress, joinDate: new Date() }).catch(
    err => {
      throw Error(err);
    }
  );
};

module.exports = { retrieveAll, insertOne };
