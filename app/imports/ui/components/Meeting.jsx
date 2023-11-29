import React from 'react';
import PropTypes from 'prop-types';
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
    topics: PropTypes.string,
    startTime: PropTypes.instanceOf(Date),
    endTime: PropTypes.instanceOf(Date),
    description: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Meeting;
