import React, { useState, useRef } from 'react';
import Layout from '../../components/layout/Layout';
import SectionContainer from '../../components/ui/SectionContainer';
import Button from '../../components/ui/Button';
import PackageFAQSection from '../../components/sections/packages/PackageFAQSection';
import CtaSection from '../../components/sections/shared/CtaSection';
import LeadGenTierCardsSection from '../../components/sections/leadgen/new/LeadGenTierCardsSection';
import TestimonialsSection from '../../components/sections/shared/TestimonialsSection';

// Import studio images
import studioImage from '../../assets/STUDIO/IMG_6570.png';
import videoThumbnail from '../../assets/STUDIO/05.27.2024 - Social Launch Labs - 2360 Portland St SE_23.png';

/**
 * Lead Generation Mastery Sales Page - Optimized for conversions
 */
const LeadGenerationSalesPage = () => {
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
    title: "Lead Generation on Autopilot",
    description: "Transform your expertise into a steady stream of qualified leads. Our \"Lead Generation Mastery\" package gives you a done-for-you content engine to attract and convert prospects — so you can focus on closing deals.",
    primaryCta: {
      text: "Book a Consultation",
      link: "/contact"
    },
    secondaryCta: {
      text: "See How It Works",
      link: "#how-it-works"
    },
    videoId: "Kv1vQyrEOyA",
    badge: "Lead Generation Mastery Package"
  };

  // Testimonials content matched to component structure
  const testimonialsContent = {
    title: "What Our Clients Say",
    description: "Don't just take our word for it. Here's what our clients have to say about working with Social Launch Labs.",
    testimonials: [
      {
        quote: "Within 60 days of implementing Social Launch Labs' framework, we started seeing 5-7 qualified leads coming in weekly through social media - a 300% increase from our previous efforts.",
        author: "Sarah Johnson",
        title: "Marketing Director, Apex Consulting",
        image: "https://placehold.co/200x200/eef2ff/3b82f6?text=SJ&font=playfair-display"
      },
      {
        quote: "The Lead Generation Mastery package gave us exactly what we needed - a systematic approach to attracting high-quality clients instead of just random followers. Our sales team is now consistently busy with qualified prospects.",
        author: "Michael Chen",
        title: "CEO, Growth Partners Agency",
        image: "https://placehold.co/200x200/f5f3ff/8b5cf6?text=MC&font=playfair-display"
      },
      {
        quote: "After 6 months with their system, I've completely eliminated cold outreach from my business. Qualified leads now come to me consistently through my optimized social channels.",
        author: "Alicia Rodriguez",
        title: "Business Coach & Consultant",
        image: "https://placehold.co/200x200/fef2f2/ef4444?text=AR&font=playfair-display"
      }
    ]
  };

  // FAQ content with objection handling
  const faqContent = {
    title: "Common Questions About Our Lead Generation Package",
    description: "Get answers to the most frequently asked questions about our Lead Generation Mastery package.",
    faqs: [
      {
        question: "How quickly will I start seeing leads coming in?",
        answer: "Most clients begin seeing initial results within 45-60 days. By the 90-day mark, you can expect a consistent flow of qualified leads. While results vary by industry and starting point, our systematic approach is designed to build momentum quickly and sustainably."
      },
      {
        question: "What makes this better than hiring a social media agency?",
        answer: "Unlike traditional agencies that focus on posting content, we build complete lead generation systems. We integrate strategy, content frameworks, audience targeting, and conversion optimization to create a reliable pipeline of qualified leads, not just vanity metrics or random followers."
      },
      {
        question: "How much time will I need to invest?",
        answer: "We've designed this package to minimize your time investment. After the initial strategy sessions, most clients spend just 2-3 hours per month providing expertise and reviewing performance. Our team handles all implementation, optimization, and management of the lead generation systems."
      },
      {
        question: "Will this work for my specific industry?",
        answer: "Our framework has proven effective across diverse service-based industries including consulting, coaching, professional services, agencies, and specialized B2B service providers. During our initial strategy phase, we customize our approach to your specific industry dynamics, target audience, and competitive landscape."
      },
      {
        question: "What happens if it doesn't work for my business?",
        answer: "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with our approach and the initial implementation, we'll refund your investment. Additionally, we operate on monthly agreements after the initial period, so there's no long-term risk."
      }
    ]
  };

  return (
    <Layout>
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
              {/* Badge */}
              <div className="inline-block mb-6">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full">
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
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-300/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  {heroContent.primaryCta.text}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href={heroContent.secondaryCta.link}
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-blue-100 hover:shadow-blue-100/30 transition-all duration-300 transform hover:-translate-y-1"
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
                title="Lead Generation System Video"
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
        <div className="absolute -top-0 w-full h-16 overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute w-full h-full">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#155DFC" opacity="0.1"></path>
          </svg>
        </div>
      </div>

      {/* Problem Section - Create emotional connection */}
      <SectionContainer id="pain-points" className="bg-transparent py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">THE PROBLEM</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Inconsistent Content = Inconsistent Leads</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Struggling to keep your sales pipeline full? You're not alone. Many businesses find <strong>lead generation</strong> challenging because their content is inconsistent or off-target.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg border border-blue-100/50 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Missed Opportunities</h3>
              <p className="text-gray-700 leading-relaxed">When your brand's message isn't out there consistently, potential customers forget you.</p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg border border-blue-100/50 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Eroded Trust</h3>
              <p className="text-gray-700 leading-relaxed">Irregular posting or low-value content can make your business appear less credible, causing warm leads to go cold.</p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg border border-blue-100/50 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Wasted Time & Effort</h3>
              <p className="text-gray-700 leading-relaxed">Chasing tactics and one-off campaigns often yields disappointing results, leaving you frustrated.</p>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm border border-blue-100/50 rounded-lg px-8 py-6">
              <p className="text-gray-800 leading-relaxed">
                <span className="font-semibold text-blue-700">Bottom line:</span> If your content isn't consistent and strategic, you're leaving growth on the table. Your audience craves valuable, regular content — and if you don't provide it, your competitors will. <span className="text-blue-700">This is the gap Lead Generation Mastery was created to fill.</span>
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Solution Section with Clear Benefits */}
      <SectionContainer id="how-it-works" className="bg-transparent py-24">
        <div className="container mx-auto px-4">
          {/* Enhanced Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center space-x-2 mb-6">
              <span className="w-12 h-[1px] bg-blue-200"></span>
              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium tracking-wider uppercase">Our Solution</span>
              <span className="w-12 h-[1px] bg-blue-200"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              The Lead Generation Mastery Package
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
              Transform your expertise into a consistent flow of qualified leads with our proven three-tier system.
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
                        src="https://www.youtube.com/embed/Kv1vQyrEOyA"
                        title="Lead Generation System Video"
                        className="absolute top-0 left-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                    {/* Video Description */}
                    <div className="mt-4">
                      <p className="text-gray-500 text-sm leading-relaxed text-center font-light">
                        Watch how our Lead Generation Mastery Package transforms your content strategy into a powerful lead generation engine.
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
                        className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-300/30 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
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
                        className="group inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-sm font-medium text-gray-600 hover:text-blue-700 bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-50 border border-blue-100/50 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
                      >
                        <span className="bg-gradient-to-br from-blue-600 to-blue-700 bg-clip-text text-transparent transition-all duration-300">Book a Consultation</span>
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

              {/* Why It Works Card - Enhanced & Compact */}
              <div className="lg:col-span-2 order-1 lg:order-2">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100/30">
                  {/* Card Header - Enhanced */}
                  <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-center">
                    <span className="text-blue-600 text-sm font-semibold tracking-wide uppercase">Video Frameworks</span>
                  </div>
                  {/* Content - Enhanced & Compact */}
                  <div className="p-6 pb-8">
                    <div className="space-y-6">
                      {/* Step 1 - Enhanced */}
                      <div className="flex group items-start">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
                            <span className="text-lg font-semibold bg-gradient-to-br from-blue-600 to-blue-700 bg-clip-text text-transparent">1</span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-bold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-blue-600">Targeted Awareness Videos</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">Each piece of content captures attention and highlights your unique value, drawing fresh prospects into your funnel.</p>
                        </div>
                      </div>
                      
                      {/* Step 2 - Enhanced */}
                      <div className="flex group items-start">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
                            <span className="text-lg font-semibold bg-gradient-to-br from-blue-600 to-blue-700 bg-clip-text text-transparent">2</span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-bold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-blue-600">Emotionally Engaging Messaging</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">We blend relatable storytelling with authoritative insights, ensuring potential leads feel both understood and inspired to learn more.</p>
                        </div>
                      </div>
                      
                      {/* Step 3 - Enhanced */}
                      <div className="flex group items-start">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
                            <span className="text-lg font-semibold bg-gradient-to-br from-blue-600 to-blue-700 bg-clip-text text-transparent">3</span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-bold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-blue-600">Purposeful Calls to Curiosity</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">Every video ends with a clear, inviting next step, transforming passive viewers into active inquiries.</p>
                        </div>
                      </div>
                      
                      {/* Step 4 - Enhanced */}
                      <div className="flex group items-start">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
                            <span className="text-lg font-semibold bg-gradient-to-br from-blue-600 to-blue-700 bg-clip-text text-transparent">4</span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-bold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-blue-600">Steady Pipeline Growth</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">By consistently attracting qualified leads at the top of your funnel, you'll see a lasting increase in brand awareness and future conversion potential.</p>
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
        className="bg-gradient-to-b from-white to-blue-50/50 py-24"
      >
        <div className="container mx-auto px-4">
          {/* Update text content in this header block */}
          <div className="text-center mb-16">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">Tier Selection</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Lead Generation Mastery Package Tier Selection</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Select the tier that best fits your business goals and let us help you create a steady stream of qualified leads.
            </p>
          </div>

          <LeadGenTierCardsSection />
        </div>
      </SectionContainer>

      {/* Business Transformation Section - PACKAGE OUTCOME */}
      <SectionContainer className="bg-transparent section-spacing-md">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-4">PACKAGE OUTCOME</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Business Transformation</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Experience a fundamental shift in how your business generates and nurtures leads
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg border border-blue-100/50 shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Automated Lead Flow</h3>
              <p className="text-gray-700">Transform sporadic inquiries into a steady stream of qualified prospects through systematic content delivery.</p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg border border-blue-100/50 shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Higher-Value Leads</h3>
              <p className="text-gray-700">Attract prospects who understand your value and are ready to invest in your solutions.</p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg border border-blue-100/50 shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Time Freedom</h3>
              <p className="text-gray-700">Reclaim hours spent on content creation while maintaining a strong market presence.</p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg border border-blue-100/50 shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Predictable Growth</h3>
              <p className="text-gray-700">Build sustainable momentum with a proven system that delivers consistent results.</p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Combined Why Choose Us & FAQ Section */}
      <SectionContainer className="bg-transparent py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Two-column layout */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Why Choose Us Column */}
              <div>
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100/50 p-8">
                  <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">WHY CHOOSE US</span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">Partner with the Lead Generation Experts</h2>
                  <p className="text-lg text-gray-600 mb-12">Our proven systems and frameworks have helped businesses like yours achieve predictable growth through strategic content.</p>
                  
                  {/* Key Benefits */}
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">2x Lead Growth</h3>
                        <p className="text-gray-600">Average increase in qualified leads within 90 days through our proven frameworks.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Done-For-You System</h3>
                        <p className="text-gray-600">Fully managed content creation and lead generation, saving you time and resources.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">30-Day Guarantee</h3>
                        <p className="text-gray-600">Risk-free implementation with our satisfaction guarantee and flexible terms.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Column */}
              <div className="border-l border-gray-100 pl-0 lg:pl-12">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">FAQ</span>
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
                              className="w-6 h-6 text-blue-600" 
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

      {/* Final CTA - Strong closing - Updated Background & Spacing */}
      <CtaSection
        title="Ready to Master Lead Gen?"
        description="Your competitors won't wait, and neither should you. It's time to fix inconsistent lead flow by investing in a content strategy that works consistently and efficiently."
        primaryButtonText="Book a Free Strategy Call"
        primaryButtonLink="/contact"
        transparentBg={true}
        spacingClass="pt-8 pb-34"
      />

      {/* Add a page-level background gradient that spans all sections */}
      <div className="fixed inset-0 w-full h-full -z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F9FF] via-[#FAFCFF] to-[#FDFDFF] w-full h-full"></div>
        
        {/* Subtle geometric patterns */}
        <div className="absolute inset-0 w-full h-full opacity-[0.02]"
             style={{
               backgroundImage: `
                 linear-gradient(30deg, transparent 49.5%, #155DFC 49.5%, #155DFC 50.5%, transparent 50.5%),
                 linear-gradient(60deg, transparent 49.5%, #7394D3 49.5%, #7394D3 50.5%, transparent 50.5%)
               `,
               backgroundSize: '60px 60px, 70px 70px'
             }}>
        </div>
        
        {/* Layered blur effects */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-blue-500/3 rounded-full mix-blend-multiply filter blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[35vw] h-[35vw] bg-blue-400/3 rounded-full mix-blend-multiply filter blur-[100px]"></div>
      </div>
    </Layout>
  );
};

export default LeadGenerationSalesPage; 