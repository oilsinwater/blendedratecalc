import React, { Component } from 'react';
import { Card, Container } from 'react-bootstrap';

export class DisplayKey extends Component {
  render() {
    return (
      <Container>
        <Card>
          <Card.Body>
          Keys
          </Card.Body>
        </Card>
      </Container>
    )
  }
}

export default DisplayKey;
