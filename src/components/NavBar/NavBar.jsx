import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './NavBar.css'


function NavBar() {
  return (
    <div className="fixed-top">
      <Navbar className="custom-link " id="navbar" bg="light" expand="lg">
        <Container className='md-col-12 fs-4 '>
          <Navbar.Brand className='fs-3 b' href="/myportfolio">Evan Dunn</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse >            
            <Nav variant="pills " className="me-auto" defaultActiveKey="/">
              <Nav.Item  >
                <Nav.Link  href="#aboutme">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link   href="#projects">Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link   href="#contactme">Contact<i class="bi bi-android"></i></Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;