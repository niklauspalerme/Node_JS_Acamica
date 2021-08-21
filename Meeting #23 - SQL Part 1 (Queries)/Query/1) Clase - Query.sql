/***********************/
-- Creación de DB

CREATE DATABASE CLASE;



/***********************/
-- Creamos una tabla 


CREATE TABLE Usuario clase(

	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(30) NOT NULL UNIQUE,
	name VARCHAR(30) NOT NULL,
	lastname VARCHAR(30) NOT NULL,
	password VARCHAR(100) NOT NULL
);



/***********************/
-- Insertar Dato


INSERT INTO usuario 
(username,NAME, lastname, password) 
VALUES
("nikyuyo","Nicolas","Palermo","Milfleuresyus"),
("mareja", "Maria", "Palermo", "Helowfnwefwe"),
("marishol", "Marisol", "rodrgiuez", "sdijqbdjq");



/***********************************************/
-- Actualizamos el campo "username"


UPDATE usuario SET username = 'nik' WHERE id= 1;




/***********************************************/
-- Eliminamos el registro 


DELETE FROM usuarip WHERE id=5;