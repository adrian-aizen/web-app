const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./movieDB.db', (err) => {
  if (err) {
    return console.error("Error opening database! ", err.message)
  }else{
    console.log("Successfully connected to the database!");
    db.run(`CREATE TABLE IF NOT EXISTS movies (movie_id INTEGER PRIMARY KEY AUTOINCREMENT, 
      movie_name TEXT, 
      movie_genre TEXT, 
      movie_duration INT, 
      movie_description TEXT)` ,(err) => {
      if (err) {
        return console.error("Error creating table! ", err.message)
      }else{
        console.log("Table created successfully");
      }
    })
  }
});

const getMovie = (callback) => {
  db.all(`SELECT * FROM movies`, [], (err, rows) => {
      if (err) {
          return callback(err);
      }
      callback(null, rows);
  });
};

const addMovie = (movie_name, movie_genre, movie_duration, movie_description, callback) => {
  const sql = `INSERT INTO movies (movie_name, movie_genre, movie_duration, movie_description) VALUES (?, ?, ?, ?)`;
  db.run(sql, [movie_name, movie_genre, movie_duration, movie_description], function(err) {
      if (err) {
          console.error("Error inserting movie: ", err.message); 
          return callback(err);
      }
      console.log("Inserted movie with ID:", this.lastID);
      callback(null, { movie_id: this.lastID, movie_name, movie_genre, movie_duration, movie_description });
  });
};

module.exports = {
  getMovie,
  addMovie
};
