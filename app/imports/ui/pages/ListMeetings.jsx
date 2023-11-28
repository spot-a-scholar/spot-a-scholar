import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import { Meetings } from '../../api/meeting/Meetings';
import Meeting from '../components/Meeting';

const ListMeetings = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, meetings } = useTracker(() => {
    const subscription = Meteor.subscribe(Meetings.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const meeting = Meetings.collection.find({}).fetch();
    return {
      meetings: meeting,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center">
            <h2>List of Meetings</h2>
          </Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Topics</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {meetings.map((meeting) => <Meeting key={meeting._id} meeting={meeting} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};
export default ListMeetings;
