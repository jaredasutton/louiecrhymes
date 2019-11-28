const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/public')));
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

app.listen(process.env.PORT, () => {
  console.log(`App listening on ${process.env.PORT}`);
});
