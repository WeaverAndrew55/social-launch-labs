import React from 'react';
import { Link } from 'react-router-dom';
import SectionContainer from '../../ui/SectionContainer';

/**
 * Optimized PackageDetailsSection component with improved layout and more scannable content
 */
const PackageDetailsSection = () => {
  return (
    <SectionContainer bgColor="bg-gray-50" id="packages" className="section-spacing-lg">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Our Packages
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Specialized Service Packages</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the package that aligns with your specific business goals and marketing challenges.
          </p>
        </div>
        
        {/* Lead Generation Package - Soft Blue */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-10 transform transition duration-300 hover:scale-[1.01]">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3 bg-blue-50 p-8">
              <div className="lg:sticky lg:top-24">
                <div className="inline-block bg-blue-500 px-3 py-1 rounded-full text-sm font-medium mb-4 text-white">
                  Top of Funnel
                </div>
                <h2 className="text-3xl font-bold mb-4 text-blue-600">Lead Generation Mastery</h2>
                <p className="mb-6 text-blue-600 text-lg">
                  Fill your pipeline with qualified leads eager to learn about your solutions.
                </p>
                <div className="flex">
                  <Link to="/packages/lead-generation" className="inline-flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-xl text-base font-medium hover:bg-blue-600 transition duration-300">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Who It's For</h3>
              <p className="text-gray-700 mb-6">
                <span className="font-medium">Businesses struggling to generate enough quality leads</span> through their social media and content marketing efforts.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="mb-6 space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-bold">Attract More Prospects:</span> 
                    <span className="text-gray-700">Consistent lead generation through strategic content and engagement.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-bold">Increase Relevance:</span> 
                    <span className="text-gray-700">Target ideal customers with content that addresses their specific needs.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-bold">Build Your Pipeline:</span> 
                    <span className="text-gray-700">Create a consistent flow of opportunities to grow your business.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Conversion Booster Package - Soft Green */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-10 transform transition duration-300 hover:scale-[1.01]">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3 bg-green-50 p-8">
              <div className="lg:sticky lg:top-24">
                <div className="inline-block bg-green-500 px-3 py-1 rounded-full text-sm font-medium mb-4 text-white">
                  Middle of Funnel
                </div>
                <h2 className="text-3xl font-bold mb-4 text-green-600">Conversion Booster</h2>
                <p className="mb-6 text-green-600 text-lg">
                  Transform your existing engagement into paying customers more effectively.
                </p>
                <div className="flex">
                  <Link to="/packages/conversion-booster" className="inline-flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-xl text-base font-medium hover:bg-green-600 transition duration-300">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Who It's For</h3>
              <p className="text-gray-700 mb-6">
                <span className="font-medium">Businesses with audience engagement but low conversion rates</span> who need to turn more of their traffic into customers.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="mb-6 space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-bold">Accelerate Sales:</span> 
                    <span className="text-gray-700">Shorten your sales cycle with strategic content that removes barriers.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-bold">Higher Conversion Rates:</span> 
                    <span className="text-gray-700">Turn more prospects into customers with proven conversion strategies.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-bold">Maximize ROI:</span> 
                    <span className="text-gray-700">Get more value from your existing marketing investments and traffic.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Authority Builder Package - Soft Purple */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.01]">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3 bg-purple-50 p-8">
              <div className="lg:sticky lg:top-24">
                <div className="inline-block bg-purple-500 px-3 py-1 rounded-full text-sm font-medium mb-4 text-white">
                  Bottom of Funnel
                </div>
                <h2 className="text-3xl font-bold mb-4 text-purple-600">Authority Builder</h2>
                <p className="mb-6 text-purple-600 text-lg">
                  Establish yourself as the trusted expert in your industry and market.
                </p>
                <div className="flex">
                  <Link to="/packages/authority-building" className="inline-flex items-center justify-center bg-purple-500 text-white px-6 py-3 rounded-xl text-base font-medium hover:bg-purple-600 transition duration-300">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Who It's For</h3>
              <p className="text-gray-700 mb-6">
                <span className="font-medium">Established businesses looking to dominate their market</span> and build long-term brand value through thought leadership.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="mb-6 space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-bold">Stand Out:</span> 
                    <span className="text-gray-700">Differentiate from competitors as the recognized expert in your field.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-bold">Build Trust:</span> 
                    <span className="text-gray-700">Create deeper connections with audiences through authentic expertise.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-bold">Long-Term Growth:</span> 
                    <span className="text-gray-700">Generate referrals, partnerships, and opportunities that come with leadership status.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default PackageDetailsSection; 