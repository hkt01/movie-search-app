const express = require('express');
const router = require('express-promise-router')();

const MoviesController = require('../controllers/movies');
const moviesCtrl = new MoviesController();

router.route('/')
  .get(moviesCtrl.getMovies);

router.route('/:id')
  .get(moviesCtrl.getMovieById);

/**
 * Normally for a REST API this would also include routes:
 * POST /
 * PUT, PATCH and DELETE /:id
 *
 */

module.exports = router;
