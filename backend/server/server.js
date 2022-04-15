require('dotenv').config();
const config = require("./config");
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const fetch = require('node-fetch');
const db = require('./common/db');
const { errorHandler } = require('./common/errors');

const app = express();
app.use(helmet()); //loader protection res http 
app.use(cors());
app.use(morgan('dev'));
app.use(express.json()); //Middleware to get body's parsed as json

/*
 * Serve the Frontend
 */
app.use(express.static('../../client/dist'));


/*
 * Routes 
 */
app.get('/api', async (req, res) => {
    res.status(200).send('RickAndMorty API');
});

/* Characters from external API - Rick and morty */
app.get('/api/characters', (req, res) => {
    const url = 'https://rickandmortyapi.com/api/character';
    fetch(url)
    .then(res => res.json())
    .then(data => res.send({data}))
    .catch(err => res.send(err))
});

/* Users routes - register login  */
require('./users/users.routes').addRoutes(app);



app.use(errorHandler);

/*
 * Start the server after connecting to the db
 */
const serverStart = async () => {
    await db.connect();
    app.listen(config.PORT, () => {
      console.log(`HEY!:) Server listening on http://localhost:${config.PORT}`);
    });
}
  
serverStart();