# Documento Embebidos

- **Part 1 --> conexion.js:**

	- importamos al mongoose
	- Llamamos a la funcion connect para poder conectarnos a la DB y abrir la conexión 
	- Exportamos la conexión abierta del mongoose/db

- **Part 2 --> clientes-model.js:**

	- Importamos el mongoose del archivo conexion.js para seguir usandolo
	- Creamos una variable "schema" que va tener referencia a la variable "Schema" del mongoose https://mongoosejs.com/docs/2.7.x/docs/model-definition.html
	- Creamos un esquema #1 con su estructura
	- Creamos u esquema #2 que va tener un array que hace referencia al esquema1 #1 (Conviertiendolo en un documento embebido)
	- LLamamo a la función "model()" de mongoose y lo instanciamos en una variable el modelo con el esquema
	- Exportamos la variable que hace refrencia al modelo

- **Part 3 --> index.js:**

	- Importamos el express y el modelado de la DB
	- Creamos los respectivos middleware
	- Creamos los respectivos endpoints con sus funciones asyncronas si es necesario
	- Creamos el puerto que vamos a usar