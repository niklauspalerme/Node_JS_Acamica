///////////////////////////////////////////////////////////
//0) Instanciamos las lib necesarias
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/connect');
const paisModel = require('./paisModel');


///////////////////////////////////////////////////////////
//1) Creamos una clase banda que herede las propiedades de Model
class bandaModel extends Model {}


///////////////////////////////////////////////////////////
// 2) Usamos los metodos de la clase para crear el modelo
bandaModel.init({
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
        references: {
          model: 'pais',
          key: 'id'
        }
      }
    }, 
    {
        sequelize,
        tableName: 'bandamusical', //Nombre de la tabla en el SQL
        modelName: 'bandaMusical', // Nombre que tendra en el JSON
        timestamps: false
      }
)


///////////////////////////////////////////////////////////
//2) Relacion

bandaModel.belongsTo(paisModel, {foreignKey: 'pais_id'});


///////////////////////////////////////////////////////////
//3) Exportamos el modelo
module.exports = bandaModel;