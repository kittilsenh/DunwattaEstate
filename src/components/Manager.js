import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './Manager.css'; // Import the new CSS file

const borderStyle = { border: '2px solid #333' };   // Full border on all sides
const borderLeftStyle = { borderLeft: '2px solid #333' };  // Border on the left side only
const borderRightStyle = { borderRight: '2px solid #333' };  // Border on the right side only
const borderTopStyle = { borderTop: '2px solid #333' };  // Border on the top side only
const borderBottomStyle = { borderBottom: '2px solid #333' };  // Border on the bottom side only
const borderLeftRightStyle = { borderLeft: '2px solid #333', borderRight: '2px solid #333' };  // Borders on both left and right sides
const borderTopBottomStyle = { borderTop: '2px solid #333', borderBottom: '2px solid #333' };  // Borders on both top and bottom sides
const borderLeftRightBottomStyle = { borderLeft: '2px solid #333', borderRight: '2px solid #333', borderBottom: '2px solid #333' }; // Border left, right and bottom 
const borderStyleBottomRight = { borderBottom: '2px solid #333', borderRight: '2px solid #333' };
const borderStyleTopLeft = { borderTop: '2px solid #333', borderLeft: '2px solid #333' };
const borderStyleBottomLeft = { borderBottom: '2px solid #333', borderLeft: '2px solid #333' };
const borderStyleTopRightLeft = { borderTop: '2px solid #333', borderRight: '2px solid #333', borderLeft: '2px solid #333' };

const Manager = () => {
  return (
    <div className="manager-layout">
      {/* Sidebar */}
      <div className="manager-sidebar">
        <div className="profile-section">
          
          <h4 className="manager-name">Mr. Nanayakkara</h4>
          <p className="manager-title">Manager</p>
        </div>
        <div className="menu-items">
          <Button className="manager-sidebar-button">GC Division</Button>
          <Button className="manager-sidebar-button">SS Division</Button>
          <Button className="manager-sidebar-button">FD Division</Button>
          <Button className="manager-sidebar-button">MK Division</Button>
          <Button className="manager-sidebar-button">Stock</Button>
          <Button className="manager-sidebar-button">Fertilizer Program</Button>
          <Button className="manager-sidebar-button">Crop Books</Button>
          <Button className="manager-sidebar-button">Order Approval</Button>
          <Button className="manager-sidebar-button">KPI</Button>
          <Button className="manager-sidebar-button">Work Distribution</Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="manager-main-content">
          <Row>
            <Col xs={12}>
              <h2 className="estate-title">Dunwatta Estate</h2>
              <h4 className="division-title">GC Division</h4>
            </Col>
          </Row>

          {/* Header Section */}
          <Row className="header-section">
            <Col xs={6}>
              <div className="date-picker">
                <label>Date</label>
                <input type="date" className="date-input" />
              </div>
            </Col>
            <Col xs={6}>
              <div className="time-picker">
                <label>Time</label>
                <input type="time" className="time-input" />
              </div>
            </Col>
          </Row>

          {/* Table or Other Content */}
          <TableContainer component={Paper}>
      <Table aria-label="crop performance table" className="manager-table-unique">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell style={borderStyle} colSpan={2} align="center" className="table-header-cell">TEA</TableCell>
            <TableCell style={borderStyle} colSpan={2} align="center" className="table-header-cell">RUBBER</TableCell>
            <TableCell style={borderStyle} colSpan={2} align="center" className="table-header-cell">CINNAMON</TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell style={borderStyle} align="center" className="table-header-cell">Today</TableCell>
            <TableCell style={borderStyle} align="center" className="table-header-cell">To Date</TableCell>
            <TableCell style={borderStyle} align="center" className="table-header-cell">Today</TableCell>
            <TableCell style={borderStyle} align="center" className="table-header-cell">To Date</TableCell>
            <TableCell style={borderStyle} align="center" className="table-header-cell">Today</TableCell>
            <TableCell style={borderStyle} align="center" className="table-header-cell">To Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Row 1 */}
          <TableRow>
            <TableCell style={borderStyleTopRightLeft} >Budgeted Crop</TableCell>
            <TableCell style={borderLeftRightStyle} align="center">1381</TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center">545</TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
          </TableRow>
          {/* Row 2 */}
          <TableRow>
            <TableCell style={borderLeftRightStyle} >Crop</TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
          </TableRow>
          {/* Row 3 */}
          <TableRow>
            <TableCell style={borderLeftRightStyle} >Crop per day</TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center">1371</TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
          </TableRow>
          {/* Row 4 */}
          <TableRow>
            <TableCell style={borderLeftRightStyle}>Balance</TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
          </TableRow>
             {/* Row 5 */}
             <TableRow>
            <TableCell style={borderLeftRightStyle}>Per Day</TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
          </TableRow>
            {/* Row 6 */}
            <TableRow>
            <TableCell style={borderLeftRightStyle}>Work Offered days</TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
          </TableRow>
                      {/* Row 7 */}
            <TableRow>
            <TableCell style={borderLeftRightStyle}>Plucking Average</TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
          </TableRow>
                      {/* Row 8 */}
            <TableRow>
            <TableCell style={borderLeftRightStyle}>Plucking Cost</TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
          </TableRow>
                    {/* Row 9 */}
            <TableRow>
            <TableCell style={borderLeftRightStyle}>Weeding Cost</TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
          </TableRow>
                    {/* Row 10 */}
            <TableRow>
            <TableCell style={borderLeftRightStyle}>RLO</TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
          </TableRow>
                    {/* Row 11 */}
            <TableRow>
            <TableCell style={borderLeftRightStyle}>Crop/Acre</TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightStyle} align="center"></TableCell>
          </TableRow>
                      {/* Row 12 */}
            <TableRow>
            <TableCell style={borderLeftRightBottomStyle}>Checkroll Weight</TableCell>
            <TableCell style={borderLeftRightBottomStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightBottomStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightBottomStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightBottomStyle} align="center"></TableCell>
            <TableCell style={borderLeftRightBottomStyle} align="center">2691</TableCell>
            <TableCell style={borderLeftRightBottomStyle} align="center"></TableCell>
          </TableRow>
          {/* Add more rows here following the same structure */}
        </TableBody>
      </Table>
    </TableContainer>
        </div>

      {/* Right Sidebar */}
      <div className="manager-right-sidebar">
        <div className="profile-section">
          <div className="profile-image-right"></div>
          <h4 className="manager-name-right">Mr. Nanayakkara</h4>
          <p className="manager-title-right">Manager</p>
        </div>
        <div className="menu-items-right">
          <Button className="right-sidebar-button">Messages</Button>
          <Button className="right-sidebar-button">Cash Book</Button>
          <Button className="right-sidebar-button">Pending Payments</Button>
          <Button className="right-sidebar-button">Payments Approval</Button>
          <Button className="right-sidebar-button">Leave Application</Button>
          <Button className="right-sidebar-button">Correspondence</Button>
        </div>
        <Button className="logout-button">Log Out</Button>
      </div>
    </div>
  );
};

export default Manager;
