import React from 'react';
import { Table } from 'react-bootstrap';

const CapitalTable = props => (
  <Table responsive>
    <thead>
      <tr>
        <th>Name</th>
        <th>Amount</th>
        <th>Rate</th>
        <th>Return</th>
        <th>Element</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
      { // maps the user data sent through and their properties, or display if none
        props.funds.length > 0 ? (
          props.funds.map(fund => (
            <tr key={fund.id}>
              <td>{fund.name}</td>
              <td>{`$`}{fund.amount}</td>
              <td>{fund.element !== 'GRANT' ? fund.rate : -100 }{`%`}</td>
              <td>{`$`}{fund.element !== 'GRANT' ? fund.returning : "(" + fund.returning + ")"}</td>
              <td>{fund.element}</td>
              <td>
                <button onClick={() => {
                  props.editRow(fund)
                }
                  // adding editRow function to the button
                } className="button muted-button">Edit</button>
                <button onClick={() => props.deleteFund(fund.id)
                  // adding deleteUser function to the button
                } className="button muted-button">Delete</button>
              </td>
            </tr>
          ))
        ) : (
            <tr>
              <td colSpan={3}>No funds</td>
            </tr>
          )}
    </tbody>
  </Table>
)

export default CapitalTable
