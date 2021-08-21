const { Sequelize, DataTypes } = require('sequelize');

function createProductModel(connection) {

  //1-Creamos el modelo
  const Product = connection.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    price: {
      type: DataTypes.DOUBLE
    }
  }, {
    // Other model options go here
  });

  //2- Retornamos el modelo
  return Product;
}

module.exports = {
  createProductModel
}
