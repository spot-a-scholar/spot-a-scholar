import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Meeting = ({ meeting }) => (
  <Card>
    <Card.Header>
      <Card.Title>{meeting.courseCode}</Card.Title>
      <Card.Subtitle>{meeting.sessionMonth} {meeting.sessionDay}, {meeting.sessionYear} | {meeting.sessionTime}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>Location: {meeting.location}</Card.Text>
      <Card.Text>Description: {meeting.description}</Card.Text>
      <Card.Text>Owner: {meeting.owner}</Card.Text>
    </Card.Body>
import { Button, Card } from 'react-bootstrap';

/** Renders a card for the Meeting List. See pages/MeetingList.jsx. */
const Meeting = ({ meeting }) => (
  <Card>
    <Card.Header as="h5">{meeting.topics}</Card.Header>
    <Card.Body>
      <Card.Title as="h5">{meeting.startTime.toString()} to {meeting.endTime.toString()}</Card.Title>
      <Card.Text>{meeting.description}</Card.Text>
      <Button variant="primary" className="mx-1">Join</Button>
      <Button variant="danger" className="mx-1">Delete</Button>
    </Card.Body>
    <Card.Footer>
      Participants
    </Card.Footer>
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
    topics: PropTypes.string,
    startTime: PropTypes.instanceOf(Date),
    endTime: PropTypes.instanceOf(Date),
    description: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Meeting;
