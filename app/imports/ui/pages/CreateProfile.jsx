import { Card, Col, Container, Row } from 'react-bootstrap';
import {
  AutoForm, TextField, SubmitField,
} from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import React from 'react';
import { UserData } from '../../api/user/Users';

const formSchema = new SimpleSchema({
  name: String,
  profilePicture: String,
  scholarClasses: String,
  studentClasses: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the Page for adding a document. */
const CreateStudent = () => {
  /* On submit, try to insert the data. If successful, reset the form. */
  const submit = (data) => {
    let insertError;
    const owner = Meteor.user().username;
    const {
      name, profilePicture, scholarClasses, studentClasses,
    } = data;
    UserData.collection.insert(
      {
        name, profilePicture, scholarClasses, studentClasses, owner,
      },
      (error) => { insertError = error; },
    );
    if (insertError) {
      swal('Error', insertError.message, 'error');
    } else {
      swal('Success', 'The student record was created.', 'success');
    }
  };

  // Put a space before the label for the Hobbies SelectField.

  /* Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  return (
    <Container id="create-profile-page">
      <Row className="justify-content-center">
        <Col>
          <h2 className="text-center">User Profile</h2>
          <AutoForm schema={bridge} onSubmit={(data) => submit(data)}>
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

export default CreateStudent;
