import React from 'react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Meeting2 = ({ meeting }) => (
  <tr>
    <td>{meeting.topics}</td>
    <td>{meeting.startTime.toString()}</td>
    <td>{meeting.endTime.toString()}</td>
    <td>{meeting.description}</td>
  </tr>
);

// Require a document to be passed to this component.
Meeting2.propTypes = {
  meeting: PropTypes.shape({
    topics: PropTypes.string,
    startTime: PropTypes.instanceOf(Date).toString(),
    endTime: PropTypes.instanceOf(Date).toString(),
    description: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Meeting2;