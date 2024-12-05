const express = require('express');
const router = express.Router();
const movieControl = require('./Controller.js');

// Route to fetch all movies
router.get('/movie', movieControl.getMovie);

// Route to add a new movies
router.post('/movie', movieControl.addMovie);

module.exports = router;