import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Client Industries section component
 * Shows the industries and types of clients the business works with
 */
const ClientIndustriesSection = ({ title, subtitle, description }) => {
  // Industry card data
  const industries = [
    {
      id: 'b2b',
      title: 'B2B Companies',
      description: 'We help B2B companies establish thought leadership and generate high-quality leads through strategic video content.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      linkText: 'See B2B Client Results',
      linkUrl: '/results/b2b'
    },
    {
      id: 'consultants',
      title: 'Consultants',
      description: 'We enable consultants to showcase their expertise and establish authority through powerful video presentations.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
        </svg>
      ),
      linkText: 'See Consultant Results',
      linkUrl: '/results/consultants'
    },
    {
      id: 'course-creators',
      title: 'Course Creators',
      description: 'We help course creators develop engaging video content that boosts conversions and enhances student experiences.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
        </svg>
      ),
      linkText: 'See Creator Results',
      linkUrl: '/results/creators'
    },
    {
      id: 'agencies',
      title: 'Marketing Agencies',
      description: 'We partner with agencies to provide white-label video production services that help them expand their offerings.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
        </svg>
      ),
      linkText: 'See Agency Results',
      linkUrl: '/results/agencies'
    }
  ];

  return (
    <section className="section-spacing-md">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-4">
            {subtitle || 'Our Clients'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title || 'Who We Work With'}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            {description || 'We create content for businesses looking to grow their brand authority, increase conversions, and build customer trust.'}
          </p>
        </div>

        {/* Client Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {industries.map((industry) => (
            <div 
              key={industry.id}
              className="client-industry-card bg-white p-8 rounded-xl shadow-sm text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                {industry.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{industry.title}</h4>
              <p className="text-gray-600 mb-4">{industry.description}</p>
              <Link 
                to={industry.linkUrl} 
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center transition-colors duration-300 group"
              >
                {industry.linkText}
                <svg 
                  className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

ClientIndustriesSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string
};

export default ClientIndustriesSection; 