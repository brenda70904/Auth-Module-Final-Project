'use strict';

const cors = require('cors');
const express = require('express');
require('dotenv').config();
const notFound = require('./errorHandlers/404.js');
const intError =require('./errorHandlers/500.js');

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

app.post('/teacher', async(req,res,next)=>{
  try {
    res.status(200).send(req.body);
  } catch (error) {
    next(error);
    
  }
});

app.post('/student', async(req,res,next)=>{
  try {
    res.status(200).send(req.body);
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

app.use(notFound);
app.use(intError);





module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => console.log(`listening on ${port}`));
  },

};