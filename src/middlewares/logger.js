// Log com informações da ultima requisição feita
const logger = async (req, res) => {
    const card = req.card
    const method = req.method

    const data = new Date(Date.now())
    const formatedData = `${data.toLocaleDateString()} ${data.toTimeString().split(' ')[0]}`

    console.log(`${formatedData} - Card ${card.id} - ${card.titulo} - ${method === "DELETE" ? "Removido" : "Editado"}`)

    res.status(200).json({ cards: req.cards })
}

module.exports = logger