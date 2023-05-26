import Col from 'react-bootstrap/Col'
import Image from "react-bootstrap/Image";
import Row from 'react-bootstrap/Row';
import turtlaGamePic from './winner1.PNG';


function TurtleGame() {
    return (
        <div>
            <Row className='m-1'>
                <p className="fs-2">
                    <strong>Turtle Game</strong>
                </p>
            </Row>
            <Row>
                <Col xs={12} >
                    <Image fluid thumbnail src={turtlaGamePic} alt="..." />
                </Col>
                <Col xs={12} >
                    <div>
                        <p className="fs-2">
                            <br />
                            <span className="text-wrap">Turtle is a re-creation and adaptation of the well known game "Wordle." As an avid player and fan of Wordle, I play the New York Times' word game daily with a group of friends and we all share our scores with each other. Along with my friends, we often find ourselves wanting to play more than one game a day, and also at times, need to look up the meaning of the resulting answer. To satisfy these wants, I recreated Wordle with a few unique distinctions.  Built using PostgreSQL, Express.js, React.js, Node.js HTML5, CSS3, JavaScript ES6, Bootstrap, Sequelize, Token-Based Authentication(JWT)</span>
                            <br /><br />
                            <span>Try the app using the demo account or create your own!</span>
                            <li>email: demo@demo.com</li>
                            <li>password: 123</li>
                        </p>
                        <div>
                            <a className="btn btn-primary btn-lg m-2" href="https://turtle-game.herokuapp.com/" target="_blank">Demo Site</a>
                            <a className="btn btn-primary btn-lg m-2" href="https://github.com/dunndealpro/turtle-game" target="_blank">Git Hub</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default TurtleGame


