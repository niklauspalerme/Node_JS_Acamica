const { createModel } = require("../models/usuarios");
const { getInstance, getModel } = require("./conexion")

//1 - Creamos el usuario
const crearUsuarioDB = async (usuarioEjm) =>{


    const session =  await getInstance().startSession();

    await session.withTransaction( async () => {

        try{

            console.log("Creamos la transaction");
            const usuarioModel = createModel();
            const usuariox = new usuarioModel(usuarioEjm);
            const respuestaDeSave = await usuariox.save();
            console.log("Terminamos Transaction - crearUsuarioDB");
            return respuestaDeSave;


            //OTRA FORMA CREANDO UN DOCUMENTO USANDO EL ATLAS
            //console.log("Creamos Transaction - crearUsuarioDB");
            //const Usuario = getModel('User');
            //const respCreation = await Usuario.create(usuariox, {session: session});
            //console.log("Terminamos Transaction - crearUsuarioDB");
            //return respCreation;
    
        }catch(error){
    
            console.log(error);
            throw new Error("Error en la creación")
            
        }
    
    })
    
    session.endSession();

}


//2 - Creamos el deposito
const crearDepositoDB = async (email,monto) =>{

    const session =  await getInstance().startSession();

    await session.withTransaction( async () => {

        try{

            console.log("Creamos la transaction");
            const Usuario = getModel('Usuario')
            const usuarioFound = await Usuario.findOne({email});
            usuarioFound.saldo = monto + usuarioFound.saldo;
            console.log("Terminamos Transaction - crearUsuarioDB");
            await usuarioFound.save();
            
        }catch(error){
    
            console.log(error);
            throw new Error("Error en la creación")
            
        }
    
    })
    
    session.endSession();

}


//3- Hacemos unas transferencia BB
const hacerTransferenciaDB = async (emailFrom,emailTo,monto) =>{

    const session =  await getInstance().startSession();

    await session.withTransaction( async () => {

        try{

            console.log("Creamos la transaction");
            const Usuario = getModel('Usuario');
            const usuarioFrom = await Usuario.findOne({email: emailFrom});
            const usuarioTo = await Usuario.findOne({email: emailTo});
            usuarioFrom.saldo = usuarioFrom.saldo - monto;
            usuarioTo.saldo = usuarioTo.saldo + monto;
            console.log("Terminamos Transaction - crearUsuarioDB");
            await usuarioFrom.save();
            await usuarioTo.save();
            
        }catch(error){
    
            console.log(error);
            throw new Error("Error en la creación")
            
        }
    
    })
    
    session.endSession();


}



module.exports={
    crearUsuarioDB,
    crearDepositoDB,
    hacerTransferenciaDB 
}