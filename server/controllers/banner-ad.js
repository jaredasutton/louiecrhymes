require('dotenv').config();
const fs = require('fs').promises;
const path = require('path');
//require('../../client/public/img/banner-ads/')
const { CURRENT_BANNER_AD_IMGS, CURRENT_BANNER_AD_HREF } = process.env;

const getAll = async function(req, res) {
  const imgSrcArr = await fs
    .readdir(
      path.resolve(
        __dirname,
        '../../client/public/img/banner-ads/',
        CURRENT_BANNER_AD_IMGS
      )
    )
    .catch(err => {
      console.error(err);
      return [];
    });
  res.send({ href: CURRENT_BANNER_AD_HREF, imgSrcArr });
};

module.exports = { getAll };
