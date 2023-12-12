import { Card, Col, Container, Row } from 'react-bootstrap';
import {
  AutoForm, SubmitField, LongTextField, TextField,
} from 'uniforms-bootstrap5';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import swal from 'sweetalert';
import SimpleSchema from 'simpl-schema';
import { Meetings } from '../../api/meeting/Meetings';

const formSchema = new SimpleSchema({
  courseCode: String,
  location: String,
  sessionYear: String,
  sessionMonth: String,
  sessionDay: String,
  sessionTime: String,
  description: String,
  owner: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);
const CreateMeeting = () => {
/* Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  const submit = (data, formRef) => {
    let insertError;
    const owner = Meteor.user().username;
    const {
      courseCode, location, sessionYear, sessionMonth, sessionDay, sessionTime, description,
    } = data;
    Meetings.collection.insert(
      {
        courseCode, location, sessionYear, sessionMonth, sessionDay, sessionTime, description, owner,
      },
      (error) => { insertError = error; },
    );
    if (insertError) {
      swal('Error', insertError.message, 'error');
    } else {
      swal('Success', 'The meeting was created.', 'success');
      formRef.reset();
    }
  };
  let fRef = null;
  return (
    <Container id="create-meeting-page">
      <Row className="justify-content-center">
        <Col>
          <h2 className="text-center">Create Meeting</h2>
          <AutoForm ref={(ref) => { fRef = ref; }} schema={bridge} onSubmit={(data) => submit(data, fRef)}>
            <Card className="p-2">
              <Row>
                <Col><TextField name="courseCode" showInlineError placeholder="Classes" /></Col>
                <Col><TextField name="location" showInlineError placeholder="Location" /></Col>
              </Row>
              <Row>
                <Col><TextField name="sessionYear" showInlineError placeholder="Schedule the Meeting (Year)" /></Col>
                <Col><TextField name="sessionMonth" showInlineError placeholder="Month" /></Col>
                <Col><TextField name="sessionDay" showInlineError placeholder="Day" /></Col>
                <Col><TextField name="sessionTime" showInlineError placeholder="Time" /></Col>
              </Row>
              <Row>
                <Col><LongTextField name="description" showInlineError placeholder="Description" /></Col>
                <SubmitField value="Submit" />
              </Row>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateMeeting;
