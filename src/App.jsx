import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Layout Components
import Layout from './components/layout/Layout';

// Page Components
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PackagesPage from './pages/PackagesPage';
import ContactPage from './pages/ContactPage';
import LeadGenerationPackagePage from './pages/packages/LeadGenerationPackagePage';

// UI Components
import Button from './components/ui/Button';

// Temporary placeholder pages
const Contact = () => <div className="container mx-auto px-4 py-16"><h1>Contact Page</h1></div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/packages/lead-generation" element={<LeadGenerationPackagePage />} />
      </Routes>
    </Router>
  );
}

export default App;
