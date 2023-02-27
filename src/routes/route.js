'use strict';

const express = require("express");
const teacherModel = require("../models/teacherModel");
const Router = express.Router();
const dataModules = require('./models');

Router.param('model', (req, res, next) => {
  const modelName = req.params.model;
  if (dataModules[modelName]) {
    req.model = dataModules[modelName];
  } else {
    next('invalid model');
  };
});

Router.post('/signup', async (req, res, next)=>{
  try{
    let record = await teacherModel(req.body);
    res.status(200).send(record);
  }catch(e){
    console.log(e.message);
  }
});