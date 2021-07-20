// Instancia de dependencias
const Sequelize = require('sequelize');

// Configuración del Sequalize
const path = 'mysql://root@localhost:3306/discografica';
const sequelize = new Sequelize(path);

//Exportamos el sequelize
module.exports = sequelize;