const express = require('express')
const router = express.Router()
const db = require('./db');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    content: 'Welcome to the home page!',
  })
})

// Get DB page
router.get('/db', function (req, res, next) {
  // Utilisez les fonctions ou données de db.js selon vos besoins
  res.send('Access to db.js');
});

module.exports = router
