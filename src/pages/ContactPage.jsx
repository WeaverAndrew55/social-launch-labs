import React from 'react';
import Layout from '../components/layout/Layout';
import ContactHeroSection from '../components/sections/contact/ContactHeroSection';
import ContactInfoSection from '../components/sections/contact/ContactInfoSection';
import ContactFormSection from '../components/sections/contact/ContactFormSection';
import ContactFAQSection from '../components/sections/contact/ContactFAQSection';
import GetStartedCTA from '../components/sections/shared/GetStartedCTA';

// Import CTA content
const ctaContent = {
  title: "Ready to Elevate Your Social Media Strategy?",
  description: "Take your brand's social presence to the next level with our proven strategies tailored specifically for your business goals.",
  primaryButtonText: "Book a Free Strategy Call",
  primaryButtonLink: "/contact",
  // secondaryButtonText: "Browse All Services", // GetStartedCTA doesn't use secondary
  // secondaryButtonLink: "/services", // GetStartedCTA doesn't use secondary
  // bgColor: "transparent" // Prop handled differently
};

/**
 * Contact page component - premium design
 * Provides various ways for visitors to get in touch with Social Launch Labs
 * Updated with optimized backgrounds and unified section design
 */
const ContactPage = () => {
  // Contact page already has an overlay on the hero image by default
  // Let's just customize the text to ensure it's relevant
  const heroOverlay = {
    text: "24hr Response Time",
    icon: "info",
    position: "bottom-right"
  };

  return (
    <Layout transparentHeader={false}>
      {/* Full-page background wrapper */}
      <div className="relative">
        {/* REMOVED Global page background override - Now uses Layout default */}
        {/* <div className="fixed inset-0 w-full h-full overflow-hidden -z-20"> ... </div> */}
        
        {/* Hero section with its own background */}
        <div className="relative">
          {/* Hero-specific background - Simplified based on AboutPage.jsx hero */}
          <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
            {/* Modern gradient background base */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E8F0FF] via-[#F6F9FF] to-white w-full h-full"></div>
            
            {/* Simplified subtle elements inspired by AboutPage */}
            {/* Subtle geometric elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.07]">
              <div className="absolute top-[10%] right-[15%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full border border-[#155DFC]/10"></div>
              <div className="absolute bottom-[15%] left-[10%] w-[25vw] h-[25vw] max-w-[350px] max-h-[350px] rounded-full border border-[#7394D3]/15"></div>
            </div>
            
            {/* Layered blurred elements for depth */}
            <div className="absolute top-0 right-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[#155DFC] rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.02]"></div>
            <div className="absolute bottom-0 left-[5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-[#7394D3] rounded-full mix-blend-multiply filter blur-[90px] opacity-[0.03]"></div>

            {/* REMOVED: Old complex elements (connection lines, framework, diagonals) */}
          </div>
          
          <ContactHeroSection bgColor="transparent" overlayInfo={heroOverlay} />
        </div>
        
        {/* Standardized Wave divider - Use consistent version from AboutPage */}
        <div className="bg-white relative mb-12">
          <div className="absolute -top-0 w-full h-8 overflow-hidden">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute w-full h-full">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#155DFC" opacity="0.1"></path>
            </svg>
          </div>
        </div>
      
        {/* Contact Info Section with Cards - Standardized spacing */}
        <div className="relative">
          <ContactInfoSection spacingClass="py-16" transparentBg={true} />
        </div>
        
        {/* REMOVED: Subtle section separator - diagonal line */}
        {/* <div className="relative h-px w-full my-10 overflow-hidden"> ... </div> */}
      
        {/* Contact Form Section - Standardized spacing */}
        <div className="relative">
          <ContactFormSection spacingClass="py-16" transparentBg={true} />
        </div>
        
        {/* REMOVED: Section divider - subtle wave pattern reversed */}
        {/* <div className="relative h-16 overflow-hidden z-10 my-6"> ... </div> */}
      
        {/* FAQs Section - Standardized spacing */}
        <div className="relative">
          <ContactFAQSection spacingClass="py-16" transparentBg={true} />
        </div>
        
        {/* REMOVED: Final section divider - subtle wave pattern different style */}
        {/* <div className="relative h-12 overflow-hidden z-10 my-6"> ... </div> */}
      
        {/* Final CTA - Updated to GetStartedCTA with standard spacing */}
        <div className="relative">
          <GetStartedCTA
            badge="Ready to Connect?" // Adjusted badge for contact page
            title={ctaContent.title}
            description={ctaContent.description}
            buttonText={ctaContent.primaryButtonText}
            buttonLink={ctaContent.primaryButtonLink}
            transparentBg={true}
            spacingClass="pt-16 pb-24" // Consistent final CTA spacing
          />
          {/* Removed old CtaSection call */}
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage; 