const express = require('express');
const app = express();
const movies = require('./movies.json');
app.disable('x-powered-by');

//Home

app.get('/', (req, res) => {
  res.send('Bienvenido a mi API de películas');
});

//Todas las películas

app.get('/movies', (req, res) => {
  res.json(movies);
});

//Película por id

app.get('/movies/:id', (req, res) => {
  const { id } = req.params;
  const movie = movies.find(movie => movie.id === id)
  if(movie) return res.json(movie);
  res.status(404).json({error: 'Película no encontrada'});
});

const PORT = process.env.PORT || 1234; 
app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});