const mongoose = require('mongoose');


//Esquema #1
const contacto = new mongoose.Schema({
    telefono: String,
    direccion: String,

})


const usuarioSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    email: String,
    contacto: [contacto] // Documento embebido
})


module.exports = {
    createModel() {
        const Usuario = mongoose.model('Usuario', usuarioSchema);
        return Usuario;
    }
}