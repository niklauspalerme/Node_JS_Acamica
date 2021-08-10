const mongoose = require('mongoose');
const { createModel } = require('../models/restaurantModel');
const { config } = require("dotenv");


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
        console.log("We are connected to Database -> programamos");
        createModel();
        resolve(db)
      });

  })
  
  return inicializacionDB;

}


module.exports= {
  initDatabase
};