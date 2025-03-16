import React from 'react';
import SectionContainer from '../../../ui/SectionContainer';

/**
 * Process section for the Authority Builder package
 * Explains the step-by-step process of implementing the solution
 */
const ProcessSection = () => {
  return (
    <SectionContainer bgColor="bg-white" className="section-spacing-md">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Authority Building Process</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-700">
            A systematic approach to establishing your brand as the trusted authority in your industry
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="space-y-16 mt-12">
          {/* Step 1 */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-purple-100 ml-6 md:ml-8 hidden md:block"></div>
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-shrink-0 z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-purple-100 text-purple-700 font-bold text-xl md:text-2xl mb-4 md:mb-0">
                1
              </div>
              <div className="md:ml-8 md:mt-4 flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategic Authority Audit</h3>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <p className="text-gray-700 mb-4">
                    We begin by analyzing your current brand positioning, audience perception, and industry landscape to identify authority gaps and strategic opportunities.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Authority positioning analysis</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Competitor authority assessment</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Current content effectiveness review</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Authority opportunity mapping</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-purple-100 ml-6 md:ml-8 hidden md:block"></div>
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-shrink-0 z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-purple-100 text-purple-700 font-bold text-xl md:text-2xl mb-4 md:mb-0">
                2
              </div>
              <div className="md:ml-8 md:mt-4 flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Authority Content Strategy</h3>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <p className="text-gray-700 mb-4">
                    Our team develops a customized content strategy designed to position you as the go-to expert in your field, focusing on your unique expertise and value proposition.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Strategic message crafting</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Content framework development</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Authority narrative creation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Content type selection & planning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-purple-100 ml-6 md:ml-8 hidden md:block"></div>
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-shrink-0 z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-purple-100 text-purple-700 font-bold text-xl md:text-2xl mb-4 md:mb-0">
                3
              </div>
              <div className="md:ml-8 md:mt-4 flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Premium Content Production</h3>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <p className="text-gray-700 mb-4">
                    We create high-quality authority-building video content that showcases your expertise, reinforces your brand positioning, and builds trust with your audience.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Expert interview videos</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Brand story development</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Client testimonial production</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Educational content creation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-shrink-0 z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-purple-100 text-purple-700 font-bold text-xl md:text-2xl mb-4 md:mb-0">
                4
              </div>
              <div className="md:ml-8 md:mt-4 flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Authority Amplification</h3>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <p className="text-gray-700 mb-4">
                    We strategically deploy and promote your authority content to maximize reach, engagement, and impact, continuously monitoring results to refine our approach.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Strategic content distribution</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Authority metrics tracking</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Content optimization</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Long-term authority strategy</span>
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
            Ready to establish your brand as the recognized authority in your industry?
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-4 text-lg font-medium text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            Schedule Your Authority Strategy Call
          </a>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProcessSection; 