const { Sequelize, DataTypes } = require('sequelize');

function createAlbumSongModel(connection, albumModel, songModel) {
  const Song = connection.define('AlbumSong', {
    // Model attributes are defined here
    AlbumId: {
      type: DataTypes.INTEGER,
      references: {
        // This is a reference to another model
        model: albumModel,

        // This is the column name of the referenced model
        key: 'id'
      }
    },
    SongId: {
      type: DataTypes.INTEGER,
      references: {
        // This is a reference to another model
        model: songModel,

        // This is the column name of the referenced model
        key: 'id'
      }
    },
    position: {
      type: DataTypes.INTEGER
    }
  }, {
    // Other model options go here
    modelName: 'AlbumSong',
    tableName: 'albumsong'
  });
  return Song;
}

module.exports = {
  createAlbumSongModel
}
