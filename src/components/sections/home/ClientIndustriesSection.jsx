import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SectionContainer from '../../ui/SectionContainer';

/**
 * Client Industries section component
 * Shows the industries and types of clients the business works with
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {string} props.subtitle - Section subtitle
 * @param {string} props.description - Section description
 * @param {string} props.spacingClass - Class name for section spacing
 * @param {boolean} props.transparentBg - Whether the section has a transparent background
 */
const ClientIndustriesSection = ({ 
  title, 
  subtitle, 
  description, 
  spacingClass,
  transparentBg = false 
}) => {
  // Industry card data
  const industries = [
    {
      id: 'entrepreneurs',
      title: 'Entrepreneurs & Business Owners',
      description: 'Simplify content creation, freeing you to focus on running your business.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      linkText: 'See Entrepreneur Results',
      linkUrl: '/results/entrepreneurs'
    },
    {
      id: 'consultants',
      title: 'Consultants & B2B Leaders',
      description: 'Showcase your expertise clearly, building trust and credibility in your niche.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
        </svg>
      ),
      linkText: 'See Consultant Results',
      linkUrl: '/results/consultants'
    },
    {
      id: 'service-providers',
      title: 'Professional Service Providers',
      description: 'Enhance your reputation with high-quality, compliant content that resonates with your audience.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
        </svg>
      ),
      linkText: 'See Service Provider Results',
      linkUrl: '/results/service-providers'
    },
    {
      id: 'agencies',
      title: 'Marketing Agencies',
      description: 'Scale effortlessly through white-label video production, delivering impressive results under your brand.',
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

  const renderIndustryCard = (industry, index) => {
    return (
      <div 
        key={index}
        className="bg-white rounded-xl shadow-md border border-[#155DFC]/10 p-8 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] hover:scale-[1.02] hover:border-[#155DFC]/30"
      >
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#155DFC]/10 flex items-center justify-center mb-4">
            <div className="text-[#155DFC]">
              {industry.icon}
            </div>
          </div>
          <h3 className="text-xl font-bold text-[#1E293C]">{industry.title}</h3>
        </div>
        <p className="text-[#333945] text-center flex-grow font-medium">{industry.description}</p>
      </div>
    );
  };

  return (
    <section className={`${spacingClass || 'section-spacing-lg'} relative overflow-hidden ${!transparentBg ? 'bg-gradient-to-b from-white to-[#B5BCC9]/10' : ''}`}>
      {/* Decorative Elements - only if not transparent */}
      {!transparentBg && (
        <>
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#7394D3] rounded-full mix-blend-multiply filter blur-[150px] opacity-5 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[35rem] h-[35rem] bg-[#155DFC] rounded-full mix-blend-multiply filter blur-[120px] opacity-5 translate-y-1/3"></div>
        </>
      )}
      
      <SectionContainer transparentBg={transparentBg}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[#7394D3]/20 text-[#155DFC] text-sm font-medium rounded-full mb-4">
            {subtitle || 'Our Clients'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293C] mb-4">
            {title || 'Who We Work With'}
          </h2>
          <div className="w-20 h-1 bg-[#155DFC] mx-auto mb-6"></div>
          <p className="text-lg text-[#455064] max-w-2xl mx-auto">
            {description || 'We create content for businesses looking to grow their brand authority, increase conversions, and build customer trust.'}
          </p>
        </div>

        {/* Client Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => renderIndustryCard(industry, index))}
        </div>
      </SectionContainer>
    </section>
  );
};

ClientIndustriesSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  spacingClass: PropTypes.string,
  transparentBg: PropTypes.bool
};

export default ClientIndustriesSection; 