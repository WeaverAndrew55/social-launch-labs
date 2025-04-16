import React, { useState } from 'react';
import SectionContainer from '../../ui/SectionContainer';
import PropTypes from 'prop-types';

// Import studio images
import studioStrategy from '../../../assets/STUDIO/05.27.2024 - Social Launch Labs - 2360 Portland St SE_21.png';
import studioProduction from '../../../assets/STUDIO/05.27.2024 - Social Launch Labs - 2360 Portland St SE_16.png';
import studioGrowth from '../../../assets/STUDIO/05.27.2024 - Social Launch Labs - 2360 Portland St SE_18.png';

/**
 * WhatWeDoSection component
 * Displays the main services offered by Social Launch Labs
 * 
 * @param {Object} props - Component props
 * @param {string} props.spacingClass - Class name for section spacing
 * @param {boolean} props.transparentBg - Whether the section has a transparent background
 * @param {boolean} props.hideRadialGradient - Whether to hide the radial gradient separator
 */
const WhatWeDoSection = ({ spacingClass, transparentBg = true, hideRadialGradient = false }) => {
  const [activeService, setActiveService] = useState(0);
  
  // Services data
  const services = [
    {
      title: 'Video Strategy & Planning',
      description: 'We create data-driven video marketing strategies that align with your business goals, focusing on high-impact content that resonates with your target audience and drives measurable results.',
      image: studioStrategy,
      features: [
        'Custom video content strategy',
        'Audience research & targeting',
        'Video script development',
        'Platform optimization strategy',
        'Video format recommendations'
      ]
    },
    {
      title: 'Video Production & Editing',
      description: 'Our expert team handles everything from pre-production to final delivery, creating professional, engaging videos that showcase your expertise and connect with your audience.',
      image: studioProduction,
      features: [
        'Professional filming & lighting',
        'Expert video editing',
        'Custom graphics & animation',
        'Professional audio mixing',
        'Brand style integration'
      ]
    },
    {
      title: 'Content Optimization & Growth',
      description: 'We optimize your video content for maximum engagement and implement proven distribution strategies to expand your reach and drive consistent business growth.',
      image: studioGrowth,
      features: [
        'Platform-specific video optimization',
        'Thumbnail design & optimization',
        'Video title & description writing',
        'Video distribution strategy',
        'Content repurposing guidance'
      ]
    }
  ];

  return (
    <div className="relative">
      <SectionContainer 
        id="what-we-do" 
        className={spacingClass || "section-spacing-lg"} 
        transparentBg={transparentBg}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 relative">
            <span className="inline-block px-3 py-1 bg-[#7394D3]/20 text-[#155DFC] text-sm font-medium rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293C] mb-4">
              Expert Video Marketing Services
            </h2>
            <div className="w-20 h-1 bg-[#155DFC] mx-auto mb-6"></div>
            <p className="text-lg text-[#455064] max-w-2xl mx-auto">
              From strategy and production to optimization and growth, we provide the expertise and execution you need to succeed with video marketing.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
            {services.map((service, index) => (
              <button
                key={index}
                className={`px-6 py-4 rounded-xl text-left transition-all duration-300 focus:outline-none ${
                  activeService === index
                    ? 'bg-[#155DFC] text-white shadow-lg'
                    : 'bg-[#E8F0FF] text-[#333945] hover:bg-[#7394D3]/20'
                }`}
                onClick={() => setActiveService(index)}
              >
                <h3 className={`text-lg font-bold ${activeService === index ? 'text-white' : 'text-[#1E293C]'}`}>
                  {service.title}
                </h3>
                <p className={`text-sm mt-2 ${activeService === index ? 'text-[#F6F9FF]' : 'text-[#333945]'}`}>
                  {service.description.substring(0, 80)}...
                </p>
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-[#155DFC]/10 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Left Content */}
              <div className="lg:w-1/2 p-8 lg:p-10">
                <h3 className="text-2xl font-bold text-[#1E293C] mb-4">{services[activeService].title}</h3>
                <p className="text-[#333945] mb-8 leading-relaxed">{services[activeService].description}</p>
                
                <h4 className="text-lg font-semibold text-[#1E293C] mb-4">Key Features:</h4>
                <ul className="space-y-3 mb-8">
                  {services[activeService].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-[#155DFC] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#333945]">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex space-x-4">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center bg-gradient-to-r from-[#155DFC] to-[#7394D3] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-blue-300/20 transition-all duration-300"
                  >
                    Get Started
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </a>
                  <a 
                    href="#core-packages" 
                    className="inline-flex items-center text-[#155DFC] border border-[#7394D3] px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#7394D3]/10 transition-all duration-300"
                  >
                    View Packages
                  </a>
                </div>
              </div>
              
              {/* Right Image */}
              <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#155DFC] to-[#7394D3] opacity-20 mix-blend-multiply"></div>
                <img 
                  src={services[activeService].image} 
                  alt={services[activeService].title} 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Icon/Badge */}
                <div className="absolute top-8 right-8 bg-white p-3 rounded-lg shadow-lg">
                  {activeService === 0 && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#155DFC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                  {activeService === 1 && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#155DFC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                  {activeService === 2 && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#155DFC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Radial Gradient Separator - only show if not hidden */}
      {!hideRadialGradient && (
        <div className="relative h-12 my-6 overflow-hidden">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[80%] h-12 bg-radial-gradient opacity-[0.03]"
              style={{
                background: 'radial-gradient(circle, rgba(21,93,252,0.1) 0%, rgba(255,255,255,0) 70%)'
              }}>
          </div>
        </div>
      )}
    </div>
  );
};

WhatWeDoSection.propTypes = {
  spacingClass: PropTypes.string,
  transparentBg: PropTypes.bool,
  hideRadialGradient: PropTypes.bool
};

export default WhatWeDoSection; 