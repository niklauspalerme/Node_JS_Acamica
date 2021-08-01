const Menues = require('./schemas');

const update = async(req, resp, next) => {

    let platoId = req.params.platoId
    let { plato, precio, tipo_de_plato } = req.body

    await Menues.findOne({ _id: platoId })
        .then(respMongo => {
            respMongo.plato = plato
            respMongo.precio = precio
            respMongo.tipo_de_plato = tipo_de_plato
            respMongo.save()
            resp.status(200).json({ "Message": "El plato ha sido actualizado" });
        })


}

module.exports = { update }