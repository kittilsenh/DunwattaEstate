import React from 'react';
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './GeneralStock.css'; // Update the CSS file
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const GeneralStock = () => {
  return (
    <Container fluid className="general-stock-container">
      
      <Row>
            <h2 className="estate-title">Dunwatta Estate</h2>
            <h4 className="division-title">GC Division</h4>
            <h1>General Stock</h1>

        {/* Insert table here */}
        <Col xs={9}>
          <Table bordered hover className="stock-table">
            <thead>
              <tr>
                <th id="light-green-stock-general">Item Catagory</th>
                <th id="light-green-stock-general">Availability</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>B Stock</td>
                <td rowSpan="10">
                  <Table bordered size="sm" className="inner-table">
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Unit</th>
                        <th>Quantity</th>
                        <th colSpan="2">Pending Order</th>
                        <th>Value</th>
                        <th>Remarks</th>
                      </tr>
                      <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>By</th>
                        <th>Qty</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>U709</td>
                        <td>Kg</td>
                        <td>12400</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Dolomite</td>
                        <td>Kg</td>
                        <td>6200</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>TF Mixture</td>
                        <td>pkts</td>
                        <td>61</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Urea</td>
                        <td>Kg</td>
                        <td>75</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Zinc</td>
                        <td>Kg</td>
                        <td>47</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Epsamsalt</td>
                        <td>Kg</td>
                        <td>10</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>ERP</td>
                        <td>Kg</td>
                        <td>320</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>MOP</td>
                        <td>Kg</td>
                        <td>198</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Kieserite</td>
                        <td>Kg</td>
                        <td>150</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td colSpan="5"><strong>Total Value of Fertilizers</strong></td>
                        <td colSpan="1"></td>
                    
                      </tr>
                    </tbody>
                  </Table>
                
                
                </td>
              </tr>
              <tr>
                <td>Tyre</td>
              </tr>
              <tr>
                <td>Tools</td>
              </tr>
              <tr>
                <td>Fertilizer</td>
              </tr>
              <tr>
                <td>Fuel</td>
              </tr>
              <tr>
                <td>PPE</td>
              </tr>
              <tr>
                <td>Vehicle Parts</td>
              </tr>
              <tr>
                <td>Stationaries</td>
              </tr>
              <tr>
                <td>Chemicals</td>
              </tr>
              <tr>
                <td>Furniture</td>
              </tr>
            </tbody>
          </Table>
        </Col>

        <Col xs={3} className="profile-sidebar-stock">
          <div className="profile-stock">
            <div className="profile-image-stock"></div>
            <div className="name-background-stock w-100 text-center">
              <h4 className="text-white">Mr. Nanayakkara</h4>
              <p className="text-white">Manager</p>
            </div>
          </div>
          <div className="menu-items-stock">
            <Button variant="outline-success" className="menu-item-stock">Messages</Button>
            <Button variant="outline-success" className="menu-item-stock">Order Request / Return</Button>
            <Button variant="outline-success" className="menu-item-stock">Item Rounds</Button>
            <Button variant="outline-success" className="menu-item-stock">Work Program</Button>
            <Button variant="outline-success" className="menu-item-stock">Tool Rounds</Button>
          </div>
          <div className="action-buttons-stock">
            <Button variant="success" className="submit-button-stock">Submit</Button>
            <Button variant="warning" className="return-button-stock">Return</Button>
            <Link to="/">
              <Button variant="danger" className="main-menu-button-stock">Main Menu</Button>
            </Link>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className="footer-stock">
          <p>Powered by <strong>Plantec Ceylon (Pvt) Ltd.</strong></p>
        </Col>
      </Row>
    </Container>
  );
};

export default GeneralStock;
