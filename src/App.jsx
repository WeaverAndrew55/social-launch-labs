import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Layout Components
import Layout from './components/layout/Layout';

// Page Components
import HomePage from './pages/HomePage';

// UI Components
import Button from './components/ui/Button';

// Temporary placeholder pages
const Services = () => <div className="container mx-auto px-4 py-16"><h1>Services Page</h1></div>;
const Packages = () => <div className="container mx-auto px-4 py-16"><h1>Packages Page</h1></div>;
const Contact = () => <div className="container mx-auto px-4 py-16"><h1>Contact Page</h1></div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/packages" element={<Layout><Packages /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
