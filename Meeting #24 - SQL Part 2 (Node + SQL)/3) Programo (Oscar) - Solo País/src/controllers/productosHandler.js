const { dbConexion } = require("../config/index");

//1- Obtenemos Productos
const obtenerProductos = async (req,resp)=>{

    try{

        const dbSequilize = dbConexion();
        const productos = await dbSequilize.query("SELECT * FROM products", { type: dbSequilize.QueryTypes.SELECT })
        resp.status(200).send(productos);
    }catch(error){

        console.log(error)
        resp.status(500).send(error);
    }
}

//2- Creamos Productos
const crearProducto = async (req,resp)=>{

    try{

        const {name,description,price}= req.body;

        const dbSequilize = dbConexion();
        await dbSequilize.query(
            `INSERT INTO products
            (name,
            description,
            price)
            VALUES(
            '${name}',
            '${description}',
            ${price}
            )`
            ,{ type: dbSequilize.QueryTypes.INSERT }
        )
        resp.status(200).json({"Message": "Se ha creado un nuevo producto"});
    }catch(error){

        console.log(error)
        resp.status(500).send(error);
    }

}


//3- Obtenemos productos en base a un WHERE
const obtenerUnProducto = async (req,resp)=>{

    try{
        const id = req.params.id;
        console.log(id)
        const dbSequilize = dbConexion();
        const productos = await dbSequilize.query(
            `SELECT * FROM products
            WHERE id=${id}`, 
            { type: dbSequilize.QueryTypes.SELECT })
        resp.status(200).send(productos);
    }catch(error){

        console.log(error)
        resp.status(500).send(error);
    }
}

module.exports={
    obtenerProductos,
    crearProducto,
    obtenerUnProducto
}