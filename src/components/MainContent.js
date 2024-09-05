// src/components/MainContent.js
import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './MainContent.css';

const MainContent = () => {
  return (
<div className="main-content">
        <h1>Dunwatta Estate</h1>
            <h3>GC Division</h3>
            <div className="date-time-container">
        <Row>
          <Col xs={6}>
            <div className="date">Date: 02/03/2024</div>
          </Col>
          <Col xs={6} className="text-right">
            <div className="time">Time: 7:55 AM</div>
          </Col>
        </Row>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th rowSpan="2" id="rowMerged"></th> {/* Empty space in the top-left */}
            <th colSpan="2">TEA</th>
            <th colSpan="2">RUBBER</th>
            <th colSpan="2">CINNAMON</th>
          </tr>
          <tr>
            <th>Today</th>
            <th>To Date</th>
            <th>Today</th>
            <th>To Date</th>
            <th>Today</th>
            <th>To Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Budgeted Crop</td>
            <td>1381</td>
            <td></td>
            <td>545</td>
            <td></td>
            <td>2691</td>
            <td></td>
          </tr>
          <tr>
            <td>Crop per day</td>
            <td>1371</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Balance</td>
            <td></td>
            <td></td>
            <td>545</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Per Day</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Work Offered days</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Plucking Average</td>
            <td></td>
            <td>1371</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Plucking Cost</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Weeding Cost</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>RLO</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Crop/Acre</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Checkroll Weight</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>2691</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <Row className="buttons">
        <Col>
          <Button className="rounds-btn" variant="success">
            Plucking Rounds
          </Button>
          <Button className="rounds-btn" variant="success">
            Tapping Rounds
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default MainContent;
