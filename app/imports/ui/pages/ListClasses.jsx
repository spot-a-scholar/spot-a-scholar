import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/* Renders a table containing all the ICS Classes. Uses fake data to render each row */
const ListClasses = () => {

  const fakeIClasses = [
    { _id: '1', className: 'ICS 101: Tools for the Information Age', professor: 'John Doe', students: ['Alice', 'Bob', 'Charlie'], tutors: ['Eve', 'Frank'] },
    { _id: '2', className: 'ICS 110: Introduction to Computer Programming', professor: 'Jane Smith', students: ['Grace', 'Henry', 'Isabel'], tutors: ['Katherine', 'Louis'] },
    { _id: '3', className: 'ICS 111: Introduction to Computer Science I', professor: 'Alex Johnson', students: ['Olivia', 'Peter', 'Rachel'], tutors: ['Sam', 'Tina'] },
    { _id: '4', className: 'ICS 141: Discrete Mathematics for Computer Science I', professor: 'Michael Brown', students: ['Sophia', 'David', 'Emma'], tutors: ['Nathan', 'Lily'] },
    { _id: '5', className: 'ICS 210: Information Systems in Society', professor: 'Laura White', students: ['Ella', 'Logan', 'Mia'], tutors: ['Noah', 'Sophie'] },
    { _id: '6', className: 'ICS 211: Introduction to Computer Science II', professor: 'William Turner', students: ['Ava', 'Daniel', 'James'], tutors: ['Mia', 'Jacob'] },
    { _id: '7', className: 'ICS 212: Program Structure', professor: 'Sophia Garcia', students: ['Liam', 'Lily', 'Lucas'], tutors: ['Emma', 'Olivia'] },
    { _id: '8', className: 'ICS 215: Introduction to Scripting', professor: 'Oliver Davis', students: ['Benjamin', 'Charlotte', 'Chloe'], tutors: ['Ethan', 'Emily'] },
    { _id: '9', className: 'ICS 222: Basic Concepts of Computer Science', professor: 'Logan Miller', students: ['Ethan', 'Emma', 'Ella'], tutors: ['Liam', 'Lily'] },
    { _id: '10', className: 'ICS 241: Discrete Mathematics for Computer Science II', professor: 'Chloe Brown', students: ['Emily', 'Ethan', 'Ella'], tutors: ['Lucas', 'Lily'] },
    { _id: '11', className: 'ICS 290: Computer Science Careers: An Exploration of the Specialties of Computer Science', professor: 'Lucas Wilson', students: ['Olivia', 'Oscar', 'Oliver'], tutors: ['Sophie', 'Sophia'] },
    { _id: '12', className: 'ICS 311: Algorithms', professor: 'Ella Martinez', students: ['Chloe', 'Charlie', 'Charlotte'], tutors: ['Benjamin', 'Bob'] },
    { _id: '13', className: 'ICS 312: Machine-Level and Systems Programming', professor: 'Oscar Johnson', students: ['Liam', 'Lucas', 'Lily'], tutors: ['Logan', 'Laura'] },
    { _id: '14', className: 'ICS 313: Programming Language Theory', professor: 'Emma White', students: ['Emily', 'Ethan', 'Ella'], tutors: ['Chloe', 'Charlie'] },
    { _id: '15', className: 'ICS 314: Software Engineering I', professor: 'Benjamin Davis', students: ['Sophie', 'Sophia', 'Sam'], tutors: ['Ella', 'Ethan'] },
    { _id: '16', className: 'ICS 315: Web Design and Management', professor: 'Oscar Turner', students: ['Oscar', 'Oliver', 'Olivia'], tutors: ['Charlotte', 'Chloe'] },
    { _id: '17', className: 'ICS 321: Data Storage and Retrieval', professor: 'Ethan Miller', students: ['Emily', 'Ella', 'Emma'], tutors: ['Logan', 'Lucas'] },
    { _id: '18', className: 'ICS 331: Logic Design and Microprocessors', professor: 'Charlotte Garcia', students: ['Charlie', 'Chloe', 'Chase'], tutors: ['Sophia', 'Sam'] },
    { _id: '19', className: 'ICS 332: Operating Systems', professor: 'Charlie Davis', students: ['Charlotte', 'Chase', 'Chloe'], tutors: ['Chloe', 'Charlie'] },
    { _id: '20', className: 'ICS 351: Network Design and Management', professor: 'Chase White', students: ['Sam', 'Sophia', 'Sophie'], tutors: ['Oscar', 'Olivia'] },
    { _id: '21', className: 'ICS 355: Security and Trust I: Resource Protections', professor: 'Sam Turner', students: ['Logan', 'Laura', 'Lily'], tutors: ['Oscar', 'Oliver'] },
    { _id: '22', className: 'ICS 361: Introduction to Artificial Intelligence Programming', professor: 'Sophie Brown', students: ['Oscar', 'Oliver', 'Olivia'], tutors: ['Chloe', 'Charlie'] },
    { _id: '23', className: 'ICS 390: Computing Ethics for Lab Assistants', professor: 'Olivia Martinez', students: ['Liam', 'Lucas', 'Lily'], tutors: ['Emma', 'Ethan'] },
    { _id: '24', className: 'ICS 414: Software Engineering II', professor: 'Oscar Johnson', students: ['Ella', 'Ethan', 'Emma'], tutors: ['Liam', 'Lucas'] },
    { _id: '25', className: 'ICS 415: Introduction to Programming for the Web', professor: 'Chloe Brown', students: ['Benjamin', 'Bob', 'Charlotte'], tutors: ['Oliver', 'Olivia'] },
    { _id: '26', className: 'ICS 419: The Science, Psychology and Philosophy of Systems Design', professor: 'Benjamin Davis', students: ['Sophie', 'Sophia', 'Sam'], tutors: ['Ella', 'Ethan'] },
    { _id: '27', className: 'ICS 421: Database Systems', professor: 'Ethan Miller', students: ['Emily', 'Ella', 'Emma'], tutors: ['Logan', 'Lucas'] },
    { _id: '28', className: 'ICS 422: Data Processing', professor: 'Charlotte Garcia', students: ['Charlie', 'Chloe', 'Chase'], tutors: ['Sophia', 'Sam'] },
    { _id: '29', className: 'ICS 423: Data Security and Cryptography I', professor: 'Charlie Davis', students: ['Charlotte', 'Chase', 'Chloe'], tutors: ['Chloe', 'Charlie'] },
    { _id: '30', className: 'ICS 424: Application Frameworks', professor: 'Chase White', students: ['Sam', 'Sophia'], tutors: ['Chloe', 'Charlie'] },
  ];

  return (
    <Container id="ics-classes-page" className="py-3">
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center">
            <h2>List ICS Classes</h2>
          </Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Class</th>
                <th>Professor(s)</th>
                <th>Students</th>
                <th>Tutors</th>
                <th>Create Study Session</th>
              </tr>
            </thead>
            <tbody>
              {fakeIClasses.map((iclass) => (
                <tr key={iclass._id}>
                  <td>{iclass.className}</td>
                  <td>{iclass.professor}</td>
                  <td>{iclass.students.join(', ')}</td>
                  <td>{iclass.tutors.join(', ')}</td>
                  <td>
                    <Link to={`/createmeeting/${iclass._id}`}>Create Session</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ListClasses;
