import SimpleSchema from 'simpl-schema';

const MeetingInfoSchema = new SimpleSchema({
  topics: { label: 'Topics/Classes', type: String },
  description: { label: 'Description', type: String },
  startTime: { label: 'Schedule the Meeting', type: Date, defaultValue: new Date() },
  endTime: { label: 'Schedule the Meeting End', type: Date, defaultValue: new Date() },
});

export { MeetingInfoSchema };
// temp schema
