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

/* Serve the Frontend */
app.use(express.static('../../client/dist'));


/* Routes */
app.get('/api', async (req, res) => {
    res.status(200).send('RickAndMorty API');
});

/* Characters from R&M API */
app.get('/api/characters', (req, resp) => {
    const url = 'https://rickandmortyapi.com/api/character';
    fetch(url)
    .then(resp => resp.json())
    .then(data => resp.send({data}))
    .catch(err => resp.send(err))
});

/* Fav characters from R&M API by id */
app.post('/api/user/favourites', (req, resp) => {
    const { id } = req.body;
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    fetch(url)
    .then(resp => resp.json())
    .then(data => resp.send({data}))
    .catch(err => resp.send(err))
});

/* Users routes - register login and favs db */
require('./users/users.routes').addRoutes(app);


app.use(errorHandler);

/* Start the server after connecting to the db */
const serverStart = async () => {
    await db.connect();
    app.listen(config.PORT, () => {
      console.log(`HEY!:) Server listening on http://localhost:${config.PORT}`);
    });
}
  
serverStart();