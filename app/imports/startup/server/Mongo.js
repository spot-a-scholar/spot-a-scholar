import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Course } from '../../api/course/Course.js';
import { Students } from '../../api/student/Student.js';

/* eslint-disable no-console */

// Initialize the database with a default data document.
const addData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
};

// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.forEach(data => addData(data));
  }
}

// Initialize the database with a default data document.
const addCourses = (course) => {
  console.log(`  Adding: ${course.courseCode} ${course.courseName}`);
  Course.collection.insert(course);
};

// Initialize the CoursesCollection if empty.
if (Course.collection.find().count() === 0) {
  if (Meteor.settings.defaultCourses) {
    console.log('Creating default data.');
    Meteor.settings.defaultCourses.forEach(course => addCourses(course));
  }
}

// Initialize the database with a default data document.
const addStudents = (student) => {
  console.log(`  Adding: ${student.firstName} ${student.lastName} (${student.owner})`);
  Students.collection.insert(student);
};

// Initialize the StudentsCollection if empty.
if (Students.collection.find().count() === 0) {
  if (Meteor.settings.defaultStudents) {
    console.log('Creating default data.');
    Meteor.settings.defaultStudents.forEach(student => addStudents(student));
  }
}
