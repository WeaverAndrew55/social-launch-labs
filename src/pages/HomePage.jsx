import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/home/HeroSection';
import ProblemSolutionSection from '../components/sections/home/ProblemSolutionSection';

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
      {/* Other sections will be added here */}
    </Layout>
  );
};

export default HomePage; 