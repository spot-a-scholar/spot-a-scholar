import { Col, Container, Row, Table, Card, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
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
    const email = Meteor.user().username;
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
    <Container id="show-profile-page" className="py-3">
      <Row>
        {profiles.map((profile) => <MakeCard key={profile._id} profile={profile} />)}
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

//   return (ready ? (
//     <Container id="show-profile-page" className="py-3">
//       <Row className="justify-content-center">
//         <Col md={7}>
//           <Col className="text-center">
//             <h2>Show Profile</h2>
//           </Col>
//           <Table striped bordered hover>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Profile Picture</th>
//                 <th>Scholar Classes</th>
//                 <th>Student Classes</th>
//                 <th>Edit</th>
//               </tr>
//             </thead>
//             <tbody>
//               {profiles.map((profile) => <Profile key={profile._id} profile={profile} />)}
//             </tbody>
//           </Table>
//         </Col>
//       </Row>
//     </Container>
//   ) : <LoadingSpinner />);
// };
export default ShowProfile;

const MakeCard = ({ profile }) => (
  <Col>
    <Card className="h-100">
      <Card.Header>
        <Image src={profile.profilePicture} width={50} />
        <Card.Title>{profile.name}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <h5>Scholar Classes</h5>
          {profile.scholarClasses}
        </Card.Text>
        <h5>Student Classes</h5>
        {profile.studentClasses}
      </Card.Body>
      <Link to={`/editprofile/${profile._id}`} className="px-3 py-2">Edit</Link>
    </Card>
  </Col>
);

MakeCard.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string,
    profilePicture: PropTypes.string,
    scholarClasses: PropTypes.string,
    studentClasses: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};
