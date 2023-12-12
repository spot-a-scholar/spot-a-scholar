// this one is outdated and needs to be fixed
import { Card, Col, Container, Row } from 'react-bootstrap';
import {
  AutoForm, TextField, SubmitField,
} from 'uniforms-bootstrap5';
import React from 'react';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Student } from '../../api/student/Student';
import swal from 'sweetalert';
import Meteor from 'meteor/meteor';
import { UserData } from '../../api/user/Users';

const formSchema = new SimpleSchema({
  firstName: String,
  lastName: String,
  username: String,
  profilePicture: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);
// temp function before submit function and collection is added
const UserProfile = () => {
  const submit = (data, formRef) => {
    const { firstName, lastName, username, profilePicture } = data;
    const owner = Meteor.user().username;
    Student.collection.insert(
      { firstName, lastName, username, profilePicture },
      (error) => {
        if (error) {
          console.log('Data inserted NOT successfully:');
          swal('Error', error.message, 'error');
        } else {
          console.log('Data inserted successfully:', result);
          swal('Success', 'Profiled added', 'success');
          formRef.reset();
        }
      }
    )
  }

  let fRef = null;

  const formSchema = new SimpleSchema({
    name: String,
    profilePicture: String,
    scholarClasses: String,
    studentClasses: String,
  });

  const bridge = new SimpleSchema2Bridge(formSchema);
  const CreateProfile = () => {
    /* On submit, try to insert the data. If successful, reset the form. */
    const submit = (data) => {
      let insertError;
      const {
        name, profilePicture, scholarClasses, studentClasses,
      } = data;
      const owner = Meteor.user().username;
      // const id = Meteor.user()._id;
      UserData.collection.insert(
        {
          name, profilePicture, scholarClasses, studentClasses, owner,
        },
        (error) => { insertError = error; },
      );
      if (insertError) {
        swal('Error', insertError.message, 'error');
      } else {
        swal('Success', 'The profile was updated.', 'success');
      }
    };
    // const submit = (data, formRef) => data + formRef;
    // const UserProfile = () => {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col>
            <h2 className="text-center">User Profile</h2>
            <AutoForm schema={bridge} onSubmit={(data) => submit(data)}>
              <Card className="p-2">
                <Row>
                  <Col><TextField name="firstName" showInlineError placeholder="Your first name"/></Col>
                  <Col><TextField name="lastName" showInlineError placeholder="Your last name"/></Col>
                </Row>
                <Row>
                  <Col><TextField name="username" showInlineError placeholder="Your username"/></Col>
                  <Col><TextField name="profilePicture" showInlineError placeholder="Upload a profile picture"/></Col>
                  <SubmitField value="Submit"/>
                </Row>
              </Card>
            </AutoForm>
          </Col>
        </Row>
      </Container>
    );
  };

  export default CreateProfile;
