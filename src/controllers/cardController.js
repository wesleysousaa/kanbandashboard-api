// Models
const cardModel = require('../models/cardModel')

// Controlador do Modelo card, aqui acontecem as operações no banco
const cardController = () => {

    // Busca todas as ocorrências
    const fetchAll = async (req, res) => {
        const response = await cardModel.find()
        return res.status(200).json(response)
    }

    // Cria um novo card
    const create = async (req, res) => {

        const { titulo, conteudo, lista } = req.body

        if (titulo && conteudo && lista) {
            if (titulo.trim().length > 0 && conteudo.trim().length > 0 && lista.trim().length > 0) {
                try {
                    const response = await cardModel.create({ titulo, conteudo, lista })
                    return res.status(200).json(response)
                } catch (error) {
                    return res.status(400).json({ message: error })
                }
            }
        }
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' })

    }

    // Remove um card pelo ID
    const remove = async (req, res, next) => {
        const { id } = req.params
        try {
            req.card = await cardModel.findOne({ _id: id })
            const { deletedCount } = await cardModel.deleteOne({ _id: id })
            if (deletedCount === 0) {
                return res.status(404).json({ message: "_id não encontrado" })
            }
            req.cards = await cardModel.find()
            next()
        } catch (error) {
            return res.status(400).json({ message: error })
        }
    }

    // Atualiza os campos de um Card
    const update = async (req, res, next) => {
        const { id } = req.params
        const { titulo, conteudo, lista } = req.body

        try {
            await cardModel.updateOne({ _id: id }, { titulo, conteudo, lista })

            req.cards = await cardModel.find()
            req.card = await cardModel.findOne({ _id: id })
            return next()

        } catch (error) {
            console.log(error);
        }
        return res.status(404).json({ message: 'Id inválido' })
    }

    return {
        fetchAll,
        create,
        remove,
        update
    }
}

module.exports = cardController