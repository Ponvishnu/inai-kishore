import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';

// Auth Pages
import EmailVerification from './pages/EmailVerification';
import OTPVerification from './pages/OTPVerification';
import MobileVerification from './pages/MobileVerification';

// Main Pages
import Home from './pages/Home';
import Chat from './pages/Chat';
import Memories from './pages/Memories';
import Settings from './pages/Settings';

// Sub Pages
import CreateProfile from './pages/CreateProfile';
import YourRelationship from './pages/YourRelationship';
import RelationshipStatus from './pages/RelationshipStatus';
import Notifications from './pages/Notifications';
import NotificationDetail from './pages/NotificationDetail';
import SpecialDay from './pages/SpecialDay';
import NewTodo from './pages/NewTodo';
import ShareCode from './pages/ShareCode';
import ContactSupport from './pages/ContactSupport';
import Policy from './pages/Policy';
import Calendar from './pages/Calendar';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
        <Routes>
          {/* Auth Flow */}
          <Route path="/" element={<Navigate to="/email-verification" replace />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/otp-verification" element={<OTPVerification />} />
          <Route path="/mobile-verification" element={<MobileVerification />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          
          {/* Main App */}
          <Route path="/home" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/chat/:partnerId" element={<Chat />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/settings" element={<Settings />} />
          
          {/* Sub Pages */}
          <Route path="/your-relationship" element={<YourRelationship />} />
          <Route path="/relationship-status" element={<RelationshipStatus />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/notification-detail" element={<NotificationDetail />} />
          <Route path="/special-day" element={<SpecialDay />} />
          <Route path="/new-todo" element={<NewTodo />} />
          <Route path="/share-code" element={<ShareCode />} />
          <Route path="/contact-support" element={<ContactSupport />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
