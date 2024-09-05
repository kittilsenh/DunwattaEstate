import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';
import userIcon from '../assets/profile.png';

const Header = () => {
  return (
    <div className="header">
      <div className="profile-section">
        <div className="profile-picture">
          <Link to="/login"> {/* Wrap the image with Link to navigate to login */}
            <img src={userIcon} alt="Profile" />
          </Link>
        </div>
        <div className="profile-info">
          <div className="profile-name">Mr. S. Sahan</div>
          <div className="profile-title">Field Officer</div>
        </div>
      </div>
      <button className="messages-btn">
        Messages <span className="badge">2</span>
      </button>
      <button className="messages-btn">
        Cash Book 
      </button>
      <button className="messages-btn">
        Pending Payments 
      </button>
      <button className="messages-btn">
        Payments Approval <span className="badge">9</span>
      </button>
      <button className="messages-btn">
        Leave Applications
      </button>
      <button className="messages-btn">
        Correspondence 
      </button>
      <button className="logout-btn">Log Out</button>
    </div>
  );
};

export default Header;
