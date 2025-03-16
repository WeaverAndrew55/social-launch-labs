import React from 'react';
import Layout from '../components/layout/Layout';
import AboutHeroSection from '../components/sections/about/AboutHeroSection';
import OurStorySection from '../components/sections/about/OurStorySection';
import WhyChooseUsSection from '../components/sections/about/WhyChooseUsSection';
import TeamSection from '../components/sections/about/TeamSection';
import ValuesSection from '../components/sections/about/ValuesSection';
import AboutCTASection from '../components/sections/about/AboutCTASection';

/**
 * AboutPage component that displays information about Social Launch Labs
 */
const AboutPage = () => {
  return (
    <Layout>
      <AboutHeroSection />
      <OurStorySection />
      <WhyChooseUsSection />
      <TeamSection />
      <ValuesSection />
      <AboutCTASection />
    </Layout>
  );
};

export default AboutPage; 