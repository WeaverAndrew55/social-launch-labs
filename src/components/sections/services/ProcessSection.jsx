import React from 'react';
import SectionContainer from '../../ui/SectionContainer';

/**
 * ProcessSection component for the Services page
 * Displays the 5-step process used by Social Launch Labs
 */
const ProcessSection = () => {
  // Process steps data
  const processSteps = [
    {
      number: '01',
      title: 'Strategic Discovery',
      description: 'We start by understanding your business goals, target audience, and current marketing challenges to develop a tailored approach.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Content Strategy',
      description: 'We create a comprehensive content plan aligned with your marketing funnel, mapping out the right message for each stage.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Professional Production',
      description: 'Our team handles every aspect of video production, from scripting to filming and editing, ensuring high-quality results.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Strategic Distribution',
      description: 'We deploy your content across the right platforms to maximize reach and engagement with your target audience.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      )
    },
    {
      number: '05',
      title: 'Performance Analysis',
      description: 'We continuously track results and optimize your strategy based on data-driven insights to improve performance.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <SectionContainer id="process" className="section-spacing-lg bg-white relative">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-blue-50 rounded-full opacity-30 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-blue-50 rounded-full opacity-30 blur-3xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-3">
            Our Approach
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-5 text-gray-900">Our Proven Process</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We follow a systematic approach to ensure your social media strategy delivers measurable results and aligns with your business goals.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        {/* Process Steps */}
        <div className="flex flex-col items-center relative">
          {/* Timeline Line */}
          <div className="absolute h-full w-1 bg-blue-100 left-1/2 transform -translate-x-1/2 rounded-full z-0 hidden md:block"></div>
          
          {processSteps.map((step, index) => (
            <div key={index} className="w-full mb-8 md:mb-0">
              <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center relative z-10`}>
                {/* Left Content */}
                <div className="md:w-1/2 px-6 py-8 md:py-16 flex justify-center md:justify-end md:pr-12 relative">
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-blue-600 font-bold text-4xl opacity-30 font-display absolute top-0 left-6 md:static">
                      {step.number}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8 md:mt-0">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                
                {/* Center Icon */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center bg-white rounded-full border-4 border-blue-100 w-16 h-16 z-20">
                  <div className="text-blue-600">
                    {step.icon}
                  </div>
                </div>
                
                {/* Mobile Icon */}
                <div className="md:hidden mb-4 p-3 bg-blue-50 rounded-full">
                  <div className="text-blue-600">
                    {step.icon}
                  </div>
                </div>
                
                {/* Right Content (empty on mobile) */}
                <div className="md:w-1/2 hidden md:block"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Card */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 mt-20 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-30 blur-3xl -z-1"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full opacity-30 blur-3xl -z-1"></div>
          
          <div className="relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center">
            <div className="lg:w-3/4 mb-8 lg:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to transform your social media strategy?</h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                Let's discuss how our process can be tailored to help you achieve your specific business goals.
              </p>
            </div>
            <div className="lg:w-1/4 lg:text-right flex-shrink-0">
              <a 
                href="/contact" 
                className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-xl text-base font-medium hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Get Started
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProcessSection; 