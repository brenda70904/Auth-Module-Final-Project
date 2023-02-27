'use strict';

const base64 = require('base-64');
const bcrypt = require('bcrypt');
const users = require('../models');


//import models

module.exports = async(req,res,next)=>{
  if(!req.headers.authorization){
    next('no basic auth');
  }
  let basic = req.headers.authorization.split(' ')[0];
  let [user,password] = base64.decode(basic).split(':');
  try {
    req.user= await users.authenticateBasic(user,password);
    next();
  } catch (error) {
    next(error);
  }
  
};
