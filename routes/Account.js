const express = require('express')
const router = express.Router()
const accountControllers = require('../controllers/Account')

router.get('/',accountControllers.getAllAccounts)

module.exports = router