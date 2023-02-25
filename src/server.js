'use strict';

const cors = require('cors');
const express = require('express');
require('dotenv').config();
const {teacher} = require('../src/models/index');

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



app.get('/teacher', async(req,res,next)=>{
  try {
    res.status(200).send();
    
  } catch (error) {
    next(error);
  }
});

app.get('/student', async(req,res,next)=>{
  try {
    res.status(200).send();
    
  } catch (error) {
    next(error);
  }
});



// app.post('/teacher', async(req,res,next)=>{
//   try {
//     res.status(201).send(teacher);
    
//   } catch (error) {
//     next(error);
//   }
// });





module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => console.log(`listening on ${port}`));
  },

};