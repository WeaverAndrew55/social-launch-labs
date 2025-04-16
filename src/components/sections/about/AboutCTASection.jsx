import React from 'react';
import CtaSection from '../shared/CtaSection';

/**
 * AboutCTASection component for the About page
 * Uses the standardized CtaSection component with blue theme to match About page
 */
const AboutCTASection = () => {
  return (
    <CtaSection
      title="Ready to Elevate Your Social Media Strategy?"
      description="Take your brand's social presence to the next level with our proven strategies tailored specifically for your business goals."
      primaryButtonText="Book a Free Strategy Call"
      primaryButtonLink="/contact"
      secondaryButtonText="Browse All Packages"
      secondaryButtonLink="/packages"
      bgColor="blue"
      spacingClass="section-spacing-md"
    />
  );
};

export default AboutCTASection; 