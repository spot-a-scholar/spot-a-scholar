import { Card, Col, Container, Row } from 'react-bootstrap';
import {
  AutoForm, SubmitField, DateField, LongTextField, TextField,
} from 'uniforms-bootstrap5';
import React from 'react';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { MeetingInfoSchema as formSchema } from '../forms/MeetingInfo';

const bridge = new SimpleSchema2Bridge(formSchema);
// temp function to get rid of errors, need to implement actual submit function
const submit = (data, formRef) => data + formRef;
const CreateMeeting = () => {
/* Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  let fRef = null;
  return (
    <Container>
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
