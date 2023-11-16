import React from 'react';
import { Col, Container } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 bg-light">
    <Container>
      <Col className="text-center">
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
