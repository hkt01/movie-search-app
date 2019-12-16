import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

import Spinner from '../components/Spinner/Spinner';
import Review from '../components/Review/Review';

function Movie(props) {

  // Set state
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [loadError, setLoadingError] = useState(null);

  let history = useHistory();

  useEffect(() => {


    // Get imdbID from url params
    const { title } = props.match.params;

    // No movie defined, return to frontpage
    if(!title) {
      history.push('/');
      return null;
    }

    function getMovie(title) {
      // Fetch movie data
      fetch(process.env.REACT_APP_API_URL+'/movies/'+title)
        .then(response => response.json())
        .then(result => {
          getreview(result.Title);
          setMovie(result);
          setLoading(false);
        })
        .catch(e => {
          console.log(e);
          setLoading(false);
          setLoadingError(JSON.stringify(e));
        });
    }

    function getreview(title) {
      // Fetch reviews for movie
      fetch(process.env.REACT_APP_API_URL+'/reviews?search='+title)
        .then(response => response.json())
        .then(result => {
            setReviews(result.results);
            setLoadingReviews(false);
        })
        .catch(e => {
            console.log(e);
            setLoadingReviews(false);
            setLoadingError(JSON.stringify(e));
        });
    }

    getMovie(title);

  }, [props, history]);

  return (
    <Container className="movieContainer">
      { movie &&
        <Row>
          <Col className="col-4">
            <img src={movie.Poster} alt={movie.Title} />
          </Col>
          <Col>
            <h3>{movie.Title}</h3>
            <span>{movie.Year}</span>
            <p>{movie.Plot}</p>

            { reviews &&
              <>
                <h4>Reviews:</h4>
                { reviews.length > 0 && reviews.map((review, index) => (
                  <Review review={review} key={index} />
                ))}

                { reviews.length === 0 &&
                  <Row className="reviewRow"><span>No reviews found!</span></Row>
                }
              </>
            }
            { loadingReviews &&
              <Spinner />
            }
          </Col>
        </Row>
      }

      { loading &&
        <Spinner />
      }

      { loadError &&
        <Alert variant="danger">{loadError}</Alert>
      }

    </Container>
  );
}

// URL parameters received as props
Movie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape
  })
}

export default Movie;
