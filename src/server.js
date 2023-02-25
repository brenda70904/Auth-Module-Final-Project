'use strict';

const cors = require('cors');
const express = require('express');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


app.get('/', async(req,res,next)=>{
  try {
    res.status(200).send('hello traveler');
  } catch (error) {
    next(error);
  }
});




module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => console.log(`listening on ${port}`));
  },

};