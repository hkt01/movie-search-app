require('dotenv').config();
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = 'http://localhost:8000';
const should = chai.should();
const expect = require('chai').expect;

chai.use(chaiHttp);

describe('/views', function() {
  it('should GET a list of movie reviews', function(done) {
    chai.request(server)
      .get('/reviews?search=interstellar')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('results');
        res.body.results.should.be.a('array');
        done();
      });
  });
});
