import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Login.css';
import phoneImage from '../assets/phone.png';

const Login = () => {
  return (
    <div className="login-wrapper">
      <Container fluid className="login-container">
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6} lg={5} className="login-image">
            <img src={phoneImage} alt="Login Illustration" className="img-fluid" />
          </Col>
          <Col xs={12} md={6} lg={5} className="login-form">
            <h3>Please login to your account</h3>
            <Form>
              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="success" type="submit" className="login-button">
                Login
              </Button>

              <div className="forgot-password">
                <a href="#forgot-password">Forgot password?</a>
              </div>
            </Form>

            <div className="create-account">
              <p>Don't have an account?</p>
              <Button variant="outline-success">Create New</Button>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer">
        <p>
          Powered by <strong>Plantec Ceylon (Pvt) Ltd.</strong>
        </p>
      </div>
    </div>
  );
};

export default Login;
