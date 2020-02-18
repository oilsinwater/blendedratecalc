import React, { Component } from 'react';
import { Container, Col, Form, Row } from 'react-bootstrap';

export class Entry extends Component {
  render() {
    return (
      <div style={{ display: 'block', paddingLeft: '250px' }}>
          <Form inline>
            <Form.Row>
            <Col>
                <Form.Label column>Tag</Form.Label>
                <Form.Control type='textarea' placeholder='Tag' />
              </Col>
              <Col>
                <Form.Label column>Amount</Form.Label>
                <Form.Control required type='textarea' placeholder='0  ' />
              </Col>
              <Col>
                <Form.Label column>Element</Form.Label>
                <Form.Control required as='select'>
                  <option>Grant</option>
                  <option>MRI</option>
                  <option>PRI</option>
                </Form.Control>
              </Col>
              </Form.Row>
          </Form>
      </div>
    );
  }
}

export default Entry;
