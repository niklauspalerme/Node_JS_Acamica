 //Instanciamos el  Sequelize 
const Sequelize = require('sequelize');

//Colocamos la conexion de DB
const sequelize = new Sequelize('mysql://root@localhost:3306/discografica');

//Exportamos la conexion
module.exports = sequelize