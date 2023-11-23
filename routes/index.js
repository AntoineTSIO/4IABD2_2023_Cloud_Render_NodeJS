const express = require('express')
const router = express.Router()
const db = require('./db');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    content: 'Welcome to the home page!',
  })
})

module.exports = router
