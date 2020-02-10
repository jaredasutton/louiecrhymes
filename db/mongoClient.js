require('dotenv').config();
const mongoose = require('mongoose');
const schemae = require('./schemae');
const { MONGO_PRIMARY_UN, MONGO_PRIMARY_PW, MONGO_PORT } = process.env;
const connectString = `mongodb://${MONGO_PRIMARY_UN}:${MONGO_PRIMARY_PW}@localhost:${MONGO_PORT}/louiec1`;
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
