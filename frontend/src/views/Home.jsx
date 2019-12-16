import React, {useState} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import ResultItem from '../components/ResultItem/ResultItem';
import Spinner from '../components/Spinner/Spinner';

function Home() {
  // Set state
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadingError] = useState(null);

  // Ref to search input
  let textInput = React.createRef();

  function search(e) {
    e.preventDefault();
    const searchVal = textInput.current.value;
    searchMovies(searchVal);
  }

  function searchMovies(val){
        setLoading(true);

        fetch(process.env.REACT_APP_API_URL+'/movies?search='+val)
            .then(response => response.json())
            .then(result => {
                setMovies(result);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
                setLoading(false);
                setLoadingError(JSON.stringify(e));
            });
    };

  return (

    <Container className="homeContainer">
      <Row>
        <h3>What would you like to see?</h3>
      </Row>
      <Row>
        <Form onSubmit={search}>
          <Form.Group as={Row} controlId="search" className="searchRow">
            <Form.Control type="text" ref={textInput} />
            <Button type="submit" varian="primary" onClick={search}>Search</Button>
          </Form.Group>
        </Form>
      </Row>
      { movies &&
        <div className="searchResults">
          { movies.length > 0 ?
            (movies.map((movie, index) => (
            <ResultItem movie={movie} key={index}/>
          ))) :
          (<Alert variant="warning">No movies found with that query! Maybe try something different?</Alert>)
        }
        </div>
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

export default Home;
