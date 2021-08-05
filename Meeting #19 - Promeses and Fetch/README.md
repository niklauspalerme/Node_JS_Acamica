# Teoria de Promesas y Fetch 


Para empezar se debe ententder que las funciones en JS son de primer orden ya que estas  se pueden almacenar en variables, pasar como parámetro y retornar asi mismo funciones.

JavaScript es "single threaded". Eso significa que sólo puede realizar una acción a la vez, desde el único hilo de ejecutación disponible.
Si tenemos una secuencia de operaciones, éstas operaciones se deben ejecutar una después de otra (ya que no es posible crear más hilos).
Estos procesos internos de ejecución pueden trabajar de manera async

La implementación de JavaScript es distinta en cada navegador. Pero generalmente la ejecución de código JavaScript ocurre a la par con el proceso de pintar elementos, actualizar los estilos, y gestionar acciones del usuario (como resaltar texto o interactuar con los controles de un formulario). La actividad en una de estas cosas retrasa a las otras.

Por ejemplo:
Como ser humano, eres multihilo. Puedes escribir con varios dedos. Puedes caminar y mantener una conversación al mismo tiempo.
Sin embargo hay operaciones de bloqueo con las que tenemos que lidiar. Por ejemplo, al estornudar.
Otras actividades son forzadas a suspenderse durante el estornudo.
Eso es bastante molesto, especialmente cuando estás muy concentrando haciendo múltiples actividades en simultáneo.
En JS, la solución a esta limitante son los events y callbacks.


Debido al uso excesivo de callback se empezo a generar una problematicallamada 
> callback hell

```
hacerAlgo(function(resultado) {
  hacerAlgoMas(resultado, function(nuevoResultado) {
    hacerUnaTerceraCosa(nuevoResultado, function(resultadoFinal) {
      console.log('Resultado final: ' + resultadoFinal);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```


1. Clase:
	- El codigo realizado en clase

2. Tarea:
	- El codigo que se mando de tarea


- Link para leer: https://code.tutsplus.com/es/tutorials/keeping-promises-with-javascript--cms-25056 

