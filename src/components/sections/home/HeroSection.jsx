import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SectionContainer from '../../ui/SectionContainer';
import Button from '../../ui/Button';

/**
 * Hero section component for homepage and landing pages
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Main headline
 * @param {string} props.description - Supporting description text
 * @param {string} props.ctaText - Primary call-to-action button text
 * @param {string} props.ctaLink - Primary call-to-action button link
 * @param {string} [props.secondaryCtaText] - Optional secondary button text
 * @param {string} [props.secondaryCtaLink] - Optional secondary button link
 * @param {string} [props.backgroundImage] - Optional background image path
 */
const HeroSection = ({
  title,
  description,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage
}) => {
  // Determine if this section has a background image
  const hasBgImage = !!backgroundImage;
  
  // Style configurations based on background image
  const bgStyles = hasBgImage 
    ? `bg-cover bg-center bg-no-repeat` 
    : 'bg-gradient-to-br from-primary-50 to-secondary-50';
  
  const textColorClass = hasBgImage ? 'text-white' : 'text-neutral-800';
  
  return (
    <SectionContainer 
      bgColor={hasBgImage ? '' : 'bg-transparent'} 
      className={`${bgStyles} ${hasBgImage ? 'relative' : ''} pt-32 pb-20`}
      paddingY=""
      style={hasBgImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {/* Optional overlay for background images */}
      {hasBgImage && (
        <div className="absolute inset-0 bg-primary-900 opacity-60 z-0"></div>
      )}
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 ${textColorClass}`}>
          {title}
        </h1>
        
        <p className={`text-xl md:text-2xl mb-8 ${hasBgImage ? 'text-white/90' : 'text-neutral-600'}`}>
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to={ctaLink}>
            <Button 
              variant="primary" 
              size="lg"
              className="w-full sm:w-auto"
            >
              {ctaText}
            </Button>
          </Link>
          
          {secondaryCtaText && secondaryCtaLink && (
            <Link to={secondaryCtaLink}>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto"
              >
                {secondaryCtaText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </SectionContainer>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ctaText: PropTypes.string.isRequired,
  ctaLink: PropTypes.string.isRequired,
  secondaryCtaText: PropTypes.string,
  secondaryCtaLink: PropTypes.string,
  backgroundImage: PropTypes.string
};

export default HeroSection; 