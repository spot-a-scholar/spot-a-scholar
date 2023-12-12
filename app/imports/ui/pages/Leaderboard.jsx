// leaderboard.jsx

import React from 'react';
import { Col, Container, Row, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import { UserData } from '../../api/user/Users';

const Leaderboard = () => {
  const { ready, leaderboard } = useTracker(() => {
    const subscription = Meteor.subscribe(UserData.adminPublicationName);
    const rdy = subscription.ready();
    const users = UserData.collection.find({}, { sort: { score: -1 } }).fetch();
    return {
      leaderboard: users,
      ready: rdy,
    };
  }, []);

  return ready ? (
    <Container id="leaderboard-page" className="py-3">
      <Row>
        {leaderboard.map((user) => <LeaderboardCard key={user._id} user={user} />)}
      </Row>
    </Container>
  ) : (
    <LoadingSpinner />
  );
};

const LeaderboardCard = ({ user }) => (
  <Col>
    <Card className="h-100">
      <Card.Header>
        <Image src={user.profilePicture} width={100} />
        <Card.Title>{user.name}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <h5>Score</h5>
          {user.score}
        </Card.Text>
      </Card.Body>
      <Link to={`/profile/${user._id}`} className="px-3 py-2">
        View Profile
      </Link>
    </Card>
  </Col>
);

LeaderboardCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    profilePicture: PropTypes.string,
    score: PropTypes.number,
    _id: PropTypes.string,
  }).isRequired,
};

export default Leaderboard;
