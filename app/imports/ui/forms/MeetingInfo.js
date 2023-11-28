import SimpleSchema from 'simpl-schema';

const MeetingInfoSchema = new SimpleSchema({
  topics: { label: 'Topics/Classes', type: String },
  startTime: { label: 'Schedule the Meeting', type: Date, defaultValue: new Date() },
  endTime: { label: 'Schedule the Meeting End', type: Date, defaultValue: new Date() },
  description: { label: 'Description', type: String },
});

export { MeetingInfoSchema };
