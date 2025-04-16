import React from 'react';
import Layout from '../components/layout/Layout';
import EnhancedHeroSection from '../components/sections/common/EnhancedHeroSection';
import OurStorySection from '../components/sections/about/OurStorySection';
import WhyChooseUsSection from '../components/sections/about/WhyChooseUsSection';
import TeamSection from '../components/sections/about/TeamSection';
import TestimonialsSection from '../components/sections/home/TestimonialsSection';
import GetStartedCTA from '../components/sections/shared/GetStartedCTA';

// About hero content
const heroContent = {
  title: "Your Partner in Strategic Social Media Marketing",
  description: "Transform Expertise Into Content That Connects, Converts, and Scales",
  primaryCta: {
    text: "Explore Our Services",
    link: "/services"
  },
  secondaryCta: {
    text: "Get in Touch",
    link: "/contact"
  },
  imageSrc: "https://placehold.co/800x600/e6efff/1e40af?text=Marketing+Team",
  aiGeneratedSrc: null,
  badge: "About Us"
};

// Testimonials content
const testimonialsContent = {
  title: "What Our Clients Say",
  description: "Don't just take our word for it. Here's what our clients have to say about working with Social Launch Labs.",
  testimonials: [
    {
      quote: "Since implementing Social Launch Labs' framework, we've seen a 43% increase in qualified leads from social media, with a much higher conversion rate than our previous efforts.",
      author: "Sarah Johnson",
      title: "Marketing Director, Apex Consulting",
      image: "https://placehold.co/200x200/eef2ff/3b82f6?text=SJ&font=playfair-display"
    },
    {
      quote: "Their systematic approach completely transformed how we view social media. We're now generating consistent leads without the constant guesswork.",
      author: "Michael Chen",
      title: "CEO, Growth Partners Agency",
      image: "https://placehold.co/200x200/f5f3ff/8b5cf6?text=MC&font=playfair-display"
    },
    {
      quote: "I finally feel like I have a sustainable social media strategy that actually brings in clients instead of just vanity metrics.",
      author: "Alicia Rodriguez",
      title: "Business Coach & Consultant",
      image: "https://placehold.co/200x200/fef2f2/ef4444?text=AR&font=playfair-display"
    }
  ]
};

/**
 * AboutPage component that displays information about Social Launch Labs
 * Updated with optimized backgrounds and unified section design
 */
const AboutPage = () => {
  return (
    <Layout transparentHeader={false}>
      {/* Full-page background wrapper */}
      <div className="relative">
        {/* REMOVED Global page background override - Now uses Layout default */}
        {/* <div className="fixed inset-0 w-full h-full overflow-hidden -z-20"> ... </div> */}
        
        {/* Hero section with its own background */}
        <div className="relative">
          {/* Hero-specific background - Simplified based on ServicesPage.jsx hero */}
          <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
            {/* Modern gradient background base */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E8F0FF] via-[#F6F9FF] to-white w-full h-full"></div>
            
            {/* Simplified subtle elements inspired by ServicesPage */}
            {/* Subtle geometric elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.07]">
              <div className="absolute top-[10%] right-[15%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full border border-[#155DFC]/10"></div>
              <div className="absolute bottom-[15%] left-[10%] w-[25vw] h-[25vw] max-w-[350px] max-h-[350px] rounded-full border border-[#7394D3]/15"></div>
            </div>
            
            {/* Layered blurred elements for depth */}
            <div className="absolute top-0 right-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[#155DFC] rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.02]"></div>
            <div className="absolute bottom-0 left-[5%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-[#7394D3] rounded-full mix-blend-multiply filter blur-[90px] opacity-[0.03]"></div>

            {/* REMOVED: Old complex elements (connection lines, framework, diagonals) */}
          </div>
          
          <EnhancedHeroSection
            title={heroContent.title}
            description={heroContent.description}
            primaryCta={heroContent.primaryCta}
            secondaryCta={heroContent.secondaryCta}
            imageSrc={heroContent.imageSrc}
            aiGeneratedSrc={heroContent.aiGeneratedSrc}
            badge={heroContent.badge}
            bgColor="transparent" // Keep hero transparent to show its specific background
            overlayInfo={{
              text: "Expert Marketing Team",
              icon: "shield",
              position: "bottom-right"
            }}
          />
        </div>

        {/* Wave divider - Added based on ServicesPage.jsx */}
        <div className="bg-white relative mb-12"> {/* Added bg-white for context if needed, adjust if layout provides bg */}
          <div className="absolute -top-0 w-full h-8 overflow-hidden"> {/* Reduced height from service page example */}
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute w-full h-full">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#155DFC" opacity="0.1"></path> {/* Match color and opacity */}
            </svg>
          </div>
        </div>
        
        {/* Our Story Section - Updated spacing and bg */}
        <div className="relative">
          <OurStorySection spacingClass="py-16" transparentBg={true} />
        </div>
        
        {/* Team Section - Updated spacing and bg */}
        <div className="relative">
          <TeamSection spacingClass="py-16" transparentBg={true} />
        </div>
        
        {/* Why Choose Us Section - Updated spacing and bg */}
        <div className="relative">
          <WhyChooseUsSection spacingClass="py-16" transparentBg={true} />
        </div>
        
        {/* Testimonials Section - Updated spacing */}
        <div className="relative">
          <TestimonialsSection
            title={testimonialsContent.title}
            description={testimonialsContent.description}
            testimonials={testimonialsContent.testimonials}
            transparentBg={true}
            spacingClass="py-16" 
          />
        </div>
        
        {/* Final CTA - Updated with GetStartedCTA */}
        <div className="relative">
          <GetStartedCTA
            badge="Ready to Get Started?"
            title="Ready to Elevate Your Social Media Strategy?"
            description="Take your brand's social presence to the next level with our proven strategies tailored specifically for your business goals."
            buttonText="Book a Free Strategy Call"
            buttonLink="/contact"
            transparentBg={true}
            spacingClass="pt-16 pb-24" // Keep existing spacing for final CTA
          />
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage; 