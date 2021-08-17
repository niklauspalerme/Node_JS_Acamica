const mongoose = require('mongoose');


const usuarioSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    email: String,
    saldo: Number
})


module.exports = {
    createModel() {
        const Usuario = mongoose.model('Usuario', usuarioSchema);
        return Usuario;
    }
}