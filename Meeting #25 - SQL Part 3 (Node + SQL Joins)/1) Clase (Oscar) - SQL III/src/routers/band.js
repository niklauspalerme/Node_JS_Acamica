
const { Router } = require('express');
const { getModel } = require('../database');

function createBandRouter(params) {
    const router = new Router();

    router.get('/bands/', async (req, resp) => {
        try {
            const data = await getModel('Band').findAll();
            resp.status(200).send(data);
        } catch (error) {
            resp.status(500).send({message: error.message});
        }
    });

    router.get('/bands/:id', async (req, resp) => {
        try {
            const Album = await getModel('Album');
            const data = await getModel('Band').findOne({
                where: {
                    id: req.params.id
                },
                include: Album
            });
            if (data) {
                resp.status(200).send(data);
            } else {
                resp.status(404).send(`Band with ID ${req.params.id} does not exists.`);
            }
        } catch (error) {
            resp.status(500).send({message: error.message});
        }
    });
    router.post('/bands/', async (req, resp) => {
        const Band = getModel('Band');
        const data = new Band(req.body);
        const saved = await data.save()
        resp.status(201).send(saved);
    });
    router.put('/bands/', (req, resp) => {
        // TODO: load bands info here
    });
    router.delete('/bands/', (req, resp) => {
        // TODO: load bands info here
    });
    return router;
}

module.exports = {
    createBandRouter
}
