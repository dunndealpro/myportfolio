import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Image from "react-bootstrap/Image";
import profilepic from './DSC_2560.jpg'


function Home() {
  return (
    <div>
      <Container className="mt-5 p-2 ">
        <Row className='m-2 align-items-center'>
          <Col xs={12} sm={4} md={4}>
          <Image fluid className='align-items-center rounded' src={profilepic} alt="..." />          
          </Col>
          <Col>
          <div className="text-center">
            <p className="fs-2 m-1 p-1">
              Software Engineer - Lighting Designer - Production Manager
            </p>
            <p className="fs-3 fw-semibold">
              San Diego, California
            </p>
          </div>
          </Col>
        </Row>
      </Container>


    </div>


  );
}

export default Home;