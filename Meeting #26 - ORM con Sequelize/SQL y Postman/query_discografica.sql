create database discografica;
use discografica;

CREATE TABLE `bandamusical` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `integrantes` int not null,
  `fechaInicio` datetime not null,
  `fechaSeparacion` datetime null,
  `pais_id` int not null,  
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
  
CREATE TABLE `pais` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`));  
  
ALTER TABLE `album` ADD INDEX `fk_album_banda_idx` (`banda_id` ASC);

ALTER TABLE `discografica`.`album` 
ADD CONSTRAINT `fk_album_banda`
  FOREIGN KEY (`banda_id`)
  REFERENCES `discografica`.`album` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `discografica`.`bandamusical` 
ADD INDEX `fk_banda_pais_idx` (`pais_id` ASC) ;
;
ALTER TABLE `discografica`.`bandamusical` 
ADD CONSTRAINT `fk_banda_pais`
  FOREIGN KEY (`pais_id`)
  REFERENCES `discografica`.`pais` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
  
ALTER TABLE `discografica`.`cancion` 
ADD INDEX `fk_cancion_banda_idx` (`banda_id` ASC) ;
;
ALTER TABLE `discografica`.`cancion` 
ADD CONSTRAINT `fk_cancion_banda`
  FOREIGN KEY (`banda_id`)
  REFERENCES `discografica`.`bandamusical` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `discografica`.`cancion` 
ADD INDEX `fk_cancion_album_idx` (`album_id` ASC) ;
;
ALTER TABLE `discografica`.`cancion` 
ADD CONSTRAINT `fk_cancion_album`
  FOREIGN KEY (`album_id`)
  REFERENCES `discografica`.`album` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;


insert into pais (nombre)
values ('Argentina');

INSERT INTO `discografica`.`bandamusical`
(
`nombre`,
`integrantes`,
`fechaInicio`,
`fechaSeparacion`,
`pais_id`)
VALUES
('Los Autenticos Decadentes',
23,
'19850101',
null,
1),
('Soda Estereo',
3,
'19820101',
'19971201',
1);

INSERT INTO `discografica`.`album`
(
`nombre`,
`banda_id`,
`fechaPublicacion`)
VALUES
(
'Mi vida loca',
1,
'19951101'),
(
'Signos',
2,
'19860601');

INSERT INTO `discografica`.`cancion`
(
`nombre`,
`duracion`,
`banda_id`,
`album_id`,
`fechaPublicacion`)
VALUES
(
'La guitarra',
220,
1, 
1, 
'19950301'),
(
'Diosa',
210,
1, 
1, 
'19950401'),
(
'Prófugos',
320,
2, 
2, 
'19860401'),
(
'Persiana Americana',
440,
2, 
2, 
'19860701');

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


-- /canciones/:id
-- Mostrar todos los nombre relacionados
SELECT 
c.nombre as "nombre_cancion",
a.nombre as "nombre_album",
b.nombre as  "nombre_banda"
from cancion c
left join album a on a.id =c.album_id
left join bandamusical b on b.id = c.banda_id
where c.id = 1;

-- /banda/:id
-- Mostrar la banda con su pais
SELECT 
b.nombre,
b.integrantes,
b.fechaInicio,
b.fechaSeparacion,
p.nombre
from bandamusical as b
left join pais as p on b.pais = p.id

-- /album/:id 
-- Mostrar el album con el detalle del artista
SELECT 
a.nombre as "nombre_album",
a.fechaPublicacion as "fecha_publicacion_album",
b.nombre as "nombre_banda",
b.integrantes,
b.fechaInicio,
b.fechaSeparacion
FROM
album as a
left join bandamusical as b on a.banda_id=b.id
where a.id=1


