import React from 'react'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Cardsskill.css';

import { FaCode } from "react-icons/fa";
import { SiBackendless } from "react-icons/si";
import { GrDatabase } from "react-icons/gr";
import { CiSliderVertical } from "react-icons/ci";

import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Cardsskill() {
  return (
    <>
      <div className='container rounded-4 p-3 my-5' style={{ backgroundColor: '#205960' }}>
        <h1 className='text-center'>I Specialize In a</h1>
        <h1 className='text-center head'>Range Of 💪Skills</h1>

        <Row xs={1} md={3} className="g-4 my-3">
          <Col>
            <Card className='skill-card'>
              <Card.Img variant="top" src="./img11.jpg" className='Card-img' />
              <Card.Header className='header'><FaCode className='database' /></Card.Header>
              <Card.Body>
                <Card.Title className='Card-title'>Frontend Development</Card.Title>
                <Card.Text className='text-white'>
                  I am expert in HTML5, CSS3, JavaScript(ES6+), React.js, Bootstrap.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className='skill-card'>
              <Card.Img variant="top" src="./img13.jpg" className='Card-img' />
              <Card.Header className='header'><SiBackendless className='database' /></Card.Header>
              <Card.Body>
                <Card.Title className='Card-title'>Backend Development</Card.Title>
                <Card.Text className='text-white'>
                  I am expert in Node.js, Express, JavaScript.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className='skill-card'>
              <Card.Img variant="top" src="./img14.jpg" className='Card-img' />
              <Card.Header className='header'><GrDatabase className='database' /></Card.Header>
              <Card.Body>
                <Card.Title className='Card-title text-black'>Database Management</Card.Title>
                <Card.Text className='text-white'>
                  I am expert in MongoDB, MySQL.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className='skill-card'>
              <Card.Img variant="top" src="./img15.png" className='Card-img' />
              <Card.Header className='header'><CiSliderVertical className='database' /></Card.Header>
              <Card.Body>
                <Card.Title className='Card-title text-black'>Version Control</Card.Title>
                <Card.Text className='text-white'>
                  I am expert in Git & GitHub.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      {/* SKILLS SECTION */}
      <div>
        <Container className='my-5'>
          <h1 className='text-center cont-head'>MY SKILLS</h1>

          <Row>
            {/* LEFT */}
            <Col>
              <div className='mb-3'>
                <h5 className='stexth5 text-white'>HTML</h5>
                <div className='d-flex align-items-center'>
                  <span className='me-2'>95%</span>
                  <ProgressBar className='w-75' variant='success' animated now={95} />
                </div>
              </div>

              <div className='mb-3'>
                <h5 className='stexth5 text-white'>CSS</h5>
                <div className='d-flex align-items-center'>
                  <span className='me-2'>85%</span>
                  <ProgressBar className='w-75' variant='success' animated now={85} />
                </div>
              </div>

              <div className='mb-3'>
                <h5 className='stexth5 text-white'>JAVASCRIPT</h5>
                <div className='d-flex align-items-center'>
                  <span className='me-2'>60%</span>
                  <ProgressBar className='w-75' variant='success' animated now={60} />
                </div>
              </div>

              <div className='mb-3'>
                <h5 className='stexth5 text-white'>REACT JS</h5>
                <div className='d-flex align-items-center'>
                  <span className='me-2'>80%</span>
                  <ProgressBar className='w-75' variant='success' animated now={80} />
                </div>
              </div>

              <div className='mb-3'>
                <h5 className='stexth5 text-white'>MONGODB</h5>
                <div className='d-flex align-items-center'>
                  <span className='me-2'>60%</span>
                  <ProgressBar className='w-75' variant='success' animated now={60} />
                </div>
              </div>
            </Col>

            {/* RIGHT */}
            <Col xs={6} md={6}>
              <div className='mb-3'>
                <h5 className='stexth5 text-white'>EXPRESS</h5>
                <div className='d-flex align-items-center'>
                  <span className='me-2'>60%</span>
                  <ProgressBar className='w-75' variant='success' animated now={60} />
                </div>
              </div>

              <div className='mb-3'>
                <h5 className='stexth5 text-white'>NODE JS</h5>
                <div className='d-flex align-items-center'>
                  <span className='me-2'>75%</span>
                  <ProgressBar className='w-75' variant='success' animated now={75} />
                </div>
              </div>

              <div className='mb-3'>
                <h5 className='stexth5 text-white'>MYSQL</h5>
                <div className='d-flex align-items-center'>
                  <span className='me-2'>70%</span>
                  <ProgressBar className='w-75' variant='success' animated now={70} />
                </div>
              </div>

              <div className='mb-3'>
                <h5 className='stexth5 text-white'>GIT & GITHUB</h5>
                <div className='d-flex align-items-center'>
                  <span className='me-2'>85%</span>
                  <ProgressBar className='w-75' variant='success' animated now={85} />
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </div>
    </>
  )
}

export default Cardsskill;