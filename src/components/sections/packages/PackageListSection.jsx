import React from 'react';
import PropTypes from 'prop-types';
import SectionContainer from '../../ui/SectionContainer';
import PackageCard from '../../ui/PackageCard';
import Button from '../../ui/Button';

/**
 * Package List section component for the Packages page
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {string} props.description - Section description
 * @param {Array} props.packages - Array of package offerings
 */
const PackageListSection = ({
  title = "Our Tailored Packages",
  description = "Choose the perfect solution to transform your social media presence into a client-generating asset.",
  packages = [
    {
      title: "Lead Generation Mastery",
      price: "$1,997/mo",
      description: "Turn your social media into a consistent lead generation machine.",
      primaryBenefit: "Ideal for businesses focused on growing their client base",
      features: [
        "Social media audit and strategy",
        "Content calendar development",
        "Engagement campaign setup",
        "Lead magnet creation",
        "Monthly performance reports"
      ],
      ctaText: "Learn More",
      ctaLink: "/packages/lead-generation",
      popular: false
    },
    {
      title: "Conversion Booster",
      price: "$2,497/mo",
      description: "Transform engagement into clients with our conversion-focused system.",
      primaryBenefit: "Perfect for businesses with traffic but low conversion rates",
      features: [
        "Everything in Lead Generation",
        "Conversion path optimization",
        "Social proof integration",
        "Messaging refinement",
        "A/B testing implementation"
      ],
      ctaText: "Learn More",
      ctaLink: "/packages/conversion-booster",
      popular: true
    },
    {
      title: "Authority Builder",
      price: "$3,997/mo",
      description: "Establish yourself as the go-to authority in your niche.",
      primaryBenefit: "Best for established businesses ready to dominate their market",
      features: [
        "Everything in Conversion Booster",
        "Thought leadership content",
        "Industry partnerships",
        "Speaking opportunity outreach",
        "PR and media exposure strategy"
      ],
      ctaText: "Learn More",
      ctaLink: "/packages/authority-builder",
      popular: false
    }
  ]
}) => {
  return (
    <SectionContainer bgColor="bg-white" id="package-options">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-neutral-800">
          {title}
        </h2>
        <p className="max-w-3xl mx-auto text-neutral-600 text-lg">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <div key={index} className={`flex ${pkg.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}>
            <PackageCard
              title={pkg.title}
              price={pkg.price}
              description={pkg.description}
              primaryBenefit={pkg.primaryBenefit}
              features={pkg.features}
              ctaLink={pkg.ctaLink}
              ctaText={pkg.ctaText}
              popular={pkg.popular}
            />
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-lg text-neutral-600 mb-6">
          Not sure which package is right for you? Schedule a free consultation call.
        </p>
        <Button 
          href="/contact"
          variant="primary"
          size="lg"
        >
          Book Your Free Call
        </Button>
      </div>
    </SectionContainer>
  );
};

PackageListSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  packages: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      primaryBenefit: PropTypes.string,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
      ctaText: PropTypes.string.isRequired,
      ctaLink: PropTypes.string.isRequired,
      popular: PropTypes.bool
    })
  )
};

export default PackageListSection; 