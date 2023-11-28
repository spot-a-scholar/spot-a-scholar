import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/** Define a Mongo collection to hold the data. */
class UserDataCollection {
  constructor() {
    this.name = 'UserDataCollection';
    this.collection = new Mongo.Collection(this.name);

    /** Define a schema to specify the structure of each document in the collection. */
    const
      UserDataSchema = new SimpleSchema({
        name: String,
        profilePicture: String,
        scholarClasses: String,
        studentClasses: String,
        owner: String,
      });
    /** Attach the schema to the collection. */
    this.collection.attachSchema(UserDataSchema);

    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/** Make these objects available to others. */
// export { UserData, UserDataSchema };
export const UserData = new UserDataCollection();
