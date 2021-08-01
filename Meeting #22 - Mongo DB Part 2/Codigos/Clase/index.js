const express = require('express');
const server = express();
const ClienteModel = require('./clientes-model')

///////////////////////////////////////////////////////
// Middleware


server.use(express.json())


///////////////////////////////////////////////////////
//Endpoints


// POST http://localhost:8080/clientes
server.post("/clientes", async(req, resp) => {

    const {
        nombre,
        apellido,
        email
    } = req.body


    const resultado = await ClienteModel.find({ email: email });

    if (resultado.length > 0)
        resp.status(400).json({ "Mensaje": `El cliente con el email: ${email} ya existe` })
    else {
        let dbCliente = new ClienteModel({ nombre, apellido, email })
        dbCliente.save()
        resp.status(201).json({ "Mensaje": `El cliente con el email: ${email} ha sido creado` })
    }

})


server.post("/clientes/:email/contacto", async(req, resp) => {

    const email = req.params.email
    const { telefono, direccion } = req.body;

    const resultado = await ClienteModel.find({ email: email });

    resultado[0].contacto.push({ telefono, direccion });

    const dbCliente = new ClienteModel(resultado[0]);
    dbCliente.save();

    resp.send("OKIS")

})

///////////////////////////////////////////////////////
// Puerto


server.listen(8080, () => {
    console.log("Puerto Activo en 8080")
})