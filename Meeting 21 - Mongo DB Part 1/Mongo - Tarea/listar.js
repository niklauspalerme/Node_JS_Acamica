const Menues = require('./schemas');


const mostrar = async(req, res, next) => {

    let dbMenues = await Menues.find().then(resp => resp);

    res.status(200).json(dbMenues);

};

module.exports = { mostrar };