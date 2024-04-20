// models/movie.js
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  director: String,
  imdb_rating: Number,
  length: String,
  poster: String,
  genres: [String],
  slug: {
    type: String,
    unique: true
  }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
