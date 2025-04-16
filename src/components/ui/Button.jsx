import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button component with multiple variants and sizes
 * 
 * @param {Object} props - Component props
 * @param {'primary'|'secondary'|'outline'} [props.variant='primary'] - Button style variant
 * @param {'sm'|'md'|'lg'} [props.size='md'] - Button size
 * @param {Function} props.onClick - Click handler function
 * @param {React.ReactNode} props.children - Button content
 * @param {string} [props.className] - Additional CSS classes (can include custom color classes that will override the defaults)
 * @param {string} [props.type='button'] - Button type attribute
 * @param {boolean} [props.disabled=false] - Disabled state
 * @param {string} [props.ariaLabel] - Accessibility label
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  onClick,
  children,
  className = '',
  type = 'button',
  disabled = false,
  ariaLabel,
  ...rest
}) => {
  // Base styles for all buttons
  const baseStyles = 'font-body font-medium transition-all rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Check if className includes any custom color class
  const hasCustomBgColor = /bg-\w+-\d+/.test(className);
  const hasCustomHoverBgColor = /hover:bg-\w+-\d+/.test(className);
  
  // Variant specific styles
  let variantStyles = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500',
    secondary: 'bg-secondary-600 hover:bg-secondary-700 text-white focus:ring-secondary-500',
    outline: 'bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500'
  };
  
  // If custom background color is provided, remove the default background colors
  if (hasCustomBgColor) {
    variantStyles = {
      primary: variantStyles.primary.replace(/bg-\w+-\d+/, '') + ' text-white focus:ring-primary-500',
      secondary: variantStyles.secondary.replace(/bg-\w+-\d+/, '') + ' text-white focus:ring-secondary-500',
      outline: 'bg-transparent border-2 border-primary-600 text-primary-600 focus:ring-primary-500'
    };
  }
  
  // If custom hover background color is provided, remove the default hover
  if (hasCustomHoverBgColor) {
    variantStyles = {
      primary: variantStyles.primary.replace(/hover:bg-\w+-\d+/, ''),
      secondary: variantStyles.secondary.replace(/hover:bg-\w+-\d+/, ''),
      outline: variantStyles.outline.replace(/hover:bg-\w+-\d+/, '')
    };
  }
  
  // Size specific styles
  const sizeStyles = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg'
  };
  
  // Disabled styles
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  // Combine all styles
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`;
  
  return (
    <button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string
};

export default Button; 