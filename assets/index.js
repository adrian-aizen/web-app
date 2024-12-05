const express = require('express');
const path = require('path');
const cors = require('cors'); 
const movieRoutes = require('./Route');

const app = express();
const port = process.env.PORT || 3000;


app.use(cors()); 

// Middleware to serve static files (e.g., HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use item routes
app.use(movieRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});