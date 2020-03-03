import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container, Col, Row } from 'react-bootstrap';
import BlendView from './BlendView';
import CapitalTable from './CapitalTable';
import TotalAmount from './TotalAmount';
import RemoveFund from './RemoveFund';
import EnterFund from './EnterFund';
import DisplayKey from './DisplayKey';

const App = () => {
  // dummy data
  const fundsData = [
    {
      id: 1,
      name: 'SF Foundation',
      amount: 50000,
      rate: 0,
      returning: -50000,
      element: 'GRANT'
    },
    {
      id: 2,
      name: 'Knight',
      amount: 100000,
      rate: 7,
      returning: 7000,
      element: 'PRI'
    },
    {
      id: 3,
      name: 'Ford',
      amount: 350000,
      rate: 11,
      returning: 38500,
      element: 'MRI'
    }
  ];


  const [funds, setFunds] = useState(fundsData);
  const [editing, setEditing] = useState(false);
  // makes state for whether or not edit mode is turned on
  const initialFormState = {
    id: null,
    name: '',
    amount: 0,
    rate: 0,
    returning: 0,
    element: ''
  };
  // creates some initial empty state for the form
  const [currentFund, setCurrentFund] = useState(initialFormState);
  // applies params to see and update current fund being edited, with empty fund applied to a currentFund state

  const sumTotal = funds
    .map(fund => {
      return parseInt(fund.amount);
    })
    .reduce((acc, currVal) => {
      return acc + currVal;
    }, 0).toFixed(2)

  const sumReturn = funds
    .map(fund => {
      return parseInt(fund.returning);
    })
    .reduce((acc, currVal) => {
      return acc + currVal;
    }, 0).toFixed(2)



  const addFund = fund => {
    fund.id = funds.length + 1;
    // "...funds" code ensures that all the previous funds remain in the array.
    setFunds([...funds, fund]);
    // completes by appending funds to the array
    fund.element !== 'GRANT' ? fund.returning = fund.amount * (fund.rate) : fund.returning = fund.amount * -1.00;
  };

  const editRow = fund => {
    setEditing(true);

    setCurrentFund({
      id: fund.id,
      name: fund.name,
      amount: fund.amount,
      rate: fund.rate,
      returning: fund.returning,
      element: fund.element
    });
  };
  const updateFund = (id, updateFund) => {
    setEditing(false);

    setFunds(funds.map(fund => (fund.id === id ? updateFund : fund)));
    // uses ternary operation to map through funds and match the id passed through
  };

  const deleteFund = id => {
    setEditing(false)
    // prevents the deletion of a Fund while its being edited

    setFunds(funds.filter(fund => fund.id !== id))
    // filters Fund out by ID
  }

  return (
    <Container>
      <Header />
      <Row>
        <Col>
          <BlendView sumTotal={sumTotal} sumReturn={sumReturn} funds={funds} />
        </Col>
      </Row>
      <Row>
        <Col>
          <TotalAmount sumTotal={sumTotal} funds={funds} />
        </Col>
      </Row>
      <Row>
        <Col>
          <CapitalTable
            funds={funds}
            editRow={editRow}
            deleteFund={deleteFund}
          />
        </Col>
      </Row>
      {editing ? (
        <Row>
          <RemoveFund
            editing={editing}
            setEditing={setEditing}
            currentFund={currentFund}
            updateFund={updateFund}
          />
        </Row>
      ) : (
          <Row>
            <EnterFund addFund={addFund} />
          </Row>
        )}

      <br></br>
      <Row>
        <Col>
          <DisplayKey />
        </Col>

      </Row>
      <Footer />
    </Container>
  );
};

export default App;
