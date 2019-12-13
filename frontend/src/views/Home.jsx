import React, {useState} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import ResultItem from '../components/ResultItem';

function Home() {
  // Set state
  const [movies, setMovies] = useState(null);

  // Ref to search input
  let textInput = React.createRef();

  function search(e) {
    const searchVal = textInput.current.value;
  }

  return (
    <Container className="homeContainer">
      <Row>
        <h3>What would you like to see?</h3>
      </Row>
      <Row>
        <Form>
          <Form.Group as={Row} controlId="search" className="searchRow">
            <Form.Control type="text" ref={textInput} />
            <Button varian="primary" onClick={search}>Search</Button>
          </Form.Group>
        </Form>
      </Row>
      { movies &&
        <div>
          { movies.map((movie, index) => (
            <ResultItem movie={movie}/>
          ))}
        </div>
      }
    </Container>
  );
}

export default Home;
