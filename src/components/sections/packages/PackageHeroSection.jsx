import React from 'react';
import PropTypes from 'prop-types';

/**
 * Hero section component for the Packages page
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Hero title
 * @param {string} props.description - Hero description
 * @param {string} props.backgroundImage - Background image URL
 */
const PackageHeroSection = ({
  title,
  description,
  backgroundImage
}) => {
  return (
    <section 
      className="relative py-24 md:py-32 px-4 overflow-hidden" 
      style={{
        backgroundImage: `linear-gradient(rgba(28, 25, 23, 0.8), rgba(28, 25, 23, 0.8)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/60 to-neutral-900/40 pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            {description}
          </p>
          <div className="w-24 h-1 bg-secondary-500 mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

PackageHeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired
};

export default PackageHeroSection; 