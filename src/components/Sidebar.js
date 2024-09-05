import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="user-info">
        <h2>Mr. S. Sahan</h2>
        <p>Field Officer</p>
      </div>
      <ul className="menu">
        <li>
          <Link to="/">Work Program</Link>
        </li>
        <li>
          <Link to="/morning-muster">Morning Muster</Link> {/* Link to Morning Muster */}
        </li>
        <li>
          <Link to="/evening-muster">Evening Muster</Link>
        </li>
        <li>
          <Link to="/work-distribution">Work Distribution</Link>
        </li>
        <li>
          <Link to="/fertilizer-application">Fertilizer Application</Link> {/* Link to Fertilizer Application */}
        </li>
        <li>
          <Link to="/cost">Cost</Link>
        </li>
        <li>
          <Link to="crop-achivement">Crop Achivement</Link> {/* Link to Crop Achivement */}
        </li>

        <li>
          <Link to="/order-request">Order Request / Return</Link>
        </li>
        <li>
          <Link to="/leave-application">Leave Application</Link>
        </li>
        <li>
          <Link to="/correspondence">Correspondence</Link>
        </li>
        <li>
          <Link to="/key-performance-indicators">Key Performance Indicators</Link> {/* Link to Key Performance Indicators */}
        </li>
        <li>
          <Link to="/crop-achievement">Crop Achivement</Link> {/* Link to Crop Achivement */}
        </li>
        <li>
          <Link to="/crop-book">Crop Book</Link>
        </li>
        <li>
          <Link to="/evening-muster-approval">Evening Muster Approval</Link>
        </li>
        <li>
          <Link to="/general-stock">General Stock</Link>
        </li>
        <li>
          <Link to="/pending-stock-request">Pending Stock Request</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
