import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Image from "react-bootstrap/Image";
import project3pic from './p3-landing.PNG';
// import profilepic from './profile1.png'


function ProjectThree() {
    return (
        <div>
            <Row>
                <p className="fs-2">
                    MyWatch List – <strong>Full Stack MERN CRUD SPA</strong>
                </p>
            </Row>
            <Row>
                <Col xs={12}>

                    <Image fluid thumbnail src={project3pic} alt="..." />
                </Col>
                <Col xs={12}>
                    <div>
                        <p className="fs-2">
                            <span className="text-wrap">Full stack MERN CRUD SPA where a user search for movies, tv shows and actors to add to a "MyWatch" list. Users can create, read, update and delete lists of movies or tv shows that they have watched or need to watch. Users can also create comments for their their favorite actors, movies and shows. Built using Mongoose, MongoDB, Express, React, Node.js, Bootstrap, HTML5, CSS3, JavaScript ES6, Token-Based Authentication</span><br/><br/>
                            <span>
                                Try the app using the demo account or create your own!
                            </span>
                            <li>User email: demo@user.com</li>
                            <li>Password: 12345</li>

                        </p>
                        <div>
                            <br></br>
                            <a className="btn btn-primary btn-lg m-2" href="https://enigmatic-beach-61745.herokuapp.com/" target="_blank">Demo Site</a>
                            <a className="btn btn-primary btn-lg m-2" href="https://github.com/dunndealpro/project-three-mywatch" target="_blank">Git Hub</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>

    )
}

export default ProjectThree


