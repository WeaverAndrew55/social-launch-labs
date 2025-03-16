import React from 'react';
import Layout from '../../components/layout/Layout';
import EnhancedHeroSection from '../../components/sections/common/EnhancedHeroSection';
import ProblemSection from '../../components/sections/packages/conversionbooster/ProblemSection';
import SolutionSection from '../../components/sections/packages/conversionbooster/SolutionSection';
import ProcessSection from '../../components/sections/packages/conversionbooster/ProcessSection';
import PackageTiersSection from '../../components/sections/packages/conversionbooster/PackageTiersSection';
import WhyChooseUsSection from '../../components/sections/packages/conversionbooster/WhyChooseUsSection';
import CTASection from '../../components/sections/packages/conversionbooster/CTASection';

/**
 * Conversion Booster Package page component
 */
const ConversionBoosterPackagePage = () => {
  // Hero content
  const heroContent = {
    title: "Conversion Booster",
    description: "Transform your website traffic into paying customers with our proven conversion strategies.",
    primaryCta: {
      text: "Book a Free Consultation",
      link: "/contact"
    },
    secondaryCta: {
      text: "View Package Details",
      link: "#package-tiers"
    },
    imageSrc: "/images/packages/conversion-booster.jpg"
  };

  return (
    <Layout>
      {/* Hero Section */}
      <EnhancedHeroSection
        title={heroContent.title}
        description={heroContent.description}
        primaryCta={heroContent.primaryCta}
        secondaryCta={heroContent.secondaryCta}
        imageSrc={heroContent.imageSrc}
      />

      {/* Problem Section */}
      <ProblemSection />

      {/* Solution Section */}
      <SolutionSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Package Tiers Section */}
      <PackageTiersSection />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
};

export default ConversionBoosterPackagePage; 