import React from 'react';
import PropTypes from 'prop-types';
import { Card, ListGroup } from 'react-bootstrap';
import Participant from './Participant';
import AddParticipant from './AddParticipant';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Meeting = ({ meeting, participants }) => (
  <Card>
    <Card.Header>
      <Card.Title>{meeting.courseCode}</Card.Title>
      <Card.Subtitle>{meeting.sessionMonth} {meeting.sessionDay}, {meeting.sessionYear} | {meeting.sessionTime}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>Location: {meeting.location}</Card.Text>
      <Card.Text>Description: {meeting.description}</Card.Text>
      <Card.Text>Owner: {meeting.owner}</Card.Text>
      <ListGroup variant="flush">
        {participants.map((participants) => <Participant key={participant._id} participant={participant}/>)}
      </ListGroup>
      <AddParticipant/>
    </Card.Body>
    </Card>
);

// Require a document to be passed to this component.
Meeting.propTypes = {
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
  participants: PropTypes.shape({
    username: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Meeting;
