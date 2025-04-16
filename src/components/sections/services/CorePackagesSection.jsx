import React, { useState } from 'react';
import SectionContainer from '../../ui/SectionContainer';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Core Packages Section
 * Displays the main service packages offered by Social Launch Labs
 * 
 * @param {Object} props - Component props
 * @param {string} props.spacingClass - Class name for section spacing
 * @param {boolean} props.transparentBg - Whether the section has a transparent background
 * @param {boolean} props.reducedHeaderMargin - Whether to reduce the header margin for tighter layouts
 */
const CorePackagesSection = ({ 
  spacingClass, 
  transparentBg = true, 
  reducedHeaderMargin = false 
}) => {
  const [hoverTab, setHoverTab] = useState(null);
  
  // Core package data with color themes
  const packages = [
    {
      id: 'lead-generation',
      name: 'Lead Generation',
      subtitle: 'Attract Qualified Prospects',
      price: '$1,997/mo',
      description: 'Perfect for businesses looking to attract new leads with powerful video content optimized for acquisition.',
      included: [
        'Strategic content planning',
        'Custom video creation (2/month)',
        'Paid ad placement strategy',
        'Social channel optimization',
        'Performance analytics dashboard',
        'Lead tracking integration'
      ],
      image: 'https://WeaverAndrew55.github.io/SLL-Images/assets/Services/lead-gen-package.jpg',
      badge: 'Most Popular',
      ctaLink: '/packages/lead-generation-sales',
      color: {
        border: 'border-blue-400/30',
        badge: 'bg-blue-500',
        gradient: 'from-blue-600 to-blue-400',
        highlight: 'text-blue-600',
        checkmark: 'text-blue-500',
        topAccent: 'bg-gradient-to-r from-blue-500 to-blue-400'
      }
    },
    {
      id: 'conversion-booster',
      name: 'Conversion Booster',
      subtitle: 'Convert Prospects to Clients',
      price: '$3,000/mo',
      description: 'Designed for businesses with traffic but need help turning prospects into paying customers.',
      included: [
        'Conversion-focused video strategy',
        'Custom video creation (3/month)',
        'Sales page video integration',
        'Video email sequence creation',
        'A/B testing of different approaches',
        'Conversion rate optimization'
      ],
      image: 'https://WeaverAndrew55.github.io/SLL-Images/assets/Services/conversion-package.jpg',
      badge: 'High ROI',
      ctaLink: '/packages/conversion-booster-sales',
      color: {
        border: 'border-green-400/30',
        badge: 'bg-green-500',
        gradient: 'from-green-600 to-green-400',
        highlight: 'text-green-600',
        checkmark: 'text-green-500',
        topAccent: 'bg-gradient-to-r from-green-500 to-green-400'
      }
    },
    {
      id: 'authority-builder',
      name: 'Authority Builder',
      subtitle: 'Establish Industry Leadership',
      price: '$4,000/mo',
      description: 'Premium package for businesses looking to position themselves as the go-to authority in their industry.',
      included: [
        'Thought leadership strategy',
        'Custom video creation (4/month)',
        'Interview series production',
        'Content distribution to major platforms',
        'Industry partnership facilitation',
        'PR opportunities & placements'
      ],
      image: 'https://WeaverAndrew55.github.io/SLL-Images/assets/Services/authority-package.jpg',
      badge: 'Premium',
      ctaLink: '/packages/authority-building-sales',
      color: {
        border: 'border-purple-400/30',
        badge: 'bg-purple-600',
        gradient: 'from-purple-700 to-purple-500',
        highlight: 'text-purple-600',
        checkmark: 'text-purple-500',
        topAccent: 'bg-gradient-to-r from-purple-600 to-purple-400'
      }
    }
  ];

  return (
    <div className="relative">
      <SectionContainer id="core-packages" className={`${spacingClass} relative`} transparentBg={transparentBg}>
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-[#7394D3]/20 text-[#155DFC] text-sm font-medium rounded-full mb-4">
              Our Core Packages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293C] mb-4">
              Strategic Service Packages
            </h2>
            <div className="w-20 h-1 bg-[#155DFC] mx-auto mb-6"></div>
            <p className="text-lg text-[#455064] max-w-2xl mx-auto">
              Tailored solutions designed to meet your specific marketing objectives. Choose the package that aligns with your current business goals.
            </p>
          </div>
          
          {/* Package cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={pkg.id}
                className={`relative bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl ${pkg.color.border} hover:border-opacity-50 group flex flex-col`}
                onMouseEnter={() => setHoverTab(index)}
                onMouseLeave={() => setHoverTab(null)}
              >
                {/* Top accent bar */}
                <div className={`h-1.5 w-full ${pkg.color.topAccent}`}></div>
                
                {/* Content */}
                <div className="p-8 flex flex-col flex-grow text-center">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-[#1E293C] mb-1">{pkg.name}</h3>
                    <p className={`${pkg.color.highlight} font-medium`}>{pkg.subtitle}</p>
                  </div>
                  
                  <p className="text-[#333945] mb-5 leading-relaxed">{pkg.description}</p>
                  
                  <div className="mt-auto">
                    <div className="mb-4">
                      <span className={`text-2xl font-bold ${pkg.color.highlight}`}>{pkg.price}</span>
                    </div>
                    
                    <h4 className="font-semibold text-[#1E293C] mb-3">What's Included:</h4>
                    <ul className="space-y-2 mb-6 flex flex-col items-center">
                      {pkg.included.map((item, i) => (
                        <li key={i} className="flex items-start text-left w-full max-w-[240px]">
                          <svg className={`w-5 h-5 ${pkg.color.checkmark} mr-2 mt-0.5 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-[#333945] text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      to={pkg.ctaLink} 
                      className={`w-full inline-block text-center bg-gradient-to-r ${pkg.color.gradient} text-white font-medium py-3 px-6 rounded-md transition-all duration-300 hover:shadow-lg`}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
      
      {/* Horizontal Line Separator - only show if header margin is not reduced */}
      {!reducedHeaderMargin && (
        <div className="relative h-px w-full my-10 overflow-hidden">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#155DFC]/10 to-transparent"></div>
        </div>
      )}
    </div>
  );
};

CorePackagesSection.propTypes = {
  spacingClass: PropTypes.string,
  transparentBg: PropTypes.bool,
  reducedHeaderMargin: PropTypes.bool
};

export default CorePackagesSection; 