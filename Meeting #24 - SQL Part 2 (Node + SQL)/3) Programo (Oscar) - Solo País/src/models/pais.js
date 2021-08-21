const { DataTypes } = require('sequelize');

const createPaisModel = (connection) => {

  //1-Creamos el modelo
  const Pais = connection.define('Pais', {
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
      }
    }, {
    //Otras opciones del modelo va aca
  });

  //2-Retornamos el modelo
  return Pais;
}

module.exports = {
  createPaisModel
}
