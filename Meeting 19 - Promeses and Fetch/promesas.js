
//La promesa es un tipo de Objeto que tiene un comportamiento definido
//Necesita un callback para poder ejecutarse
//La callback de la promesa debe manejar 2 parametros que son:
//Resolve cuando la promesa se cumple
//Reject cuando la promesa tiene exceptions/errores/no se completa

//Declarición de Promesas
let miPromesa = new Promise( (resolver,reject)=>{

  let comprender =true;

  if(comprender)
    resolver("Se entendio")
  else
    reject("No se entendio")

})

//Ejecución de una promesa
//Se utiliza .then() para cuando esperamos el resultado del resolve
//Y .catch() para manejar los errores de la promesa
miPromesa.then(result => {
  console.log(result)
})
.catch(result => {
  console.log(result)
})


