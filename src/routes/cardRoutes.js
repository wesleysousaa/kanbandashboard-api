const express = require('express')
const router = express.Router()
const cardController = require('../controllers/cardController')
const { fetchAll, create, remove, update } = cardController()
const logger = require('../middlewares/logger')

router.get('/', fetchAll)
router.post('/', create)
router.delete('/:id', remove, logger)
router.put('/:id', update, logger)

module.exports = router