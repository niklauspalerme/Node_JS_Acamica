const { dbConexion } = require("../config");


//1 - Mostramos todos los paises
async function mostrarPaises (req,resp){

    try{

        const db = dbConexion();
        const paises = await db.query("SELECT * FROM pais", { type: db.QueryTypes.SELECT })
        resp.send(paises)    

    }catch(error){
        console.log(error);
        resp.status(500).send(error);
    }
}


//2- Creamos un pais 
async function crearPais (req,resp){

    try{

        const {nombre} = req.body;
        const db = dbConexion();
        await db.query(
            `INSERT INTO pais
            (nombre)
            VALUES
            ('${nombre}')`
            ,{ type: db.QueryTypes.INSERT }
        )
        resp.status(201).json({"Message": "Se ha agregado un País"});
   
    }catch(error){
    
        console.log(error);
        resp.status(500).send(error);
    }

}


//3- Actualizamos un país
async function actualizarPais (req,resp) {

    try{

        const id = req.params.id;
        const {nombre} = req.body;
        const db = dbConexion();
        await db.query(
            `UPDATE pais SET
            nombre = '${nombre}'
            WHERE id = ${id}`, 
        {
            type: db.QueryTypes.UPDATE
        });

        resp.status(201).json({"Message": "El país se ha actualizado"})

        

    }catch(error){
        console.log(error);
        resp.status(500).send(error);
    }
}


//4 - Elimnamos un pais
async function eliminarPais (req,resp){
    try{
        const id = req.params.id;
        const db = dbConexion();

        await db.query(
            `DELETE FROM pais
            WHERE id = ${id}`, 
        {
            type: db.QueryTypes.DELETE
        });

        resp.status(200).json({"Message": "El país se ha eliminado"})


    }catch(error){
        console.log(error);
        resp.status(500).send(error);
    }
}


module.exports={
    mostrarPaises,
    crearPais,
    actualizarPais,
    eliminarPais
}