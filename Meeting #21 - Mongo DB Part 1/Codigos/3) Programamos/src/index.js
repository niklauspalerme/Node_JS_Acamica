const { config } = require("dotenv");
const { initDatabase } = require("./config/connect");
const {crearPlato, mostrarPlatos} = require("./services/platosServices");

const main = async () =>{

    //Inicia el proceso de configuracion y acceso a ".env"
    config();

    //Iniciamos la conexion a la DB
    const db =  await initDatabase();

    //Verificamos si existe algo en la collection Restaurant
    //A traves del resultado de la conexion podemos acceder a las colecciones
    const data = await db.models.Restaurant.find({})

    //Si no hay nada en la colecction Restaurant - Creamos un documento
    if (data.length === 0)
        crearPlato(db, "Sushi", "1500", "Asiatico")
    //Si hay un documento en la colecction Restaurant - Mostramos 
    else
        mostrarPlatos(db)

}

main();