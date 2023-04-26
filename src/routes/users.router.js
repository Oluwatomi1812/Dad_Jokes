const express = require('express')
const router = express.Router()

const {jokes, jokesBySearch} = require('../controllers/users.controller')

//Jokes by Search
router.get('/joke', jokes)

router.get('/search', jokesBySearch)

module.exports = router