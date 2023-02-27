'use strict';

// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');


// const secret = process.env.SECRET;

'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('teacher', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      // primaryKey: true
  },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: true,
    // role: {
    //   type:ENUM("parent, teacher, manager, admin");
    //   allowNull
    // }
    },
  });
};
