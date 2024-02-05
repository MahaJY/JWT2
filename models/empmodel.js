const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const UserAuth = sequelize.define('emp', {
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
  },
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  role:{
    type: DataTypes.STRING,
  }
}, {
  timestamps: false,
  tableName:'emp',
});

module.exports = UserAuth;
