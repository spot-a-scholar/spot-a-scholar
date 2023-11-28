import { Card, Col, Container, Row } from 'react-bootstrap';
import {
  AutoForm, TextField, SubmitField,
} from 'uniforms-bootstrap5';
import React from 'react';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { useParams } from 'react-router';
import { UserData } from '../../api/user/Users';
import LoadingSpinner from '../components/LoadingSpinner';

const formSchema = new SimpleSchema({
  name: String,
  profilePicture: String,
  scholarClasses: String,
  studentClasses: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);
const EditProfile = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { _id } = useParams();
  // const _id = Meteor.user().username;
  // console.log('EditStuff', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(UserData.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = UserData.collection.findOne(_id);
    return {
      doc: document,
      ready: rdy,
    };
  }, []);
  // console.log('EditStuff', doc, ready);
  // On successful submit, insert the data.
  const submit = (data) => {
    const { name, profilePicture, scholarClasses, studentClasses } = data;
    const id = doc._id;
    UserData.collection.update(id, { $set: { name, profilePicture, scholarClasses, studentClasses } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Profile Updated', 'success')));
  };
  // const submit = (data, formRef) => data + formRef;
  // const UserProfile = () => {
  return ready ? (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <h2 className="text-center">User Profile</h2>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
            <Card className="p-2">
              <Row>
                <Col><TextField name="name" showInlineError placeholder="Your name" /></Col>
                <Col><TextField name="profilePicture" showInlineError placeholder="Upload a Profile Picture" /></Col>
              </Row>
              <Row>
                <Col><TextField name="scholarClasses" showInlineError placeholder="List classes you are willing to tutor" /></Col>
                <Col><TextField name="studentClasses" showInlineError placeholder="List classes that you need tutoring in" /></Col>
                <SubmitField value="Update" />
              </Row>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default EditProfile;
