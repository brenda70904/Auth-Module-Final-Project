'use strict';

// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');


// const secret = process.env.SECRET;

'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('teacher', {
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
      allowNull: false,
    },
  });
};
