const Movie = require('../models/movie');

// Controller function to list movies
exports.listMovies = async (req, res) => {
  try {
    const movies = await Movie.find({}, { _id: 0, __v: 0 });
    const groupedMovies = groupByCategory(movies);
    res.json(groupedMovies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Helper function to group movies by category
function groupByCategory(movies) {
  const groupedMovies = {};
  movies.forEach((movie) => {
    movie.genres.forEach((genre) => {
      if (!groupedMovies[genre]) {
        groupedMovies[genre] = [];
      }
      groupedMovies[genre].push(movie);
    });
  });
  return Object.keys(groupedMovies).map((genre) => ({
    category: genre,
    movies: groupedMovies[genre]
  }));
};
