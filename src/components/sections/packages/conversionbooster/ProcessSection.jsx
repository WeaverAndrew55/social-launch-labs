import React from 'react';
import SectionContainer from '../../../ui/SectionContainer';

/**
 * Process section for the Conversion Booster package
 * Explains the step-by-step process of implementing the solution
 */
const ProcessSection = () => {
  return (
    <SectionContainer bgColor="bg-white" className="section-spacing-md">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Conversion Optimization Process</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-700">
            A systematic approach to transforming your traffic into paying customers
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="space-y-16 mt-12">
          {/* Step 1 */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-green-100 ml-6 md:ml-8 hidden md:block"></div>
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-shrink-0 z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-100 text-green-700 font-bold text-xl md:text-2xl mb-4 md:mb-0">
                1
              </div>
              <div className="md:ml-8 md:mt-4 flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Discovery & Analysis</h3>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <p className="text-gray-700 mb-4">
                    We analyze your current conversion metrics, identifying bottlenecks, and examining user behavior to pinpoint exactly where prospects are dropping off in your sales funnel.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Comprehensive conversion audit</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">User behavior analysis</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Competitor benchmark assessment</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Conversion opportunity mapping</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-green-100 ml-6 md:ml-8 hidden md:block"></div>
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-shrink-0 z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-100 text-green-700 font-bold text-xl md:text-2xl mb-4 md:mb-0">
                2
              </div>
              <div className="md:ml-8 md:mt-4 flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategy Development</h3>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <p className="text-gray-700 mb-4">
                    Based on our analysis, we create a tailored conversion strategy that addresses your specific challenges and leverages your unique selling propositions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Conversion strategy document</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Messaging framework development</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Customer journey mapping</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Implementation roadmap</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-green-100 ml-6 md:ml-8 hidden md:block"></div>
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-shrink-0 z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-100 text-green-700 font-bold text-xl md:text-2xl mb-4 md:mb-0">
                3
              </div>
              <div className="md:ml-8 md:mt-4 flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Content Creation & Development</h3>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <p className="text-gray-700 mb-4">
                    Our team develops high-converting content assets that guide prospects through each stage of your sales funnel, addressing objections and driving action.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Landing page optimization</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Email nurture sequence creation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Sales video production</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Conversion copy development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-shrink-0 z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-100 text-green-700 font-bold text-xl md:text-2xl mb-4 md:mb-0">
                4
              </div>
              <div className="md:ml-8 md:mt-4 flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Implementation & Optimization</h3>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <p className="text-gray-700 mb-4">
                    We deploy the conversion assets, set up tracking systems, and continuously monitor performance to refine and optimize based on real-world results.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Asset implementation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Conversion tracking setup</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">A/B testing</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Performance analysis & refinement</span>
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
            Ready to transform your website visitors into paying customers?
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-4 text-lg font-medium text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Book Your Free Consultation
          </a>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProcessSection; 