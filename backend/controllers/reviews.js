const request = require('request');

class ReviewsController {
  constructor() {
    this.getReviews = this.getReviews.bind(this);
  }

  /**
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @param {function} next The callback to the next program handler
   * @return {Object} res The response object
   */
  getReviews(req, res, next) {
    const queryString = req.query.search;
    const requestSettings = {
      method: 'GET',
      url: 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='+queryString+'&api-key='+process.env.NYTIMES_KEY
    };

    request(requestSettings, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        // Parse result
        res.json(JSON.parse(body));
      } else {
        console.log(error);
        console.log(response);
        res.status(500).send(response);
      }
    });
  }
}

module.exports = ReviewsController;
