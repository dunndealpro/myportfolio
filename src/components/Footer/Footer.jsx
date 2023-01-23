import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Col, Row } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom'
import { ArrowRight } from 'react-bootstrap-icons';

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";




function Footer() {
    return (
        <div className="text-center fixed-bottom" >

            <Navbar bg="light" expand="lg">
                <Container >
                    <Col className='m-2'>
                    
                        <a className='m-2' href="https://www.linkedin.com/in/dunnevan/" target="blank"><BsLinkedin size={40} className="" /></a>
                    
                        <a className='m-2' href="https://github.com/dunndealpro" target="blank"><BsGithub size={40} className="" /></a>
                    
                        <a className='m-2' href="mailto:dunn.evan.f@gmail.com?subject=I would love to connect!&body=Great website and portfolio, let's chat!" target="blank"><MdOutlineEmail size={40} className="" /></a>
                    
                    </Col>






                </Container>
            </Navbar>
        </div>
    )
}

export default Footer;