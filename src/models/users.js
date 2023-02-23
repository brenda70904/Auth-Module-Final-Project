'use strict';

const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { ENUM } = require('sequelize');

// const secret = process.env.SECRET;

const userModel = (sequelize, DataType) => {
  const model = sequelize.define(
    'user', {
    username: { type: DataType.STRING, required: ture },
    password: { type: DataType.STRING, required: true },
    role: { type: DataType.ENUM('user', 'teacher', 'supervisor', 'admin'), required:true, defaultValue:'user'}
  }
  )
}

module.exports = userModel;