import React from 'react';
import Layout from '../components/layout/Layout';

// Import section components
import ServicesHeroSection from '../components/sections/services/ServicesHeroSection';
import WhatWeDoSection from '../components/sections/services/WhatWeDoSection';
import CorePackagesSection from '../components/sections/services/CorePackagesSection';
import AdditionalServicesSection from '../components/sections/services/AdditionalServicesSection';
import WhyWorkWithUsSection from '../components/sections/services/WhyWorkWithUsSection';
import ProcessStepsSection from '../components/sections/packages/ProcessStepsSection';
import TestimonialsSection from '../components/sections/home/TestimonialsSection';
import GetStartedCTA from '../components/sections/shared/GetStartedCTA';

/**
 * ServicesPage component
 */
const ServicesPage = () => {
  // Add videoId for the hero section
  const heroVideoId = "Kv1vQyrEOyA"; // Replace with your actual YouTube video ID

  const testimonialsContent = {
    title: "What Our Clients Say",
    description: "Don't just take our word for it. See what clients have achieved with our services.",
    testimonials: [
      {
        quote: "The strategy Social Launch Labs developed completely transformed our online presence. We're getting quality leads consistently through social media for the first time ever.",
        author: "Sarah Williams",
        title: "Founder, Elite Consulting Group",
        image: "https://placehold.co/200x200/eef2ff/3b82f6?text=SW&font=playfair-display"
      },
      {
        quote: "Working with their team was seamless. They understood our industry challenges and created video content that positions us as true authorities in our field.",
        author: "Michael Chen",
        title: "CEO, Innovative Solutions",
        image: "https://placehold.co/200x200/f5f3ff/8b5cf6?text=MC&font=playfair-display"
      },
      {
        quote: "The ROI from our video content strategy has been exceptional. Our conversion rates have doubled since implementing their recommendations.",
        author: "Jessica Miller",
        title: "Marketing Director, GrowthForce",
        image: "https://placehold.co/200x200/fef2f2/ef4444?text=JM&font=playfair-display"
      }
    ]
  };
  
  // Services page overlay for hero section
  const servicesHeroOverlay = {
    text: "Results-Driven Strategies",
    icon: "check",
    position: "bottom-right"
  };

  return (
    <Layout>
      <div className="relative">
        {/* Hero Section with modern background and wave divider */}
        <div className="relative">
          {/* Hero-specific background */}
          <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
            {/* Modern gradient background base */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E8F0FF] via-[#F6F9FF] to-white w-full h-full"></div>
            
            {/* Subtle geometric elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.07]">
              <div className="absolute top-[10%] right-[15%] w-[30vw] h-[30vw] max-w-[600px] max-h-[600px] rounded-full border border-blue-600/20"></div>
              <div className="absolute bottom-[15%] left-[10%] w-[25vw] h-[25vw] max-w-[500px] max-h-[500px] rounded-full border border-blue-500/30"></div>
              <div className="absolute top-[30%] left-[25%] w-[15vw] h-[15vw] max-w-[300px] max-h-[300px] rounded-full border border-blue-500/10"></div>
            </div>
            
            {/* Layered blurred elements for depth */}
            <div className="absolute top-0 right-[10%] w-[40vw] h-[40vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-blue-600 to-blue-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.035]"></div>
            <div className="absolute bottom-0 left-[5%] w-[35vw] h-[35vw] max-w-[700px] max-h-[700px] bg-gradient-to-br from-blue-500 to-blue-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.045]"></div>
          </div>

          <div className="container mx-auto px-4 pt-24 pb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="text-center lg:text-left">
                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 pb-1">
                  Transform Your Digital Presence
                </h1>
                
                {/* Description */}
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                  Our comprehensive services help you build authority, attract quality leads, and grow your business through strategic video content.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-300/30 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Book a Free Strategy Call
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-blue-100 hover:shadow-blue-100/30 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Explore Our Services
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Right Column - Video */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src={`https://www.youtube.com/embed/${heroVideoId}?autoplay=0&rel=0&modestbranding=1`}
                  title="Services Overview Video"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider - Reduced height */}
        <div className="bg-white relative mb-12">
          <div className="absolute -top-0 w-full h-8 overflow-hidden">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute w-full h-full">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#155DFC" opacity="0.1"></path>
            </svg>
          </div>
        </div>

        {/* What We Do Section */}
        <WhatWeDoSection 
          spacingClass="pt-16 pb-0"
          transparentBg={true}
          hideRadialGradient={true}
        />
        
        {/* Core Packages Section - 1 inch (64px) top padding */}
        <div className="pt-16">
          <CorePackagesSection 
            spacingClass="pt-34 pb-16"
            transparentBg={true}
          />
        </div>
        
        {/* Additional Services Section */}
        <AdditionalServicesSection 
          spacingClass="py-16"
          transparentBg={true}
        />
        
        {/* Why Work With Us Section */}
        <WhyWorkWithUsSection 
          spacingClass="py-16"
          transparentBg={true}
        />
        
        {/* Process Steps */}
        <ProcessStepsSection 
          spacingClass="py-16"
          transparentBg={true}
        />
        
        {/* Testimonials Section */}
        <TestimonialsSection
          title={testimonialsContent.title}
          description={testimonialsContent.description}
          testimonials={testimonialsContent.testimonials}
          spacingClass="py-16"
          transparentBg={true}
        />
        
        {/* Ready to Get Started CTA */}
        <GetStartedCTA 
          badge="Ready to Get Started?" 
          title="Transform Your Video Marketing Strategy Today" 
          description="Join successful businesses who have elevated their brand presence and consistently generate quality leads through strategic video content."
          buttonText="Book Your Free Call"
          buttonLink="/contact"
          spacingClass="py-16 pb-24"
          transparentBg={true}
        />
      </div>
    </Layout>
  );
};

export default ServicesPage; 