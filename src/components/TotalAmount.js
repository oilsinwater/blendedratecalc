import React from 'react';
import { Card, Container } from 'react-bootstrap';

const TotalAmount = props => (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>{'$'}
          {props.sumTotal}
          </Card.Title>
        </Card.Body>
        <Card.Footer style={{
          'fontSize': '8pt'
        }}>
          Total Capital
        </Card.Footer>
      </Card>
    </Container>
  )



export default TotalAmount;
