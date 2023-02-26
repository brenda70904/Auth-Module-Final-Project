'use strict';

const express = require("express");
const userModel = require("../models/users");
const Router = express.Router();
const dataModules = reuqiure('./models');

Router.param('model', (req, res, next) => {
  const modelName = req.params.model;
  if (dataModules[modelName]) {
    req.model = dataModules[modelName];
  } else {
    next('invalid model')
  };
});

Router.post('/signup', async (req, res, next)=>{
  try{
    let record = await userModel(req.body);
  }catch(e){
    console.log(e.message);
  }
});