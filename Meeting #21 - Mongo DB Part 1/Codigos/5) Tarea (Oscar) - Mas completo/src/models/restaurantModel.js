const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    plato: String,
    precio: String,
    tipo_de_plato: String
})


module.exports = {
    createModel() {
        const Restaurant = mongoose.model('Restaurant', restaurantSchema);
        return Restaurant;
    }
}
