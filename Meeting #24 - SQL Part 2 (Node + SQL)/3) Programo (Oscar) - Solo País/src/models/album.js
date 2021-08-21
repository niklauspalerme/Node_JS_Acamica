const {DataTypes } = require('sequelize');

function createAlbumtModel(connection) {

  //1-Creamos el modelo
  const Album = connection.define('Album', {
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
    banda_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    fechaPublicacion: {
        type: DataTypes.DATEONLY,
        allowNull: true
      }
    }, {
    tableName: "Album"
  });

  //2- Retornamos el modelo
  return Album;
}

module.exports = {
  createAlbumtModel
}
