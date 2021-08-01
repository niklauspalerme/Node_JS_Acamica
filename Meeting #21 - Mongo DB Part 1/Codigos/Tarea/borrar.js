const Menues = require('./schemas');


const borrar = async(req, resp, next) => {

    let platoId = req.params.platoId

    await Menues.deleteOne({ _id: platoId })
        .then(respMongoDB => {
            console.log(respMongoDB)
            if (respMongoDB.n === 1)
                resp.status(200).json({ "Message": "El plato ha sido eliminado" })
            else
                resp.status(404).json({ "Message": "El plato no se encuentra" })
        })
        .catch(error => resp.status(400).send(error))


};

module.exports = borrar;