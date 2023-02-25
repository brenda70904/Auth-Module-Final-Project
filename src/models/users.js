'use strict';

// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');


// const secret = process.env.SECRET;

'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
