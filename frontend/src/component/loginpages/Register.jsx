import React, { useState } from "react";
import { Container, Form, Button, Card, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import Navigationbar from "../navbar/Navigationbar";
import Footer from "../Footers/Footer";
import axios from "axios";
import Swal from "sweetalert2";
import "./register.css";

function Register() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });


  // input change handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  // password validation
  const validatePassword = (password) => {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W]).{4,}$/.test(password);
  };


  // submit handler
  const handleSubmit = async (e) => {

    e.preventDefault();

    const { name, email, password } = formData;

    if (!name || !email || !password) {
      Swal.fire("⚠️ Error", "All fields are required", "warning");
      return;
    }

    if (!validatePassword(password)) {
      Swal.fire(
        "❌ Weak Password",
        "Password must contain uppercase, lowercase, number & special character",
        "error"
      );
      return;
    }

    try {

      await axios.post("/user", formData);

      Swal.fire(
        "✅ Success",
        "Registration successful. Please login now.",
        "success"
      );

      navigate("/sign");

    } catch (error) {

      Swal.fire(
        "❌ Failed",
        error.response?.data?.message || "Registration failed",
        "error"
      );

    }

  };


  return (
    <>
      <Navigationbar />

      <div className="reg-bg ">
        <Container className="vh-100 d-flex justify-content-center align-items-center">

          <Card className="reg-card">

            <Card.Body>

              <h2 className="text-center mb-4 text-black">
                📋 Register
              </h2>

              <Form onSubmit={handleSubmit}>

                {/* username */}

                <Form.Group className="mb-3 text-white">

                  <Form.Label>Username</Form.Label>

                  <InputGroup>

                    <InputGroup.Text>
                      <FaUser />
                    </InputGroup.Text>

                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                    />

                  </InputGroup>

                </Form.Group>


                {/* email */}

                <Form.Group className="mb-3  text-white" >

                  <Form.Label>Email</Form.Label>

                  <InputGroup>

                    <InputGroup.Text>
                      <FaEnvelope />
                    </InputGroup.Text>

                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      value={formData.email}
                      onChange={handleChange}
                    />

                  </InputGroup>

                </Form.Group>


                {/* password */}

                <Form.Group className="mb-3 text-white">

                  <Form.Label>Password</Form.Label>

                  <InputGroup>

                    <InputGroup.Text>
                      <FaLock />
                    </InputGroup.Text>

                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter password"
                      value={formData.password}
                      onChange={handleChange}
                    />

                    <InputGroup.Text
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                    >
                      {
                        showPassword
                          ? <FaEyeSlash />
                          : <FaEye />
                      }

                    </InputGroup.Text>

                  </InputGroup>

                </Form.Group>


                {/* button */}

                <Button
                  variant="success"
                  className="w-100 mb-3"
                  type="submit"
                >
                  Register
                </Button>

              </Form>


              <p className="text-center text-light">

                Already have account ?

                <Link
                  to="/sign"
                  className="m-2 login"
                >
                  Login
                </Link>

              </p>

            </Card.Body>

          </Card>

        </Container>

      </div>

      <Footer />

    </>
  );

}

export default Register;