const { Sequelize, DataTypes } = require('sequelize');

const createUserModel = (connection) => {

  //1-Creamos el modelo
  const User = connection.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
    },
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    }
  }, {
    //Otras opciones del modelo va aca
  });

  //2-Retornamos el modelo
  return User;
}

module.exports = {
  createUserModel
}
