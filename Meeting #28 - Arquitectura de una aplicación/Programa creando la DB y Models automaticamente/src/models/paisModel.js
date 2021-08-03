///////////////////////////////////////////////////////////
//0) Instanciamos las lib necesarias

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connect');


///////////////////////////////////////////////////////////
//1) Creamos una clase cancionModel que herede las propiedades de Model
class paisModel extends Model {}

paisModel.init({
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
      sequelize,
      tableName: 'pais',
      timestamps: false
    }
)


///////////////////////////////////////////////////////////
//2) Exportamos el modelo
module.exports = paisModel;