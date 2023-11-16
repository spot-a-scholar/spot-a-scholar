import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Home = () => (
  <Container className="grad-background">
    <Row className="py-5">
      <Col className="text-center">
        <h1 className="white-text">Home</h1>
      </Col>
    </Row>
    <Row className="d-flex justify-content-center">
      <Button className="w-75" style={{ height: '250px', fontSize: '30px' }}>
        Create Meeting
      </Button>
    </Row>
    <Row className="d-flex justify-content-center pt-5">
      <Button className="w-50" style={{ height: '150px', fontSize: '25px' }}>
        Join Meeting
      </Button>
    </Row>
  </Container>
);

export default Home;
