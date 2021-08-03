const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root@localhost:3306/acamicax');

try {
  sequelize.authenticate()
  .then(() => {
    console.log('Conexión exitosa a la báse de datos');
  })
  .catch(err => {
    if (err.original.errno === 1049) {
      const dbContext = new Sequelize("", "root", "", {
        host: 'localhost',
        port: 3306,
        dialect: "mysql"
      });
      dbContext.query("CREATE DATABASE `acamicax`;")
      .then(() => console.log('Se creó la base de datos correctamente '))
      .catch(error => console.error(error));
    } 
  });
} catch (error) {}
module.exports = sequelize;