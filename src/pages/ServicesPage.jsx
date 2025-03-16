import React from 'react';
import Layout from '../components/layout/Layout';
import ServicesHeroSection from '../components/sections/services/ServicesHeroSection';
import WhatWeDoSection from '../components/sections/services/WhatWeDoSection';
import CorePackagesSection from '../components/sections/services/CorePackagesSection';
import AdditionalServicesSection from '../components/sections/services/AdditionalServicesSection';
import WhyWorkWithUsSection from '../components/sections/services/WhyWorkWithUsSection';
import CTASection from '../components/sections/common/CTASection';

/**
 * Services page component showing all services offered by Social Launch Labs
 */
const ServicesPage = () => {
  return (
    <Layout>
      <ServicesHeroSection />
      <WhatWeDoSection />
      <CorePackagesSection />
      <AdditionalServicesSection />
      <WhyWorkWithUsSection />
      <CTASection 
        title="Ready to Elevate Your Brand?" 
        description="The fastest way to grow with video is to start with a conversation. If you're excited to see what strategic video content can do for your business, let's chat about it!"
        primaryButtonText="Book Your Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="Call Us Directly"
        secondaryButtonLink="tel:+1234567890"
        note="This no-obligation call is a friendly deep-dive into possibilities – whether you already have a vision or need guidance, we're here to provide expert advice."
      />
    </Layout>
  );
};

export default ServicesPage; 