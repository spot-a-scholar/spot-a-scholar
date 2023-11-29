import { Card, Col, Container, Row } from 'react-bootstrap';
import {
  AutoForm, SubmitField, DateField, LongTextField, TextField,
} from 'uniforms-bootstrap5';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import swal from 'sweetalert';
import SimpleSchema from 'simpl-schema';
import { Meetings } from '../../api/meeting/Meetings';

const formSchema = new SimpleSchema({
  topics: String,
  startTime: Date,
  endTime: Date,
  description: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);
const CreateMeeting = () => {
/* Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  const submit = (data, formRef) => {
    let insertError;
    const owner = Meteor.user().username;
    const {
      topics, startTime, endTime, description,
    } = data;
    Meetings.collection.insert(
      {
        topics, startTime, endTime, description, owner,
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
                <Col><TextField name="topics" showInlineError placeholder="Topics/Classes" /></Col>
              </Row>
              <Row>
                <Col><DateField name="startTime" showInlineError placeholder="Schedule the Meeting" /></Col>
                <Col><DateField name="endTime" showInlineError placeholder="Description" /></Col>
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
