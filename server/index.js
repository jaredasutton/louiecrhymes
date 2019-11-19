const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/public')));

app.listen(process.env.PORT, () => {
  console.log(`App listening on ${process.env.PORT}`);
});
