const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'movies_db'
  },
  console.log(`Connected to the movies_db database.`)
);

//GET route for api/favoriteBooks

app.get('/api/movies',(req,res) =>
{
  db.query('SELECT * FROM movies',function (err,results)
  {
    console.log(results);
    res.json(results)
  });
})
app.post('/api/add-movie',(req,res) =>
{
  const { id,name } = req.body;

  // If all the required properties are present
  if (req.body) {
    console.log(req.body)
    db.query(`INSERT INTO movies (id, name) VALUES (?, ?)`, [id, name])
    const response = "Movie Added"

    console.log(response);
    res.json(response);
  } else {
    res.json('Error in adding movie');
  }

})

// app.put('/api/update-review',(req,res) =>
// {

// })
// app.get('/api/movie/:id',(req,res) =>
// {

// })



app.use((req,res) =>
{
  res.status(404).end();
});

app.listen(PORT,() =>
{
  console.log(`Server running on port ${PORT}`);
});
