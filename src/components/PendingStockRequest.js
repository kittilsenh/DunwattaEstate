import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import './GeneralStock.css'; // You can reuse this CSS file
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

// General border styles
const borderStyle = { border: '2px solid #333' };   // Full border on all sides
const borderLeftStyle = { borderLeft: '2px solid #333' };  // Border on the left side only
const borderRightStyle = { borderRight: '2px solid #333' };  // Border on the right side only
const borderTopStyle = { borderTop: '2px solid #333' };  // Border on the top side only
const borderBottomStyle = { borderBottom: '2px solid #333' };  // Border on the bottom side only
const borderLeftRightStyle = { borderLeft: '2px solid #333', borderRight: '2px solid #333' };  // Borders on both left and right sides
const borderTopBottomStyle = { borderTop: '2px solid #333', borderBottom: '2px solid #333' };  // Borders on both top and bottom sides
const borderLeftRightBottomStyle = { borderLeft: '2px solid #333', borderRight: '2px solid #333', borderBottom: '2px solid #333' }; // Border left, right and bottom 
const borderStyleBottomRight = { borderBottom: '2px solid #333', borderRight: '2px solid #333' };

const PendingStockRequest = () => {
  return (
    <Container fluid className="pending-stock-container">
      <Row>
        <Col xs={12}>
          <h2 className="estate-title text-center">Dunwatta Estate</h2>
          <h4 className="division-title text-center">GC Division</h4>
          <h1 className="page-title">Pending for Approval for Stock Request</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={9}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="stock request table">
              <TableHead>
                <TableRow>
                  <TableCell id="light-green-stock-general" style={borderStyle}>Division</TableCell>
                  <TableCell colSpan={8} id="light-green-stock-general" style={borderStyle}>Availability</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={borderLeftRightStyle}>GC Division</TableCell>
                  <TableCell style={borderLeftRightStyle}>Item</TableCell>
                  <TableCell style={borderLeftRightStyle}>Unit</TableCell>
                  <TableCell style={borderLeftRightStyle}>Quantity</TableCell>
                  <TableCell style={borderLeftRightStyle}>Value (Rs)</TableCell>
                  <TableCell style={borderLeftRightStyle}>Availability</TableCell>
                  <TableCell style={borderLeftRightStyle}>Approval</TableCell>
                  <TableCell style={borderLeftStyle}>Remarks</TableCell>
                  <TableCell style={borderRightStyle}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* GC Division row */}
                <TableRow>
                  <TableCell style={borderLeftRightStyle}>SS Division</TableCell>
                  <TableCell style={borderLeftRightBottomStyle}></TableCell>
                  <TableCell style={borderLeftRightBottomStyle}></TableCell>
                  <TableCell style={borderLeftRightBottomStyle}></TableCell>
                  <TableCell style={borderLeftRightBottomStyle}></TableCell>
                  <TableCell style={borderLeftRightBottomStyle}></TableCell>
                  <TableCell style={borderLeftRightBottomStyle}></TableCell>
                  <TableCell style={borderStyle}>FO</TableCell>
                  <TableCell style={borderStyle}>Manager</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={borderLeftRightStyle}>FD Division</TableCell> {/* Empty cell for Division column */}
                  <TableCell style={borderStyle}>U709</TableCell>
                  <TableCell style={borderStyle}>Kg</TableCell>
                  <TableCell style={borderStyle}>300</TableCell>
                  <TableCell style={borderStyle}>39000</TableCell>
                  <TableCell style={borderStyle}>12400</TableCell>
                  <TableCell style={borderStyle}>
                    <span className="text-success">&#10004;</span>{' '}
                    <span className="text-danger">&#10006;</span>
                  </TableCell>
                  <TableCell style={borderStyle}></TableCell>
                  <TableCell style={borderStyle}></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={borderLeftRightStyle}>MK Division</TableCell> {/* Empty cell for Division column */}
                  <TableCell style={borderStyle}>TF Mixture</TableCell>
                  <TableCell style={borderStyle}>Pkts</TableCell>
                  <TableCell style={borderStyle}>12</TableCell>
                  <TableCell style={borderStyle}>15000</TableCell>
                  <TableCell style={borderStyle}>61</TableCell>
                  <TableCell style={borderStyle}>
                    <span className="text-success">&#10004;</span>{' '}
                    <span className="text-danger">&#10006;</span>
                  </TableCell>
                  <TableCell style={borderStyle}></TableCell>
                  <TableCell style={borderStyle}></TableCell>
                </TableRow>

                {/* Other divisions */}
                <TableRow>
                  <TableCell style={{ backgroundColor: '#d6e3c8', borderRadius: '40px', ...borderLeftRightStyle }}>General Stores</TableCell>
                  <TableCell style={borderStyle}>Alawangu</TableCell>
                  <TableCell style={borderStyle}>Nos</TableCell>
                  <TableCell style={borderStyle}>1</TableCell>
                  <TableCell style={borderStyle}>6100</TableCell>
                  <TableCell style={borderStyle}>1</TableCell>
                  <TableCell style={borderStyle}>
                    <span className="text-success">&#10004;</span>{' '}
                    <span className="text-danger">&#10006;</span>
                  </TableCell>
                  <TableCell style={borderStyle}></TableCell>
                  <TableCell style={borderStyle}></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={borderLeftRightStyle}>Tea Factory</TableCell>
                  <TableCell style={borderRightStyle} colSpan={8}></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={borderLeftRightStyle}>Rubber Factory</TableCell>
                  <TableCell style={borderRightStyle} colSpan={8}></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={borderLeftRightStyle}>Cinnamon Peeling Center</TableCell> {/* Highlighted in green */}
                  <TableCell style={borderRightStyle} colSpan={8}></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={borderLeftRightStyle}>Office</TableCell>
                  <TableCell style={borderRightStyle} colSpan={8}></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={borderLeftRightStyle}></TableCell>
                  <TableCell style={borderRightStyle} colSpan={8}></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={borderLeftRightStyle}></TableCell>
                  <TableCell style={borderRightStyle} colSpan={8}></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={borderLeftRightBottomStyle}></TableCell>
                  <TableCell style={borderStyleBottomRight} colSpan={8}></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Col>

        <Col xs={3} className="profile-sidebar-stock">
          <div className="profile-stock">
            <div className="profile-image-stock"></div>
            <div className="name-background-stock w-100 text-center">
              <h4 className="text-white">Mr. Nanayakkara</h4>
              <p className="text-white">Manager</p>
            </div>
          </div>
          <div className="menu-items-stock-unique d-flex flex-column">
  <Button variant="outline-success" className="menu-item-stock-unique mb-2">
    Messages
    <span className="crop-achievement-notification-badge">2</span>
  </Button>
  <Button variant="outline-success" className="menu-item-stock-unique mb-2">Crop Achievement</Button>
  <Button variant="outline-success" className="menu-item-stock-unique mb-2">Plucking Rounds</Button>
  <Button variant="outline-success" className="menu-item-stock-unique mb-2">Work Program</Button>
  <Button variant="outline-success" className="menu-item-stock-unique mb-2">Tapping Rounds</Button>
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
