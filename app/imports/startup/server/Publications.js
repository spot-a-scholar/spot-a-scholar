import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Stuffs } from '../../api/stuff/Stuff';
import { Course } from '../../api/course/Course.js';
import { Students } from '../../api/student/Student.js';
import { Meetings } from '../../api/meeting/Meetings.js';
import { UserData } from '../../api/user/Users';
import { Participants } from '../../api/participant/Participants';
// User-level publication.
// If logged in, then publish documents owned by this user. Otherwise, publish nothing.
Meteor.publish(Stuffs.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Stuffs.collection.find({ owner: username });
  }
  return this.ready();
});

// Admin-level publication.
// If logged in and with admin role, then publish all documents from all users. Otherwise, publish nothing.
Meteor.publish(Stuffs.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Stuffs.collection.find();
  }
  return this.ready();
});

// User-level publication.
// If logged in, then publish documents owned by this user. Otherwise, publish nothing.
Meteor.publish(Students.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Students.collection.find({ owner: username });
  }
  return this.ready();
});

// User-level publication.
// If logged in, then publish all course documents. Otherwise, publish nothing.
Meteor.publish(Course.userPublicationName, function () {
  if (this.userId) {
    return Course.collection.find();
  }
  return this.ready();
});

// User-level publication.
// If logged in, then publish all course documents. Otherwise, publish nothing.
Meteor.publish(Meetings.userPublicationName, function () {
  if (this.userId) {
    return Meetings.collection.find();
  }
  return this.ready();
});

Meteor.publish(Participants.userPublicationName, function () {
  if (this.userId) {
    return Participants.collection.find();
  }
  return this.ready();
});

Meteor.publish(Meetings.adminPublicationName, function () {
  if (this.userId) {
    return Meetings.collection.find();
  }
  return this.ready();
});

// alanning:roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});

Meteor.publish(UserData.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return UserData.collection.find({ owner: username });
  }
  return this.ready();
});

// Meteor.publish(Meetings.userPublicationName, function () {
//   if (this.userId) {
//     const username = Meteor.users.findOne(this.userId).username;
//     return Meetings.collection.find({ owner: username });
//   }
//   return this.ready();
// });
