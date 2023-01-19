const express = require('express')
const router = express.Router()

// const { response } = require("@hapi/hapi/lib/validation");
const products = require('../controllers/productsController')

router.get('/',products.findAll)

module.exports = router