const { config } = require("dotenv");
const { models } = require("mongoose");
const { initDatabase } = require("./config/connect");

const main = async () =>{

    //Inicia el proceso de configuracion y acceso a ".env"
    config();
    const db =  await initDatabase();
    console.log(db.models);


    //Crear un dato
    const nico = new db.models.User({
        username: "Nikyuyo",
        firstname: "Nicolas",
        lastname: "Palermo",
        password: "1234567890"
    })

    await nico.save()

    //Encontrar un dato
    const data = await db.models.User.find({}) 
    console.log(data);

}

main();