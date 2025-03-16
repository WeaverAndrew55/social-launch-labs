import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/home/HeroSection';

// Import hero content
const heroContent = {
  title: "Launch Your Digital Presence With Confidence",
  description: "We help service-based businesses build strategic social media frameworks that attract high-quality leads and establish genuine authority.",
  ctaText: "See Our Packages",
  ctaLink: "/packages",
  image: "/images/hero-image.jpg"
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
      {/* Other sections will be added here */}
    </Layout>
  );
};

export default HomePage; 