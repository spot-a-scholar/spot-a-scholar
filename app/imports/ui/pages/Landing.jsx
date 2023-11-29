import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" className="grad-background">
    {/* The landing page main text */}
    <Row className="justify-content-center pt-5">
      <Col className="text-center pt-5 pb-2">
        <h1 className="padding-class white-text">Connect, Learn, Succeed</h1>
        <h1 className="white-text">Your Academic Social Network</h1>
      </Col>
    </Row>

    {/* Login and Sign up buttons under the main text */}
    <Row className="pt-5 pb-5">
      <Col className="justify-content-end d-flex">
        <Button className="w-50" as={NavLink} to="/signin" key="signin">
          Login
        </Button>
      </Col>
      <Col>
        <Button className="w-50" as={NavLink} to="/signup" key="signun">
          Sign Up
        </Button>
      </Col>
    </Row>
  </Container>
);

export default Landing;
