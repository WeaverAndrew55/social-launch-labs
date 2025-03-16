import React from 'react';
import SectionContainer from '../../ui/SectionContainer';

/**
 * WhyPackagesWorkSection component that explains why the packages are effective
 */
const WhyPackagesWorkSection = () => {
  return (
    <SectionContainer bgColor="bg-white" className="section-spacing-lg">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 section-header">
          <div className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Our Approach
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Our Packages Work</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each package targets a <span className="font-bold">specific stage of your sales funnel</span> and tackles a key business challenge. They work <span className="font-bold">independently</span> to solve individual pain points, and even <span className="font-bold">better together</span> for an end-to-end content strategy.
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Benefit 1 */}
          <div className="feature-card">
            <div className="flex items-start mb-4">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Flexible & Adaptable</h3>
            </div>
            <p className="text-gray-700">
              Choose only what you need now and add other packages as your business grows. You won't pay for services you don't require.
            </p>
          </div>
          
          {/* Benefit 2 */}
          <div className="feature-card">
            <div className="flex items-start mb-4">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Strategic Impact</h3>
            </div>
            <p className="text-gray-700">
              Each package is crafted to maximize impact at its stage – from creating awareness to driving conversions to establishing authority.
            </p>
          </div>
          
          {/* Benefit 3 */}
          <div className="feature-card">
            <div className="flex items-start mb-4">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Seamless Integration</h3>
            </div>
            <p className="text-gray-700">
              If you opt for multiple packages, they're built to complement each other. The content from one stage naturally feeds into the next, creating a smooth journey for your customers.
            </p>
          </div>
          
          {/* Benefit 4 */}
          <div className="feature-card">
            <div className="flex items-start mb-4">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Proven Approach</h3>
            </div>
            <p className="text-gray-700">
              Our framework is based on tested content strategies. You get high-quality, purposeful content that <span className="font-bold">connects with your audience</span>, <span className="font-bold">converts prospects</span>, and <span className="font-bold">builds credibility</span> – all aligned to your goals.
            </p>
          </div>
        </div>
        
        {/* Visual Illustration */}
        <div className="bg-blue-50 rounded-2xl p-8 mt-8 border border-blue-100">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
              <img src="https://WeaverAndrew55.github.io/SLL-Images/assets/Services/Services-Funnel.png" alt="Marketing funnel visualization" className="w-full max-w-xs mx-auto" />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">A Package for Every Funnel Stage</h3>
              <p className="text-lg text-gray-700 mb-4">
                Below is a closer look at each package, including who should choose it and why it delivers results. Whether you need one targeted solution or a comprehensive strategy, we have you covered.
              </p>
              <p className="text-lg text-gray-700">
                Many clients start with the package that addresses their most pressing need, then add others as their business grows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default WhyPackagesWorkSection; 