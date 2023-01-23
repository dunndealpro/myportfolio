import { Routes, Route } from 'react-router-dom'
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import Home from '../Home/Home';
import Projects from '../Projects/Projects'
import NavBar from '../../components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Footer from "../../components/Footer/Footer"
import { Container } from 'react-bootstrap';

// import './App.css';

function App() {
  return (
    <>


      <NavBar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes> */}
      <div data-bs-spy="scroll" data-bs-target="navbar" data-bs-root-margin="0px 0px 40%" data-bs-smooth-scroll="true" data-bs-offset="-40" className="scrollspy-navbar bg-light p-3 rounded-2" tabindex="0">
      <div id="home" className='m-1'>
        <Home />
      </div>
      <hr></hr>
      <div id="aboutme">
        <AboutMe />
      </div>
      <hr></hr>
      <div id="projects">
        <Projects/>
      </div>
      <hr></hr>
      <div id="contactme">
        <ContactMe/>
      </div>
      </div>
      

      <Footer />

    </>

  );
}

export default App;
