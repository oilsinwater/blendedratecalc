import React, { Component } from 'react';
import { Container, Navbar, } from 'react-bootstrap';


export class Footer extends Component {
  render() {
    return (
      <Container>
        <Navbar>
          <Navbar.Brand>
              <Navbar.Text>
                2020 Full Spectrum Capital Partners, LLC.
          </Navbar.Text>
      </Navbar.Brand>
        </Navbar>
      </Container>
    )
  }
}

export default Footer
