require('dotenv').config();
const mongoose = require('mongoose');
const schemae = require('./schemae');
const {
  MONGO_PRIMARY_UN,
  MONGO_PRIMARY_PW,
  MONGO_HOST,
  MONGO_PORT
} = process.env;
console.log(`Preparing to connect to localhost:${MONGO_PORT}`);
const connectString = `mongodb://${MONGO_PRIMARY_UN}:${MONGO_PRIMARY_PW}@${MONGO_HOST}:${MONGO_PORT}/louiec1`;
mongoose.connect(connectString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

let SubscriberModel = mongoose.model(
  'Subscriber',
  new mongoose.Schema(schemae.SubscriberSchema)
);

module.exports = { SubscriberModel };
