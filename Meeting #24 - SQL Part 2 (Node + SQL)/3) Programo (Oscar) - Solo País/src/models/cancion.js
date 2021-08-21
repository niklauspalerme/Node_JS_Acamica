const {DataTypes } = require('sequelize');

function createCancionModel(connection) {

  //1-Creamos el modelo
  const Cancion = connection.define('Cancion', {
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
    duracion: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    banda_id: {
      type: DataTypes.INTEGER,
        allowNull: true
      },
    album_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    fechaPublicacion: {
        type: DataTypes.DATEONLY,
        allowNull: true
      }
    }, {
      tableName: "Cancion"
    });

  //2- Retornamos el modelo
  return Cancion;
}

module.exports = {
  createCancionModel
}
