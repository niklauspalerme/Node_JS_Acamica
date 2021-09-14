const {DataTypes } = require('sequelize');

function createUserModel(connection) {
  
  const User = connection.define('User', {

    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
    },
    age: {
      type: DataTypes.INTEGER
    }
  },  {
    // Other model options go here
  });
  return User;
}

module.exports = {
  createUserModel
}
