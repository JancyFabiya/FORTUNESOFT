// routes/movieRoutes.js
const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

// Route to list movies
router.get('/', authenticateToken, movieController.listMovies);

// Authentication middleware
function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];
  if (token && token === 'Bearer FSMovies2023') {
    next();
  } else {
    res.sendStatus(403);
  }
}

module.exports = router;
