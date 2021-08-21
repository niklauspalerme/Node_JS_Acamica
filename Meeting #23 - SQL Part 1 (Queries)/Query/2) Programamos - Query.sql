CREATe TABLE people (
  id integer PRIMARY KEY AUTO_INCREMENT not NULL,
    nombre VARCHAR(30) ,
    apellido VARCHAR (30),
    email VARCHAR(50),
    edad INTEGER,
    nacimiento DATE,
    casado BOOL
)



insert INTO 
people (nombre,apellido,email,edad,nacimiento,casado)
values 
("Nicolas", "Palermo", "nicolax0416@gmail.com", 27, "19940504", true ),
("Maria", "Palermo", "maria6palermo@google.com", 19,  false ),
("Maria Del Valle", "Palermo", "mar6@mercadolibre.com", 17,  false ),
("Mario", "Paris", "marioparis@gmail.com", 29, true ),
("Nicolas", "Palermo", "nico.palermo@gmail.com", 15,  false ),
("Matias", "Rodriguez", "mattiasrodriguez6@gmail.com", 19,  true ),
("Mudaduda", "Palermo", "zawardo@gmail.com", 35,  false ),
("Mariangelys", "Palermo", "maria6@gmail.com", 11, false ),
("Maru", "Fendandez", "maria6@gmail.com", 19, true ),
("Marcos", "Palermo", "maria6@gmail.com", 12, false ),
("Mark", "Alvarez", "maria6@gmail.com", 59,  true ),
("Fedico", "Palermo", "maria6@gmail.com", 23, false )




SELECT * from people where edad >= 18


SELECT * from people where casado = 1


select * from people where email like "%@google%"