require('dotenv').config()
const mongoose = require('mongoose')

// dotenv
const DBUSER = process.env.DB_USER
const DBPASS = process.env.DB_PASS 

// Conexão é feita aqui
mongoose.set('strictQuery', false)
const db = mongoose.connect(`mongodb+srv://${DBUSER}:${DBPASS}@cluster0.zlwiosp.mongodb.net/?retryWrites=true&w=majority`)

module.exports = db