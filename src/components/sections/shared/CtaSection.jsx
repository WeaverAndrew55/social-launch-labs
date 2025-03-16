import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SectionContainer from '../../ui/SectionContainer';

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
 * @param {string} props.bgColor - Background color theme ('blue', 'purple', 'orange', 'gray')
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
  bgColor = "blue", // 'blue', 'purple', 'orange', 'gray'
  spacingClass
}) => {
  // Determine background color classes based on bgColor prop
  let bgClasses = "";
  let textClasses = "";
  
  switch (bgColor) {
    case 'blue':
      bgClasses = "bg-blue-600";
      textClasses = "text-white";
      break;
    case 'purple':
      bgClasses = "bg-purple-600";
      textClasses = "text-white";
      break;
    case 'orange':
      bgClasses = "bg-orange-600";
      textClasses = "text-white";
      break;
    case 'gray':
      bgClasses = "bg-gray-100";
      textClasses = "text-gray-900";
      break;
    default:
      bgClasses = "bg-blue-600";
      textClasses = "text-white";
  }

  return (
    <section className={`${spacingClass || 'section-spacing-lg'} ${bgClasses}`}>
      <SectionContainer>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-display font-bold mb-4 ${textClasses}`}>
            {title}
          </h2>
          <p className={`text-lg ${bgColor === 'gray' ? 'text-gray-600' : 'text-white text-opacity-90'} mb-8`}>
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to={primaryButtonLink} 
              className={`inline-flex justify-center items-center px-8 py-3 rounded-xl ${
                bgColor === 'gray' 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white text-blue-600 hover:bg-blue-50'
              } font-medium transition-colors duration-200 shadow-md text-center`}
            >
              {primaryButtonText}
            </Link>
            
            {showSecondaryButton && (
              <Link 
                to={secondaryButtonLink}
                className={`inline-flex justify-center items-center px-8 py-3 rounded-xl ${
                  bgColor === 'gray'
                    ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    : 'bg-transparent text-white border border-white hover:bg-white hover:bg-opacity-10'
                } font-medium transition-colors duration-200 text-center`}
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
      </SectionContainer>
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
  bgColor: PropTypes.oneOf(['blue', 'purple', 'orange', 'gray']),
  spacingClass: PropTypes.string
};

export default CtaSection; 