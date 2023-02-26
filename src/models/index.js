'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const userModel = require('./users');
const DATABASE_URL = proces.env.NODE_ENV === 'test' ? 'sqlite3 :: memory' : process.env.DATABASE_URL;

const sequelize = new Sequelize(DATABASE_URL);
const users = userModel(sequelize, DataTypes);

module.exports = { db: sequelize, users: userModel(sequelize, DataTypes) };