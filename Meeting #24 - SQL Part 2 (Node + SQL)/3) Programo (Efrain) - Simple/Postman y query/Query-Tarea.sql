
/*Creamos una DB*/
create database discografica;


/*Creamos Tablas*/

use discografica;

CREATE TABLE `bandamusical` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `integrantes` int not null,
  `fechaInicio` datetime not null,
  `fechaSeparacion` datetime null,
  `pais` varchar(50) not null,  
  PRIMARY KEY (`id`));
  
CREATE TABLE `cancion` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `duracion` int NOT NULL,
  `banda_id` int NOT NULL,  
  `album_id` int NOT NULL,
  `fechaPublicacion` datetime NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `album` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `banda_id` int NOT NULL,  
  `fechaPublicacion` datetime NOT NULL,
  PRIMARY KEY (`id`));
  

/*Insertamos records en la DB*/

INSERT INTO `discografica`.`bandamusical`
(`nombre`,`integrantes`,`fechaInicio`,`fechaSeparacion`,`pais`)
VALUES
('Los Autenticos Decadentes',23,'19850101',null,'Argentina'),
('Soda Estereo',3,'19820101','19971201','Argentina');


INSERT INTO `discografica`.`album`
(`nombre`,`banda_id`,`fechaPublicacion`)
VALUES
('Mi vida loca',1,'19951101'),
('Signos',2,'19860601');


INSERT INTO `discografica`.`cancion`
(`nombre`,`duracion`,`banda_id`,`album_id`,`fechaPublicacion`)
VALUES
('La guitarra',220,1, 1, '19950301'),
('Diosa',210,1, 1, '19950401'),
('Prófugos',320,2, 2, '19860401'),
('Persiana Americana',440,2, 2, '19860701');

-- Query 1
select * 
from bandamusical;

-- Query 2
select * 
from bandamusical 
where pais like 'Argentina';

-- Query 3
select * 
from bandamusical 
where integrantes =1;

-- Query 4
select * 
from cancion 
where fechaPublicacion >= '20150101';

-- Query 5
select * 
from cancion 
where duracion > 3;

-- Query 6
select * 
from album;
