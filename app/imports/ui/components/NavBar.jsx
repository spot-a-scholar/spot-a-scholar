import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBar = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);

  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand className="white-text" as={NavLink} to="/home">
          <h2>Spot-a-Scholar</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start">
            {currentUser ? ([
              <Nav.Link className="px-3" id="home-nav" as={NavLink} to="/home" key="home">Home</Nav.Link>,
              <Nav.Link className="px-3" id="create-meeting-nav" as={NavLink} to="/createmeeting" key="createmeeting">Create Meeting</Nav.Link>,
              <Nav.Link className="px-3" id="meeting-nav" as={NavLink} to="/list" key="meeting">List Meetings</Nav.Link>,
              <Nav.Link className="px-3" id="ics-clases-nav" as={NavLink} to="/class" key="icsclass">ICS Classes</Nav.Link>,
              <Nav.Link className="px-3" id="show-profile-nav" as={NavLink} to="/showprofile" key="userprofile">Show Profile</Nav.Link>,
              <Nav.Link className="px-3" id="leaderboard-nav" as={NavLink} to="/leaderboard" key="leaderboard">Leaderboard</Nav.Link>,

            ]) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              <Nav.Link className="white-text" id="list-stuff-admin-nav" as={NavLink} to="/admin" key="admin">Admin</Nav.Link>
            ) : ''}
          </Nav>
          <Nav className="white-text justify-content-end">
            {currentUser === '' ? (
              <NavDropdown className="white-text" id="login-dropdown" title="Login">
                <NavDropdown.Item id="login-dropdown-sign-in" as={NavLink} to="/signin">
                  <PersonFill />
                  Sign
                  in
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-up" as={NavLink} to="/signup">
                  <PersonPlusFill />
                  Sign
                  up
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="navbar-current-user" title={currentUser}>
                <NavDropdown.Item id="navbar-sign-out" as={NavLink} to="/signout">
                  <BoxArrowRight />
                  {' '}
                  Sign
                  out
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
