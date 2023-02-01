require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./db/config')
const port = process.env.PORT || 5000
const routes = require('./routes/routes')
const cors = require('cors')

app.use(cors())

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.use(routes)


try {
    app.connect(db)
    app.listen(port, () => console.log(`Sucesso ao iniciar o server`))
} catch (error) {
    console.log(error)
}
