const { DataTypes } = require('sequelize');

function createContactoUserModel(connection, userModel, contactoModel) {
  const ContactoUser = connection.define('ContactoUser', {
    // Model attributes are defined here
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: userModel,
        key: 'id'
      }
    },
    ContactoId: {
      type: DataTypes.INTEGER,
      references: {
        model: contactoModel,
        key: 'id'
      }
    }
  }, {
    // Other model options go here
    modelName: 'ContactoUser',
    tableName: 'ContactoUser'
  });
  return ContactoUser;
}

module.exports = {
  createContactoUserModel
}
