import React from 'react'
import './Project.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function Project() {
    return (
        <>
            <div style={{
                
                borderRadius: '16px',
                padding: '52px',
                gap: '52px',
                color: '#fff',
                alignItems: 'center',
                flexWrap: 'wrap'
            }} className='container my-5 mycontain'>
                <div className='text-center'>
                    <h1 className='heading' style={{
                        fontFamily: ' "Playfair Display",serif'
                    }}>My projects</h1>
                </div>
                <div>
                    <Row xs={1} md={3} className="g-4">
                        <Col>
                            <Card className='scard'>
                                <Card.Img variant="top" src="img18.jpeg" className='Card-img' />
                                <Card.Body>
                                    <Card.Title className='Card-title'>Todos App</Card.Title>
                                    <Card.Text>
                                    I build todo App using React,Bootstrap,Express,MongoDB for database and Node.js for Fetch data.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='scard'>
                               <Card.Img variant="top" src="img17.jpeg" className='Card-img' />
                            
                                <Card.Body>
                                    <Card.Title className='Card-title'> Portfolio Page</Card.Title>
                                    <Card.Text>
                                        I build my Portfolio using HTML and CSS.This is my introduction web page.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </div>

            </div>
        </>
    )
}

export default Project