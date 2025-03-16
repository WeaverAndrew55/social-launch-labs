import React from 'react';
import Layout from '../components/layout/Layout';

// Import section components
import EnhancedHeroSection from '../components/sections/common/EnhancedHeroSection';
import PackageListSection from '../components/sections/packages/PackageListSection';
import PackageComparisonSection from '../components/sections/packages/PackageComparisonSection';
import PackageTestimonialsSection from '../components/sections/packages/PackageTestimonialsSection';
import PackageFAQSection from '../components/sections/packages/PackageFAQSection';
import CTASection from '../components/sections/home/CTASection';

// Packages page hero content
const heroContent = {
  title: "Tailored Social Media Packages",
  description: "Choose the perfect package to transform your social media presence into a client-generating asset.",
  primaryCta: {
    text: "View Packages",
    link: "#packages"
  },
  secondaryCta: {
    text: "Compare Features",
    link: "#package-comparison"
  },
  imageSrc: "https://picsum.photos/800/450?random=3", // Placeholder image
  aiGeneratedSrc: "/images/ai-generated/hero/packages-hero.jpg" // Simulated AI-generated image path
};

// Import CTA content
const ctaContent = {
  title: "Ready to Get Started?",
  description: "Book a free discovery call to discuss which package is right for your business.",
  primaryButton: {
    text: "Book Your Free Call",
    link: "/contact"
  },
  secondaryButton: {
    text: "Learn More About Our Process",
    link: "/services"
  }
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
        id="packages"
      />
      <PackageListSection />
      <PackageComparisonSection />
      <PackageTestimonialsSection />
      <PackageFAQSection />
      <CTASection
        title={ctaContent.title}
        description={ctaContent.description}
        primaryButton={ctaContent.primaryButton}
        secondaryButton={ctaContent.secondaryButton}
      />
    </Layout>
  );
};

export default PackagesPage; 