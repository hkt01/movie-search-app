import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ResultItem(props) {
  const {movie} = props;
  return (
    <Row className="movieRow">
      <Col className="col-4">
        <img src={movie.Poster} alt={movie.Title} />
      </Col>
      <Col>
        <h4>{movie.Title}</h4>
        <span>{movie.Year}</span>
        <Link to={'/movie/'+movie.imdbID} className="block">See details and reviews</Link>
      </Col>
    </Row>
  );
};

ResultItem.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string,
    Year: PropTypes.number,
    imdbID: PropTypes.string,
    Poster: PropTypes.string
  })
}
