import React from 'react';
import { Container, Row, Col, Button, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link
import './MorningMuster.css';
import userIcon from '../assets/profile.png';
import maleImage from '../assets/male.png'
import femaleImage from '../assets/female.png'

const MorningMuster = () => {
  return (
    <Container fluid className="muster-container">
      <Row>
        <Col xs={12} md={9}>
            {/* Main title */}
            <h2 className="estate-title">Dunwatta Estate</h2>
          <h4 className="division-title">GC Division</h4>
          <h2>Morning Muster</h2>
          <Link to="/morning-muster-revive">
            <Button variant="success" className="muster-button">Review Muster</Button>
          </Link>

        <div className="floating-div">
            <Image src={maleImage} roundedCircle className="worker-image"/>
            <div className="red-dot">X</div>
            <Image src={femaleImage} roundedCircle className="worker-image"/>
            <div className="red2-dot">X</div>
        </div>

          {/* Tabs for Tea, Rubber, Cinnamon, General */}
          <Nav variant="tabs" defaultActiveKey="#tea" className="muster-tabs">
            <Nav.Item>
              <Nav.Link href="#tea">Tea</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#rubber">Rubber</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#cinnamon">Cinnamon</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#general">General</Nav.Link>
            </Nav.Item>
          </Nav>

          {/* Field No and Work Items */}
          <Row className="field-row">
            <Col xs={2} className="field-no">
              <div>Field No :</div>
              <div>1</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
              <div>11</div>
              <div>12</div>
              <div>1A</div>
              <div>1B</div>
              <div>1C</div>
              <div>1D</div>
              <div>2A</div>
              <div>5</div>
              <div>Division</div>
            </Col>
            <Col xs={4} className="work-items">
              <div className="work-item-header">
                <div><strong>Work Items</strong></div>
                <div>Plucking</div>
                <div>Kangani</div>
                <div>Sackcooli</div>
                <div>Transport</div>
                <div>Fertilizer</div>
                <div>Chemical Weeding</div>
                <div>Manual Weeding</div>
                <div>Roads & Boundaries</div>
                <div>Drains</div>
                <div>Terracing</div>
                <div>Tipping</div>
              </div>
            </Col>
            <Col xs={5}>
              <Row>
                <Col className="pluckers-section">
                  <div><strong>Pluckers</strong></div>
                  <div className="worker-section"></div>
                  <Image src={maleImage} roundedCircle className="worker-image"/>
                  <Image src={femaleImage} roundedCircle className="worker-image"/>
                  <Image src={maleImage} roundedCircle className="worker-image"/>
                  <Image src={femaleImage} roundedCircle className="worker-image"/>
                  <Image src={maleImage} roundedCircle className="worker-image"/>
                  <Image src={femaleImage} roundedCircle className="worker-image"/>
                  <Image src={maleImage} roundedCircle className="worker-image"/>
                  <Image src={femaleImage} roundedCircle className="worker-image"/>
                </Col>
              </Row>
              <Row>
                <Col className="sundry-section">
                  <div><strong>Sundry</strong></div>
                  <Image src={maleImage} roundedCircle className="worker-image"/>
                  <Image src={femaleImage} roundedCircle className="worker-image"/>
                  <Image src={femaleImage} roundedCircle className="worker-image"/>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>

        <Col xs={12} md={3} className="profile-sidebar">
          <div className="profile">
            <img src={userIcon} alt="Profile" className="profile-image" />
            <div className="name-background">
            <div className="name-background w-100 text-center">
                <h4 className="text-white">Mr. S. Sahan</h4>
                <p className="text-white">Field Officer</p>
              </div>
            </div>
          </div>
          <div className="menu-items">
            <Button variant="outline-success" className="menu-item">Messages</Button>
            <Button variant="outline-success" className="menu-item">Order Request / Return</Button>
            <Button variant="outline-success" className="menu-item">Plucking Rounds</Button>
            <Button variant="outline-success" className="menu-item">Work Program</Button>
            <Button variant="outline-success" className="menu-item">Correspondence</Button>
            <Link to="/">
            <Button variant="danger" className="menu-item">Main Menu</Button>
            </Link>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="footer">
          <p>Powered by <strong>Plantec Ceylon (Pvt) Ltd.</strong></p>
        </Col>
      </Row>
    </Container>
  );
};

export default MorningMuster;
