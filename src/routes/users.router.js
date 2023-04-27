const express = require('express')
const router = express.Router()

const {jokes} = require('../controllers/users.controller')

router.get('/joke', jokes) 

module.exports = router