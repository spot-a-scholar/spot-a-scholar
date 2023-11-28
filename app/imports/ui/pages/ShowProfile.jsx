import { Col, Container, Row, Table } from 'react-bootstrap';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { UserData } from '../../api/user/Users';
import LoadingSpinner from '../components/LoadingSpinner';
import Profile from '../components/Profile';

const ShowProfile = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, profiles } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(UserData.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const users = UserData.collection.find({}).fetch();
    return {
      profiles: users,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center">
            <h2>Show Profile</h2>
          </Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Profile Picture</th>
                <th>Scholar Classes</th>
                <th>Student Classes</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {profiles.map((profile) => <Profile key={profile._id} profile={profile} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};
export default ShowProfile;
