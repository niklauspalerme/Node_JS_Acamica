const mongoose = require('mongoose');

//Generamos la conexion:
//1) Le pasamos direccion de la DB
//2) Y un objeto con parametros para su uso
mongoose.connect('mongodb://localhost:27017/restaurant', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Generamos el esquema a trabajar de la DB
const menu = {
    plato: String,
    precio: String,
    tipo_de_plato: String
};

//Instanciamos en una variable el modelado de la DB
//Con este objeto podemos consumir la DB
const Menues = mongoose.model('Menues', menu);


//Lo exportamos para que pueda ser usado en los diferentes modulos
module.exports = Menues;