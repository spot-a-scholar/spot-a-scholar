import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Profile = ({ profile }) => (
  <tr>
    <td>{profile.name}</td>
    <td>{profile.profilePicture}</td>
    <td>{profile.scholarClasses}</td>
    <td>{profile.studentClasses}</td>
    <td>
      <Link to={`/editprofile/${profile._id}`}>Edit</Link>
    </td>
  </tr>
);

// Require a document to be passed to this component.
Profile.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string,
    profilePicture: PropTypes.string,
    scholarClasses: PropTypes.string,
    studentClasses: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Profile;
