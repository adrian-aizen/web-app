const express = require('express');
const router = express.Router();
const movieControl = require('./Controller.js');

// Route to fetch all movies
router.get('/', movieControl.getMovie);

// Route to add a new movies
router.post('/', movieControl.addMovie);

module.exports = router;