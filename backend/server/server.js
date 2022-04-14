require('dotenv').config();
const config = require("./config");
const express = require('express');
const cors = require('cors')
const fetch = require('node-fetch');
const app = express();
app.use(cors());


app.get('/api/characters', (req, res) => {
    const url = 'https://rickandmortyapi.com/api/character';
    fetch(url)
    .then(res => res.json())
    .then(data => res.send({data}))
    .catch(err => res.send(err))
});

const serverStart = async () => {
   // await db.connect();
    app.listen(config.PORT, () => {
      console.log(`HEY!:) Server listening on http://localhost:${config.PORT}`);
    });
}
  
serverStart();