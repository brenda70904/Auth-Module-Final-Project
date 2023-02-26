'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const teacherModel = require('./teacherModel');
const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite::memory'
  : process.env.DATABASE_URL;

const sequelize = new Sequelize(DATABASE_URL);



module.exports = { db: sequelize, teacher: teacherModel(sequelize, DataTypes) };