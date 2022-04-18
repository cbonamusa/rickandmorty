/**
 * Connection to mongo
 */

const mongoose = require('mongoose');
const { DB_HOST, DB_PORT, DB_USER, DB_DATABASE, DB_PASSWORD } = require('../config')

const conexionOptions = {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true,
   useFindAndModify: false
}

/**
 * Mongoose conection function
 * @async
 * @returns db connection
 */
const connect = () => {
   mongoose.connection.on('error', (err) => {
      console.log(`CONNECTION DB ERROR ${err}`)
   });
   mongoose.connection.once('open', () => {
      console.log(`CONNECTION TO BD OK`)
   })
   mongoose.connection.once('disconnected', () => {
      console.log(`CONNECTION TO BD CLOSED`)
   })
   return mongoose.connect(
      `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}?authSource=admin`,
      conexionOptions
   )
}

module.exports = { connect }