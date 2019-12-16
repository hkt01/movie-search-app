import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Review(props) {
  const {review} = props;
  return (
    <Row className="reviewRow">
      { review.multimedia &&
        <Col className="col-4">
          <img src={review.multimedia.src} alt={review.multimedia.type} />
        </Col>
      }
      <Col>
        <h4>{review.headline}</h4>
        <span className="author">By {review.byline}</span><span>{review.publication_date}</span>
        <p>{review.summary_short}</p>
        <a href={review.link.url} target="_blank" rel="noopener noreferrer">{review.link.suggested_link_text}</a>
      </Col>
    </Row>
  );
};
