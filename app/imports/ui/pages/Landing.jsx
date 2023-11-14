import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container className="grad-background">
    {/* The landing page main text */}
    <Row className="justify-content-center pt-5">
      <Col className="text-center">
        <h1 className="padding-class white-text">Line 1</h1>
        <h1 className="white-text">Line 2</h1>
        <h1 className="white-text">Line 3</h1>
        <h1 className="white-text">Line 4</h1>
      </Col>
    </Row>

    {/* Login and Sign up buttons under the main text */}
    <Row className="pt-5 pb-5">
      <Col className="justify-content-end d-flex">
        <Button className="w-50">
          Login
        </Button>
      </Col>
      <Col>
        <Button className="w-50">
          Sign Up
        </Button>
      </Col>
    </Row>

    {/* Some Image like "OVER $1000 DOLLARS GIVEN AWAY */}
    <Row className="pt-5">
      <Col className="text-center justify-content-center">
        <Image src="images/landing.jpg" />
      </Col>
    </Row>
  </Container>
);

export default Landing;
