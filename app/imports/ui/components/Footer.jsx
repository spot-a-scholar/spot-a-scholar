import React from 'react';
import { Col, Container } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="footer mt-auto py-3 footer">
    <Container className="container-fluid">
      <Col className="text-center footer">
        CBAGL
        {' '}
        <br />
        CONTACT US
        {' '}
        <br />
        braydens@hawaii.edu
        {' '}
        <br />
        <a href="https://spot-a-scholar.github.io/">
          Spot-a-Scholar Home Page
        </a>
      </Col>
    </Container>
  </footer>
);

export default Footer;
