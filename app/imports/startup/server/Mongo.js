import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { UserData } from '../../api/user/Users.js';
import { Meetings } from '../../api/meeting/Meetings';

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
