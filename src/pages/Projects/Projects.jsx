import Image from "react-bootstrap/Image";
import project1pic from './project1.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import ProjectOne from '../../components/ProjectOne/ProjectOne'
import ProjectTwo from '../../components/ProjectTwo/ProjectTwo'
import ProjectThree from '../../components/ProjectThree/ProjectThree'
import TurtleGame from "../../components/TurtleGame/TurtleGame";


function Projects() {
  return (

    <div className="m-2">
      <Container>
        <h1>Projects</h1>
        <TurtleGame/>
        <br />
        <ProjectOne/>
        <br/>
        <ProjectTwo/>
        <br/>
        <ProjectThree/> 
        <div>
        </div>
      </Container>
    </div >

  );
}

export default Projects;