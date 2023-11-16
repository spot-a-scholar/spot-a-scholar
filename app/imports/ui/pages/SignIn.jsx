import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Alert, Button, Card, Col, Container, Row, } from 'react-bootstrap';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-bootstrap5';

/**
 * Signin page overrides the form’s submit event and call Meteor’s loginWithPassword().
 * Authentication errors modify the component’s state to be displayed
 */
const SignIn = () => {
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState(false);
  const schema = new SimpleSchema({
    email: String,
    password: String,
  });
  const bridge = new SimpleSchema2Bridge(schema);

  // Handle Signin submission using Meteor's account mechanism.
  const submit = (doc) => {
    // console.log('submit', doc, redirect);
    const { email, password } = doc;
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        setError(err.reason);
      } else {
        setRedirect(true);
      }
    });
    // console.log('submit2', email, password, error, redirect);
  };

  // Render the signin form.
  // console.log('render', error, redirect);
  // if correct authentication, redirect to page instead of login screen
  if (redirect) {
    return (<Navigate to="/" />);
  }
  // Otherwise return the Login form.
  return (
    <Container id="signin-page" className="py-lg-5">
      <Row className="justify-content-center">
        <Col className="square border rounded-5" xs={6}>
          <Col className="text-center">
            <h2 className="pt-5">Welcome Back</h2>
            <h2 className="p-5">Become an Academic Weapon</h2>
          </Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)}>
            <TextField id="signin-form-email" name="email" placeholder="E-mail address" />
            <TextField id="signin-form-password" name="password" placeholder="Password" type="password" />
            <ErrorsField />
            <Row className="pb-lg-5">
              <Col><Link to="/signup">Don't have an account?</Link></Col>
              <Col xs lg="2"><Button type="submit" value="Submit" id="signin-form-submit">Submit</Button></Col>
            </Row>
          </AutoForm>
          {error === '' ? (
            ''
          ) : (
            <Alert variant="danger">
              <Alert.Heading>Login was not successful</Alert.Heading>
              {error}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
