const {DataTypes } = require('sequelize');

function createBandaModel(connection) {

  //1-Creamos el modelo
  const Banda = connection.define('Banda', {
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
    integrantes: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    fechaInicio: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
    fechaSeparacion: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
    pais_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    }, {
      tableName: "Banda"
  });

  //2- Retornamos el modelo
  return Banda;
}

module.exports = {
  createBandaModel
}
