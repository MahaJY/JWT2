const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const UserAuth = sequelize.define('emp', {
  username: {
    type: DataTypes.STRING,
  },
  userpassword: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: false,
  
});

module.exports = UserAuth;