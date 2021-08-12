const { getModel, getInstance } = require("./connect")

//1-
const obtenerUsuariosDB = async ()=>{

    const Users = getModel('User');
    const data = await Users.find({});
    return data 

}



//2- Creamos el usuario en la DB
// Estamos utilizando Session Y Transaction
const crearUsuarioDB = async (usuariox) =>{

    //Iniciamos Session
    const session =  await getInstance().startSession();

    //Realizamos la transaction despues de iniciar la session
    await session.withTransaction ( async ()=>{

        try{

            console.log("Creamos Transaction - crearUsuarioDB");
            const Usuario = getModel('User');
            const respCreation = await Usuario.create(usuariox, {session: session});
            console.log("Terminamos Transaction - crearUsuarioDB");
            return respCreation;


            //OTRA FORMA DE CREAR UN DOCUMENTO
            //const restaurantModel = createModel();
            //const platox = new restaurantModel({plato,precio,tipo_de_plato});
            //const respDeSave =await platox.save();
            //return respDeSave


        }catch(error){

            console.log(error);
            throw new Error("Error en la creación")
        }

    })

    session.endSession();
}






module.exports={
    obtenerUsuariosDB,
    crearUsuarioDB
}