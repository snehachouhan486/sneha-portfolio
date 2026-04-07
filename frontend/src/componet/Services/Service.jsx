import './services.css'

import { FaCode, FaServer, FaGitAlt } from "react-icons/fa";

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Service() {

return (

<div className="services-section container my-5">

<h1 className="services-heading ">My Services</h1>

<Row xs={1} md={3} className="g-4">

<Col>

<Card className="scard">

<div className="service-icon">
<FaCode />
</div>

<Card.Body>

<Card.Title className="card-title text-white">
Frontend Development
</Card.Title>

<Card.Text>

Building responsive modern UI using HTML, CSS,
JavaScript and React with smooth user experience.

</Card.Text>

</Card.Body>

</Card>

</Col>


<Col>

<Card className="scard">

<div className="service-icon">
<FaServer />
</div>

<Card.Body>

<Card.Title className="card-title text-white">
Backend Development
</Card.Title>

<Card.Text>

Creating secure APIs, handling databases,
and managing server-side logic efficiently.

</Card.Text>

</Card.Body>

</Card>

</Col>


<Col>

<Card className="scard">

<div className="service-icon">
<FaGitAlt />
</div>

<Card.Body>

<Card.Title className="card-title text-white">
Git & GitHub
</Card.Title>

<Card.Text>

Using Git & GitHub for managing projects,
tracking changes and team collaboration.

</Card.Text>

</Card.Body>

</Card>

</Col>

</Row>

</div>

)

}

export default Service