import Col from 'react-bootstrap/Col'
import Image from "react-bootstrap/Image";
import Row from 'react-bootstrap/Row';
import project1pic from './project1.png';


function ProjectOne() {
    return (
        <div>
            <Row className='m-1'>
                <p className="fs-2">
                    Blackjack! – <strong>Browser Based Game</strong>
                </p>
            </Row>
            <Row>
                <Col xs={12} >
                    <Image fluid thumbnail src={project1pic} alt="..." />
                </Col>
                <Col xs={12} >
                    <div>
                        <p className="fs-2">
                            <span className="text-wrap">Single page web application featuring a fun take on the classic card game.  Built using HTML5, CSS3, JavaScript ES6</span></p>
                        <div>                            
                            <a className="btn btn-primary btn-lg m-2" href="https://dunndealpro.github.io/project-1-Blackjack/" target="_blank">Demo Site</a>
                            <a className="btn btn-primary btn-lg m-2" href="https://github.com/dunndealpro/project-1-Blackjack" target="_blank">Git Hub</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ProjectOne


