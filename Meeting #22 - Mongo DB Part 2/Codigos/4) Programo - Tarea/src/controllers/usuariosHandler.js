const { crearUsuarioDB, crearDepositoDB, hacerTransferenciaDB } = require("../db/usuarioOpDB");

const crearUsuario = async (req,resp) =>{

    try{

        const {nombre,apellido,email,saldo} = req.body;

        const usuarioEjm= {
            nombre,
            apellido,
            email,
            saldo
        }

        await crearUsuarioDB(usuarioEjm);

        resp.status(201).json({"Message": "El usuario ha sido creado con exito"});

    }catch(error){

        console.log(error);
        resp.status(500).send(error);
        
    }

}


// 2- Creamos un deposito
const crearDeposito = async (req,resp)=>{

    try{

        const email = req.params.email;
        const monto = req.body.monto;
    
       await crearDepositoDB(email,monto);

        resp.status(201).json({"Message": `El deposito de ${monto} se realizó con éxito`});

    }catch(error){

        console.log(error);
        resp.status(500).send(error);

    }
}



//3- Realizamos una transferencia
const hacerTransferencia = async (req,resp)=>{

    try{

        const emailFrom = req.params.email;
        const emailTo = req.body.email;
        const {monto} = req.body;

        await hacerTransferenciaDB (emailFrom,emailTo,monto)

        resp.status(201).json({"Message": `La transferencia de ${monto} a ${emailTo}, se ha hecho con éxito`});


    }catch(error){
        console.log(error);
        resp.status(500).send(error);
    }


}


module.exports={
    crearUsuario,
    crearDeposito,
    hacerTransferencia
}