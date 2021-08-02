 //Instanciamos el  Sequelize 
const Sequelize = require('sequelize');
require('dotenv').config();

//Colocamos la conexion de DB
const sequelize = new Sequelize(`mysql://${process.env.MYSQL_USER}@${process.env.MYSQL_HOST}:${process.env.MYSQL_PORT}/${process.env.MYSQL_DATABASE}`);


//new Sequelize('mysql://root@localhost:3306/discografica');

//Exportamos la conexion
module.exports = sequelize