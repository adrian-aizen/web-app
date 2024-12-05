const movie = require('./movieDB/movieDB.js'); 

exports.getMovie = (req, res) => {
    movie.getMovie((err, movies) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.json(movies);
    });
};


exports.addMovie = (req, res) => {
    console.log('Request body:', req.body); 
    const { movie_name, movie_genre, movie_duration, movie_description } = req.body;

    if (!movie_name || !movie_genre || !movie_duration || !movie_description) {
        return res.status(400).send('All fields are required.');
    }

    const duration = parseInt(movie_duration, 10);
    if (isNaN(movie_duration)) {
        return res.status(400).send('Duration must be a number.');
    }

    movie.addMovie(movie_name, movie_genre, duration, movie_description, (err, item) => {
        if (err) {
            console.error("Error adding movie:", err.message);
            return res.status(500).send(err.message);
        }
        console.log("Movie added successfully:", movies); 
        res.status(201).json(movies);
    });
};