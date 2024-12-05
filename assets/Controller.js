const item = require('./movieDB/movieDB.js'); 

// Get all items from the database
exports.getMovie = (req, res) => {
    item.getMovie((err, movies) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.json(movies);
    });
};

// Add a new item to the database
exports.addMovie = (req, res) => {
    console.log('Request body:', req.body); // Log the request body
    const { movie_name, movie_genre, movie_duration, movie_description } = req.body;

    //validation
    if (!movie_name || !movie_genre || !movie_duration || !movie_description) {
        return res.status(400).send('All fields are required.');
    }

    const duration = parseInt(movie_duration, 10);
    if (isNaN(quantityNumber)) {
        return res.status(400).send('Quantity must be a number.');
    }

    item.addMovie(movie_name, movie_genre, duration, movie_description, (err, item) => {
        if (err) {
            console.error("Error adding item:", err.message);
            return res.status(500).send(err.message);
        }
        console.log("Item added successfully:", movies); 
        res.status(201).json(movies);
    });
};