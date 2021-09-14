const { config } = require('dotenv');
const { connect, getModel } = require('./database/index.js');

//////////////
//NOTA

//Para qu funcione el programa debe crea la base de datos y correr el XAMMPP
//DB_NAME=programamosClase25

async function main() {
    try {

        config();    
        const {DB_USERNAME, DB_PASSWORD, DB_NAME, DB_PORT, DB_HOST } = process.env;

        const isDBOk = await connect(DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME);

        //console.log(DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME);

        if (isDBOk) {
        
          console.log("Connection is Ok");
          const User = getModel('User');
          const Contacto = getModel('Contacto');
          const ContactoUser = getModel('ContactoUser');

          const userTest ={
              firstName: "Nicolas",
              lastName: "Palermo",
              age: 25
          }

          const contactoTest = {
              name: "Facebook",
              username: "nikyuyo"
          }

        const data = new User (userTest)
        await data.save();
        const UserId =data.dataValues.id
        const data2 = new Contacto (contactoTest);
        await data2.save();
        const ContactoId = data.dataValues.id
        const data3 = await ContactoUser.create({UserId,ContactoId});

        const response =  await User.findAll({
            include: [{
                model: Contacto
            }]
        })

        console.log(response[0]);
        




        } else {
            console.log('Failure loading DB');
        }
            
    } catch (error) {
        console.log("Error en la funcion Main: ", error);
    }
}

main();