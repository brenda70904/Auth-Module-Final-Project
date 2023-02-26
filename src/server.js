'use strict';

const express = require('express');
require('dotenv').config();

const app = express();





module.exports = {
  start: (port) => {
    app.listen(port, () => console.log(`listening on ${port}`))
  },
  server: app,
};