require('dotenv').config()
const jwt = require('jsonwebtoken')

// dotenv
const key = process.env.JWT_SECRET
const AUTHUSER = process.env.AUTH_USER
const AUTHPASS = process.env.AUTH_PASS

const authController = () => {

    const genToken = () => {
        return jwt.sign({auth : true}, key)
    }

    const login = async (req, res) => {
        const { login, senha } = req.body

        if (login === AUTHUSER && senha === AUTHPASS) {
            return res.status(200).json({ token: genToken() })
        }

        return res.status(401).json({ message: 'Credenciais inválidas' })
    }

    return {
        login
    }
}

module.exports = authController