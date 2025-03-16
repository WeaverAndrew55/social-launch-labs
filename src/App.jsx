import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Layout Components
import Layout from './components/layout/Layout';

// UI Components
import Button from './components/ui/Button';

// Temporary Home Component (will be replaced with actual HomePage component)
const Home = () => (
  <div>
    <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6 text-primary-800">Transform Your Social Media Presence</h1>
          <p className="mb-8 text-lg text-neutral-700">Strategic social media marketing solutions designed to grow your audience, boost engagement, and drive conversions.</p>
          <Button variant="primary" size="lg">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  </div>
);

// Temporary placeholder pages
const Services = () => <div className="container mx-auto px-4 py-16"><h1>Services Page</h1></div>;
const Packages = () => <div className="container mx-auto px-4 py-16"><h1>Packages Page</h1></div>;
const Contact = () => <div className="container mx-auto px-4 py-16"><h1>Contact Page</h1></div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/packages" element={<Layout><Packages /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
