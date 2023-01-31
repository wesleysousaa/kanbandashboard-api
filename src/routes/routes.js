const cardRoutes = require('./cardRoutes')
const authRoutes = require('./authRoutes')
const guard = require('../middlewares/guard')

const express = require('express')
const router = express()

router.use('/login', authRoutes)
router.use('/cards', guard, cardRoutes)

module.exports = router
