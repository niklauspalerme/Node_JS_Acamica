const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/contactos', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose;