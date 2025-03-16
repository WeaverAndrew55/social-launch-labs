import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/home/HeroSection';
import ProblemSolutionSection from '../components/sections/home/ProblemSolutionSection';
import TargetAudienceSection from '../components/sections/home/TargetAudienceSection';

// Import hero content
const heroContent = {
  title: "Launch Your Digital Presence With Confidence",
  description: "We help service-based businesses build strategic social media frameworks that attract high-quality leads and establish genuine authority.",
  ctaText: "See Our Packages",
  ctaLink: "/packages",
  image: "/images/hero-image.jpg"
};

// Import problem-solution content
const problemSolutionContent = {
  problem: {
    title: "The Challenge",
    description: "Many service providers struggle with inconsistent social media results, wasting time on platforms that don't generate qualified leads or build meaningful authority in their industry."
  },
  solution: {
    title: "Our Solution",
    description: "We've developed a systematic approach that transforms your social media presence from scattered and ineffective to strategic and results-driven, focusing on the metrics that actually matter for your business growth."
  }
};

// Import target audience content
const targetAudienceContent = {
  title: "Who We Work With",
  description: "Our frameworks are specifically designed for service-based businesses who want to leverage social media effectively.",
  segments: [
    {
      title: "Coaches & Consultants",
      description: "Establish yourself as an authority and attract clients who value your expertise.",
      icon: "chart-bar"
    },
    {
      title: "Professional Service Providers",
      description: "Build trust and visibility in your specialized field to attract high-value clients.",
      icon: "briefcase"
    },
    {
      title: "Agency Owners",
      description: "Showcase your results and methodology to stand out in a crowded marketplace.",
      icon: "building"
    }
  ]
};

/**
 * Home page component
 */
const HomePage = () => {
  return (
    <Layout transparentHeader={true}>
      <HeroSection
        title={heroContent.title}
        description={heroContent.description}
        ctaText={heroContent.ctaText}
        ctaLink={heroContent.ctaLink}
        backgroundImage={heroContent.image}
      />
      <ProblemSolutionSection
        problem={problemSolutionContent.problem}
        solution={problemSolutionContent.solution}
      />
      <TargetAudienceSection
        title={targetAudienceContent.title}
        description={targetAudienceContent.description}
        segments={targetAudienceContent.segments}
      />
      {/* Other sections will be added here */}
    </Layout>
  );
};

export default HomePage; 