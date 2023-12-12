import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Meetings } from '../../api/meeting/Meetings';
import LoadingSpinner from '../components/LoadingSpinner';
import { Participants } from '../../api/participant/Participants';
import MeetingAdmin from '../components/MeetingAdmin';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const ListMeetingsAdmin = () => {
  const { ready, meetings, participants } = useTracker(() => {
    const subscription = Meteor.subscribe(Meetings.userPublicationName);
    const subscription2 = Meteor.subscribe(Participants.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready() && subscription2.ready();
    // Get the Stuff documents
    const meetingItems = Meetings.collection.find({}).fetch();
    const participantItems = Participants.collection.find({}).fetch();
    return {
      meetings: meetingItems,
      participants: participantItems,
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
            {meetings.map((meeting) => (<Col><MeetingAdmin meeting={meeting} participants={participants.filter(participant => (participant.contactId === meeting._id))} /></Col>))}
          </Row>

        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListMeetingsAdmin;
