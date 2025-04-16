import React from 'react';
import Layout from '../components/layout/Layout';
import EnhancedHeroSection from '../components/sections/common/EnhancedHeroSection';
import ProblemSolutionSection from '../components/sections/home/ProblemSolutionSection';
import ClientIndustriesSection from '../components/sections/home/ClientIndustriesSection';
import WhatWeOfferSection from '../components/sections/home/WhatWeOfferSection';
import HomePackagesSection from '../components/sections/home/HomePackagesSection';
import TestimonialsSection from '../components/sections/home/TestimonialsSection';
import PackageFAQSection from '../components/sections/packages/PackageFAQSection';
import HomeHero from '../assets/images/Home-Hero.svg';
// Import the hero image properly
import heroImage from '../assets/images/hero-image.jpg';

// Import hero content
const heroContent = {
  badge: "Welcome To SLL!",
  title: (
    <>
      <span className="font-bold">Content Creation Studio</span>
      <span className="font-bold"> for </span>
      <span className="font-bold">Calgary-Based Businesses</span>
    </>
  ),
  description: "Transform your expertise into compelling video content that amplifies your story, establishes market authority, and consistently generates results.",
  primaryCta: {
    text: "Book Your Free Consultation",
    link: "/contact"
  },
  secondaryCta: {
    text: "View Our Packages",
    link: "/packages"
  },
  imageSrc: heroImage,
  aiGeneratedSrc: null
};

// Import problem-solution content
const problemSolutionContent = {
  problem: {
    title: "The Challenge",
    description: "Many businesses struggle with video marketing—juggling multiple tasks, unclear ROI, and inconsistent messaging. Without strategic content, you risk missed opportunities and disengaged audiences."
  },
  solution: {
    title: "Our Solution",
    description: "Social Launch Labs simplifies video marketing through strategic storytelling, streamlined production, and guided partnership. We handle strategy, scripting, production, and distribution, delivering impactful videos designed to connect, convert, and scale your business."
  }
};

// Client industries content
const clientIndustriesContent = {
  title: "Who We Work With",
  subtitle: "Our Clients",
  description: "We create powerful video content tailored specifically for service-based businesses committed to growth and authority-building:"
};

// Import testimonials content
const testimonialsContent = {
  title: "What Our Clients Say",
  testimonials: [
    {
      quote: "Social Launch Labs provided a clear, strategic approach that instantly elevated our brand. We've seen increased leads and credibility almost immediately.",
      author: "Alex P.",
      title: "Tech Startup Founder",
      image: "https://placehold.co/200x200/eef2ff/3b82f6?text=AP&font=playfair-display"
    },
    {
      quote: "Their guided expertise simplified our content strategy dramatically. Our clients now see us as industry leaders, thanks to their impactful videos.",
      author: "Maria L.",
      title: "B2B Consultant",
      image: "https://placehold.co/200x200/f5f3ff/8b5cf6?text=ML&font=playfair-display"
    },
    {
      quote: "We seamlessly scaled our video production capabilities. SLL's white-label services expanded our offerings without any headaches.",
      author: "Jason M.",
      title: "Marketing Agency Owner",
      image: "https://placehold.co/200x200/fef2f2/ef4444?text=JM&font=playfair-display"
    }
  ]
};

// Import FAQ content
const faqContent = {
  title: "Frequently Asked Questions",
  description: "Get answers to common questions about our video marketing services and approach:",
  faqs: [
    {
      question: "How is your approach different from traditional video marketing?",
      answer: "Unlike traditional video marketing that focuses on generic content, we build strategic frameworks designed specifically to generate leads and establish authority for service-based businesses. Our systems are focused on measurable business outcomes and ROI."
    },
    {
      question: "What type of businesses do you work with?",
      answer: "We specialize in working with service-based businesses, including consultants, professional service firms, agencies, and specialized service providers who want to leverage video content to attract high-quality leads and build authority in their industry."
    },
    {
      question: "How long does it take to see results?",
      answer: "Most clients begin seeing increased engagement and lead flow within 30-60 days. More substantial results, like consistent lead generation and authority positioning, typically develop over 90-120 days as your content library grows and your audience expands."
    },
    {
      question: "Do you handle all aspects of video production?",
      answer: "Yes, we provide end-to-end video marketing solutions. This includes strategy development, professional video production, content optimization, and strategic distribution across your key marketing channels - all aligned with your business goals."
    }
  ]
};

