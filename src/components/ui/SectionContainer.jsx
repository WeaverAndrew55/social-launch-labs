import React from 'react';
import PropTypes from 'prop-types';

/**
 * Section Container component for consistent section styling
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Section content
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.id] - Section ID for navigation/anchors
 * @param {string} [props.bgColor='bg-white'] - Background color
 * @param {boolean} [props.fullWidth=false] - Whether section is full width
 * @param {string} [props.paddingY='py-16'] - Vertical padding
 */
const SectionContainer = ({
  children,
  className = '',
  id,
  bgColor = 'bg-white',
  fullWidth = false,
  paddingY = 'py-16',
  ...rest
}) => {
  return (
    <section
      id={id}
      className={`${bgColor} ${paddingY} ${className}`}
      {...rest}
    >
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${fullWidth ? 'w-full' : 'max-w-7xl'}`}>
        {children}
      </div>
    </section>
  );
};

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  bgColor: PropTypes.string,
  fullWidth: PropTypes.bool,
  paddingY: PropTypes.string
};

export default SectionContainer; 