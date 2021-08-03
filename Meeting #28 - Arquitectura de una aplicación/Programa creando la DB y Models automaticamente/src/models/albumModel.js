///////////////////////////////////////////////////////////
//0) Instanciamos las lib necesarias
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connect');
const bandaModel = require('../models/bandaModel');



///////////////////////////////////////////////////////////
//1) Creamos una clase album que herede las propiedades de Model
class albumModel extends Model {}



///////////////////////////////////////////////////////////
// 2) Usamos los metodos de la clase para crear el modelo
albumModel.init({
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
        references: {
          model: 'album',
          key: 'id'
        }
      },
      fechaPublicacion: {
        type: DataTypes.DATEONLY,
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'album', //Nombre de la tabla en el SQL
      modelName: 'album', // Nombre que tendra en el JSON
      timestamps: false
    }
);

albumModel.belongsTo(bandaModel, {foreignKey: 'banda_id'})


///////////////////////////////////////////////////////////
//3) Exportamos el modelo
module.exports = albumModel;