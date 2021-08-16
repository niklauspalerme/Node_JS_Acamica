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


//2 - Creamos el Contacto del Usuario
const crearContactoDB = async (email,telefono, direccion) =>{

    const session =  await getInstance().startSession();

    await session.withTransaction( async () => {

        try{

            console.log("Creamos la transaction");
            const Usuario = getModel('Usuario')
            const usuarioFound = await Usuario.findOne({email});
            usuarioFound.contacto.push({telefono,direccion})
            console.log("Terminamos Transaction - crearUsuarioDB");
            await usuarioFound.save();
            
        }catch(error){
    
            console.log(error);
            throw new Error("Error en la creación")
            
        }
    
    })
    
    session.endSession();

}


module.exports={
    crearUsuarioDB,
    crearContactoDB
}