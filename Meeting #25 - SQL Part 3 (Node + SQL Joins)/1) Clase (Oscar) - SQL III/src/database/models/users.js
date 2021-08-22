const { Sequelize, DataTypes } = require('sequelize');

function createUserModel(connection) {
  const User = connection.define('User', {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
      // allowNull defaults to true
    },
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
      // allowNull defaults to true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    }
  }, {
    // Other model options go here
  });
  return User;
}

module.exports = {
  createUserModel
}
