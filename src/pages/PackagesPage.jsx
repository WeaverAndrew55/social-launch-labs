import React from 'react';
import Layout from '../components/layout/Layout';

// Import section components
import EnhancedHeroSection from '../components/sections/common/EnhancedHeroSection';
import WhyPackagesWorkSection from '../components/sections/packages/WhyPackagesWorkSection';
import PackageDetailsSection from '../components/sections/packages/PackageDetailsSection';
import PackageSelectorSection from '../components/sections/packages/PackageSelectorSection';
import ProcessStepsSection from '../components/sections/packages/ProcessStepsSection';
import PackageCTASection from '../components/sections/packages/PackageCTASection';

// Optimized hero content - more concise and action-focused
const heroContent = {
  title: "Strategic Service Packages for Your Growth Goals",
  description: "Choose the package that addresses your specific marketing challenge. Each solution targets a key stage of your customer journey - from attracting leads to converting clients to establishing authority.",
  primaryCta: {
    text: "View Packages",
    link: "#packages"
  },
  secondaryCta: {
    text: "Book Consultation",
    link: "#contact"
  },
  imageSrc: "https://placehold.co/800x600/eef4ff/3b82f6?text=Strategic+Packages&font=playfair-display",
  aiGeneratedSrc: null
};

/**
 * Optimized Packages page component
 */
const PackagesPage = () => {
  return (
    <Layout>
      {/* 1. Hero Section - First impression and value proposition */}
      <EnhancedHeroSection
        title={heroContent.title}
        description={heroContent.description}
        primaryCta={heroContent.primaryCta}
        secondaryCta={heroContent.secondaryCta}
        imageSrc={heroContent.imageSrc}
        aiGeneratedSrc={heroContent.aiGeneratedSrc}
      />
      
      {/* 2. Our Approach - Why Our Packages Work */}
      <WhyPackagesWorkSection />
      
      {/* 3. Our Specialized Service Packages */}
      <PackageDetailsSection />
      
      {/* 4. Find Your Match - Not Sure Which Package You Need? */}
      <PackageSelectorSection />
      
      {/* 5. Getting Started - Simple 3-Step Process */}
      <ProcessStepsSection />
      
      {/* 6. Final CTA - Strong conversion point at the end of the journey */}
      <PackageCTASection />
    </Layout>
  );
};

export default PackagesPage; 