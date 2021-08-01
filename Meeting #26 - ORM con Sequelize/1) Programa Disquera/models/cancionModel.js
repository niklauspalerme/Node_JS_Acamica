///////////////////////////////////////////////////////////
//0) Instanciamos las lib necesarias
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/connect');
const albumModel = require ('./albumModel');


///////////////////////////////////////////////////////////
//1) Creamos una clase cancionModel que herede las propiedades de Model
class cancionModel extends Model {}


///////////////////////////////////////////////////////////
// 2) Usamos los metodos de la clase para crear el modelo
cancionModel.init({
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
    sequelize,
    tableName: 'cancion',
    timestamps: false
  }
  );


///////////////////////////////////////////////////////////
//2) Relacion
cancionModel.belongsTo(albumModel, {foreignKey: 'album_id'})


///////////////////////////////////////////////////////////
//3) Exportamos el modelo
 module.exports = cancionModel;