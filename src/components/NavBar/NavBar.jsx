import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from '../../pages/Home/Home';
import { Routes, Route } from 'react-router-dom'

// import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
  return (
    <div className="fixed-top">

      <Navbar id="navbar" bg="light" expand="lg">
        <Container className='md-col-12 fs-4'>

          <Navbar.Brand className='fs-3' href="/myportfolio">Evan Dunn</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse >
            {/* <Nav variant="pills" className="me-auto" defaultActiveKey="/">
              <Nav.Item>
                <Nav.Link eventKey="link-1" href="/aboutme">About Me</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2" href="/projects">Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3" href="/contactme">Contact Me<i class="bi bi-android"></i></Nav.Link>
              </Nav.Item>
            </Nav> */}
            <Nav variant="pills" className="me-auto" defaultActiveKey="/">
              <Nav.Item>
                <Nav.Link offset={-40} href="#aboutme">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link  offset={-70} href="#projects">Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link offset={-70}  href="#contactme">Contact<i class="bi bi-android"></i></Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
}

export default NavBar;