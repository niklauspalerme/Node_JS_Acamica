const { Sequelize, DataTypes } = require('sequelize');

function createSongModel(connection) {
  const Song = connection.define('Song', {
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
    },
    length: {
      type: DataTypes.INTEGER
    },
    genere: {
      type: DataTypes.STRING
    }
  }, {
    // Other model options go here
  });
  return Song;
}

module.exports = {
  createSongModel
}
