import SimpleSchema from 'simpl-schema';

const UserInfoSchema = new SimpleSchema({
  name: { label: 'Name', type: String },
  email: { label: 'Profile Picture', type: String },
  bio: {
    label: 'Scholar Classes', type: String, optional: true, defaultValue: '',
  },
  hobbies: { label: 'Hobbies', type: Array, optional: true },
  'hobbies.$': { type: String },
  level: {
    label: 'Level', type: String,
  },
  gpa: { label: 'Student Classes', type: String },
  major: { label: 'Major', type: String },
  enrolled: { label: 'Date Enrolled', type: Date, defaultValue: new Date() },
});

export { UserInfoSchema };

// temp schema for testing
