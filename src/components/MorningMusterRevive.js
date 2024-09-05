import React from 'react';
import { Container, Row, Col, Button, Image, Table, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MorningMusterRevive.css';
import userIcon from '../assets/profile.png';
import maleImage from '../assets/male.png';
import femaleImage from '../assets/female.png';

const MorningMusterRevive = () => {
  return (
    <Container fluid className="muster-revive-container">
      <Row>
        <Col xs={12} md={9}>
          <h2 className="estate-title">Dunwatta Estate</h2>
          <h4 className="division-title">GC Division</h4>

          <Row className="mt-3 mb-3">
            <Col>
              <Link to="/morning-muster">
                <Button variant="success" className="muster-button">Muster</Button>
              </Link>
              <Button variant="danger" className="muster-button ml-2">Clear All</Button>
            </Col>
          </Row>

          {/* Muster Chit and Worker Tables Side by Side */}
          <Row noGutters>
            <Col md={6}>
              {/* Muster Chit Table */}
              <Table bordered className="muster-chit-table">
                <thead>
                  <tr>
                    <th colSpan="4" className="text-center">Muster Chit</th>
                  </tr>
                  <tr>
                    <th colSpan="2">Work item</th>
                    <th>Field No</th>
                    <th>No of Workers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="2">Plucking</td>
                    <td>2A</td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <td colSpan="2"></td>
                    <td>5</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td colSpan="3"><strong>Total Pluckers</strong></td>
                    <td><strong>21</strong></td>
                  </tr>
                  <tr>
                    <td colSpan="2">Chemical Weeding</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan="2">Kanganies</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan="2">Roads</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan="3"><strong>Total Tappers</strong></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan="2">Hand weeding</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan="2">Kanganies</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan="3"><strong>Total Rubber</strong></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan="2">Watcher</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan="2">Tappal</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan="2">Bungalow</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSPan="3"><strong>Total General</strong></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan="3"><strong>Grand Total of workers</strong></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </Col>

            <Col md={6} className="right-table-container">
              {/* Pluckers, Chemical Weeding, and Kangani Table */}
              <Table bordered className="right-table">
                <tbody>
                  <tr>
                    <td colSpan="2">
                      <div className="section-header">Pluckers</div>
                      <div className="section-number">Field No 2A - (15)</div>
                      <div className="workers">
                        {[...Array(15)].map((_, index) => (
                          <Image key={index} src={index % 2 === 0 ? maleImage : femaleImage} className="worker-image" />
                        ))}
                      </div>
                      <div className="section-number">Field No 5 - (6)</div>
                      <div className="workers">
                        {[...Array(6)].map((_, index) => (
                          <Image key={index} src={index % 2 === 0 ? maleImage : femaleImage} className="worker-image" />
                        ))}
                      </div>
                    </td>
                    <td className="text-right">
                      <Button variant="danger" size="sm" className="clear-button">Clear</Button>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <div className="section-header">Chemical Weeding</div>
                      <div className="section-number">Field No 9 - (3)</div>
                      <div className="workers">
                        {[...Array(3)].map((_, index) => (
                          <Image key={index} src={index % 2 === 0 ? maleImage : femaleImage} className="worker-image" />
                        ))}
                      </div>
                    </td>
                    <td className="text-right">
                      <Button variant="danger" size="sm" className="clear-button">Clear</Button>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <div className="section-header">Kangani</div>
                      <div className="section-number"></div>
                      <div className="workers">
                        <Image src={femaleImage} className="worker-image" />
                      </div>
                    </td>
                    <td className="text-right">
                      <Button variant="danger" size="sm" className="clear-button">Clear</Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Col>

        {/* Sidebar with Profile Information */}
        <Col xs={12} md={3} className="profile-sidebar">
          <Card className="profile-card">
            <Card.Body>
              <div className="profile-image-container text-center">
                <Image src={userIcon} roundedCircle className="profile-image" />
              </div>
              <div className="name-background w-100 text-center">
                <h4 className="text-white">Mr. S. Sahan</h4>
                <p className="text-white">Field Officer</p>
              </div>
              <Button variant="outline-success" className="menu-item">Messages</Button>
              <Button variant="outline-success" className="menu-item">Order Request / Return</Button>
              <Button variant="outline-success" className="menu-item">Plucking Rounds</Button>
              <Button variant="outline-success" className="menu-item">Work Program</Button>
              <Link to="/">
                <Button variant="danger" className="menu-item">Main Menu</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MorningMusterRevive;
