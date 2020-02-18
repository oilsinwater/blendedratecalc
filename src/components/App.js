import React from 'react';
import Header from './Header';
import BlendView from './BlendView';
import TotalAmt from './TotalAmt';
import CapitalTable from './CapitalTable';
import Entry from './Entry';
import Key from './Key';
import Footer from './Footer';
import { Container, Col, Row } from 'react-bootstrap';

const App = () => {
  return (
    <Container>
      <Header />
      <Row>
        <Col>
          <BlendView />
        </Col>
      </Row>
      <Row>
      <Col>
          <TotalAmt />
      </Col>
      </Row>
      <Row>
        <Col>
          <CapitalTable />
        </Col>
      </Row>
      <Row>
        <Col>
          <Entry />
        </Col>
      </Row>
      <Row>
        <Col>
          <Key />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default App;
