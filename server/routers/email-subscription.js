const router = require('express').Router();
const subscriberController = require('../controllers/subscriber.js');

router.post('/', subscriberController.insert);

module.exports = router;
