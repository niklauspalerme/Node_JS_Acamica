const mongoose = require('mongoose');
const { createModel } = require('../models/restaurantModel');
const { config } = require("dotenv");


//0- Creamos una variable de instancia de la db
let _db_instance = null


//1- Para inicializar la DB
const initDatabase =  async ()=>{

  config();

  const {db_host,db_port,db_name} = process.env;
  const URL = `mongodb://${db_host}:${db_port}/${db_name}`


  const inicializacionDB = new Promise((resolve,reject)=>{

      mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true});

      const db = mongoose.connection;

      db.on('error', (error)=>{
        console.error.bind(console, 'connection error:')
        reject(error)
      });

      db.once('open', ()=> {
        console.log(`We are connected to Database ->  ${db_name}`);
        createModel();
        //Cuando se conecte y abra la conexion obtenemos la variable de la DB
        _db_instance = db;
        resolve(db)
      });

  })
  
  return inicializacionDB;

}


//2-Devolver la variable de la DB
const getDBInstance = () =>{
    return _db_instance;

}

//3- Te devuelve el modelo que requieras
const getModel = (name) =>{

    return _db_instance.models[name]

}

module.exports= {
  initDatabase,
  getDBInstance,
  getModel
};