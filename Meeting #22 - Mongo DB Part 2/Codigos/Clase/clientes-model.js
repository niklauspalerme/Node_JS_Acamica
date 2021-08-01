const { Schema } = require('mongoose');
const mongoose = require('./conexion');
const schema = mongoose.Schema;

//Esquema #1
const contacto = new schema({
    telefono: String,
    direccion: String,

})

//Esquema #2
const cliente = new schema({
    nombre: String,
    apellido: String,
    email: String,
    contacto: [contacto] //Hace referencia al Schema #1
})

//Creamos e instanciamos el modelo basado en los Schemas
const ClienteModel = mongoose.model('cliente', cliente)

module.exports = ClienteModel;