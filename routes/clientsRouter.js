const express = require('express')
const router = express.Router()

// const { response } = require("@hapi/hapi/lib/validation");
const clients = require('../controllers/clientController')

router.get('/',clients.findAll)
router.post('/create',clients.create)
router.post('/login',clients.login)

module.exports = router