'user strict';

require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const Users = (sequelize, DataTypes) => {
  const model = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('student','teacher','manager', 'admin'),
      require: true,
      defaultValue: 'student',
    },
    token: {
      type: DataTypes.VIRTUAL,
      get(){
        return jwt.sign({name: this.name}, process.env.SECRET,{expiresIn: 1000 * 60 *60 *24 *7});
      },
      

    },
  });
  model.beforeCreate(async(user)=>{
    let hashedPassword = await bcrypt.hash(user.password, 5);
    user.password = hashedPassword;
  });
  model.authenticateBasic= async function(name,password){
    const user = await this.findOne({where: {name}});
    const validate = await bcrypt.compare(password, user.password);
    if(validate){
      return user;
    } 
    throw new Error('invalid user');
  };
  model.authenticateToken = async function(token){
    try {
      const parsedToken = jwt.verify(token, process.env.SECRET);
      const user = this.findOne({name: parsedToken.name});
      if(user){
        return user;
      }
      
    } catch (error) {
      throw new Error(error.message);
    }
  };
  return model;
};


module.exports = Users;