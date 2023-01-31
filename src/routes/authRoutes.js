const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const { login } = authController()

router.post('/', login)

module.exports = router