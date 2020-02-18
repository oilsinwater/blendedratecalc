import React, { Component } from 'react';
import { Card, Container } from 'react-bootstrap';

export class TotalAmt extends Component {
  render() {
    return (
      <Container>
        <Card>
          <Card.Body>$100</Card.Body>
        </Card>
      </Container>
    );
  }
}

export default TotalAmt;
