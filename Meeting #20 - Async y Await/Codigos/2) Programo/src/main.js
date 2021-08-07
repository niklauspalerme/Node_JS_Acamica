//////////////////////////////////////////////////////////////////////////
// Instanciamos
const fetch = require('node-fetch');


//////////////////////////////////////////////////////////////////////////
 //Variables y configs
    
const key = "739db316"


//////////////////////////////////////////////////////////////////////////
//Funcion Aux

const pelicula = async (titulo) =>{
    
    try{
        const respuesta = await fetch(`http://www.omdbapi.com/?apikey=${key}&t=${titulo}`);
        const datos = await  respuesta.json()

        return {
            nombre: datos.Title,
            description: datos.Plot,
            image: datos.Poster
        }
    }catch (error){
        console.log(error)
    }

}


//////////////////////////////////////////////////////////////////////////
//Funcion Principal


const main = () =>{

    const titulo= "titanic"
    
    pelicula(titulo).then(data => console.log(data))
          .catch( error => console.log(error))

}

main();
