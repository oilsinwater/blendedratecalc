import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';


const EnterFund = props => {

  const initialFormState = {
    id: null,
    name: '',
    amount: 0,
    rate: 0,
    returning: 0,
    element: ''
  };


  const [fund, setFund] = useState(initialFormState);

  const handleInputChange = event => {
    // creates function to update the state within the forms
    const { name, value } = event.target
    // even always passed through to any 'on' event in the DOM

    setFund({ ...fund, [name]: value })
    // using computed property names to dynamically set the name (using [name]) and value
  }

  return (
    <Form onSubmit={event => {
      event.preventDefault()
      // prevents default form submission from firing
      if (!fund.name || !fund.amount || !fund.element) return
      // validation to make sure empty values cannot be submitted   

      props.addFund(fund)
      //sends user through the addUser function
      setFund(initialFormState)
      // setter to reset form to initial value after successful submission
    }}>
      <Form.Row>
        <Col>
          <Form.Label column>Name</Form.Label>
          <Form.Control name="name" type="text" value={fund.name} onChange={handleInputChange} />
        </Col>
        <Col>
          <Form.Label column>Amount</Form.Label>
          <Form.Control name="amount" type="text" value={fund.amount} onChange={handleInputChange} />
        </Col>
        <Col>
          <Form.Label column>Rate</Form.Label>
          <Form.Control name="rate" type="text" value={fund.rate} onChange={handleInputChange} />
        </Col>
        <Col>
          <Form.Label column>Element</Form.Label>
          <Form.Control name="element" required as="select" value={fund.element} onChange={handleInputChange}>
            <option>(choose)</option>
            <option>GRANT</option>
            <option>MRI</option>
            <option>PRI</option>
          </Form.Control>
        </Col>
        <Col>
          <Button type="submit">Submit</Button>
        </Col>
      </Form.Row>
    </Form>
  );
}


export default EnterFund;
