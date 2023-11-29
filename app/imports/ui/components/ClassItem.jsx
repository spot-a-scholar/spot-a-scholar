import React from 'react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const ClassItem = ({ iclass }) => (
  <tr>
    <td>{iclass.className}</td>
    <td>{iclass.professors}</td>
    <td>{iclass.students}</td>
    <td>{iclass.tutors}</td>
  </tr>
);

// Require a document to be passed to this component.
ClassItem.propTypes = {
  iclass: PropTypes.shape({
    className: PropTypes.string,
    professors: PropTypes.string,
    students: PropTypes.string,
    tutors: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default ClassItem;
