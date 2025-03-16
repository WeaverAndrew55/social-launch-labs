import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SectionContainer from '../../ui/SectionContainer';
import Button from '../../ui/Button';

/**
 * CTA (Call-to-Action) section component for the homepage
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {string} props.description - Section description
 * @param {Object} props.primaryButton - Primary CTA button details
 * @param {string} props.primaryButton.text - Primary button text
 * @param {string} props.primaryButton.link - Primary button link
 * @param {Object} [props.secondaryButton] - Optional secondary CTA button details
 * @param {string} props.secondaryButton.text - Secondary button text
 * @param {string} props.secondaryButton.link - Secondary button link
 */
const CTASection = ({
  title,
  description,
  primaryButton,
  secondaryButton
}) => {
  return (
    <SectionContainer 
      bgColor="bg-gradient-to-br from-primary-600 to-primary-800" 
      id="cta"
      paddingY="py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
          {title}
        </h2>
        <p className="mb-8 text-lg text-white/90">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to={primaryButton.link}>
            <Button 
              variant="secondary" 
              size="lg"
              className="w-full sm:w-auto"
            >
              {primaryButton.text}
            </Button>
          </Link>
          
          {secondaryButton && (
            <Link to={secondaryButton.link}>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white/10"
              >
                {secondaryButton.text}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </SectionContainer>
  );
};

CTASection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  primaryButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }).isRequired,
  secondaryButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  })
};

export default CTASection; 