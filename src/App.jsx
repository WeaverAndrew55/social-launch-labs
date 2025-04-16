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
import AboutPage from './pages/AboutPage';
import LeadGenerationPackagePage from './pages/packages/LeadGenerationPackagePage';
import LeadGenerationSalesPage from './pages/packages/LeadGenerationSalesPage';
import ConversionBoosterPackagePage from './pages/packages/ConversionBoosterPackagePage';
import ConversionBoosterSalesPage from './pages/packages/ConversionBoosterSalesPage';
import AuthorityBuilderPackagePage from './pages/packages/AuthorityBuilderPackagePage';
import AuthorityBuilderSalesPage from './pages/packages/AuthorityBuilderSalesPage';
import ExamplePage from './pages/ExamplePage';

// Temporary placeholder pages
const FAQPage = () => (
  <Layout transparentHeader={false}>
    <div className="relative">
      {/* Page background */}
      <div className="fixed inset-0 w-full h-full overflow-hidden -z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F6F9FF] via-white to-[#F6F9FF] w-full h-full"></div>
        
        {/* Subtle background patterns */}
        <div className="absolute inset-0 w-full h-full opacity-[0.02]" 
             style={{
               backgroundImage: `
                 linear-gradient(0deg, transparent 95%, #155DFC 95%, #155DFC 96%, transparent 96%),
                 linear-gradient(90deg, transparent 97%, #7394D3 97%, #7394D3 98%, transparent 98%)
               `,
               backgroundSize: '80px 80px, 70px 70px'
             }}>
        </div>
      </div>

      {/* Hero Section with Under Construction Message */}
      <div className="relative pt-24 pb-16 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-[#155DFC]/10 text-[#155DFC] px-4 py-2 rounded-full text-sm font-medium mb-6">
              Coming Soon
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">FAQ Page Under Construction</h1>
            <div className="w-24 h-1 bg-[#155DFC] mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
              We're currently building our comprehensive FAQ section to address all your questions about our services and approach.
            </p>
            
            {/* Construction illustration */}
            <div className="w-full max-w-xl mx-auto mb-10 relative">
              <div className="bg-[#155DFC]/5 rounded-xl p-8 relative overflow-hidden">
                <div className="flex items-center justify-center">
                  <svg className="w-32 h-32 text-[#155DFC]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/>
                  </svg>
                </div>
                <div className="absolute top-0 left-0 w-full h-full opacity-20"
                     style={{
                       backgroundImage: `
                         repeating-linear-gradient(45deg, #155DFC, #155DFC 10px, transparent 10px, transparent 20px)
                       `
                     }}>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full border-4 border-[#155DFC]/20"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full border-2 border-[#7394D3]/30"></div>
            </div>
            
            <p className="text-lg text-gray-600 mb-8">
              In the meantime, please visit our <a href="/contact" className="text-[#155DFC] font-semibold hover:underline">Contact page</a> for any specific questions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/" className="bg-[#155DFC] hover:bg-[#1149CF] text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
                Return Home
              </a>
              <a href="/contact" className="bg-white border border-[#155DFC] text-[#155DFC] hover:bg-[#155DFC]/5 px-8 py-3 rounded-lg font-semibold transition duration-300">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

const ForBusinessesPage = () => <div className="container mx-auto px-4 py-16"><h1>For Businesses Page</h1></div>;
const ForAgenciesPage = () => <div className="container mx-auto px-4 py-16"><h1>For Agencies Page</h1></div>;

function App() {
  // Get the base path from the environment or use the default for GitHub Pages
  const basePath = import.meta.env.BASE_URL || '/social-launch-labs/';

  return (
    <Router basename={basePath}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/for-businesses" element={<ForBusinessesPage />} />
        <Route path="/services/for-agencies" element={<ForAgenciesPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/packages/lead-generation" element={<LeadGenerationPackagePage />} />
        <Route path="/packages/lead-generation-sales" element={<LeadGenerationSalesPage />} />
        <Route path="/packages/conversion-booster" element={<ConversionBoosterPackagePage />} />
        <Route path="/packages/conversion-booster-sales" element={<ConversionBoosterSalesPage />} />
        <Route path="/packages/authority-building" element={<AuthorityBuilderPackagePage />} />
        <Route path="/packages/authority-building-sales" element={<AuthorityBuilderSalesPage />} />
        <Route path="/example" element={<ExamplePage />} />
      </Routes>
    </Router>
  );
}

export default App;
