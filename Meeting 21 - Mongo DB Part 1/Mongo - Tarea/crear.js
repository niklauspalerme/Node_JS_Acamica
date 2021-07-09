const Menues = require('./schemas');


const crear = (req, res, next) => {

    let { plato, precio, tipo_de_plato } = req.body

    let menux = { plato, precio, tipo_de_plato };

    let dbMenues = new Menues(menux);

    dbMenues.save();

    res.status(201).json({ "Message": "The Product was created" });
};

module.exports = crear;