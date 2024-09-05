import React from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './GeneralStock.css'; // You can reuse this CSS file
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const PendingStockRequest = () => {
  return (
    <Container fluid className="pending-stock-container">
      <Row>
        <Col>
          <h2 className="estate-title text-center">Dunwatta Estate</h2>
          <h4 className="division-title text-center">GC Division</h4>
          <h1 className="page-title">Pending for approval for Stock request</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={9}>
          <Table bordered hover className="stock-table">
            <thead>
              <tr>
                <th id="light-green-stock-general">Division</th>
                <th id="light-green-stock-general">Availability</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="division-cell">GC Division</td>
                <td rowSpan="9">
                  <Table bordered size="sm" className="inner-table-pending">
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Unit</th>
                        <th>Quantity</th>
                        <th>Value (Rs)</th>
                        <th>Availability</th>
                        <th>Approval</th>
                        <th>Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>U709</td>
                        <td>Kg</td>
                        <td>300</td>
                        <td>39000</td>
                        <td>12400</td>
                        <td>
                          <span className="text-success">&#10004;</span>{' '}
                          <span className="text-danger">&#10006;</span>
                        </td>
                        <td>FO</td>
                      </tr>
                      <tr>
                        <td>TF Mixture</td>
                        <td>Pkts</td>
                        <td>12</td>
                        <td>15000</td>
                        <td>61</td>
                        <td>
                          <span className="text-success">&#10004;</span>{' '}
                          <span className="text-danger">&#10006;</span>
                        </td>
                        <td>FO</td>
                      </tr>
                      <tr>
                        <td>Alawangu</td>
                        <td>Nos</td>
                        <td>1</td>
                        <td>6100</td>
                        <td>1</td>
                        <td>
                          <span className="text-success">&#10004;</span>{' '}
                          <span className="text-danger">&#10006;</span>
                        </td>
                        <td>Manager</td>
                      </tr>
                    </tbody>
                  </Table>
                </td>
              </tr>
              <tr>
                <td className="division-cell">SS Division</td>
              </tr>
              <tr>
                <td className="division-cell">FD Division</td>
              </tr>
              <tr>
                <td className="division-cell">MK Division</td>
              </tr>
              <tr>
                <td className="division-cell">General Stores</td>
              </tr>
              <tr>
                <td className="division-cell">Tea Factory</td>
              </tr>
              <tr>
                <td className="division-cell">Rubber Factory</td>
              </tr>
              <tr>
                <td className="division-cell">Cinnamon Peeling Center</td>
              </tr>
              <tr>
                <td className="division-cell">Office</td>
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

export default PendingStockRequest;
