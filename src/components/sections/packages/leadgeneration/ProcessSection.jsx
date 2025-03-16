import React from 'react';
import SectionContainer from '../../../ui/SectionContainer';

/**
 * ProcessSection component - Shows the step-by-step process of the Lead Generation Mastery package
 */
const ProcessSection = () => {
  return (
    <SectionContainer bgColor="bg-white" className="section-spacing-md">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Lead Generation Process</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-700">
            A systematic approach to transforming your expertise into inbound leads
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="space-y-16 mt-12">
          {/* Step 1 */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-100 ml-6 md:ml-8 hidden md:block"></div>
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-shrink-0 z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-100 text-blue-700 font-bold text-xl md:text-2xl mb-4 md:mb-0">
                1
              </div>
              <div className="md:ml-8 md:mt-4 flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategic Audit & Planning</h3>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <p className="text-gray-700 mb-4">
                    We start by analyzing your current content, audience, and lead generation efforts to identify strengths, weaknesses, and untapped opportunities.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Comprehensive content audit</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Competitor analysis</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Audience targeting refinement</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Strategic plan development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-100 ml-6 md:ml-8 hidden md:block"></div>
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-shrink-0 z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-100 text-blue-700 font-bold text-xl md:text-2xl mb-4 md:mb-0">
                2
              </div>
              <div className="md:ml-8 md:mt-4 flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Authority Content Creation</h3>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <p className="text-gray-700 mb-4">
                    Our team develops a content strategy and produces high-quality, educational content that showcases your expertise and attracts your ideal clients.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Topic research and selection</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Professional video production</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Written content development</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Lead magnet creation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-100 ml-6 md:ml-8 hidden md:block"></div>
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-shrink-0 z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-100 text-blue-700 font-bold text-xl md:text-2xl mb-4 md:mb-0">
                3
              </div>
              <div className="md:ml-8 md:mt-4 flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategic Distribution</h3>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <p className="text-gray-700 mb-4">
                    We implement a multi-channel distribution strategy to maximize reach and engagement, ensuring your content reaches the right audience at the right time.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Platform-specific optimization</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Content scheduling</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Audience engagement tactics</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Paid promotion strategy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-shrink-0 z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-100 text-blue-700 font-bold text-xl md:text-2xl mb-4 md:mb-0">
                4
              </div>
              <div className="md:ml-8 md:mt-4 flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Lead Capture & Optimization</h3>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <p className="text-gray-700 mb-4">
                    We implement systems to capture leads and continuously refine the strategy based on performance data and results.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Lead capture optimization</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Performance tracking</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Strategy refinement</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Monthly reporting & analysis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-800 mb-6">
            Ready to transform your expertise into a consistent lead generation engine?
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Schedule Your Strategy Call
          </a>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProcessSection; 