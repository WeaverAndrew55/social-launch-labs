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
import ConversionBoosterPackagePage from './pages/packages/ConversionBoosterPackagePage';
import AuthorityBuilderPackagePage from './pages/packages/AuthorityBuilderPackagePage';
import ExamplePage from './pages/ExamplePage';

// UI Components
import Button from './components/ui/Button';

// Temporary placeholder pages
const Contact = () => <div className="container mx-auto px-4 py-16"><h1>Contact Page</h1></div>;

function App() {
  // Get the base path from the environment or use the default for GitHub Pages
  const basePath = import.meta.env.BASE_URL || '/social-launch-labs/';

  return (
    <Router basename={basePath}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/packages/lead-generation" element={<LeadGenerationPackagePage />} />
        <Route path="/packages/conversion-booster" element={<ConversionBoosterPackagePage />} />
        <Route path="/packages/authority-builder" element={<AuthorityBuilderPackagePage />} />
        <Route path="/example" element={<ExamplePage />} />
      </Routes>
    </Router>
  );
}

export default App;
