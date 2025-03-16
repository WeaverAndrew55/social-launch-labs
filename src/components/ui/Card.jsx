import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card component for displaying content in a contained box
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.elevated=false] - Whether to show elevation shadow
 * @param {boolean} [props.bordered=false] - Whether to show border
 * @param {number} [props.padding=4] - Padding size (tailwind scale)
 * @param {React.ReactNode} [props.header] - Optional card header content
 * @param {React.ReactNode} [props.footer] - Optional card footer content
 */
const Card = ({
  children,
  className = '',
  elevated = false,
  bordered = false,
  padding = 4,
  header,
  footer,
  ...rest
}) => {
  // Base styles for all cards
  const baseStyles = 'bg-white rounded-lg overflow-hidden';
  
  // Elevation styles
  const elevationStyles = elevated ? 'shadow-lg' : '';
  
  // Border styles
  const borderStyles = bordered ? 'border border-neutral-200' : '';
  
  // Padding styles
  const paddingStyles = `p-${padding}`;
  
  // Combine all styles
  const cardStyles = `${baseStyles} ${elevationStyles} ${borderStyles} ${className}`;
  
  return (
    <div className={cardStyles} {...rest}>
      {header && (
        <div className="border-b border-neutral-200 px-4 py-3 bg-neutral-50">
          {header}
        </div>
      )}
      
      <div className={paddingStyles}>
        {children}
      </div>
      
      {footer && (
        <div className="border-t border-neutral-200 px-4 py-3 bg-neutral-50">
          {footer}
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  elevated: PropTypes.bool,
  bordered: PropTypes.bool,
  padding: PropTypes.number,
  header: PropTypes.node,
  footer: PropTypes.node
};

export default Card; 