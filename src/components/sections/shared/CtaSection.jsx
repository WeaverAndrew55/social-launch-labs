import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * CtaSection - A reusable call-to-action section
 * Used on multiple pages to prompt user action
 */
const CtaSection = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  transparentBg = false,
  spacingClass = 'py-16',
  themeColor = 'blue'
}) => {

  // Define theme-specific classes
  const themeClasses = {
    blue: {
      pillBg: 'bg-blue-100',
      pillText: 'text-blue-700',
      buttonGradient: 'from-blue-600 to-blue-700',
      buttonHoverShadow: 'hover:shadow-blue-300/30'
    },
    green: {
      pillBg: 'bg-green-100',
      pillText: 'text-green-700',
      buttonGradient: 'from-green-600 to-green-700',
      buttonHoverShadow: 'hover:shadow-green-300/30'
    },
    purple: {
      pillBg: 'bg-purple-100',
      pillText: 'text-purple-700',
      buttonGradient: 'from-purple-600 to-purple-700',
      buttonHoverShadow: 'hover:shadow-purple-300/30'
    }
  };

  const currentTheme = themeClasses[themeColor] || themeClasses.blue; // Fallback to blue if invalid theme

  return (
    <section className={`relative ${spacingClass || 'py-16'} overflow-hidden`}>
      {/* Conditionally render background */}
      {!transparentBg && (
        <div className="absolute inset-0 bg-gradient-to-tr from-[#E8F0FF] via-[#F6F9FF] to-white">
          {/* Decorative elements */}
          <div className="absolute inset-0 w-full h-full opacity-[0.07]">
            <div className="absolute top-[10%] right-[15%] w-[30vw] h-[30vw] max-w-[600px] max-h-[600px] rounded-full border border-[#155DFC]/20"></div>
            <div className="absolute bottom-[15%] left-[10%] w-[25vw] h-[25vw] max-w-[500px] max-h-[500px] rounded-full border border-[#7394D3]/30"></div>
            <div className="absolute top-[30%] left-[25%] w-[15vw] h-[15vw] max-w-[300px] max-h-[300px] rounded-full border border-[#155DFC]/10"></div>
          </div>
          
          {/* Layered blurred elements for depth */}
          <div className="absolute top-0 right-[10%] w-[40vw] h-[40vw] max-w-[800px] max-h-[800px] bg-[#155DFC] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.03]"></div>
          <div className="absolute bottom-0 left-[5%] w-[35vw] h-[35vw] max-w-[700px] max-h-[700px] bg-[#7394D3] rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.04]"></div>
          
          {/* Connection lines representing networks */}
          <div className="absolute inset-0 w-full h-full opacity-[0.05]" 
               style={{
                 backgroundImage: `
                   linear-gradient(30deg, transparent 49.5%, #155DFC 49.5%, #155DFC 50.5%, transparent 50.5%),
                   linear-gradient(60deg, transparent 49.5%, #7394D3 49.5%, #7394D3 50.5%, transparent 50.5%),
                   linear-gradient(120deg, transparent 49.5%, #155DFC 49.5%, #155DFC 50.5%, transparent 50.5%)
                 `,
                 backgroundSize: '60px 60px, 70px 70px, 80px 80px'
               }}>
          </div>
        </div>
      )}

      <div className="relative container mx-auto px-4">
        {/* Wrap content in a white card - Adjust padding */}
        <div className={`
          max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl 
          border border-gray-100/50 
          px-8 pb-8 pt-4 
          md:px-12 md:pb-12 md:pt-8 
          lg:px-16 lg:pb-16 lg:pt-12
        `}>
          <div className="text-center">
            {/* Add themed pill */}
            <div className="mb-4">
              <span className={`inline-block ${currentTheme.pillBg} ${currentTheme.pillText} px-4 py-1.5 rounded-full text-sm font-medium tracking-wide`}>
                Let's Chat
              </span>
            </div>
            
            {/* Main content */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293C] mb-5 tracking-tight">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>

            {/* Single CTA Button - Standardized Themed Style */}
            <div className="flex justify-center">
              <a
                href={primaryButtonLink}
                className={`inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r ${currentTheme.buttonGradient} rounded-xl shadow-lg hover:shadow-xl ${currentTheme.buttonHoverShadow} transition-all duration-300 transform hover:-translate-y-1 group`}
              >
                {primaryButtonText}
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CtaSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  primaryButtonText: PropTypes.string,
  primaryButtonLink: PropTypes.string,
  transparentBg: PropTypes.bool,
  spacingClass: PropTypes.string,
  themeColor: PropTypes.oneOf(['blue', 'green', 'purple'])
};

export default CtaSection;