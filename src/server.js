'use strict';

const cors = require('cors');
const express = require('express');
require('dotenv').config();
const notFound = require('./errorHandlers/404.js');
const intError = require('./errorHandlers/500.js');

const { Sequelize, DataTypes } = require('sequelize');

// Create a Sequelize instance
const sequelize = new Sequelize(process.env.DATABASE_URL);

// Define the Teacher model
const Teacher = sequelize.define('Teacher', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

// Define the Student model
const Student = sequelize.define('Student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

// Create the tables in the database
sequelize.sync();

const teacherModel = require('./models/teacherModel');


const app = express();
app.use(cors());
app.use(express.json());



app.get('/', async (req,res,next)=>{
  res.status(200).send('hello traveler');
});

// Routes for handling CRUD operations for teachers
app.get('/teacher', async (req, res, next) => {

app.get('/', async (req, res, next) => {

  try {
    const teachers = await Teacher.findAll();
    res.status(200).send(teachers);
  } catch (error) {
    next(error);
  }
});

app.post('/teacher', async (req, res, next) => {
  try {
    const teacher = await Teacher.create(req.body);
    res.status(201).send(teacher);
  } catch (error) {
    next(error);
  }
});


app.get('/teacher/:id', async (req, res, next) => {
  try {
    const teacher = await Teacher.findByPk(req.params.id);
    if (!teacher) {
      res.status(404).send('Teacher not found');
    } else {
      res.status(200).send(teacher);
    }
  } catch (error) {
    next(error);
  }
});


app.put('/teacher/:id', async (req, res, next) => {
  try {
    const teacher = await Teacher.findByPk(req.params.id);
    if (!teacher) {
      res.status(404).send('Teacher not found');
    } else {
      await teacher.update(req.body);
      res.status(200).send(teacher);
    }
  } catch (error) {
    next(error);
  };
});


app.delete('/teacher/:id', async (req, res, next) => {
  try {
    const teacher = await Teacher.findByPk(req.params.id);
    if (!teacher) {
      res.status(404).send('Teacher not found');
    } else {
      await teacher.destroy();
      res.status(204).send();
    }
  } catch (error) {
    next(error);
  }
});



app.get('/student', async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.status(200).send(students);
  } catch (error) {
    next(error);
  }
});

app.post('/student', async (req, res, next) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).send(student);
  } catch (error) {
    next(error);
  }
});

app.get('/student/:id', async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      res.status(404).send('student not found');
    } else {
      res.status(200).send(student);
    }
  } catch (error) {
    next(error);
  }
});

app.put('/student/:id', async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      res.status(404).send('student not found');
    } else {
      await student.update(req.body);
      res.status(200).send(student);
    }
  } catch (error) {
    next(error);
  }
});


app.delete('/student/:id', async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      res.status(404).send('student not found');
    } else {
      await student.destroy();
      res.status(204).send();
    }
  } catch (error) {
    next(error);
  }
});

app.get('/bad',intError);
app.use(notFound);






module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => console.log(`listening on ${port}`));
  },

};