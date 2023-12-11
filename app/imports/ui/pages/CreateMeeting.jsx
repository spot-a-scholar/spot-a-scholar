import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, SubmitField, LongTextField, TextField } from 'uniforms-bootstrap5';
import React from 'react';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Meetings } from '../../api/meeting/Meetings';


// Create a schema to specify the structure of the data to appear in the form.
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
    const { courseCode, location, sessionYear, sessionMonth, sessionDay, sessionTime, description, owner } = data;
    Meetings.collection.insert(
      { courseCode, location, sessionYear, sessionMonth, sessionDay, sessionTime, description, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      },
    );
  }

  let fRef = null;
  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <h2 className="text-center">Create Meeting</h2>
          <AutoForm ref={(ref) => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card className="p-2">
              <TextField name="courseCode" />
              <TextField name="location" />
              <TextField name="sessionYear" />
              <TextField name="sessionMonth" />
              <TextField name="sessionDay" />
              <TextField name="sessionTime" />
              <LongTextField name="description" />
              <TextField name="owner" />
              <SubmitField value="Submit" />
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateMeeting;
