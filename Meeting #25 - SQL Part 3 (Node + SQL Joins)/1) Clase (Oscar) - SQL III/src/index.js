const express = require('express');
const { config } = require('dotenv');
const { connect } = require('./database/index.js');
const { createBandRouter } = require('./routers/band.js');
const { createAlbumRouter } = require('./routers/album.js');
const { createSongRouter } = require('./routers/song.js');

async function main() {
    config();
    const PORT = process.env.PORT || 3000;
    const server = express();
    server.use(express.json());
    server.use(express.urlencoded({extended: false}));

    const {
        DB_USERNAME,
        DB_PASSWORD,
        DB_NAME,
        DB_PORT,
        DB_HOST,
    } = process.env;
    const isDBOk = await connect(DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME);
    if (isDBOk) {
        server.use('/api/v1/', createBandRouter());
        server.use('/api/v1/', createAlbumRouter());
        server.use('/api/v1/', createSongRouter());
        server.listen(PORT, () => {
            console.log('Server is running...');
        });
    } else {
        console.log('Failure loading DB');
    }
}

main();

