//////////////////////////////////////////////////////////////////////////
// Instanciamos
const fetch = require('node-fetch');


//////////////////////////////////////////////////////////////////////////
 //Variables y configs
    
const key = "739db316"

const getPeliculas = async (req,resp) =>{

    const titulo = req.query.titulo;
    
    try{
        const respuesta = await fetch(`http://www.omdbapi.com/?apikey=${key}&t=${titulo}`);
        const datos = await  respuesta.json()

        console.log(datos);

        resp.status(200).json({
            nombre: datos.Title,
            description: datos.Plot,
            image: datos.Poster
        })
        return 
    }catch (error){
        console.log(error)
    }

    
}


module.exports= {
    getPeliculas
}