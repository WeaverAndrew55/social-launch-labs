import React from 'react';
import Layout from '../components/layout/Layout';

// Import section components
import EnhancedHeroSection from '../components/sections/common/EnhancedHeroSection';
import WhyPackagesWorkSection from '../components/sections/packages/WhyPackagesWorkSection';
import PackageDetailsSection from '../components/sections/packages/PackageDetailsSection';
import PackageSelectorSection from '../components/sections/packages/PackageSelectorSection';
import ProcessStepsSection from '../components/sections/packages/ProcessStepsSection';
import PackageCTASection from '../components/sections/packages/PackageCTASection';

// Packages page hero content
const heroContent = {
  title: "Choose the Right Package for Your Business Growth",
  description: "Our three modular packages are designed to meet you wherever you are in your marketing journey. Whether you need to attract new leads, convert more customers, or build your brand's authority, we have a flexible package to fuel your business growth.",
  primaryCta: {
    text: "View Our Packages",
    link: "#packages"
  },
  secondaryCta: {
    text: "Schedule a Consultation",
    link: "#contact"
  },
  imageSrc: "https://WeaverAndrew55.github.io/SLL-Images/assets/Services/Services-3.png", 
  aiGeneratedSrc: "/images/packages/packages-hero.jpg"
};

/**
 * Packages page component
 */
const PackagesPage = () => {
  return (
    <Layout>
      <EnhancedHeroSection
        title={heroContent.title}
        description={heroContent.description}
        primaryCta={heroContent.primaryCta}
        secondaryCta={heroContent.secondaryCta}
        imageSrc={heroContent.imageSrc}
        aiGeneratedSrc={heroContent.aiGeneratedSrc}
      />
      
      {/* Visual Connector Element */}
      <div className="section-divider"></div>
      
      {/* Why Our Packages Work */}
      <WhyPackagesWorkSection />
      
      {/* Visual Connector Element */}
      <div className="section-divider"></div>
      
      {/* Package Details */}
      <PackageDetailsSection />
      
      {/* Visual Connector Element */}
      <div className="section-divider"></div>
      
      {/* Package Selector */}
      <PackageSelectorSection />
      
      {/* Visual Connector Element */}
      <div className="section-divider"></div>
      
      {/* Process Steps */}
      <ProcessStepsSection />
      
      {/* Visual Connector Element */}
      <div className="section-divider"></div>
      
      {/* CTA Section */}
      <PackageCTASection />
    </Layout>
  );
};

export default PackagesPage; 