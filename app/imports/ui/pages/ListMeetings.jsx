import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Meetings } from '../../api/meeting/Meetings';
import Meeting from '../components/Meeting';
import LoadingSpinner from '../components/LoadingSpinner';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const ListMeetings = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, meetings } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Meetings.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const meetingItems = Meetings.collection.find({}).fetch();
    return {
      meetings: meetingItems,
      ready: rdy,
    };
  }, []);

  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center">
            <h2>List Meetings</h2>
          </Col>
          <Row xs={1} md={2} lg={3} className="g-4">
            {meetings.map((meeting) => (<Col><Meeting meeting={meeting} /></Col>))}
          </Row>

        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListMeetings;
