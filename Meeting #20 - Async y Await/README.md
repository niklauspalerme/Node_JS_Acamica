# Async y await

El **async y await** nace de la problemática del **promese chain**. Ya que en algún momento habría que utilizar un cantidad enorme o excesivo de then() para poder resolver promesas. Básicamente estas 2 palabras reservadas vendría siendo un azúcar sintáctico para manejar mejor las promesas de una manera prolija. Además de que el código a nivel de sintaxis vendría siendo mucha mas entendible 

## Ejemplo de Promese Chain

```
const getWeather = (city)=>{

    const key = process.env.OPEN_WEATHER_KEY;
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city.ciudad}&appid=${key}`;

     return fetch(URL).then(response=>response.json())
                      .then(dataCiudad=> {
                        return {
                            nombre: dataCiudad.name,
                            temperatura: dataCiudad.main.temp,
                            mensaje: dataCiudad.weather.pop().main
                          }
                      })
                      .catch(error=>console.log(error))
}
```

- Si nos fijamos en el ejemplo estamos usando dos (2) then() y un (1) catch() para poder resolver toda esta promesa que luego es invocada acá:

```
const getCities = (req,resp)=>{

    const data = require('../cities.json');
   
    const ciudad1= data [parseInt(Math.random()*data.length)];
    const ciudad2= data [parseInt(Math.random()*data.length)];
    const ciudad3= data [parseInt(Math.random()*data.length)];

    const ciudades=[
       getWeather(ciudad1),
       getWeather(ciudad2),
       getWeather(ciudad3)
    ];

    Promise.all(ciudades).then(data => resp.send(data))
    
}
```

- Prestar atención dentro del array ciudades ya que solo al calocar el nombre de la función **getWeather()** se esta asumiendo que la estamos invocando e implicitamente nos esta devolviendo la promesa del fetch **no los datos**, para que podamos acceder/resolver loque nos retorna el  **fetch** debemos invocar otro **then()** para que finalmente la promesa retornada del fetch se **resuelva con los datos esperado** 


## Ejemplo usando Async y await 


- Lo que va ocurrir ahora es que debemos colocar la palabra reservada **async** para volver toda la función una promesa
- Luego todos los procesos que sean asíncromos debemos colocarle la palabra reservada **await** para volverlos sincronicos 
- Otra datos interesante es que para poder manejar los errores de una **async function** se recomienda usar el  **try y catch**  y colocarlo donde se encuentre el primer await. Estos manejaran todos los errores de los procesos que tengan **await**

```
const getWeather = async (city) {

  const key = process.env.OPENWEATER_KEY;
  const cityName = city.name;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric&lang=es`;
  
  try {

    conts respuesta = await fetch(URL);
    const json = await respuesta.json();

    if (!json.main) {
      console.log(`No viene el main para la ciudad ${cityName}`);
      return { nombre: cityName };
    }

    return {
      nombre: json.name,
      temperatura: json.main.temp,
      mensaje: json.weather.pop().main
    }

  }catch (error) {
    console.error(error)
    return { nombre: cityName };
  }

}
```



```
const getCities = (req,resp)=>{

    const data = require('../cities.json');
   
    const ciudad1= data [parseInt(Math.random()*data.length)];
    const ciudad2= data [parseInt(Math.random()*data.length)];
    const ciudad3= data [parseInt(Math.random()*data.length)];

    const ciudades=[
       getWeather(ciudad1),
       getWeather(ciudad2),
       getWeather(ciudad3)
    ];

    Promise.all(ciudades).then(data => resp.send(data))
    
}
```