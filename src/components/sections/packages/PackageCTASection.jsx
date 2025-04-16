import React from 'react';
import { Link } from 'react-router-dom';
import SectionContainer from '../../ui/SectionContainer';
import CtaSection from '../shared/CtaSection';

/**
 * Standardized Package CTA Section using the shared CtaSection component
 */
const PackageCTASection = () => {
  return (
    <CtaSection
      title="Ready to Elevate Your Social Media Strategy?"
      description="Take your brand's social presence to the next level with our proven strategies tailored specifically for your business goals."
      primaryButtonText="Book a Free Strategy Call"
      primaryButtonLink="/contact"
      secondaryButtonText="Browse All Packages"
      secondaryButtonLink="/packages"
      bgColor="gray"
      spacingClass="section-spacing-md"
    />
  );
};

export default PackageCTASection; 