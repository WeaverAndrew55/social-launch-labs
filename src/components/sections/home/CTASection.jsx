import React from 'react';
import PropTypes from 'prop-types';
import CtaSection from '../shared/CtaSection';

/**
 * CTA (Call-to-Action) section component for the homepage
 * This is a wrapper around the new CtaSection for backward compatibility
 */
const CTASection = ({
  title,
  description,
  primaryButton,
  secondaryButton
}) => {
  return (
    <CtaSection
      title={title}
      description={description}
      primaryButtonText={primaryButton?.text || "Get Started"}
      primaryButtonLink={primaryButton?.link || "/contact"}
      secondaryButtonText={secondaryButton?.text}
      secondaryButtonLink={secondaryButton?.link}
      showSecondaryButton={!!secondaryButton}
      bgColor="blue"
    />
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