
const { Router } = require('express');
const { getModel } = require('../database');

function createAlbumRouter(params) {


    const router = new Router();

    router.get('/albums/', async (req, resp) => {
        try {
            const data = await getModel('Album').findAll();
            resp.status(200).send(data);
        } catch (error) {
            resp.status(500).send({message: error.message});
        }
    });

    router.get('/albums/:id', async (req, resp) => {
        try {

            //Cuando se hace el include no se debe asociar
            //la table puente "album_song" si no la 2 tablas directas
            //que seria la Album y la Song
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
            if (data) {
                resp.status(200).send(data);
            } else {
                resp.status(404).send(`Album with ID ${req.params.id} does not exists.`);
            }
        } catch (error) {
            resp.status(500).send({message: error.message});
        }
    });

    router.post('/albums/', async (req, resp) => {
        const Album = getModel('Album');
        const data = new Album(req.body);
        const saved = await data.save()
        resp.status(201).send(saved);
    });


    router.put('/albums/', (req, resp) => {
        // TODO: load albums info here
    });
    router.delete('/albums/', (req, resp) => {
        // TODO: load albums info here
    });
    return router;
}

module.exports = {
    createAlbumRouter
}
