const {DataTypes } = require('sequelize');

function createContactoModel(connection) {

  const Contacto = connection.define('Contacto', {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.TEXT
      // allowNull defaults to true
    }
  });
  return Contacto;

}

module.exports = {
  createContactoModel
}
