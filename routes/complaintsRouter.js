const express = require('express')
const router = express.Router()

// const { response } = require("@hapi/hapi/lib/validation");
const complaints = require('../controllers/complaintController')

router.get('/',complaints.findAll)
router.post('/create',complaints.create)
router.post('/change_status',complaints.changeStatus)

module.exports = router