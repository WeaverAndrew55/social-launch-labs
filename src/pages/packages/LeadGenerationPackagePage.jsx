import React from 'react';
import Layout from '../../components/layout/Layout';
import EnhancedHeroSection from '../../components/sections/common/EnhancedHeroSection';
import ProblemSection from '../../components/sections/packages/leadgeneration/ProblemSection';
import SolutionSection from '../../components/sections/packages/leadgeneration/SolutionSection';
import ProcessSection from '../../components/sections/packages/leadgeneration/ProcessSection';
import FeaturesSection from '../../components/sections/packages/leadgeneration/FeaturesSection';
import TestimonialsSection from '../../components/sections/packages/leadgeneration/TestimonialsSection';
import FAQSection from '../../components/sections/packages/leadgeneration/FAQSection';

/**
 * Lead Generation Mastery Package page component
 */
const LeadGenerationPackagePage = () => {
  // Hero content
  const heroContent = {
    title: "Lead Generation Mastery",
    description: "Turn your social media into a consistent lead generation machine.",
    primaryCta: {
      text: "Book a Free Consultation",
      link: "/contact"
    },
    secondaryCta: {
      text: "View Package Details",
      link: "#package-details"
    },
    imageSrc: "/images/packages/lead-generation.jpg"
  };

  return (
    <Layout>
      {/* Hero Section - Keep the existing hero section */}
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

      {/* Features Section */}
      <FeaturesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />
    </Layout>
  );
};

export default LeadGenerationPackagePage; 