import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Reusable Call-to-Action section component
 * Used throughout the site for conversion-focused messaging
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - CTA title
 * @param {string} props.description - CTA description
 * @param {string} props.primaryButtonText - Text for primary button
 * @param {string} props.primaryButtonLink - Link for primary button
 * @param {string} props.secondaryButtonText - Text for secondary button
 * @param {string} props.secondaryButtonLink - Link for secondary button
 * @param {boolean} props.showSecondaryButton - Whether to show secondary button
 * @param {string} props.bgColor - Background color theme ('blue', 'purple', 'orange')
 * @param {string} props.spacingClass - Class name for section spacing
 */
const CtaSection = ({
  title = "Ready to transform your social media presence?",
  description = "Start your journey to social media success with our proven strategies and dedicated support team.",
  primaryButtonText = "Get Started",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Learn More",
  secondaryButtonLink = "/services",
  showSecondaryButton = true,
  bgColor = "blue", // 'blue', 'purple', 'orange'
  spacingClass
}) => {
  
  // Get gradient colors based on color prop
  const getGradient = (color) => {
    const gradients = {
      blue: 'from-blue-600 to-blue-800',
      purple: 'from-purple-600 to-indigo-700',
      orange: 'from-orange-500 to-red-600'
    };
    return gradients[color] || gradients.blue;
  };
  
  // Get primary button text color based on bg color
  const getPrimaryButtonTextColor = (color) => {
    const textColors = {
      blue: 'text-blue-700',
      purple: 'text-purple-700',
      orange: 'text-orange-700'
    };
    return textColors[color] || textColors.blue;
  };
  
  // Get secondary button hover colors
  const getSecondaryButtonHoverBg = (color) => {
    const hoverColors = {
      blue: 'hover:text-blue-700',
      purple: 'hover:text-purple-700',
      orange: 'hover:text-orange-700'
    };
    return hoverColors[color] || hoverColors.blue;
  };
  
  return (
    <section className={`${getGradient(bgColor)} ${spacingClass || 'section-spacing-md'}`}>
      <div className="container mx-auto px-6 py-12 md:py-16 max-w-5xl text-center">
        <div className={`bg-gradient-to-r ${getGradient(bgColor)} text-white rounded-xl shadow-xl p-8 md:p-12 lg:p-16 
          flex flex-col md:flex-row items-center justify-between transform hover:scale-105 transition duration-500 ease-in-out`}>
          
          {/* Left side: Content */}
          <div className="md:w-2/3 mb-8 md:mb-0 pr-0 md:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{title}</h2>
            <p className="text-lg opacity-90 max-w-2xl">{description}</p>
          </div>
          
          {/* Right side: Buttons */}
          <div className="md:w-1/3 flex flex-col sm:flex-row md:flex-col space-y-4 sm:space-y-0 md:space-y-4 sm:space-x-4 md:space-x-0">
            <Link 
              to={primaryButtonLink}
              className={`bg-white ${getPrimaryButtonTextColor(bgColor)} hover:bg-gray-100 px-6 py-3 rounded-lg text-lg font-medium transition duration-300 text-center shadow-md`}
            >
              {primaryButtonText}
            </Link>
            
            {showSecondaryButton && (
              <Link 
                to={secondaryButtonLink}
                className={`bg-transparent border-2 border-white text-white hover:bg-white ${getSecondaryButtonHoverBg(bgColor)} px-6 py-3 rounded-lg text-lg font-medium transition duration-300 text-center`}
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
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
  bgColor: PropTypes.oneOf(['blue', 'purple', 'orange']),
  spacingClass: PropTypes.string
};

export default CtaSection; 