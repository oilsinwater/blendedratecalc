import React, { Component } from 'react';
import { Container, Navbar, } from 'react-bootstrap';

export class Header extends Component {
  render() {
    return (
      <Container>
        <Navbar>
          <Navbar.Brand>
            Product
      </Navbar.Brand>
        </Navbar>
      </Container>
    )
  }
}

export default Header
