import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';



class Header extends Component {
    state = {  } 
    render() {
        return (
<Navbar bg="dark" expand="lg" variant="dark">
  <Container fluid>
    <Navbar.Brand href="#">Charity</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Members</Nav.Link>
        <NavDropdown title="About Us" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Vision</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Events</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
              Donation
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
        <Button variant="outline-secondary" size="lg">Login</Button>
    </Navbar.Collapse>
  </Container>
</Navbar>
        );
    }
}
 
export default Header;