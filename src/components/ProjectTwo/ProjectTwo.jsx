import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Image from "react-bootstrap/Image";
import project2pic from './project2.png';
// import profilepic from './profile1.png'


function ProjectTwo() {
    return (
        <div>
            <Row>
                <p className="fs-1">
                Event/Gig Tracker – <strong>Full stack MEN - CRUD application</strong>
                </p>
            </Row>
            <Row>
                <Col xs={12} sm={4} md={4}>

                    <Image fluid thumbnail src={project2pic} alt="..." />
                </Col>
                <Col>
                    <div>
                        <p className="fs-2">
                            <span className="text-wrap">Full stack MEN - CRUD application that allows a user to create, edit and manage events, venue, and worker information.  A user is able to add/remove information about upcoming and past events/gigs, venue information and workforce contacts.Built using HTML5, CSS3, JavaScript ES6, Mongoose, MongoDB, Express, Node.js, Bootstrap, OAuth</span></p>
                        <div>
                            <br></br>
                            <a className="btn btn-primary btn-lg m-2" href="https://vast-meadow-41954.herokuapp.com/" target="_blank">Demo Site</a>
                            <a className="btn btn-primary btn-lg m-2" href="https://github.com/dunndealpro/project-2-gig-tracker" target="_blank">Git Hub</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>

    )
}

export default ProjectTwo


