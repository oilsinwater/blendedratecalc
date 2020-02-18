import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';


const RemoveFund = props => {

  const [fund, setFund] = useState(props.currentFund);

  const handleInputChange = event => {
    // creates function to update the state within the form
    const { name, value } = event.target
    // even always passed through to any 'on' event in the DOM

    setFund({ ...fund, [name]: value })
    // using computed property names to dynamically set the name (using [name]) and value
  }

  useEffect(() => {
    setFund(props.currentFund)
  }, [props]
    // using "[props]" array is similar to using componentDidUpdate.
    // callback function that updates the user state with the new prop that is being sent through
  )


  return (
    <Container>
      <Form inline onSubmit={event => {
        event.preventDefault()

        props.updateFund(fund.id, fund)

      }}>
        <Form.Row>
          <Col>
            <Form.Label column>name</Form.Label>
            <Form.Control name="name" type='text' value={fund.name} onChange={handleInputChange} />
          </Col>
          <Col>
            <Form.Label column>Amount</Form.Label>
            <Form.Control name="amount" type="text" value={fund.amount} onChange={handleInputChange} />
          </Col>
          <Col>
            <Form.Label column>Element</Form.Label>
            <Form.Control name="element" required as='select' value={fund.element} onChange={handleInputChange}>
              <option>Grant</option>
              <option>MRI</option>
              <option>PRI</option>
            </Form.Control>
          </Col>
          <Col>
            <Button type="submit">Update fund</Button>
            <Button onClick={() => props.setEditing(false)} className="button muted-button">Cancel</Button>
          </Col>
        </Form.Row>
      </Form>

    </Container>
  );
}


export default RemoveFund;
