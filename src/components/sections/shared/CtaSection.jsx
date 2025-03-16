import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Reusable Call-to-Action section component
 * Used throughout the site for conversion-focused messaging
 */
const CtaSection = ({
  title = "Ready to transform your social media presence?",
  description = "Start your journey to social media success with our proven strategies and dedicated support team.",
  primaryButtonText = "Get Started",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Learn More",
  secondaryButtonLink = "/services",
  showSecondaryButton = true,
  bgColor = "blue" // 'blue', 'purple', 'orange'
}) => {
  
  // Get background colors based on color prop
  const getBgGradient = (color) => {
    const gradients = {
      blue: 'from-blue-600 to-indigo-700',
      purple: 'from-purple-600 to-indigo-700',
      orange: 'from-orange-500 to-red-600'
    };
    return gradients[color] || gradients.blue;
  };
  
  const getSecondaryBtnHoverBg = (color) => {
    const hoverColors = {
      blue: 'hover:bg-blue-50',
      purple: 'hover:bg-purple-50',
      orange: 'hover:bg-orange-50'
    };
    return hoverColors[color] || hoverColors.blue;
  };
  
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background decorative elements */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getBgGradient(bgColor)} opacity-90`}></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-white opacity-20"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-black opacity-10"></div>
      
      {/* Decorative circles */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-white rounded-full opacity-10"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white rounded-full opacity-10"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1.5\'/%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '20px 20px'
        }}>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">{description}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to={primaryButtonLink}
              className="inline-flex justify-center items-center px-8 py-4 rounded-xl bg-white text-lg font-semibold text-gray-900 shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-200"
            >
              {primaryButtonText}
              <svg className="ml-2 -mr-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            
            {showSecondaryButton && (
              <Link 
                to={secondaryButtonLink}
                className={`inline-flex justify-center items-center px-8 py-4 rounded-xl bg-transparent text-lg font-semibold text-white border-2 border-white/70 hover:border-white ${getSecondaryBtnHoverBg(bgColor)} hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-200`}
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
      </div>
      
      {/* Animated wave effect at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 md:h-16 text-white"
        >
          <path 
            d="M0 0L48 8.875C96 17.9167 192 35.5833 288 53.3333C384 71.0833 480 88.9167 576 77.5C672 65.8333 768 24.9167 864 17.9167C960 11.0833 1056 35.5833 1152 53.3333C1248 71.0833 1344 81.125 1392 84.6083L1440 88.9167V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z" 
            fill="currentColor" 
            fillOpacity="1"
          />
        </svg>
      </div>
    </section>
  );
};

CtaSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  primaryButtonText: PropTypes.string,
  primaryButtonLink: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  secondaryButtonLink: PropTypes.string,
  showSecondaryButton: PropTypes.bool,
  bgColor: PropTypes.oneOf(['blue', 'purple', 'orange'])
};

export default CtaSection; 