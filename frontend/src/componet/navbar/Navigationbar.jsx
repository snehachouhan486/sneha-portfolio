import React from 'react'
import "./navbar.css"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { Link } from 'react-router-dom'
import { FaHome, FaUser, FaEnvelope, FaProjectDiagram, FaTools } from "react-icons/fa";

function Navigationbar() {
  return (
    <>
      {['xl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>

            {/* LOGO */}
            <Navbar.Brand as={Link} to="/" className='fw-bold mx-2 text-success'>
              <img
                alt="logo"
                src="./img1.jpeg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              <span className='mx-3 nav-head'>SNEHA</span>
            </Navbar.Brand>

            {/* TOGGLE */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

            {/* OFFCANVAS */}
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  SNEHA
                </Offcanvas.Title>
              </Offcanvas.Header>

         <Offcanvas.Body className="custom-offcanvas">

                {/* NAV LINKS */}
                <Nav className="justify-content-center flex-grow-1 pe-2">
                  <Nav.Link as={Link} to="/">
                    <FaHome /> <span>Home</span>
                  </Nav.Link>

                  <Nav.Link as={Link} to="/about">
                    <FaUser /> <span>About</span>
                  </Nav.Link>

                  <Nav.Link as={Link} to="/skills">
                    <FaTools /> <span>Skills</span>
                  </Nav.Link>

                  <Nav.Link as={Link} to="/projects">
                    <FaProjectDiagram /> <span>Projects</span>
                  </Nav.Link>

                  <Nav.Link as={Link} to="/contacts">
                    <FaEnvelope /> <span>Contact</span>
                  </Nav.Link>
                </Nav>

                {/* BUTTON FIXED */}
                <Link to='/register'>
                  <Button
                    variant="outline-success"
                    className='text-white mx-md-3 my-2 my-sm-0'
                  >
                    Register
                  </Button>
                </Link>

              </Offcanvas.Body>
            </Navbar.Offcanvas>

          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default Navigationbar