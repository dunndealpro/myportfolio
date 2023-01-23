import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Image from "react-bootstrap/Image";
import project3pic from './project3.png';
// import profilepic from './profile1.png'


function ProjectThree() {
    return (
        <div>
            <Row>
                <p className="fs-1">
                MyWatch List – <strong>Full stack MERN CRUD SPA</strong>
                </p>
            </Row>
            <Row>
                <Col xs={12} sm={4} md={4}>

                    <Image fluid thumbnail src={project3pic} alt="..." />
                </Col>
                <Col xs={12} sm={4} md={4}>
                    <div>
                        <p className="fs-2">
                            <span className="text-wrap">Full stack MERN CRUD SPA  where a user search for movies and can create, read, update and delete lists of movies they want to watch. Built using Mongoose, MongoDB, Express, React, Node.js HTML5, CSS3, JavaScript ES6, Token-Based Authentication</span></p>
                        <div>
                            <br></br>
                            <a className="btn btn-primary btn-lg m-2" href="https://shrouded-oasis-08009.herokuapp.com/" target="_blank">Demo Site</a>
                            <a className="btn btn-primary btn-lg m-2" href="https://github.com/dunndealpro/project3-watchlist-tracker" target="_blank">Git Hub</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>

    )
}

export default ProjectThree


