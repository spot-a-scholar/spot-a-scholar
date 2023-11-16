import SimpleSchema from 'simpl-schema';

const UserInfoSchema = new SimpleSchema({
  name: { label: 'Name', type: String },
  profilePicture: { label: 'Profile Picture', type: String },
  scholarClasses: { label: 'Scholar Classes', type: String },
  studentClasses: { label: 'Student Classes', type: String },
});

export { UserInfoSchema };

// temp schema for testing
