import { EmailJSResponseStatus } from 'emailjs-com';
import { useState } from 'react';
import { send } from 'emailjs-com';
import Card from 'react-bootstrap/Card';
import linkedInpic from './LinkedIn_icon_circle.svg.png'
import gitHubpic from './Github-circle_(CoreUI_Icons_v1.0.0).svg.png'
import emailpic from './emailicon.png'
import resumepic from './img_381039.png.crdownload'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContactMe() {
  return (
    <div>
      <Container  fluid className="mb-5">
        <Row>
        <h1>Contact</h1>
        </Row>
        <Row>
          <Col  xs={12} sm={4} md={3}>

            
            <Card className="p-2 m-2" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={linkedInpic} />
              <Card.Body>
                <Card.Title>LinkedIn</Card.Title>
                <Card.Text>
                  Let's connect on LinkedIn
                </Card.Text>
                <a className='btn btn-secondary' href="https://www.linkedin.com/in/dunnevan/" target="blank">LinkedIn</a>
              </Card.Body>
            </Card>
          </Col>

          <Col  xs={12} sm={4} md={3}>
            <Card className="p-2 m-2" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={gitHubpic} />
              <Card.Body>
                <Card.Title>GitHub</Card.Title>
                <Card.Text>
                  Checkout my GitHub
                </Card.Text>
                <a className='btn btn-secondary' href="https://github.com/dunndealpro" target="blank">GitHub</a>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={4} md={3}>
            <Card className="p-2 m-2" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={emailpic} />
              <Card.Body>
                <Card.Title>Email</Card.Title>
                <Card.Text>
                  Send me an email
                </Card.Text>
                <a className='btn btn-secondary' href="mailto:dunn.evan.f@gmail.com?subject=I would love to connect!&body=Great website and portfolio, let's chat!" target="blank">Click to Send an Email</a>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={4} md={3}>
            <Card className="p-2 m-2" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={resumepic} />
              <Card.Body>
                <Card.Title>My Resume</Card.Title>
                <Card.Text>
                  Work Experience
                </Card.Text>
                <a className='btn btn-secondary' href="public/assets/EvanDunnResume01_21_2023.pdf" download>Resume</a>
              </Card.Body>
            </Card>

          </Col>
        </Row>







      </Container >
    </div>

  );
}

export default ContactMe;