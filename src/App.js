import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Login from './components/Login';
import MorningMuster from './components/MorningMuster'; // Import the new component
import MorningMusterRevive from './components/MorningMusterRevive';
import EveningMuster from './components/EveningMuster';
import EveningMusterApproval from './components/EveningMusterApproval';
import KeyPerformanceIndicators from './components/KeyPerformanceIndicators'; // Correct spelling here // Import the new component
import CropAchievement from './components/CropAchievement';
import CropBook from './components/CropBook'; // Import the new component
import GeneralStock from './components/GeneralStock';
import PendingStockRequest from './components/PendingStockRequest';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  // List of routes that should not display the sidebar and header
  const separatePages = ["/login", "/morning-muster", "/morning-muster-revive", "/evening-muster", "/key-performance-indicators", "/crop-achievement","/crop-book", "/evening-muster-approval", "/general-stock", "/pending-stock-request"];

  // Determine if the current route is a separate page
  const isSeparatePage = separatePages.includes(location.pathname);

  return (
    <div className="app-container">
      {!isSeparatePage && <Sidebar />}
      <div className={`content-container ${isSeparatePage ? 'no-sidebar' : ''}`}>
        {!isSeparatePage && <Header />}
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/morning-muster" element={<MorningMuster />} /> {/* Add the new route */}
          <Route path="/morning-muster-revive" element={<MorningMusterRevive />} />
          <Route path="/evening-muster" element={<EveningMuster />} />
          <Route path="/evening-muster-approval" element={<EveningMusterApproval />} />
          <Route path="/key-performance-indicators" element={<KeyPerformanceIndicators />} />{/* Add the new route */}
          <Route path="/crop-achievement" element={<CropAchievement />} />
          <Route path="/crop-book" element={<CropBook />} />
          <Route path="/general-stock" element={<GeneralStock />} />
          <Route path="/pending-stock-request" element={<PendingStockRequest />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;