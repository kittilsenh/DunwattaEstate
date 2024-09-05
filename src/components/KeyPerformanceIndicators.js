import React from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './KeyPerformanceIndicators.css';

const KeyPerformanceIndicators = () => {
  return (
    <div className="kpi-layout">
      {/* Main Content */}
      <div className="kpi-main-content">
        <Container>
          <h2 className="estate-title">Dunwatta Estate</h2>
          <h4 className="division-title">GC Division</h4>
          <h1 className="page-title">Key Performance Indicators</h1>

          {/* Table */}
          <Table bordered className="kpi-table">
          <colgroup>
            <col style={{ width: '10%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '5%' }} />
            <col style={{ width: '5%' }} />
            <col style={{ width: '5%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '10%' }} />
          </colgroup>
            <thead>
              <tr>
                <th colSpan="2">Muster Chit</th>
                <th colSpan="3">Tea Crop</th>
                <th colSpan="2">RLO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="1">GC</td>
                <td colSpan="1"></td>
                <td colSpan="1">GC</td>
                <td colSpan="1"></td>
                <td colSpan="1"></td>
                <td colSpan="1"></td>
                <td colspan="1"></td>
              </tr>
              <tr>
                <td colSpan="1">SS</td>
                <td colSpan="1"></td>
                <td colSpan="1">SS</td>
                <td colSpan="1"></td>
                <td colSpan="1"></td>
                <td colSpan="1"></td>
                <td colspan="1"></td>
              </tr>
              <tr>
                <td colSpan="1">MK</td>
                <td colSpan="1"></td>
                <td colSpan="1">MK</td>
                <td colSpan="1"></td>
                <td colSpan="1"></td>
                <td colSpan="1"></td>
                <td colspan="1"></td>
              </tr>
              <tr>
                <td colSpan="1">FD</td>
                <td colSpan="1"></td>
                <td colSpan="1">FD</td>
                <td colSpan="1"></td>
                <td colSpan="1"></td>
                <td colSpan="1"></td>
                <td colspan="1"></td>
              </tr>
              <tr>
                <td colSpan="1">Estate</td>
                <td colSpan="1"></td>
                <td colSpan="1">Estate</td>
                <td colSpan="1"></td>
                <td colSpan="1"></td>
                <td colSpan="1"></td>
                <td colspan="1"></td>
              </tr>
             
            </tbody>
          </Table>
        </Container>
      </div>

      {/* Sidebar */}
      <div className="kpi-profile-sidebar">
        <div className="profile">
          <div className="profile-image"></div>
          <div className="name-background w-100 text-center">
            <h4 className="text-white">Mr. Nanayakkara</h4>
            <p className="text-white">Manager</p>
          </div>
        </div>
        <div className="menu-items d-flex flex-column">
          <Button variant="outline-success" className="kpi-menu-item mb-2">
            Messages
            <span className="kpi-notification-badge">2</span>
          </Button>
          
          <Button variant="outline-success" className="kpi-menu-item mb-2">Order Request / Return</Button>
          
          <Button variant="outline-success" className="kpi-menu-item mb-2">Plucking Rounds</Button>
          
          <Button variant="outline-success" className="kpi-menu-item mb-2">Work Program</Button>
          
          <Button variant="outline-success" className="kpi-menu-item mb-2">Tapping Rounds</Button>

        </div>
        <div className="action-buttons">
          <Button variant="success" className="submit-button">Approved</Button>
          <Button variant="warning" className="edit-button">Return</Button>
          <Link to="/">
            <Button variant="danger" className="main-menu-button">Main Menu</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KeyPerformanceIndicators;