const express = require('express');
const router = express.Router();
const path = require('path');
const bannerAdController = require('../controllers/banner-ad.js');

router.get(
  '/*',
  express.static(
    path.resolve(
      __dirname,
      '../../client/public/img/banner-ads/',
      process.env.CURRENT_BANNER_AD_IMGS
    )
  )
);
router.get('/', bannerAdController.getAll);

module.exports = router;
