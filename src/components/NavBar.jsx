import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route } from 'react-router-dom'
// import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
  return (
    <div>

      <Navbar bg="light" expand="lg">
        <Container>
          
          <Navbar.Brand href="/">Evan Dunn</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-link" href="/aboutme">About Me</Nav.Link>
              <Nav.Link className="nav-link" href="/projects">Projects</Nav.Link>
              <Nav.Link className="nav-link" href="/contactme">Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;