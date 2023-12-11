import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The CoursesCollection. It encapsulates state and variable values for courses.
 */
class MeetingsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'MeetingsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      courseCode: String,
      location: String,
      sessionYear: String,
      sessionMonth: String,
      sessionDay: String,
      sessionTime: String,
      description: String,
      owner: String,
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the StuffsCollection.
 * @type {MeetingsCollection}
 */
export const Meetings = new MeetingsCollection();
