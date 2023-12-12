import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Row, Col } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import Meeting from '../components/Meeting';
import LoadingSpinner from '../components/LoadingSpinner';
import { Meetings } from '../../api/meeting/Meetings';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const MeetingList = () => {
  const { ready, meetings } = useTracker(() => {
    const subscription = Meteor.subscribe(Meetings.userPublicationName);
    const rdy = subscription.ready();
    const meetingItems = Meetings.collection.find({}).fetch();
    return {
      meetings: meetingItems,
      ready: rdy,
    };
  }, []);

  return (
    ready ? (
      <Container id="calendar-page" className="py-3">
        <Row className="justify-content-center">
          <Col>
            <div className="text-center">
              <h2>List Meetings</h2>
            </div>
            <Row xs={1} md={1} lg={2} className="g-4">
              {meetings.map((meeting) => (
                <Col key={meeting._id}>
                  <Meeting meeting={meeting} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    ) : <LoadingSpinner />
  );
};

export default MeetingList;
