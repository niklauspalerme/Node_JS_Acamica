const { Sequelize, DataTypes } = require('sequelize');

function createAlbumModel(connection) {
  const Album = connection.define('Album', {
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
  return Album;
}

module.exports = {
  createAlbumModel
}
