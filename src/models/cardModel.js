const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Modelo do card com seus atributos
// OBSERVAÇÃO, como estamos ultilizando um cluster do Atlas do MongoDB não há necessidade de criar um atributo {id},
// tendo em vista que o Atlas já faz esse trabalho automaticamente.
const card = mongoose.model('card', new Schema({
    titulo: String,
    conteudo: String,
    lista: String
}))

module.exports = card