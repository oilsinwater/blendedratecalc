import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class CapitalTable extends Component {
  render() {
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>Tag</th>
            <th>Amount</th>
            <th>Rate</th>
            <th>Return</th>
            <th>Element</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </Table>
    )
  }
}

export default CapitalTable
