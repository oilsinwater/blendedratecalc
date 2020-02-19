import React from 'react';
import { Card, Container } from 'react-bootstrap';

const BlendView = props => (
      <Container>
        <Card>
          <Card.Body>
            <Card.Title> {((props.sumReturn / props.sumTotal).toFixed(2))}{`%`}
            </Card.Title>
          </Card.Body>
          <Card.Footer style={{
            'fontSize': '8pt'
          }}>
            Blended Rate
        </Card.Footer>
        </Card>
      </Container>
    )


export default BlendView
