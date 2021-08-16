const mongoose = require('mongoose');
const { createModel } = require('../models/usuarios');
const { config } = require("dotenv");

let db_instance=null

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
        console.log("We are connected in Mongo DB");
        db_instance=db;
        createModel();
        resolve(db)
      });

  })
  
  return inicializacionDB;

}


const getInstance = () =>{

  return db_instance

}

const getModel = (name) =>{

  return db_instance.models[name]

}


module.exports= {
  initDatabase,
  getInstance,
  getModel
};