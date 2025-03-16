import React from 'react';

/**
 * WhatWeDoSection component for the Services page
 * Displays information about the company's services and target audience
 */
const WhatWeDoSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 shadow-sm">
              Our Expertise
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">What We Do & Who We Help</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Transforming your knowledge into compelling video content that attracts ideal customers and fuels business growth
            </p>
          </div>

          {/* Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Image & Highlights */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-[1.02] hover:shadow-3xl">
                <img 
                  src="https://WeaverAndrew55.github.io/SLL-Images/assets/Services/Services-1.png" 
                  alt="Video production and strategy" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Feature Highlights Card */}
              <div className="bg-white rounded-xl p-6 shadow-xl lg:absolute -bottom-10 -right-10 max-w-[300px] border border-blue-100 transform transition-all duration-300 hover:shadow-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-600 h-6 w-1 rounded mr-3"></span>
                  Who We Help
                </h3>
                <ul className="space-y-3.5">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 font-medium">Busy Entrepreneurs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 font-medium">B2B Leaders</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 font-medium">Niche Service Providers</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Right Column: Text Content */}
            <div className="lg:col-span-6">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We specialize in working with busy entrepreneurs, B2B leaders, and niche service providers who know the value of content but struggle with the time and complexity it takes to do it right.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  If you've ever felt overwhelmed trying to maintain a consistent flow of quality content, you're not alone. Many of our clients aren't just looking for more videos – they're looking for clarity, ease, and confidence in their marketing.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Social Launch Labs fills that gap by handling everything from video strategy through execution, ensuring you get impactful content with minimal effort on your part. In short, we turn your expertise and ideas into compelling video content that attracts your ideal customers and fuels your business growth.
                </p>
              </div>
              
              {/* Value Propositions */}
              <div className="mt-10 bg-white rounded-xl p-8 border border-blue-100 shadow-lg transform transition-all duration-300 hover:shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="bg-blue-600 h-8 w-1.5 rounded mr-3"></div>
                  Why Clients Choose Us
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start group">
                    <div className="bg-blue-100 rounded-full p-2.5 mr-3 group-hover:bg-blue-200 transition-colors duration-300">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Time-Saving</h4>
                      <p className="text-gray-600">Content without the headaches</p>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <div className="bg-blue-100 rounded-full p-2.5 mr-3 group-hover:bg-blue-200 transition-colors duration-300">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Strategic</h4>
                      <p className="text-gray-600">Results-driven approach</p>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <div className="bg-blue-100 rounded-full p-2.5 mr-3 group-hover:bg-blue-200 transition-colors duration-300">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Efficient</h4>
                      <p className="text-gray-600">End-to-end production</p>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <div className="bg-blue-100 rounded-full p-2.5 mr-3 group-hover:bg-blue-200 transition-colors duration-300">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Professional</h4>
                      <p className="text-gray-600">High-quality production</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection; 