import React from 'react';
import PropTypes from 'prop-types';
import SectionContainer from '../../ui/SectionContainer';
import PackageCard from '../../ui/PackageCard';

/**
 * Packages Overview section component for the homepage
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {string} props.description - Section description
 * @param {Array} props.packages - Array of packages
 */
const PackagesOverviewSection = ({
  title,
  description,
  packages
}) => {
  return (
    <SectionContainer bgColor="bg-white" id="packages-overview">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-neutral-800">
          {title}
        </h2>
        <p className="max-w-3xl mx-auto text-neutral-600 text-lg">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <div key={index} className="flex flex-col h-full">
            <PackageCard
              title={pkg.title}
              price={pkg.price}
              description={pkg.description}
              features={pkg.features}
              primaryBenefit={pkg.primaryBenefit}
              ctaText={pkg.ctaText}
              ctaLink={pkg.ctaLink}
              popular={pkg.popular || false}
            />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

PackagesOverviewSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  packages: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
      primaryBenefit: PropTypes.string,
      ctaText: PropTypes.string.isRequired,
      ctaLink: PropTypes.string.isRequired,
      popular: PropTypes.bool
    })
  ).isRequired
};

export default PackagesOverviewSection; 