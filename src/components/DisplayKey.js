import React, { Component } from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';

export class DisplayKey extends Component {
  render() {
    return (
      <Container>
      <Row>
      <Col>
      </Col>
      <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Title style={{ padding: "10px" }}>
                <br></br>
                The Key
        </Card.Title>
              <Card.Subtitle className="mb-2 text-muted" style={{ padding: "10px" }}>5 Primary Elements:</Card.Subtitle>
              <ListGroup>
                <ListGroup.Item>Grants| Gifts</ListGroup.Item>
                <ListGroup.Item>Loans</ListGroup.Item>
                <ListGroup.Item>Equity</ListGroup.Item>
                <ListGroup.Item>Community Capital</ListGroup.Item>
                <ListGroup.Item>Land | Building</ListGroup.Item>
              </ListGroup>
            </Card>
      </Col>
      <Col></Col>
      </Row>
       
      </Container>
    )
  }
}

export default DisplayKey;
