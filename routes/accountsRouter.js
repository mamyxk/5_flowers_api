const express = require('express')
const router = express.Router()

// const { response } = require("@hapi/hapi/lib/validation");
const accounts = require('../controllers/account.controller')

router.get('/',accounts.findAll)
router.post('/create',accounts.create)

module.exports = router