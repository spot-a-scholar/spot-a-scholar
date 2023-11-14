import { Card, Col, Container, Row } from 'react-bootstrap';
import {
  AutoForm, TextField, SubmitField,
} from 'uniforms-bootstrap5';
import React from 'react';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { UserInfoSchema as formSchema } from '../forms/UserInfo';

const bridge = new SimpleSchema2Bridge(formSchema);
const submit = (data, formRef) => data + formRef;
const UserProfile = () => {
  let fRef = null;
  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <h2 className="text-center">User Profile</h2>
          <AutoForm ref={(ref) => { fRef = ref; }} schema={bridge} onSubmit={(data) => submit(data, fRef)}>
            <Card className="p-2">
              <Row>
                <Col><TextField name="name" showInlineError placeholder="Your name" /></Col>
                <Col><TextField name="email" showInlineError placeholder="Upload a Profile Picture" /></Col>
              </Row>
              <Row>
                <Col><TextField name="bio" showInlineError placeholder="List classes you are willing to tutor" /></Col>
                <Col><TextField name="gpa" showInlineError placeholder="List classes that you need tutoring in" /></Col>
                <SubmitField value="Submit" />
              </Row>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
