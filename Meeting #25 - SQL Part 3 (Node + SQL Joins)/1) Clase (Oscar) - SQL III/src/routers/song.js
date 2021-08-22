
const { Router } = require('express');
const { getModel } = require('../database');

function createSongRouter(params) {
  const router = new Router();

  router.get('/songs/', async (req, resp) => {
    try {
      const data = await getModel('Song').findAll();
      resp.status(200).send(data);
    } catch (error) {
      resp.status(500).send({ message: error.message });
    }
  });

  router.get('/songs/:id', async (req, resp) => {
    try {
      const Album = getModel('Album');
      const data = await getModel('Song').findOne({
        where: {
          id: req.params.id
        },
        include: [Album]
      });
      if (data) {
        resp.status(200).send(data);
      } else {
        resp.status(404).send(`Song with ID ${req.params.id} does not exists.`);
      }
    } catch (error) {
      resp.status(500).send({ message: error.message });
    }
  });

  router.get('/songs/:id/albums', async (req, resp) => {
    try {
      const model = getModel('Song');
      const data = await model.findOne({
        where: {
          id: req.params.id
        }
      });
      if (data) {
        const albums = await data.getAlbums()
        resp.status(200).send(albums);
      } else {
        resp.status(404).send(`Song with ID ${req.params.id} does not exists.`);
      }
    } catch (error) {
      resp.status(500).send({ message: error.message });
    }
  });

  router.post('/songs/', async (req, resp) => {
    const Album = getModel('Album');
    const Song = getModel('Song');
    const rawInfo = {
      name: req.body.name,
      description: req.body.description,
      yearOfCreation: req.body.yearOfCreation,
      length: req.body.length,
      genere: req.body.genere,
    };
    const data = new Song(rawInfo);
    await data.save();
    if (req.body.albumId) {
      const album = await Album.findOne({
        where: {
          id: req.body.albumId
        }
      })
      data.setAlbums([album]);
      await data.save();
    }
    resp.status(201).send(data);
  });
  router.put('/songs/', (req, resp) => {
    // TODO: load bands info here
  });
  router.delete('/songs/', (req, resp) => {
    // TODO: load bands info here
  });
  return router;
}

module.exports = {
  createSongRouter
}
