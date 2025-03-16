import React from 'react';
import Layout from '../../components/layout/Layout';
import EnhancedHeroSection from '../../components/sections/common/EnhancedHeroSection';
import ProblemSection from '../../components/sections/packages/authoritybooster/ProblemSection';
import SolutionSection from '../../components/sections/packages/authoritybooster/SolutionSection';
import ProcessSection from '../../components/sections/packages/authoritybooster/ProcessSection';
import PackageTiersSection from '../../components/sections/packages/authoritybooster/PackageTiersSection';
import WhyChooseUsSection from '../../components/sections/packages/authoritybooster/WhyChooseUsSection';
import CTASection from '../../components/sections/packages/authoritybooster/CTASection';

/**
 * Authority Builder Package page component
 */
const AuthorityBuilderPackagePage = () => {
  // Hero content
  const heroContent = {
    title: "Authority Builder",
    description: "Establish your brand authority and amplify trust with premium video content.",
    primaryCta: {
      text: "Book a Free Consultation",
      link: "/contact"
    },
    secondaryCta: {
      text: "View Package Details",
      link: "#package-tiers"
    },
    imageSrc: "/images/packages/authority-builder.jpg"
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

export default AuthorityBuilderPackagePage; 