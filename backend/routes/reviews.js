const express = require('express');
const router = require('express-promise-router')();

const ReviewsController = require('../controllers/reviews');
const reviewsCtrl = new ReviewsController();

router.route('/')
  .get(reviewsCtrl.getReviews);

/**
 * Normally for a REST API this would also include routes:
 * POST /
 * GET, PUT, PATCH and DELETE /:id
 *
 */

module.exports = router;
