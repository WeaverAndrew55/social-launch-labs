import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * PackageCard component for displaying package information
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Package name
 * @param {string} props.price - Price
 * @param {string} props.description - Short description
 * @param {Array<string>} props.features - Array of features
 * @param {string} props.primaryBenefit - Highlighted benefit
 * @param {string} props.ctaText - Button text
 * @param {string} props.ctaLink - Button link
 * @param {boolean} [props.popular=false] - If it's a featured package
 */
const PackageCard = ({
  title,
  price,
  description,
  features,
  primaryBenefit,
  ctaText,
  ctaLink,
  popular = false,
  ...rest
}) => {
  return (
    <div 
      className={`relative rounded-lg overflow-hidden border ${popular ? 'border-primary-500 shadow-lg' : 'border-neutral-200'}`}
      {...rest}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 text-sm font-medium">
          Popular
        </div>
      )}
      
      <div className={`p-6 ${popular ? 'bg-primary-50' : 'bg-white'}`}>
        <h3 className="text-2xl font-heading font-bold text-neutral-800 mb-2">{title}</h3>
        <div className="text-3xl font-bold text-primary-600 mb-4">{price}</div>
        <p className="text-neutral-600 mb-6">{description}</p>
        
        {primaryBenefit && (
          <div className="bg-accent-50 border border-accent-200 rounded-md p-3 mb-6">
            <p className="text-accent-800 font-medium">{primaryBenefit}</p>
          </div>
        )}
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg 
                className="h-5 w-5 text-primary-500 mr-2 mt-0.5" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-neutral-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link 
          to={ctaLink}
          className={`block w-full text-center py-3 px-4 rounded-md font-medium transition-colors ${
            popular 
              ? 'bg-primary-600 hover:bg-primary-700 text-white' 
              : 'bg-white border border-primary-600 text-primary-600 hover:bg-primary-50'
          }`}
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
};

PackageCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  primaryBenefit: PropTypes.string,
  ctaText: PropTypes.string.isRequired,
  ctaLink: PropTypes.string.isRequired,
  popular: PropTypes.bool
};

export default PackageCard; 