// Packages content
const packagesContent = {
  title: "Strategic Growth Solutions",
  subtitle: "OUR PACKAGES",
  description: "Select the perfect package to achieve your specific business growth objectives, each designed to address a different stage of your marketing funnel."
};

/**
 * Home page component
 */
const HomePage = () => {
  return (
    <Layout transparentHeader={false}>
      {/* Full-page background wrapper */}
      <div className="relative min-h-screen">
        {/* Global background with subtle gradient - keeping this for the rest of the page */}
        <div className="fixed inset-0 w-full h-full -z-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fa] via-white to-[#f8f9fa] w-full h-full"></div>
        </div>

        {/* Hero section */}
        <div className="relative">
          {/* Hero-specific background */}
          <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
            {/* Modern gradient background base */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E8F0FF] via-[#F6F9FF] to-white w-full h-full"></div>
            
            {/* Mesh gradient overlay */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-radial from-[#155DFC]/[0.02] via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#155DFC]/[0.03] via-transparent to-[#f8f9fa]/30"></div>
            </div>
            
            {/* Soft blurred orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#155DFC]/[0.02] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-2/3 right-1/4 w-64 h-64 bg-blue-100/[0.03] rounded-full blur-2xl"></div>
            
            {/* Subtle dot pattern */}
            <div className="absolute inset-0 opacity-[0.03]" 
                 style={{
                   backgroundImage: `radial-gradient(#155DFC 1px, transparent 1px)`,
                   backgroundSize: '24px 24px'
                 }}>
            </div>
          </div>

          <EnhancedHeroSection
            badge={heroContent.badge}
            title={heroContent.title}
            description={heroContent.description}
            primaryCta={heroContent.primaryCta}
            secondaryCta={heroContent.secondaryCta}
            imageSrc={heroContent.imageSrc}
            aiGeneratedSrc={heroContent.aiGeneratedSrc}
            announcementText="🔥 Free Video Marketing Strategy Blueprint - Schedule Now!"
            announcementLink="/contact"
            bgColor="transparent"
            overlayInfo={null}
          />
        </div>
        
        {/* Section divider - wave pattern */}
        <div className="relative h-8 overflow-hidden z-10 -mt-0">
          <div className="absolute w-full h-8 opacity-[0.08]">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute w-full h-full">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#155DFC"></path>
            </svg>
          </div>
        </div>
      
        {/* Other sections */}
        <div className="relative">
          <ClientIndustriesSection
            title={clientIndustriesContent.title}
            subtitle={clientIndustriesContent.subtitle}
            description={clientIndustriesContent.description}
            spacingClass="section-spacing-md"
            transparentBg={true}
          />
        </div>
        
        <div className="relative">
          <ProblemSolutionSection
            problem={problemSolutionContent.problem}
            solution={problemSolutionContent.solution}
            spacingClass="section-spacing-md"
            transparentBg={true}
          />
        </div>
        
        <div className="relative">
          <WhatWeOfferSection 
            spacingClass="section-spacing-md"
            transparentBg={true}
          />
        </div>
        
        <div id="packages-section" className="relative">
          <HomePackagesSection
            title={packagesContent.title}
            subtitle={packagesContent.subtitle}
            description={packagesContent.description}
            spacingClass="section-spacing-md"
            transparentBg={true}
          />
        </div>
        
        <div className="relative">
          <TestimonialsSection
            title={testimonialsContent.title}
            description={testimonialsContent.description}
            testimonials={testimonialsContent.testimonials}
            spacingClass="section-spacing-md"
            transparentBg={true}
          />
        </div>
        
        <div className="relative -mt-8">
          <PackageFAQSection
            title={faqContent.title}
            description={faqContent.description}
            faqs={faqContent.faqs}
            transparentBg={true}
            spacingClass="section-spacing-md"
          />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage; 