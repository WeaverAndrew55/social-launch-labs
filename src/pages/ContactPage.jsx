import React from 'react';
import Layout from '../components/layout/Layout';
import ContactHeroSection from '../components/sections/contact/ContactHeroSection';
import ContactInfoSection from '../components/sections/contact/ContactInfoSection';
import ContactFormSection from '../components/sections/contact/ContactFormSection';
import LocationsSection from '../components/sections/contact/LocationsSection';
import ContactFAQSection from '../components/sections/contact/ContactFAQSection';
import CTASection from '../components/sections/common/CTASection';

/**
 * Contact page component - premium design
 * Provides various ways for visitors to get in touch with Social Launch Labs
 */
const ContactPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <ContactHeroSection />
      
      {/* Contact Info Section with Cards */}
      <ContactInfoSection />
      
      {/* Contact Form Section */}
      <ContactFormSection />
      
      {/* Office Locations Section */}
      <LocationsSection />
      
      {/* FAQs Section */}
      <ContactFAQSection />
      
      {/* Final CTA */}
      <CTASection 
        title="Ready to Transform Your Video Content?"
        description="Join hundreds of businesses who trust Social Launch Labs as their strategic video content partner."
        primaryButtonText="Schedule Your Free Call"
        primaryButtonLink="https://calendly.com/sociallaunchlabs/strategy-call"
        secondaryButtonText="Email Us"
        secondaryButtonLink="mailto:hello@sociallaunchlabs.com"
        note="No pressure, no obligations – just a friendly conversation about how we can help you achieve your business goals."
        className="py-16 md:py-24"
      />
    </Layout>
  );
};

export default ContactPage; 