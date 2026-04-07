import React, { useState } from "react";
import { Container, Form, Button, Card, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import './authpage.css'
import Navigationbar from "../navbar/Navigationbar";
import Footer from "../Footers/Footer";
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const MySwal = withReactContent(Swal);

function Authpage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/login', { email, password });
            localStorage.setItem('token', res.data.token);
            setLoggedIn(true);

            MySwal.fire({
                title: '✅ Login Successful!',
                text: 'Welcome back ' + email,
                icon: 'success',
                customClass: {
                    popup: 'change-swal'
                }
            });

            // navigate('/contacts')
        } catch (error) {
            MySwal.fire({
                title: '❌ Login Failed',
                text: error.response?.data?.message || 'Invalid credentials',
                icon: 'error',
                customClass: {
                    popup: 'change-swal'
                }
            });
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setLoggedIn(false);
        setEmail('');

        MySwal.fire({
            title: '👋 Logged Out',
            text: 'You have been logged out successfully.',
            icon: 'info',
            timer: 2000,
            showConfirmButton: false,
            customClass: {
                popup: 'change-swal'
            }
        });
    };

    const courseFees = [
        { Qualification: 'B.Tech', Institute: 'Scope College of engineering,Bhopal', UniversityBoard: 'RGPV', Passingyear: 'running(8th sem)', Percentage: '7.09 cgpa' },
        { Qualification: 'Intermediate', Institute: 'Seth Guru Prasad Agrawal High Secondary School, Hoshangabad', UniversityBoard: 'MP Board', Passingyear: '2021', Percentage: '88%' },
        { Qualification: 'High School', Institute: 'Government High School, Sehore', UniversityBoard: 'MP Board', Passingyear: '2019', Percentage: '86%' },
    ];

    return (
        <>
            <Navigationbar />
            <div className="auth-bg">
                <Container className="d-flex justify-content-center align-items-center vh-100" data-aos="fade-up">
                    <Card className="auth-card animate-card w-100" style={{ maxWidth: "700px" }}>
                        <Card.Body>
                            <h2 className="text-center mb-4" data-aos="fade-right">{loggedIn ? 'Welcome  ' + email : '🔐 Login'}</h2>

                            {!loggedIn ? (
                                <Form onSubmit={handleLogin} autoComplete="off">
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Text>
                                                <FaEnvelope />
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                placeholder="Enter email"
                                                required
                                                value={email} onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Text>
                                                <FaLock />
                                            </InputGroup.Text>
                                            <Form.Control
                                                type={showPassword ? 'text' : 'password'}
                                                name="password"
                                                placeholder="Enter password"
                                                required
                                                value={password} onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <InputGroup.Text
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                                            </InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>
                                    <Button variant="success" className="toggle-link w-100 mb-3" type="submit">
                                        Login
                                    </Button>
                                    <p className="text-center text-light">
                                        Don't have an account?{" "}
                                        <Link to="/register" className="m-2 register">
                                            Register
                                        </Link>
                                    </p>
                                </Form>
                            ) : (
                                <>
                                    <button onClick={handleLogout} className="btn btn-outline-success w-100">Logout</button>
                                    <div className="mt-4">
                                        <h5 className="text-center mb-3">📚 Educations</h5>

                                        {/* Responsive Table Wrapper */}
                                        <div className="table-responsive" data-aos="fade-up">
                                            <table className="table table-bordered border-black table-striped fst-italic">
                                                <thead className="table-success">
                                                    <tr>
                                                        <th>Qualification</th>
                                                        <th>Institute</th>
                                                        <th>University/Board</th>
                                                        <th>Passing year</th>
                                                        <th>Percentage</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {courseFees.map((item, index) => (
                                                        <tr key={index}>
                                                            <td>{item.Qualification}</td>
                                                            <td>{item.Institute}</td>
                                                            <td>{item.UniversityBoard}</td>
                                                            <td>{item.Passingyear}</td>
                                                            <td>{item.Percentage}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </>
                            )}
                        </Card.Body>
                    </Card>
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default Authpage;
