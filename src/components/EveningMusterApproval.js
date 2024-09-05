import React from 'react';
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './EveningMusterApproval.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const EveningMusterApproval = () => {
  return (
    <Container fluid className="evening-muster-approval-container">
            <div className="floating-green-div-approval">
                2A - 3.75 Ac <br></br>
                (4MD/Ac)<br></br>
                Balance - 5.25Ac<br></br>
                5 - 1.5 Ac<br></br>
                (4MD/Ac)<br></br>
                Balance - 18.5Ac<br></br>
                Total - 5.25Ac<br></br>
                (4MD/Ac)<br></br>
            </div>
      <Row>
        <Col xs={12}>
          <h2 className="estate-title">Dunwatta Estate</h2>
          <h4 className="division-title">GC Division</h4>
          <h1 className="page-title-approval">Evening Muster Approval</h1>
          <div className="muster-actions-approval">
            <Row className="mt-3 mb-3">
              <Col>
                <Link to="/morning-muster">
                  <Button variant="success" className="muster-button-approval">Muster</Button>
                </Link>
                <Button variant="danger" className="muster-button-approval ml-2">Clear All</Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={9}>
          <Table bordered className="muster-table-approval">
            <thead>
              <tr>
                <th colSpan="4"><div className="muster-chit-header-approval">Muster Chit</div></th>
                <th colSpan="6"><div id="approval-left" className="muster-chit-header-approval">Pluckers
                <span className="approval-right-icon">
                <i className="fas fa-arrow-right"></i> {/* Font Awesome right arrow icon */}
                </span>
                <span className="approval-right-text">Checkroll weight  <input type="text" className="small-input" placeholder="484"/> Field weight <input type="text" className="small-input" placeholder="540"/></span>
                </div></th>
              </tr>
            </thead>
            <tbody>
              {/* Existing Muster Chit section on the left */}
              <tr>
                <td colSpan="2"><strong>Work Item</strong></td>
                <td><strong>Field No</strong></td>
                <td><strong>No of Workers</strong></td>
                <td rowSpan={6}>
                  {/* Start of the Pluckers Section */}
                  <div className="plucker-section-approval">
                  <div className="cell-text-approval">Field NO 2A - (15)
                  <span className="approval-right-text">Checkroll weight - 302 Field weight - 340</span>
                  </div>
                    
                  

                    {/* Row 3: Image and Icons */}
                    <div className="worker-item-approval">
                      <i className="fas fa-user-tie" style={{ fontSize: '48px', color: 'black' }}></i>
                      <div className="approval-circle-icon">23</div>
                      <Button variant="success" className="success-button-approval">
                        <i className="fas fa-check"></i>
                      </Button>
                      <Button variant="dark" className="edit-button-approval">
                        <i className="fas fa-edit"></i>
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

                

              <tr>
                <td colSpan="2">Kanganies</td>
                <td></td>
                <td></td>
              </tr>

                           {/* START - Cell with, Field No, image */}
             <tr>
                <td colSpan="4"></td>
                <td colSpan="6" rowSpan={6}>
                  <div className="chemical-section-approval">
                    <div className="cell-text-approval">Field NO 9 - (13)
                    <span className="approval-right-text">Checkroll weight - 182 Field weight - 600</span>

                    </div>
                   
                    <div><br /></div>
                    <div className="worker-item-approval">
                      <i className="fas fa-user-tie" style={{ fontSize: '48px', color: 'black' }}></i>
                      <div className="approval-circle-icon">19</div>
                      <Button variant="warning" className="edit-button-approval">
                        <i className="fas fa-times"></i>
                      </Button>

                      <Button variant="dark" className="edit-button-approval">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </div>
                  </div>
                </td>
              </tr>
              {/* STOP - Cell with, Field No, image */}
              
              
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

              {/* Start Chemical Weeding Section */}
              <tr>
                <td colSpan="4"></td>
                <td colSpan="6"><div id="approval-left" className="muster-chit-header-approval"><strong>Chemical Weeding</strong>
                <span className="approval-right-icon">
                <i className="fas fa-arrow-right"></i> {/* Font Awesome right arrow icon */}
                </span>
                </div></td>
              </tr>
              <tr>
                <td colSpan="4"></td>
                <td colSpan="6" rowSpan={5}>
                  <div className="chemical-section-approval">
                    <div className="cell-text-approval">Field NO 9 - (3)</div>
                    <div className="worker-item-approval">
                      <i className="fas fa-user-tie" style={{ fontSize: '48px', color: 'black' }}></i>
                      <Button variant="success" className="success-button-approval">
                        <i className="fas fa-check"></i>
                      </Button>
                      <Button variant="dark" className="edit-button-approval">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </div>
                  </div>
                </td>
              </tr>
              {/* STOP Chemical Weeding Section */}
              
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

               {/* Start Chemical Weeding Section */}
               <tr>
                <td colSpan="4"></td>
                <td colSpan="6"><div id="approval-left" className="muster-chit-header-approval"><strong>Kangani</strong>                
                <span className="approval-right-icon">
                <i className="fas fa-arrow-right"></i> {/* Font Awesome right arrow icon */}
                </span>
                </div>
                </td>
              </tr>
              <tr>
                <td colSpan="4"></td>
                <td colSpan="6" rowSpan={6}>
                  <div className="chemical-section-approval">
                    <div className="worker-item-approval">
                      <i className="fas fa-user-tie" style={{ fontSize: '48px', color: 'black' }}></i>
                      
                    </div>
                  </div>
                </td>
              </tr>
              {/* STOP Chemical Weeding Section */}
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

        <Col xs={3} className="profile-sidebar-approval">
          <div className="profile-approval">
            <div className="profile-image-approval"></div>
            <div className="name-background-approval w-100 text-center">
              <h4 className="text-white">Mr.Nanayakkara</h4>
              <p className="text-white">Manager</p>
            </div>
          </div>
          <div className="menu-items-approval">
            <Button variant="outline-success" className="menu-item-approval">Messages</Button>
            <Button variant="outline-success" className="menu-item-approval">Order Request / Return</Button>
            <Button variant="outline-success" className="menu-item-approval">Plucking Rounds</Button>
            <Button variant="outline-success" className="menu-item-approval">Work Program</Button>
            <Button variant="outline-success" className="menu-item-approval">Tapping Rounds</Button>
          </div>
          <div className="action-buttons-approval">
            <Button variant="success" className="submit-button-approval">Submit</Button>
            <Button variant="warning" className="return-button-approval">Return</Button>
            <Link to="/">
              <Button variant="danger" className="main-menu-button-approval">Main Menu</Button>
            </Link>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className="footer-approval">
          <p>Powered by <strong>Plantec Ceylon (Pvt) Ltd.</strong></p>
        </Col>
      </Row>
    </Container>
  );
};

export default EveningMusterApproval;
