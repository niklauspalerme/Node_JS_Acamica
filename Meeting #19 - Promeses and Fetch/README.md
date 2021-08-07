# Teoria - Historia 


Para empezar se debe entender que las funciones en JS son de primer orden ya que estas  se pueden almacenar en variables, pasar como parámetro y retornar asi mismo funciones.

JavaScript es **"single threaded"**. Eso significa que sólo puede realizar una acción a la vez, desde el único hilo de ejecutación disponible.
Si tenemos una secuencia de operaciones, éstas operaciones se deben ejecutar una después de otra (ya que no es posible crear más hilos).
Estos procesos internos de ejecución pueden trabajar de manera async

La implementación de JavaScript es distinta en cada navegador. Pero generalmente la ejecución de código JavaScript ocurre a la par con el proceso de pintar elementos, actualizar los estilos, y gestionar acciones del usuario (como resaltar texto o interactuar con los controles de un formulario). La actividad en una de estas cosas retrasa a las otras.

## Por ejemplo:

Como ser humano, **eres multihilo**. Puedes escribir con varios dedos. **Puedes caminar y mantener una conversación al mismo tiempo**.
Sin embargo **hay operaciones de bloqueo** con las que tenemos que lidiar. **Por ejemplo, al estornudar.
Otras actividades son forzadas a suspenderse durante el estornudo**.
Eso es bastante molesto, especialmente cuando estás muy concentrando haciendo múltiples actividades en simultáneo.
**En JS, la solución a esta limitante son los events y callbacks.**


Debido al uso excesivo de callback para **manejar operaciones async** se empezo a generar una problematica llamada 
> callback hell

```
verificarSiYaConfirmoSuCorreo(function(correoConfirmado) {
  if (correoConfirmado) {
    obtenerCategoriasPreferidas(userId, function(categoriasPreferidas) {
      if (categoriasPreferidas.length > 0)    
        obtenerArticulosPopularesEn(categoriasPreferidas, function(listaArticulos) {
          console.log('Artículos de las categorías preferidas: ' + listaArticulos);
        }, failureCallback);
      else
        obtenerArticulosPopulares(function(listaArticulos) {
          console.log('Artículos más vistos en general: ' + listaArticulos);
        }, failureCallback); 
    }, failureCallback);
  } else {
    console.log('Primero por favor confirma tu correo');
  }
}, failureCallback);
```


De esta problematica surgieron **las promesas (son un azúcar sintáctico)** para pode manejar mejor los callbacks:


```
verificarSiYaConfirmoSuCorreo()
.then(correoConfirmado => {
  if (correoConfirmado)
    return obtenerCategoriasPreferidas(userId);
  else
    throw new Error('Primero por favor confirma tu correo');
})
.then(categoriasPreferidas => {
  if (categoriasPreferidas.length > 0)    
    return obtenerArticulosPopularesEn(categoriasPreferidas);
  else
    return obtenerArticulosPopulares();
})
.then(listaArticulos => console.log('Artículos a mostrar: ' + listaArticulos))
.catch(failureCallback);
```

# Promesas

Las promesas es una **Clase especial** que tiene JS que cuando se instancia/declara debe recibir como **parametro un Callback (1)** y esta como resultado puede
retornar 2 Callback, estos 2 Callback sirve para avisar si la tarea asincrona
se ejecuto de manera exitosa **(Callback 2 o resolve)** o hubo algun error durante el proceso **(Callback 3 o reject)**.
Con el uso de las promesas podemos envolver en ella todos los procesos que son **async** y esperar un resultado exitoso y fallido

- resolve: Cuando la promesa se cumple exitosamente
- reject : Cuando la promesa tiene exceptions/errores/no se completa

## Ejecución de una Promesa

- **.then()** se utiliza para poder manejar los resultados que retorna el **resolve*
- **.cath()** se utiliza para manejar los errores provenientes del **reject**

# Fetch

Antes para poder realizar manejar peticiones HTTP se utilizaba el AJAX o XMLHTTPRequest para asi poder acceder y manipular la data de la petición. **fetch** vendria siendo un azúcar sintácitco para esta petición. Entonces el **API fetch proporciona una interfaz en JS para el manejo de peticiones HTTP a través de promesas** recibiendo un conjunto de parametros y generando un resultado tanro positivo como negativo.

## Uso del fetch

Para poder usar el fetch se debe instalar en no a través del comando **npm i node-featch** y luego instanciarlo  en una variable para su uso **const fetch = require('node-fetch');**

## Ejecución del fetch

- **.then()** se utiliza para poder manejar los resultados que retorna el **resolve** y por lo general se usa **dos (2) then()** **(es decir un encadenamiento de promesas)** para pode obtener los datos deseados del servicio:

  - El primer then() te va retornar **una response** del protocolo HTTP Requets que para que sea manejable
  debes transformar ese response a través del metodo **.json()** que posee el **response**

  - El segundo then() vas a poder manipular el dato resultado y podras retornarlo ahí

- **.cath()** se utiliza para manejar los errores provenientes del **reject**



# Links

- Promesas origenes: https://programacionymas.com/blog/promesas-javascript
- Promesas: https://code.tutsplus.com/es/tutorials/keeping-promises-with-javascript--cms-25056 
- Response del Fetch: https://developer.mozilla.org/es/docs/Web/API/Response

