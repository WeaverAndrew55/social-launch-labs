import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';

// Import section components
import EnhancedHeroSection from '../components/sections/common/EnhancedHeroSection';
import WhyPackagesWorkSection from '../components/sections/packages/WhyPackagesWorkSection';
import PackageDetailsSection from '../components/sections/packages/PackageDetailsSection';
import PackageSelectorSection from '../components/sections/packages/PackageSelectorSection';
import PackagesProcessStepsSection from '../components/sections/packages/PackagesProcessStepsSection';
import CtaSection from '../components/sections/shared/CtaSection';
// Import GetStartedCTA
import GetStartedCTA from '../components/sections/shared/GetStartedCTA';

// Optimized hero content - more concise and action-focused
const heroContent = {
  title: "Strategic Service Packages for Your Growth Goals",
  description: "Choose the package that addresses your specific marketing challenge. Each solution targets a key stage of your customer journey - from attracting leads to converting clients to establishing authority.",
  primaryCta: {
    text: "View Packages",
    link: "#packages"
  },
  secondaryCta: {
    text: "Book Consultation",
    link: "#contact"
  }
};

/**
 * Optimized Packages page component
 */
const PackagesPage = () => {
  return (
    <Layout transparentHeader={false}>
      {/* Full-page background wrapper */}
      <div className="relative">
        {/* Global page background - Updated to match HomePage standard */}
        <div className="fixed inset-0 w-full h-full overflow-hidden -z-20">
          {/* Simple gradient background from HomePage */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fa] via-white to-[#f8f9fa] w-full h-full"></div>
          {/* Removed complex patterns, borders, and blurred patches */}
        </div>
        
        {/* Hero Section */}
        <div className="relative">
          {/* Hero background styling */}
          <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
            {/* Base gradient background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E8F0FF] via-[#F6F9FF] to-white w-full h-full"></div>
            
            {/* Subtle geometric elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.07]">
              <div className="absolute top-[10%] right-[15%] w-[30vw] h-[30vw] max-w-[600px] max-h-[600px] rounded-full border border-[#155DFC]/20"></div>
              <div className="absolute bottom-[15%] left-[10%] w-[25vw] h-[25vw] max-w-[500px] max-h-[500px] rounded-full border border-[#7394D3]/30"></div>
              <div className="absolute top-[30%] left-[25%] w-[15vw] h-[15vw] max-w-[300px] max-h-[300px] rounded-full border border-[#155DFC]/10"></div>
            </div>
            
            {/* Layered blurred elements for depth */}
            <div className="absolute top-0 right-[10%] w-[40vw] h-[40vw] max-w-[800px] max-h-[800px] bg-[#155DFC] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.03]"></div>
            <div className="absolute bottom-0 left-[5%] w-[35vw] h-[35vw] max-w-[700px] max-h-[700px] bg-[#7394D3] rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.04]"></div>
            
            {/* Connection lines representing networks and growth */}
            <div className="absolute inset-0 w-full h-full opacity-[0.05]" 
                 style={{
                   backgroundImage: `
                     linear-gradient(30deg, transparent 49.5%, #155DFC 49.5%, #155DFC 50.5%, transparent 50.5%),
                     linear-gradient(60deg, transparent 49.5%, #7394D3 49.5%, #7394D3 50.5%, transparent 50.5%),
                     linear-gradient(120deg, transparent 49.5%, #155DFC 49.5%, #155DFC 50.5%, transparent 50.5%)
                   `,
                   backgroundSize: '60px 60px, 70px 70px, 80px 80px'
                 }}>
            </div>
            
            {/* Strategic framework abstract representation */}
            <div className="absolute inset-0 opacity-[0.02]"
                 style={{
                   backgroundImage: `
                     linear-gradient(0deg, transparent 98%, #155DFC 98%, #155DFC 100%, transparent 100%),
                     linear-gradient(90deg, transparent 98%, #7394D3 98%, #7394D3 100%, transparent 100%)
                   `,
                   backgroundSize: '40px 40px'
                 }}>
            </div>
            
            {/* Subtle diagonal elements depicting growth */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-[0.04]">
              <div className="absolute -bottom-[10%] -right-[10%] w-[80%] h-[60%] border-t border-l border-[#155DFC]/20 rounded-tl-[100px] transform rotate-[10deg]"></div>
              <div className="absolute -top-[10%] -left-[10%] w-[70%] h-[50%] border-b border-r border-[#7394D3]/20 rounded-br-[100px] transform rotate-[10deg]"></div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 pt-24 pb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 pb-1">
                  {heroContent.title}
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                  {heroContent.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    to={heroContent.primaryCta.link}
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-300/30 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {heroContent.primaryCta.text}
                  </Link>
                  <Link
                    to={heroContent.secondaryCta.link}
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-blue-100 hover:shadow-blue-100/30 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {heroContent.secondaryCta.text}
                  </Link>
                </div>
              </div>
              
              {/* Right Column - Video */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0&modestbranding=1"
                  title="Packages Overview Video"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave divider as a separate section element - KEEPING THIS HERO WAVE DIVIDER */}
        <div className="bg-white relative">
          <div className="absolute -top-0 w-full h-16 overflow-hidden">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute w-full h-full">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#155DFC" opacity="0.1"></path>
            </svg>
          </div>
        </div>
        
        {/* Getting Started - Simple 3-Step Process - MOVED UP */}
        <div className="relative">
          <PackagesProcessStepsSection transparentBg={true} />
        </div>
        
        {/* Our Specialized Service Packages */}
        <div className="relative" id="packages">
          <PackageDetailsSection transparentBg={true} />
        </div>
        
        {/* Find Your Match - Moved Up */}
        <div className="relative" id="find-match">
          <PackageSelectorSection />
        </div>
        
        {/* Our Approach - Why Our Packages Work */}
        <div className="relative">
          <WhyPackagesWorkSection transparentBg={true} />
        </div>
        
        {/* Final CTA - Using GetStartedCTA from Services Page */}
        <div className="relative">
          <GetStartedCTA 
            badge="Ready to Get Started?" 
            title="Transform Your Video Marketing Strategy Today" 
            description="Join successful businesses who have elevated their brand presence and consistently generate quality leads through strategic video content."
            buttonText="Book Your Free Call"
            buttonLink="/contact"
            spacingClass="py-16 pb-24" // Match Services Page spacing
            transparentBg={true} // Match Services Page background
          />
        </div>
      </div>
    </Layout>
  );
};

export default PackagesPage; 