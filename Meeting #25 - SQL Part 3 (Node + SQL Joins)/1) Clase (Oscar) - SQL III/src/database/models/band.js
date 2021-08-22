const { Sequelize, DataTypes } = require('sequelize');

function createBandModel(connection) {
  const Band = connection.define('Band', {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
      // allowNull defaults to true
    },
    yearOfCreation: {
      type: DataTypes.DATE
    }
  }, {
    // Other model options go here
  });
  return Band;
}

module.exports = {
  createBandModel
}
