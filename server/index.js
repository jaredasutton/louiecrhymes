const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const https = require('https');
const fs = require('fs');
const { emailSubscriptionRouter } = require('./routers/index.js');

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/public')));
app.use(bodyParser.json({ extended: true }));

app.get('/links/:linkfamily', (req, res) => {
  const linkFamily = req.params.linkfamily;
  fs.readdir(
    path.resolve(__dirname, `../client/public/img/${linkFamily}`),
    (err, paths) => {
      if (err) return res.sendStatus(500);
      res.send(paths);
    }
  );
});

app.use('/email-subscription', emailSubscriptionRouter);

try {
  let key = fs.readFileSync('/cert/privkey1.pem');
  let cert = fs.readFileSync('/cert/cert1.pem');
  https
    .createServer(
      {
        key,
        cert
      },
      app
    )
    .listen(process.env.HTTPS_PORT, function() {
      console.log(`App listening on ${process.env.HTTPS_PORT}`);
    });
} catch (e) {}

http.createServer(app).listen(process.env.HTTP_PORT, () => {
  console.log(`App listening on ${process.env.HTTP_PORT}`);
});
