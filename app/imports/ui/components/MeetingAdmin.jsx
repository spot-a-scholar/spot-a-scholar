import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import Participant from './Participant';
import AddParticipant from './AddParticipant';
import LoadingSpinner from './LoadingSpinner';
import { Meetings } from '../../api/meeting/Meetings';

const months = {
  January: '1',
  February: '2',
  March: '3',
  April: '4',
  May: '5',
  June: '6',
  July: '7',
  August: '8',
  September: '9',
  October: '10',
  November: '11',
  December: '12',
};

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const MeetingAdmin = ({ meeting, participants }) => {
  const { _id } = useParams();
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready } = useTracker(() => {
    // Get access to sessions documents.
    const subscription = Meteor.subscribe(Meetings.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = Meetings.collection.findOne(_id);
    return {
      doc: document,
      ready: rdy,
    };
  }, [_id]);
  const deleteMeeting = () => {
    Meetings.collection.remove(meeting._id);
  };

  return ready ? (
    <Card>
      <Card.Header>
        <Card.Title>{meeting.courseCode}</Card.Title>
        <Card.Subtitle>{meeting.sessionMonth} {meeting.sessionDay}, {meeting.sessionYear} | {meeting.sessionTime}</Card.Subtitle>
        <Button variant="danger" onClick={deleteMeeting}>Delete Meeting</Button>
      </Card.Header>
      <Card.Body>
        <Card.Text>Location: {meeting.location}</Card.Text>
        <Card.Text>Description: {meeting.description}</Card.Text>
        <Card.Text>Owner: {meeting.owner}</Card.Text>
        {/* eslint-disable-next-line max-len */}
        <AddParticipant sessionName={meeting.courseCode} sessionLocation={meeting.location} notes={meeting.description} contactId={meeting._id} sessionDate={new Date(meeting.sessionYear, months[meeting.sessionMonth], meeting.sessionDay)} sessionTime={meeting.sessionTime} owner={Meteor.user().username} />
      </Card.Body>
      <Card.Footer>
        <Card.Subtitle>Participants</Card.Subtitle>
        <ListGroup variant="flush">
          {participants.map((participant) => <Participant key={participant._id} participant={participant} owner={participant.owner} />)}
        </ListGroup>
      </Card.Footer>
    </Card>
  ) : <LoadingSpinner />;
};

// Require a document to be passed to this component.
MeetingAdmin.propTypes = {
  meeting: PropTypes.shape({
    courseCode: PropTypes.string,
    location: PropTypes.string,
    sessionYear: PropTypes.string,
    sessionMonth: PropTypes.string,
    sessionDay: PropTypes.string,
    sessionTime: PropTypes.string,
    description: PropTypes.string,
    owner: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
  participants: PropTypes.arrayOf(PropTypes.shape({
    notes: PropTypes.string,
    owner: PropTypes.string,
    contactId: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
    sessionDate: PropTypes.instanceOf(Date),
    sessionTime: PropTypes.string,
    sessionName: PropTypes.string,
    sessionLocation: PropTypes.string,
    _id: PropTypes.string,
  })).isRequired,
};

export default MeetingAdmin;
