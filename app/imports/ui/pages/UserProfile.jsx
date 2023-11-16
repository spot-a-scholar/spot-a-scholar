import { Card, Col, Container, Row } from 'react-bootstrap';
import {
  AutoForm, TextField, SubmitField,
} from 'uniforms-bootstrap5';
import React from 'react';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { UserInfoSchema as formSchema } from '../forms/UserInfo';
import { UserData } from '../../api/user/Users';

const bridge = new SimpleSchema2Bridge(formSchema);
// temp function before submit function and collection is added
const CreateProfile = () => {

  /* On submit, try to insert the data. If successful, reset the form. */
  const submit = (data, formRef) => {
    let insertError;
    const {
      name, profilePicture, scholarClasses, studentClasses,
    } = data;
    UserData.insert(
      {
        name, profilePicture, scholarClasses, studentClasses,
      },
      (error) => { insertError = error; },
    );
    if (insertError) {
      swal('Error', insertError.message, 'error');
    } else {
      swal('Success', 'The profile was updated.', 'success');
      formRef.reset();
    }
  };
  // const submit = (data, formRef) => data + formRef;
  // const UserProfile = () => {
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
                <Col><TextField name="profilePicture" showInlineError placeholder="Upload a Profile Picture" /></Col>
              </Row>
              <Row>
                <Col><TextField name="scholarClasses" showInlineError placeholder="List classes you are willing to tutor" /></Col>
                <Col><TextField name="studentClasses" showInlineError placeholder="List classes that you need tutoring in" /></Col>
                <SubmitField value="Submit" />
              </Row>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateProfile;
