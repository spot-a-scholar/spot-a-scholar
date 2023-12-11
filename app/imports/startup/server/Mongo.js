import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Course } from '../../api/course/Course.js';
import { Students } from '../../api/student/Student.js';
import { Meetings } from '../../api/meeting/Meetings.js';
import { UserData } from '../../api/user/Users.js';

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

const addMeetings = (meeting) => {
  console.log(`  Adding: ${meeting.courseCode} (${meeting.owner})`);
  Meetings.collection.insert(meeting);
};

// Initialize the StudentsCollection if empty.
if (Meetings.collection.find().count() === 0) {
  if (Meteor.settings.defaultMeetings) {
    console.log('Creating default data.');
    Meteor.settings.defaultMeetings.forEach(meeting => addMeetings(meeting));
  }
}

const addUser = (data) => {
  console.log(`  Adding: ${data.name}`);
  UserData.collection.insert(data);
};

if (UserData.collection.find().count() === 0) {
  if (Meteor.settings.defaultUsers) {
    console.log('Creating default users.');
    Meteor.settings.defaultUsers.forEach(data => addUser(data));
  }
}

const addMeeting = (data) => {
  console.log(`  Adding: ${data.topics}`);
  Meetings.collection.insert(data);
};

if (Meetings.collection.find().count() === 0) {
  if (Meteor.settings.defaultMeetings) {
    console.log('Creating default meetings.');
    Meteor.settings.defaultMeetings.forEach(data => addMeeting(data));
  }
}
