const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./movieDB.db', (err) => {
  if (err) {
    return console.error("Error opening database! ", err.message)
  }else{
    console.log("Successfully connected to the database!");
    db.run(`CREATE TABLE IF NOT EXISTS movies (id INTEGER PRIMARY KEY AUTOINCREMENT, 
      movie_name TEXT, 
      movie_genre TEXT, 
      movie_duration TIME, 
      movie_description TEXT)` ,(err) => {
      if (err) {
        return console.error("Error creating table! ", err.message)
      }else{
        console.log("Table created successfully");
      }
    })
  }
});

module.exports = db;