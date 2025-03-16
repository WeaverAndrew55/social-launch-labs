import React from 'react';
import PropTypes from 'prop-types';

/**
 * Section Container component for consistent section styling
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Section content
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.id] - Section ID for navigation/anchors
 * @param {string} [props.bgColor] - Background color (if not specified by parent)
 * @param {boolean} [props.fullWidth=false] - Whether section is full width
 */
const SectionContainer = ({
  children,
  className = '',
  id,
  bgColor,
  fullWidth = false,
  ...rest
}) => {
  const bgColorClass = bgColor ? bgColor : '';

  return (
    <div
      id={id}
      className={`relative ${bgColorClass} ${className}`}
      {...rest}
    >
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${fullWidth ? 'w-full' : 'max-w-7xl'}`}>
        {children}
      </div>
    </div>
  );
};

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  bgColor: PropTypes.string,
  fullWidth: PropTypes.bool
};

export default SectionContainer; 