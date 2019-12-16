const request = require('request');

class MoviesController {
  constructor() {
    this.getMovieById = this.getMovieById.bind(this);
    this.getMovies = this.getMovies.bind(this);
  }

  /**
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @param {function} next The callback to the next program handler
   * @return {Object} res The response object
   */
  getMovieById(req, res, next) {
    const queryString = req.params.id;
    const requestSettings = {
      method: 'GET',
      url: 'http://www.omdbapi.com/?i='+queryString+'&apikey='+process.env.OMDB_KEY
    };

    request(requestSettings, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        // Parse result and just return the search array
        res.json(JSON.parse(body));
      } else {
        console.log(error);
        console.log(response);
        res.status(500).send(response);
      }
    });
  }


  /**
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @param {function} next The callback to the next program handler
   * @return {Object} res The response object
   */
  getMovies(req, res, next) {
    const queryString = req.query.search;
    const requestSettings = {
      method: 'GET',
      url: 'http://www.omdbapi.com/?s='+queryString+'&type=movie&apikey='+process.env.OMDB_KEY
    };

    request(requestSettings, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        // Parse result and just return the search array
        const result = JSON.parse(body);
        res.json((result.Search)?result.Search:[]);
      } else {
        console.log(error);
        console.log(response);
        res.status(500).send(response);
      }
    });
  }
}

module.exports = MoviesController;
