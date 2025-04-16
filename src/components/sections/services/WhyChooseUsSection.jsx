import React from 'react';
import SectionContainer from '../../ui/SectionContainer';

/**
 * WhyChooseUsSection for the Services page
 * Highlights the key reasons to work with Social Launch Labs
 */
const WhyChooseUsSection = () => {
  // Features data
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Strategic Expertise',
      description: 'We don't just create videos – we develop strategic content aligned with your business goals and marketing funnel.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      title: 'End-to-End Solutions',
      description: 'From strategy development to production and distribution, we handle the entire process so you don't have to.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Audience-Focused Approach',
      description: 'We create content that speaks directly to your target audience's needs, challenges, and desires at each funnel stage.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Conversion-Driven Content',
      description: 'Every piece of content we create is designed to guide viewers toward a specific action that advances your business goals.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Brand Consistency',
      description: 'We ensure all content reflects your brand identity, values, and messaging for a cohesive customer experience.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Measurable Results',
      description: 'We track performance metrics that matter to your business and provide transparent reporting on your ROI.'
    }
  ];

  return (
    <SectionContainer id="why-choose-us" className="section-spacing-lg bg-gradient-to-b from-white to-blue-50 relative">
      {/* Decorative Elements */}
      <div className="absolute -top-20 right-0 w-72 h-72 bg-blue-50 rounded-full opacity-40 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-blue-50 rounded-full opacity-40 blur-3xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-3">
            Why Work With Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-5 text-gray-900">The Social Launch Labs Difference</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We combine strategic marketing expertise with professional video production to deliver results-driven content that helps your business grow.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 relative z-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-50 text-blue-600 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Testimonial Card */}
        <div className="mt-20 bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-100 rounded-full opacity-20"></div>
          <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-blue-100 rounded-full opacity-20"></div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-8 relative z-10">
            <div className="md:w-1/4 flex justify-center">
              <img 
                src="https://WeaverAndrew55.github.io/SLL-Images/assets/Home/Home-Testimonial1.jpeg" 
                alt="Client testimonial" 
                className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-full border-4 border-blue-100 shadow-lg"
              />
            </div>
            <div className="md:w-3/4">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                "Social Launch Labs transformed our approach to video marketing. Their strategic content helped us connect with our audience at each stage of the funnel, leading to a significant increase in qualified leads and conversions."
              </blockquote>
              <cite className="block text-gray-900 font-semibold not-italic">
                Sarah Johnson, Marketing Director
              </cite>
              <span className="text-gray-600">Tech Solutions Inc.</span>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default WhyChooseUsSection; 