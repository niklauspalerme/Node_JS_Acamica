const mongoose = require('mongoose');

//Conexión
//Esta conexion debe enlazarse con MongoDBCompass
mongoose.connect('mongodb://localhost:27017/mi_base');

//Modelado
schema = { nombre: String, apellido: String, edad: Number };
const Usuarios = mongoose.model("Usuarios", schema);

//Agregamo un dato
const yo = { nombre: "Juan", apellido: "Perez", edad: 24 };
let nuevo_usuario = new Usuarios(yo)
//Aqui creamos los datos y lo insertamos
nuevo_usuario.save();

//Buscar info
Usuarios.find().then(function(resultados) {
    console.log(resultados);
});

//Buscar en base a un filtro
Usuarios.find({ nombre: "Juan" }).then(function(resultados) {
    console.log(resultados);
});