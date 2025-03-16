import React from 'react';
import SectionContainer from '../../ui/SectionContainer';

/**
 * Optimized WhyPackagesWorkSection component that explains package benefits concisely
 */
const WhyPackagesWorkSection = () => {
  return (
    <SectionContainer bgColor="bg-white" className="section-spacing-lg">
      <div className="max-w-5xl mx-auto">
        {/* Section Header - Streamlined messaging */}
        <div className="text-center mb-12 section-header">
          <div className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Our Approach
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Our Packages Work</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each package targets a <span className="font-bold">specific stage of your sales funnel</span>, solving a key business challenge while working seamlessly together for comprehensive growth.
          </p>
        </div>

        {/* Benefits Cards - More focused layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Benefit 1 */}
          <div className="feature-card bg-blue-50 p-6 rounded-xl">
            <div className="flex items-start mb-4">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Flexible & Adaptable</h3>
            </div>
            <p className="text-gray-700">
              Choose only what you need now and add other packages as your business grows.
            </p>
          </div>
          
          {/* Benefit 2 */}
          <div className="feature-card bg-blue-50 p-6 rounded-xl">
            <div className="flex items-start mb-4">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Strategic Impact</h3>
            </div>
            <p className="text-gray-700">
              Each package maximizes impact at its stage – from creating awareness to driving conversions to building authority.
            </p>
          </div>
          
          {/* Benefit 3 */}
          <div className="feature-card bg-blue-50 p-6 rounded-xl">
            <div className="flex items-start mb-4">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Seamless Integration</h3>
            </div>
            <p className="text-gray-700">
              When combined, packages complement each other to create a smooth customer journey from awareness to advocacy.
            </p>
          </div>
        </div>
        
        {/* Marketing Funnel Visual - Enhanced for better UX */}
        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 flex flex-col md:flex-row items-center shadow-sm">
          <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
            <img src="https://WeaverAndrew55.github.io/SLL-Images/assets/Services/Services-Funnel.png" alt="Marketing funnel visualization" className="w-full max-w-xs mx-auto" />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">A Package for Every Funnel Stage</h3>
            <p className="text-lg text-gray-700 mb-2">
              Whether you need one targeted solution or a comprehensive strategy, we meet you where you are in your growth journey.
            </p>
            <p className="text-md text-gray-600">
              Most clients start with their most pressing need, then add complementary packages as their business evolves.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default WhyPackagesWorkSection; 