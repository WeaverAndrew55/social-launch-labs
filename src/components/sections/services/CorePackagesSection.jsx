import React, { useState } from 'react';

/**
 * CorePackagesSection component for the Services page
 * Displays the three main packages offered by Social Launch Labs
 */
const CorePackagesSection = () => {
  // State to track which package is currently focused
  const [focusedPackage, setFocusedPackage] = useState(null);

  return (
    <section id="core-packages" className="bg-gradient-to-b from-white to-blue-50 py-20 md:py-28 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="hidden lg:block absolute right-0 top-40 w-64 h-64 bg-blue-50 rounded-full opacity-50 blur-3xl"></div>
      <div className="hidden lg:block absolute -left-20 bottom-40 w-48 h-48 bg-blue-50 rounded-full opacity-50 blur-2xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 relative">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 shadow-sm">
              Our Solutions
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">Our Core Packages</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              For a straightforward path to results, we offer three signature packages tailored to the key stages of your marketing funnel. Whether you need to generate new leads, convert those leads into customers, or establish yourself as an industry authority, we have a package designed for that goal.
            </p>
          </div>

          {/* Core Packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16 relative z-10">
            {/* Lead Generation Package */}
            <div 
              className={`bg-white rounded-2xl shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 group flex flex-col transform ${focusedPackage === 'lead' ? 'scale-105 shadow-2xl z-20' : focusedPackage ? 'scale-95 opacity-75' : ''}`}
              onMouseEnter={() => setFocusedPackage('lead')}
              onMouseLeave={() => setFocusedPackage(null)}
            >
              <div className="relative">
                <img 
                  src="https://WeaverAndrew55.github.io/SLL-Images/assets/LeadGenMaster/LeadGenMaster-1.png" 
                  alt="Lead Generation Package" 
                  className="w-full h-52 md:h-60 object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-2 rounded-bl-lg text-sm font-medium">
                  Top of Funnel
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-2 flex items-center">
                  <div className="h-8 w-1.5 bg-blue-600 rounded mr-3"></div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Lead Generation Mastery</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">Fill the top of your funnel with qualified leads through strategic video content that captures attention and sparks interest in your brand.</p>
                
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="bg-blue-50 text-blue-700 rounded-full p-1 mr-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </span>
                  Perfect For:
                </h4>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span className="text-gray-700">Increasing brand awareness</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span className="text-gray-700">Building a lead pipeline</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span className="text-gray-700">Introducing core values</span>
                  </li>
                </ul>
                
                <div className="mt-auto">
                  <a href="/packages/lead-generation" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 group">
                    <span className="border-b border-transparent group-hover:border-blue-600 pb-0.5">Learn More</span>
                    <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Conversion Booster Package */}
            <div 
              className={`bg-white rounded-2xl shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 group flex flex-col transform ${focusedPackage === 'conversion' ? 'scale-105 shadow-2xl z-20' : focusedPackage ? 'scale-95 opacity-75' : ''}`}
              onMouseEnter={() => setFocusedPackage('conversion')}
              onMouseLeave={() => setFocusedPackage(null)}
            >
              <div className="relative">
                <img 
                  src="https://WeaverAndrew55.github.io/SLL-Images/assets/Services/Services-2.png" 
                  alt="Conversion Booster Package" 
                  className="w-full h-52 md:h-60 object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute top-0 right-0 bg-green-600 text-white px-4 py-2 rounded-bl-lg text-sm font-medium">
                  Middle of Funnel
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-2 flex items-center">
                  <div className="h-8 w-1.5 bg-green-600 rounded mr-3"></div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Conversion Booster</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">Turn prospects into paying customers with compelling mid-funnel content that builds trust, addresses objections, and encourages the decision to buy.</p>
                
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="bg-green-50 text-green-700 rounded-full p-1 mr-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </span>
                  Perfect For:
                </h4>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span className="text-gray-700">Optimizing sales process</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span className="text-gray-700">Demonstrating solutions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span className="text-gray-700">Increasing conversion rates</span>
                  </li>
                </ul>
                
                <div className="mt-auto">
                  <a href="/packages/conversion-booster" className="inline-flex items-center text-green-600 font-medium hover:text-green-700 group">
                    <span className="border-b border-transparent group-hover:border-green-600 pb-0.5">Learn More</span>
                    <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Authority Builder Package */}
            <div 
              className={`bg-white rounded-2xl shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 group flex flex-col transform ${focusedPackage === 'authority' ? 'scale-105 shadow-2xl z-20' : focusedPackage ? 'scale-95 opacity-75' : ''}`}
              onMouseEnter={() => setFocusedPackage('authority')}
              onMouseLeave={() => setFocusedPackage(null)}
            >
              <div className="relative">
                <img 
                  src="https://WeaverAndrew55.github.io/SLL-Images/assets/Services/Services-3.png" 
                  alt="Authority Builder Package" 
                  className="w-full h-52 md:h-60 object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-2 rounded-bl-lg text-sm font-medium">
                  Bottom of Funnel
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-2 flex items-center">
                  <div className="h-8 w-1.5 bg-purple-600 rounded mr-3"></div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Authority Builder</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">Position your brand as an industry leader for long-term growth with thought leadership and brand-building video content.</p>
                
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="bg-purple-50 text-purple-700 rounded-full p-1 mr-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </span>
                  Perfect For:
                </h4>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span className="text-gray-700">Building industry authority</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span className="text-gray-700">Nurturing loyal customers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span className="text-gray-700">Attracting premium clients</span>
                  </li>
                </ul>
                
                <div className="mt-auto">
                  <a href="/packages/authority-builder" className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 group">
                    <span className="border-b border-transparent group-hover:border-purple-600 pb-0.5">Learn More</span>
                    <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Full Funnel Strategy */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 border border-blue-100 mt-8 shadow-xl relative z-10 transform transition-all duration-500 hover:shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-5 flex items-center">
                  <div className="h-8 w-1.5 bg-blue-600 rounded mr-3"></div>
                  Full-Funnel Strategy
                </h3>
                <p className="text-lg text-gray-700 mb-5 leading-relaxed">
                  You can combine all three packages for a comprehensive approach, or start with the stage that makes the most sense for your business.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Learn more about what each package includes on our Packages page, or reach out for guidance – we're here to help you choose the best path.
                </p>
                <div className="mt-8">
                  <a 
                    href="/packages" 
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-xl text-base font-medium hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    View All Packages
                    <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="https://WeaverAndrew55.github.io/SLL-Images/assets/Services/Services-Funnel.png" 
                  alt="Full funnel marketing strategy" 
                  className="w-full h-auto rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorePackagesSection; 