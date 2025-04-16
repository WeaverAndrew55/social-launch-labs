import React from 'react';
import PropTypes from 'prop-types';

/**
 * Container component for sections with consistent spacing and max-width
 * Now forwards refs to the underlying section element.
 */
// Wrap component with React.forwardRef
const SectionContainer = React.forwardRef((
  { 
    children, 
    maxWidth = "max-w-7xl", 
    className = "", 
    containerClassName = "",
    bgColor = "",
    transparentBg = false,
    id // Accept id prop explicitly if needed
  },
  ref // Accept the forwarded ref
) => {
  // Get background color class based on the input
  const getBgColorClass = () => {
    // If transparent is specified, return empty string
    if (transparentBg || bgColor === 'transparent') {
      return '';
    }
    
    // If it starts with bg-, it's already a tailwind class
    if (bgColor.startsWith('bg-') || bgColor.startsWith('from-')) {
      return bgColor;
    }
    
    // Otherwise map to our premium color palette
    switch (bgColor) {
      case 'blue':
        return 'bg-gradient-to-b from-[#7394D3]/20 to-white';
      case 'blue-light':
        return 'bg-[#7394D3]/15';
      case 'dark':
        return 'bg-[#1E293C]';
      case 'gray':
        return 'bg-[#B5BCC9]/15';
      case 'white':
        return 'bg-white';
      default:
        return '';
    }
  };
  
  const bgColorClass = getBgColorClass();
  
  return (
    // Attach the ref and id to the section element
    <section ref={ref} id={id} className={`${bgColorClass} ${className}`}>
      <div className={`${maxWidth} mx-auto px-4 md:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
});

// Add display name for better debugging
SectionContainer.displayName = 'SectionContainer';

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.string,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  bgColor: PropTypes.string,
  transparentBg: PropTypes.bool,
  id: PropTypes.string // Add id prop type
};

export default SectionContainer; 