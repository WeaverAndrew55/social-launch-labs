import React, { useState, useRef } from 'react';
import Layout from '../../components/layout/Layout';
import EnhancedHeroSection from '../../components/sections/common/EnhancedHeroSection';
import SectionContainer from '../../components/ui/SectionContainer';
import Button from '../../components/ui/Button';
import PackageFAQSection from '../../components/sections/packages/PackageFAQSection';
import CtaSection from '../../components/sections/shared/CtaSection';
import AuthorityTierCardsSection from '../../components/sections/authority/AuthorityTierCardsSection';
import TestimonialsSection from '../../components/sections/shared/TestimonialsSection';

// Import studio images
import videoThumbnail from '../../assets/STUDIO/05.27.2024 - Social Launch Labs - 2360 Portland St SE_23.png';

/**
 * Authority Builder Sales Page - Optimized for conversions
 */
const AuthorityBuilderSalesPage = () => {
  // Add state for managing open FAQ items
  const [openFAQ, setOpenFAQ] = useState(null);
  // Create a ref for the packages section
  const packagesSectionRef = useRef(null);

  // Toggle FAQ item
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Updated function to use the ref
  const scrollToPackages = (event) => {
    event.preventDefault();
    console.log('Attempting scroll using ref...');
    // Scroll to the ref's current element if it exists
    if (packagesSectionRef.current) {
      console.log('Ref Target:', packagesSectionRef.current);
      packagesSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.error('Packages section ref.current is null!');
    }
  };

  // Hero content with stronger benefit-driven headline
  const heroContent = {
    title: "Establish Your Authority, Dominate Your Industry",
    description: "Position yourself as the go-to expert in your field with our complete authority-building system that turns expertise into market leadership and premium clients.",
    primaryCta: {
      text: "Book a Strategy Call",
      link: "/contact"
    },
    secondaryCta: {
      text: "See How It Works",
      link: "#how-it-works"
    },
    videoId: "Kv1vQyrEOyA",
    badge: "Authority Builder Package"
  };

  // Testimonials content matched to component structure
  const testimonialsContent = {
    title: "What Our Clients Say",
    description: "Don't just take our word for it. Here's what our clients have to say about working with Social Launch Labs.",
    testimonials: [
      {
        quote: "My personal brand has completely transformed. In just 6 months, I went from an unknown to landing speaking engagements, major podcast appearances, and a book deal.",
        author: "Dr. Elizabeth Parker",
        title: "CEO, Innovative Health Solutions",
        image: "https://placehold.co/200x200/eef2ff/3b82f6?text=EP&font=playfair-display"
      },
      {
        quote: "The Authority Builder package helped establish our firm as the clear industry leader. We're now able to charge premium rates and have a waiting list of clients eager to work with us.",
        author: "Thomas Wright",
        title: "Managing Partner, Catalyst Advisory Group",
        image: "https://placehold.co/200x200/f5f3ff/8b5cf6?text=TW&font=playfair-display"
      },
      {
        quote: "Social Launch Labs didn't just help me create content—they positioned me as a thought leader. Now I'm regularly featured in industry publications and invited to speak at major conferences.",
        author: "Sophia Martinez",
        title: "Founder, Next Level Strategy",
        image: "https://placehold.co/200x200/fef2f2/ef4444?text=SM&font=playfair-display"
      }
    ]
  };

  // FAQ content with objection handling
  const faqContent = {
    title: "Common Questions About Our Authority Builder Package",
    description: "Get answers to the most frequently asked questions about our Authority Builder package.",
    faqs: [
      {
        question: "How long does it take to establish authority in my industry?",
        answer: "While results vary by industry and starting point, most clients begin seeing significant authority markers within 90-120 days. These include media mentions, speaking invitations, and partnership opportunities. Our comprehensive approach accelerates this timeline compared to traditional methods, with many clients achieving in months what would typically take years."
      },
      {
        question: "What makes this different from regular content marketing?",
        answer: "Traditional content marketing focuses on volume and SEO, while our Authority Builder is a strategic system designed specifically to position you as a thought leader. We integrate thought leadership content, strategic media placements, influential partnerships, and premium positioning to create a comprehensive authority platform that elevates you above content creators to true industry leader status."
      },
      {
        question: "Do I need to be a natural writer or speaker?",
        answer: "Not at all. Our team includes professional ghostwriters, content strategists, and media coaches who extract your expertise and transform it into compelling thought leadership. We handle the heavy lifting of content creation, allowing you to focus on sharing your knowledge while we perfect the delivery and distribution."
      },
      {
        question: "Will this work for my specific industry?",
        answer: "Our authority-building framework has been successfully implemented across diverse professional fields including finance, healthcare, technology, consulting, legal, real estate, and specialized B2B services. We tailor our approach to the unique dynamics of your industry, creating a custom authority strategy aligned with your specific market."
      },
      {
        question: "How will I measure the ROI of authority building?",
        answer: "We establish clear KPIs tailored to your business goals, typically including metrics like premium client acquisition, speaking engagements secured, media placements, strategic partnership opportunities, and ability to command higher rates. Clients typically see a 25-40% increase in average project value as their authority grows."
      }
    ]
  };

  return (
    <Layout>
      {/* Hero Section with modern background and wave divider */}
      <div className="relative">
        {/* Hero-specific background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
          {/* Modern background base */}
          <div className="absolute inset-0 bg-[#f8f9fa] w-full h-full"></div>
          
          {/* Subtle geometric elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.07]">
            <div className="absolute top-[10%] right-[15%] w-[30vw] h-[30vw] max-w-[600px] max-h-[600px] rounded-full border border-purple-600/20"></div>
            <div className="absolute bottom-[15%] left-[10%] w-[25vw] h-[25vw] max-w-[500px] max-h-[500px] rounded-full border border-purple-500/30"></div>
            <div className="absolute top-[30%] left-[25%] w-[15vw] h-[15vw] max-w-[300px] max-h-[300px] rounded-full border border-purple-500/10"></div>
          </div>
          
          {/* Layered blurred elements for depth */}
          <div className="absolute top-0 right-[10%] w-[40vw] h-[40vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-purple-600 to-purple-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.035]"></div>
          <div className="absolute bottom-0 left-[5%] w-[35vw] h-[35vw] max-w-[700px] max-h-[700px] bg-gradient-to-br from-purple-500 to-purple-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.045]"></div>
        </div>

      <div className="container mx-auto px-4 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="bg-purple-200 text-purple-900 text-sm font-medium px-4 py-1.5 rounded-full">
                {heroContent.badge}
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 pb-1">
              {heroContent.title}
            </h1>
            
            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              {heroContent.description}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={heroContent.primaryCta.link}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-300/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                {heroContent.primaryCta.text}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href={heroContent.secondaryCta.link}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-purple-100 hover:shadow-purple-100/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                {heroContent.secondaryCta.text}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right Column - Video */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src={`https://www.youtube.com/embed/${heroContent.videoId}?autoplay=0&rel=0&modestbranding=1`}
              title="Authority Builder System Video"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
      </div>

      {/* Wave divider */}
      <div className="bg-white relative">
        <div className="absolute -top-0 left-0 right-0 w-full h-16 overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute left-0 right-0 w-full h-full">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#7C3AED" opacity="0.09"></path>
          </svg>
        </div>
      </div>

      {/* Problem Section - Create emotional connection */}
      <SectionContainer id="pain-points" className="bg-[#f8f9fa] py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">THE PROBLEM</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Expertise Without Authority = Missed Opportunities</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Being great at what you do isn't enough anymore. Without strategic authority positioning, even exceptional expertise gets lost in today's crowded market.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg border border-purple-100/50 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Invisible Expertise</h3>
              <p className="text-gray-700 leading-relaxed">Watch as less qualified competitors win premium clients simply because they've mastered the art of authority positioning.</p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg border border-purple-100/50 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Price-Based Competition</h3>
              <p className="text-gray-700 leading-relaxed">Stuck competing on price instead of value? Without authority status, you're forced into constant fee negotiations.</p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg border border-purple-100/50 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Limited Growth Potential</h3>
              <p className="text-gray-700 leading-relaxed">Missing out on speaking gigs and partnerships? Your revenue ceiling exists because you're not positioned as the premium choice.</p>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm border border-purple-100/50 rounded-lg px-8 py-6">
              <p className="text-gray-800 leading-relaxed">
                <span className="font-semibold text-purple-700">Bottom line:</span> Today's clients aren't just buying expertise—they're investing in recognized authorities. <span className="text-purple-700">Without strategic positioning, you're leaving premium opportunities and higher fees on the table.</span>
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Solution Section with Clear Benefits */}
      <SectionContainer id="how-it-works" className="bg-[#f8f9fa] py-24">
        <div className="container mx-auto px-4">
          {/* Enhanced Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center space-x-2 mb-6">
              <span className="w-12 h-[1px] bg-purple-200"></span>
              <span className="bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-medium tracking-wider uppercase">Our Solution</span>
              <span className="w-12 h-[1px] bg-purple-200"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              The Authority Builder Package
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
              Available in 3 Tiers, this package transforms your expertise into recognized industry authority.
            </p>
          </div>

          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              {/* Video Card - Enhanced & Enlarged */}
              <div className="lg:col-span-3 order-2 lg:order-1 group">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 h-full flex flex-col">
                  {/* Video Container - Enhanced */}
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-gray-900">
                      {/* YouTube iframe replacement */}
                      <iframe
                        src="https://www.youtube.com/embed/xnU24EjThyM"
                        title="Authority Builder System Video"
                        className="absolute top-0 left-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                    {/* Video Description */}
                    <div className="mt-4">
                      <p className="text-gray-500 text-sm leading-relaxed text-center font-light">
                        Watch how our Authority Builder Package transforms your expertise into recognized industry leadership.
                      </p>
                    </div>
                    {/* Spacer to push CTA to bottom */}
                    <div className="flex-1"></div>
                    {/* CTA Buttons - UPDATED STYLES (Primary & Secondary) */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 mt-8">
                      {/* Primary Button - Now links to #packages with smooth scroll */}
                      <a
                        href="#packages"
                        onClick={scrollToPackages}
                        className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg shadow-md hover:shadow-lg hover:shadow-purple-300/30 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                      >
                        Browse Package Tiers
                        <svg
                          className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </a>
                      {/* Secondary Button - Now links to /contact */}
                      <a
                        href="/contact"
                        className="group inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-sm font-medium text-gray-600 hover:text-purple-700 bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-50 border border-purple-100/50 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
                      >
                        <span className="bg-gradient-to-br from-purple-600 to-purple-700 bg-clip-text text-transparent transition-all duration-300">Book a Consultation</span>
                        <svg
                          className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Framework Card - Enhanced & Compact */}
              <div className="lg:col-span-2 order-1 lg:order-2">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-100/30">
                  {/* Card Header - Enhanced */}
                  <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-center">
                    <span className="text-purple-600 text-sm font-semibold tracking-wide uppercase">Video Frameworks</span>
                  </div>
                  {/* Content - Enhanced & Compact */}
                  <div className="p-6 pb-8">
                    <div className="space-y-6">
                      {/* Step 1 */}
                      <div className="flex group items-start">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
                            <span className="text-lg font-semibold bg-gradient-to-br from-purple-600 to-purple-700 bg-clip-text text-transparent">1</span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-bold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-purple-600">Authority Positioning Strategy</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">Our expert team analyzes your market position, develops your authority strategy, and creates a custom thought leadership plan.</p>
                        </div>
                      </div>
                      
                      {/* Step 2 */}
                      <div className="flex group items-start">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
                            <span className="text-lg font-semibold bg-gradient-to-br from-purple-600 to-purple-700 bg-clip-text text-transparent">2</span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-bold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-purple-600">Premium Content Creation</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">We create and distribute high-impact thought leadership content that establishes your expertise and attracts premium opportunities.</p>
                        </div>
                      </div>

                      {/* Step 3 */}
                      <div className="flex group items-start">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
                            <span className="text-lg font-semibold bg-gradient-to-br from-purple-600 to-purple-700 bg-clip-text text-transparent">3</span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-bold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-purple-600">Strategic Visibility</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">Secure high-profile speaking opportunities, media features, and influential partnerships that cement your authority status.</p>
                        </div>
                      </div>

                      {/* Step 4 */}
                      <div className="flex group items-start">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
                            <span className="text-lg font-semibold bg-gradient-to-br from-purple-600 to-purple-700 bg-clip-text text-transparent">4</span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-bold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-purple-600">Authority Amplification</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">Focus on measurable growth with strategic partnerships, premium positioning, and industry recognition.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Package Tiers Section - Attach the ref here */}
      <SectionContainer
        ref={packagesSectionRef}
        id="packages"
        className="bg-[#f8f9fa] py-24"
      >
        <div className="container mx-auto px-4">
          {/* Update text content in this header block */}
          <div className="text-center mb-16">
            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">Tier Selection</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Authority Builder Package Tier Selection</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Select the tier that best fits your authority-building goals and let us help you become the recognized leader in your industry.
            </p>
          </div>

          <AuthorityTierCardsSection />
        </div>
      </SectionContainer>

      {/* Business Transformation Section */}
      <SectionContainer className="bg-[#f8f9fa] section-spacing-md">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-4">PACKAGE OUTCOME</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Authority Transformation</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Experience a fundamental shift in how your expertise is perceived and valued in your industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg border border-purple-100/50 shadow-sm">
              <div className="text-purple-600 mb-4">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Positioning</h3>
              <p className="text-gray-700">Transform from a service provider to a recognized industry authority, commanding higher rates and better opportunities.</p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg border border-purple-100/50 shadow-sm">
              <div className="text-purple-600 mb-4">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">High-Profile Features</h3>
              <p className="text-gray-700">Regular media appearances, speaking engagements, and industry recognition that cement your expert status.</p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg border border-purple-100/50 shadow-sm">
              <div className="text-purple-600 mb-4">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Strategic Partnerships</h3>
              <p className="text-gray-700">Access to premium collaboration opportunities and influential network connections.</p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg border border-purple-100/50 shadow-sm">
              <div className="text-purple-600 mb-4">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Revenue Growth</h3>
              <p className="text-gray-700">Significant increase in project values and consistent flow of premium opportunities.</p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Testimonials - Social proof */}
      <div className="bg-[#f8f9fa] section-spacing-md">
        <TestimonialsSection
          title={testimonialsContent.title}
          description={testimonialsContent.description}
          testimonials={testimonialsContent.testimonials}
          spacingClass=""
        />
      </div>

      {/* Combined Why Choose Us & FAQ Section */}
      <SectionContainer className="bg-[#f8f9fa] py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Two-column layout */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Why Choose Us Column */}
              <div>
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100/50 p-8">
                  <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">WHY CHOOSE US</span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">Partner with Authority Building Experts</h2>
                  <p className="text-lg text-gray-600 mb-12">Our proven systems and frameworks have helped professionals like you achieve industry authority status and command premium rates.</p>
                  
                  {/* Key Benefits */}
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">35% Rate Increase</h3>
                        <p className="text-gray-600">Average increase in project values within 90 days through our authority positioning.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Premium Content System</h3>
                        <p className="text-gray-600">Professional content creation and strategic distribution that positions you as the industry expert.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">60-Day Guarantee</h3>
                        <p className="text-gray-600">Risk-free implementation with our satisfaction guarantee and flexible terms.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Column */}
              <div className="border-l border-gray-100 pl-0 lg:pl-12">
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">FAQ</span>
                <h2 className="text-2xl font-bold mb-8">Common Questions</h2>
                
                <div className="space-y-4">
                  {faqContent.faqs.map((faq, index) => (
                    <div 
                      key={index} 
                      className="bg-white/95 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100/50 transition-all duration-300 hover:shadow-md overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full text-left p-6 flex items-center justify-between focus:outline-none"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                        <div className="flex-shrink-0">
                          <div className={`transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`}>
                            <svg 
                              className="w-6 h-6 text-purple-600" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M19 9l-7 7-7-7" 
                              />
                            </svg>
                          </div>
                        </div>
                      </button>
                      <div 
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="p-6 pt-0">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Final CTA - Strong closing */}
      <CtaSection
        title="Ready to Become the Authority in Your Industry?"
        description="Don't let your expertise remain hidden. Transform your market position and command premium rates with our proven authority-building system."
        primaryButtonText="Book Your Strategy Call"
        primaryButtonLink="/contact"
        transparentBg={true}
        spacingClass="pt-8 pb-16"
        themeColor="purple"
      />

      {/* Add a page-level background color that spans all sections */}
      <div className="fixed inset-0 w-full h-full -z-20">
        <div className="absolute inset-0 bg-[#f8f9fa] w-full h-full"></div>
        
        {/* Subtle geometric patterns */}
        <div className="absolute inset-0 w-full h-full opacity-[0.02]"
             style={{
               backgroundImage: `
                 linear-gradient(30deg, transparent 49.5%, #8B5CF6 49.5%, #8B5CF6 50.5%, transparent 50.5%),
                 linear-gradient(60deg, transparent 49.5%, #A78BFA 49.5%, #A78BFA 50.5%, transparent 50.5%)
               `,
               backgroundSize: '60px 60px, 70px 70px'
             }}>
        </div>
        
        {/* Layered blur effects */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-purple-500/3 rounded-full mix-blend-multiply filter blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[35vw] h-[35vw] bg-purple-400/3 rounded-full mix-blend-multiply filter blur-[100px]"></div>
      </div>
    </Layout>
  );
};

export default AuthorityBuilderSalesPage; 