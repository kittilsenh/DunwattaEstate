import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import './GeneralStock.css'; // Custom CSS

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




const GeneralStock = () => {
  return (
    <Container fluid className="general-stock-container-unique">
      <Row>
        <Col xs={12}>
          <h2 className="estate-title">Dunwatta Estate</h2>
          <h4 className="division-title">GC Division</h4>
          <h1 className="general-stock-title-unique">General Stock</h1>
        </Col>
      </Row>

      {/* Main Content and Sidebar */}
      <Row>
        {/* Main Content */}
        <Col xs={12} md={10}>
          <div className="table-container inventoryTable-container">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell colSpan={3} className="inventoryTable-categoryHeader" style={{ backgroundColor: '#d0e5d3', fontWeight: 'bold', ...borderStyle }}>Item Category</TableCell>
                    <TableCell colSpan={7} className="inventoryTable-availabilityHeader" style={{ backgroundColor: '#d0e5d3', fontWeight: 'bold', textAlign: 'center', ...borderStyle }}>Availability</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={3} style={borderLeftRightStyle}>B Stock</TableCell>
                    <TableCell style={{ borderLeftRightStyle, textAlign: 'center' }}>Item</TableCell>
                    <TableCell style={{ textAlign: 'center', ...borderLeftRightStyle }}>Unit</TableCell>
                    <TableCell style={{ textAlign: 'center', ...borderLeftRightStyle }}>Quantity</TableCell>
                    <TableCell colSpan={2} rowSpan={1} style={{ textAlign: 'center', ...borderStyle }}>Pending Order</TableCell>
                    <TableCell style={{ textAlign: 'center', ...borderLeftRightStyle }}>Value</TableCell>
                    <TableCell style={{ textAlign: 'center', ...borderLeftRightStyle }}>Remarks</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={3} style={borderLeftRightStyle}>Tyre</TableCell>
                    <TableCell style={borderLeftRightBottomStyle}></TableCell>
                    <TableCell style={borderLeftRightBottomStyle}></TableCell>
                    <TableCell style={borderLeftRightBottomStyle}></TableCell>
                    <TableCell style={borderStyle}>By</TableCell>
                    <TableCell style={borderStyle}>Qty</TableCell>
                    <TableCell style={borderLeftRightBottomStyle}></TableCell>
                    <TableCell style={borderLeftRightBottomStyle}></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={3} style={borderLeftRightStyle}>Tools</TableCell>
                    <TableCell style={borderStyle}>U709</TableCell>
                    <TableCell style={borderStyle}>Kg</TableCell>
                    <TableCell style={borderStyle}>12400</TableCell>
                    <TableCell style={borderStyle}></TableCell>
                    <TableCell style={borderStyle}></TableCell>
                    <TableCell style={borderStyle}></TableCell>
                    <TableCell style={borderStyle}></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={3} style={borderLeftRightStyle}>Fertilizer</TableCell>
                    <TableCell style={borderStyle}>Dolomite</TableCell>
                    <TableCell style={borderStyle}>Kg</TableCell>
                    <TableCell style={borderStyle}>6200</TableCell>
                    <TableCell style={borderStyle}></TableCell>
                    <TableCell style={borderStyle}></TableCell>
                    <TableCell style={borderStyle}></TableCell>
                    <TableCell style={borderStyle}></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={3} style={borderLeftRightStyle}>Fuel</TableCell>
                    <TableCell style={borderStyle}>TF Mixture</TableCell>
                    <TableCell style={borderStyle}>Pkts</TableCell>
                    <TableCell style={borderStyle}>61</TableCell>
                    <TableCell style={borderStyle}></TableCell>
                    <TableCell style={borderStyle}></TableCell>
                    <TableCell style={borderStyle}></TableCell>
                    <TableCell style={borderStyle}></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={3} style={borderLeftRightStyle}>PPE</TableCell>
                    <TableCell style={borderStyle}>Urea</TableCell>
                    <TableCell style={borderStyle}>Kg</TableCell>
                    <TableCell style={borderStyle}>75</TableCell>
                    <TableCell style={borderStyle}></TableCell>
                    <TableCell style={borderStyle}></TableCell>
                    <TableCell style={borderStyle}></TableCell>
                    <TableCell style={borderStyle}></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={3} style={borderLeftRightStyle}>Vehicle Parts</TableCell>
                    <TableCell style={borderStyle}>Zinc</TableCell>
                    <TableCell style={borderStyle}>Kg</TableCell>
                    <TableCell style={borderStyle}>47</TableCell>
                    <TableCell style={borderStyle}></TableCell>
                    <TableCell style={borderStyle}></TableCell>
                    <TableCell style={borderStyle}></TableCell>
                    <TableCell style={borderStyle}></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={3} style={borderLeftRightStyle}>Stationaries</TableCell>
                    <TableCell style={borderStyle}>Epsamsalt</TableCell>
                    <TableCell style={borderStyle}>Kg</TableCell>
                    <TableCell style={borderStyle}>10</TableCell>
                    <TableCell style={borderStyle}></TableCell>
                    <TableCell style={borderStyle}></TableCell>
                    <TableCell style={borderStyle}></TableCell>
                    <TableCell style={borderStyle}></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={3} style={borderLeftRightStyle}>Chemicals</TableCell>
                    <TableCell style={borderStyle}>ERP</TableCell>
                    <TableCell style={borderStyle}>Kg</TableCell>
                    <TableCell style={borderStyle}>320</TableCell>
                    <TableCell style={borderStyle}></TableCell>
                    <TableCell style={borderStyle}></TableCell>
                    <TableCell style={borderStyle}></TableCell>
                    <TableCell style={borderStyle}></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={3} style={borderLeftRightStyle}>Furniture</TableCell>
                    <TableCell style={borderStyle}>MOP</TableCell>
                    <TableCell style={borderStyle}>Kg</TableCell>
                    <TableCell style={borderStyle}>198</TableCell>
                    <TableCell style={borderStyle}></TableCell>
                    <TableCell style={borderStyle}></TableCell>
                    <TableCell style={borderStyle}></TableCell>
                    <TableCell style={borderStyle}></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={3} style={borderLeftRightStyle}></TableCell>
                    <TableCell style={borderStyle}>Kieserite</TableCell>
                    <TableCell style={borderStyle}>Kg</TableCell>
                    <TableCell style={borderStyle}>150</TableCell>
                    <TableCell style={borderStyle}></TableCell>
                    <TableCell style={borderStyle}></TableCell>
                    <TableCell style={borderStyle}></TableCell>
                    <TableCell style={borderStyle}></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={3} style={borderLeftRightStyle}></TableCell>
                    <TableCell style={borderTopStyle}></TableCell>
                    <TableCell style={borderTopStyle}></TableCell>
                    <TableCell style={borderTopStyle}></TableCell>
                    <TableCell style={borderTopStyle}></TableCell>
                    <TableCell style={borderRightStyle}></TableCell>
                    <TableCell style={borderRightStyle}></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={3} style={borderLeftRightBottomStyle}></TableCell>
                    <TableCell colSpan={3} style={borderBottomStyle}></TableCell>
                    <TableCell colSpan={2} style={{ ...borderStyleBottomRight, fontSize: '18px' }}><strong>Total Value Of Fertilizers</strong></TableCell>

                    <TableCell style={borderStyleBottomRight}></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Col>

        {/* Sidebar */}
        <Col xs={12} md={2} className="profile-sidebar-stock-unique">
          <div className="profile-stock-unique">
            <div className="profile-image-stock-unique"></div>
            <div className="name-background-stock-unique w-100 text-center">
              <h4 className="text-white">Mr. Nanayakkara</h4>
              <p className="text-white">Manager</p>
            </div>
          </div>
          <div className="menu-items-stock-unique">
            <Button variant="outline-success" className="menu-item-stock-unique">Messages</Button>
            <Button variant="outline-success" className="menu-item-stock-unique">Crop Achievement</Button>
            <Button variant="outline-success" className="menu-item-stock-unique">Plucking Rounds</Button>
            <Button variant="outline-success" className="menu-item-stock-unique">Work Program</Button>
            <Button variant="outline-success" className="menu-item-stock-unique">Tapping Rounds</Button>
            <Button variant="outline-success" className="menu-item-stock-unique">Pending Approvals</Button>
          </div>
          <div className="action-buttons-stock-unique">
            <Button variant="success" className="submit-button-stock-unique">Submit</Button>
            <Button variant="warning" className="return-button-stock-unique">Return</Button>
            <Link to="/">
              <Button variant="danger" className="main-menu-button-stock-unique">Main Menu</Button>
            </Link>
          </div>
        </Col>
      </Row>

      {/* Footer */}
      <Row>
        <Col className="footer-stock-unique">
          <p>Powered by <strong>Plantec Ceylon (Pvt) Ltd.</strong></p>
        </Col>
      </Row>
    </Container>
  );
};

export default GeneralStock;
