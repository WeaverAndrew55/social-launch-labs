import React from 'react';
import Layout from '../components/layout/Layout';

// Import section components
import ServiceHeroSection from '../components/sections/services/ServiceHeroSection';
import ServiceOfferingsSection from '../components/sections/services/ServiceOfferingsSection';
import ServiceProcessSection from '../components/sections/services/ServiceProcessSection';
import ServiceTestimonialsSection from '../components/sections/services/ServiceTestimonialsSection';
import ServiceFAQSection from '../components/sections/services/ServiceFAQSection';
import CTASection from '../components/sections/home/CTASection';

// Services page hero content
const heroContent = {
  title: "Strategic Social Media Services",
  description: "Tailored solutions to transform your social media presence into a powerful lead generation and authority-building system.",
  backgroundImage: "/images/services-hero.jpg"
};

// Import CTA content
const ctaContent = {
  title: "Ready to Transform Your Social Media Presence?",
  description: "Book a free discovery call to discuss your business goals and how our frameworks can help you achieve them.",
  primaryButton: {
    text: "Book Your Free Call",
    link: "/contact"
  },
  secondaryButton: {
    text: "Explore Our Packages",
    link: "/packages"
  }
};

/**
 * Services page component
 */
const ServicesPage = () => {
  return (
    <Layout>
      <ServiceHeroSection
        title={heroContent.title}
        description={heroContent.description}
        backgroundImage={heroContent.backgroundImage}
      />
      <ServiceOfferingsSection />
      <ServiceProcessSection />
      <ServiceTestimonialsSection />
      <ServiceFAQSection />
      <CTASection
        title={ctaContent.title}
        description={ctaContent.description}
        primaryButton={ctaContent.primaryButton}
        secondaryButton={ctaContent.secondaryButton}
      />
    </Layout>
  );
};

export default ServicesPage; 