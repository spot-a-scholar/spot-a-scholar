import SimpleSchema from 'simpl-schema';

const MeetingInfoSchema = new SimpleSchema({
  topics: { label: 'Topics/Classes', type: String },
  courseCode: { label: 'Course Code', type: String },
  location: { label: 'Location', type: String },
  sessionYear: { label: 'Session Year', type: String },
  sessionMonth: { label: 'Session Month', type: String },
  sessionDay: { label: 'Session Day', type: String },
  sessionTime: { label: 'Session Time', type: String },
  description: { label: 'Description', type: String },
});

export { MeetingInfoSchema };
