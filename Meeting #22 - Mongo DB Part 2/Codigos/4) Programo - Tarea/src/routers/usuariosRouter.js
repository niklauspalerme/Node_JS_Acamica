const {Router} = require('express');
const { crearUsuario,crearDeposito, hacerTransferencia } = require('../controllers/usuariosHandler');
const { findEmail, saldoInsuficiente } = require('../middleware/usuarioMiddleware');

const routerUsuarioFunction = () =>{


    const router = new Router();

    router.post("/", findEmail, crearUsuario);
    router.post("/:email/depositar",  crearDeposito);
    router.post("/:email/transferencia", saldoInsuficiente,hacerTransferencia);



    return router;

}

module.exports={
    routerUsuarioFunction
}