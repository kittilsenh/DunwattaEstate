import React from 'react';
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './EveningMuster.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome


const EveningMuster = () => {
  return (
    <Container fluid className="evening-muster-container">
      <Row>
        <Col xs={12}>
        <h2 className="estate-title">Dunwatta Estate</h2>
          <h4 className="division-title">GC Division</h4>
          <h1 className="page-title">Evening Muster</h1>
          <div className="muster-actions">
            <Row className="mt-3 mb-3">
              <Col>
                <Link to="/morning-muster">
                  <Button variant="success" className="muster-button">Muster</Button>
                </Link>
                <Button variant="danger" className="muster-button ml-2">Clear All</Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={9}>
          <Table bordered className="muster-table">
            <thead>
              <tr>
                <th colSpan="4"><div className="muster-chit-header">Muster Chit</div></th>
                <th colSpan="4"><div className="muster-chit-header">Pluckers</div></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="2"><strong>Work Item</strong></td>
                <td><strong>Field No</strong></td>
                <td><strong>No of Workers</strong></td>
                <td rowSpan={11}>
                  <div className="plucker-section">
                  <div className="cell-text">Field No 2A - (15)</div>

                  <div class="floating-box">
                              <label>
                                2A - <input type="checkbox"/> AC
                                <br></br>
                                5  - <input type="checkbox"/> AC
                              </label>
                            </div>

                  <div><br></br></div>
                    <div className="worker-item">
                    <i className="fas fa-user-tie" style={{ fontSize: '48px', color: 'black' }}></i>
                    <Button variant="dark" className="edit-button">
                            <i className="fas fa-edit"></i> {/* Black edit icon */}
                    </Button>
                      <Form.Control type="number" placeholder="AM" className="am-input" />
                      <Form.Control type="number" placeholder="PM" className="pm-input" />
                      <Button variant="warning" className="edit-button">
        <i className="fas fa-times"></i> {/* Edit icon */}
      </Button>
      <Button variant="danger" className="delete-button">
        <i className="fas fa-trash-alt"></i> {/* Delete icon */}
      </Button>
      <Button variant="success" className="success-button">
        <i className="fas fa-check"></i> {/* Success icon */}
      </Button>
                    </div>
                    <div className="worker-item">
                    <i className="fas fa-user-nurse" style={{ fontSize: '48px', color: 'black' }}></i>
                    <Button variant="dark" className="edit-button">
                        <i className="fas fa-edit"></i> {/* Black edit icon */}
                    </Button>
                      <Form.Control type="number" placeholder="AM" className="am-input" />
                      <Form.Control type="number" placeholder="PM" className="pm-input" />
                      <Button variant="warning" className="edit-button">
        <i className="fas fa-times"></i> {/* Edit icon */}
      </Button>
      <Button variant="danger" className="delete-button">
        <i className="fas fa-trash-alt"></i> {/* Delete icon */}
      </Button>
      <Button variant="success" className="success-button">
        <i className="fas fa-check"></i> {/* Success icon */}
      </Button>
                    </div>
                  </div>
                </td>
              </tr>
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

              {/* Other rows remain unchanged */}
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
                <td colSpan="3"><strong>Total Tea</strong></td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="2">Tapping</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="2"></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="2"></td>
                <td></td>
                <td></td>
              </tr>
              {/* Chemical Weeding Header Cell */}
           
              <tr>
                <td colSpan="4"></td> {/* Empty cells to align the Chemical Weeding header */}
                <td colSpan="4"><div className="muster-chit-header"><strong>Chemical Weeding</strong></div></td>
              </tr>
           
              <tr>
                <td colSpan="4"></td> {/* Empty cells to align the Chemical Weeding worker section */}
                <td rowSpan={11}>
                  <div className="chemical-section">
                    
                  <div className="cell-text">Field NO 9 - (3)</div>
                  <div class="floating-box">
                              <label>
                                2A - <input type="checkbox"/> AC
                                <br></br>
                                Chemical QTA
                              </label>
                            </div>
                  <div><br></br></div>
                    <div className="worker-item">
                    <i className="fas fa-user-tie" style={{ fontSize: '48px', color: 'black' }}></i>
                      <Button variant="dark" className="edit-button">
        <i className="fas fa-edit"></i> {/* Black edit icon */}
      </Button>
                      <Button variant="warning" className="edit-button">
                      <i className="fas fa-times"></i> {/* Edit icon */}
                    </Button>
                    <Button variant="danger" className="delete-button">
                      <i className="fas fa-trash-alt"></i> {/* Delete icon */}
                    </Button>
                    <Button variant="success" className="success-button">
                      <i className="fas fa-check"></i> {/* Success icon */}
                    </Button>
                    </div>
                    <div><br></br></div>
                    <div className="worker-item">
                    <i className="fas fa-user-nurse" style={{ fontSize: '48px', color: 'black' }}></i>
    <Button variant="dark" className="edit-button">
        <i className="fas fa-edit"></i> {/* Black edit icon */}
    </Button>
      <Button variant="warning" className="edit-button">
        <i className="fas fa-times"></i> {/* Edit icon */}
      </Button>
      <Button variant="danger" className="delete-button">
        <i className="fas fa-trash-alt"></i> {/* Delete icon */}
      </Button>
      <Button variant="success" className="success-button">
        <i className="fas fa-check"></i> {/* Success icon */}
      </Button>
    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="3"><strong>Total Tappers</strong></td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="2">Hand Weeding</td>
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
                <td colSpan="3"><strong>Total General</strong></td>
                <td></td>
              </tr>
              <tr>
                <td colSpan="3"><strong>Grand Total of Workers</strong></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Col>

        <Col xs={3} className="profile-sidebar">
          <div className="profile">
            <div className="profile-image"></div>
            <div className="name-background w-100 text-center">
                <h4 className="text-white">Mr. S. Sahan</h4>
                <p className="text-white">Field Officer</p>
              </div>
          </div>
          <div className="menu-items">
            <Button variant="outline-success" className="menu-item">Messages</Button>
            <Button variant="outline-success" className="menu-item">Order Request / Return</Button>
            <Button variant="outline-success" className="menu-item">Plucking Rounds</Button>
            <Button variant="outline-success" className="menu-item">Work Program</Button>
            <Button variant="outline-success" className="menu-item">Tapping Rounds</Button>
          </div>
          <div className="action-buttons">
            <Button variant="success" className="submit-button">Submit</Button>
            <Button variant="warning" className="edit-button">Edit</Button>
            <Link to="/">
            <Button variant="danger" className="main-menu-button">Main Menu</Button>
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

export default EveningMuster;
