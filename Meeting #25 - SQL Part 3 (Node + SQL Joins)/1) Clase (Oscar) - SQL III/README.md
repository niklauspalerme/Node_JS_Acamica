## Notas - Meeting #25 (Sequlize + JOIN / Eager Loading de N a M)

- **33:17:** Guardar los modelos usando la función **getModel**

- **38:33:** Explicación del **JOIN**

- **55:00:** Empezamos hacer las relaciones

- **1:07:00:** Explicación del Sequlize

- **2:10:00:** Programamos

- Para las asociaciones muchos a muchos. Al realizar un **Eager Loading**, solo se debe utilizar las tablas princpiales no la tabla puente, ejemplo:

 ```bash
const Song =  await getModel('Song');
const Band = getModel('Band')
const data = await getModel('Album').findOne({
                where: {
                    id: req.params.id
                },
                include: [{
                    model: Song
                },
                {
                 model: Band
                }
            ]
            });
```

- Las tablas intermedios de Muchos a Muchos solo se utilizan para hacer la asociación del modelo y ya

 ```bash
  //Guardamos los Modelos en la conexión y le mandamos la conexión
  models.Album = createAlbumModel(connection);
  models.Song = createSongModel(connection);
  models.AlbumSong = createAlbumSongModel(connection, models.Album, models.Song);

  // Síncronizamos las relaciones
  models.Album.belongsToMany(models.Song, { through: models.AlbumSong }); //N-M 
  models.Song.belongsToMany(models.Album, { through: models.AlbumSong }); //M-N 
```


## Antes de correr la app/api necesitas:

 - Debes tener operando el **XAMPP**
 - Correr las queries de creación de las tablas **"album", "song", "artist".**
 - Correr la app/api en la carpeta principal, con el siguiente comando:

 ```bash
  npm run dev 
```

