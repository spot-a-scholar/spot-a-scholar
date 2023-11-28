import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Home = () => (
  <Container className="grad-background">
    <Row className="py-5">
      <Col className="text-center">
        <h1 className="white-text">Home</h1>
      </Col>
    </Row>
    <Row className="d-flex justify-content-center">
      <Button
        as={NavLink}
        to="/createmeeting"
        key="createmeeting"
        className="w-75"
        style={{
          height: '250px',
          fontSize: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Create Meeting
      </Button>
    </Row>
    <Row className="d-flex justify-content-center pt-5">
      <Button
        as={NavLink}
        to="/class"
        key="class"
        className="w-50"
        style={{
          height: '150px',
          fontSize: '25px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Join Meeting
      </Button>
    </Row>
  </Container>
);

export default Home;
