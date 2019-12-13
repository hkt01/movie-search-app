require('dotenv').config();
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = 'http://localhost:8000';
const should = chai.should();
const expect = require('chai').expect;

chai.use(chaiHttp);

describe('/movies', function() {
  it('should GET a list of movies', function(done) {
    chai.request(server)
      .get('/movies?search=interstellar')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        done();
      });
  });
});
