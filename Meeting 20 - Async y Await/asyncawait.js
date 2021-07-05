const fetch = require("node-fetch")
const express = require("express")
const server = express()
const PORT = 8080

//Api a consumir https://rapidapi.com/es/apigeek/api/google-search3/
// Teoria
// A través de la palabra reservada async vamos a hacer que nuestra
// función se transforme en una función tipo síncrona.



//Para poder usar una function asyncronica en un endpoit
//1) El callback del endpoint la colocamos async
//2) El await lo colocamos la variable del Fetch
//Esto lo que va hacer es detener todo hasta que se consuma el Fetch
server.get("/noticias", async(req, res) => {

    //http://localhost:8080/noticias
    const data = await fetch(`https://google-search3.p.rapidapi.com/api/v1/news/q=${req.headers.q}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "4d5d58247fmsh82244f0b402501ap15afabjsn057ea904ce10",
                "x-rapidapi-host": "google-search3.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .catch(error => console.log(error))

    res.status(200).json(data)

})


server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})