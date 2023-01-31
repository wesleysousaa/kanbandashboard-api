require('dotenv').config()
const jwt = require('jsonwebtoken')

// dotenv
const key = process.env.JWT_SECRET

// Middleware responsável por validar o token recebido
const guard = async (req, res, next) => {

    const token = req.headers.authorization
    if (token) {
        try {
            if (jwt.verify(token.split(' ')[1], key)) {
                return next()
            }
        } catch (error) {
            console.log(error)
        }
    }
    return res.status(401).json({ message: "Token inválido" })

}

module.exports = guard