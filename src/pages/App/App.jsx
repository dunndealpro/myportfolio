import { Routes, Route } from 'react-router-dom'
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import Home from '../Home/Home';
import Projects from '../Projects/Projects'
import NavBar from '../../components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes>
    
    </>

  );
}

export default App;
