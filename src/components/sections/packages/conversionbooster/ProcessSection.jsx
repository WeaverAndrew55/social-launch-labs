import React from 'react';

/**
 * Process section for the Conversion Booster package
 * Explains the step-by-step process of implementing the solution
 */
const ProcessSection = () => {
  return (
    <section className="section-spacing-md bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto"></div>
            <p className="mt-6 text-xl text-gray-700">
              How we transform your conversion rates in 4 simple steps
            </p>
          </div>

          <div className="space-y-12 md:space-y-24">
            {/* Step 1 */}
            <div className="relative">
              <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-green-100 -translate-x-1/2 z-0"></div>
              
              <div className="flex flex-col md:flex-row items-center relative z-10">
                <div className="md:w-5/12 mb-8 md:mb-0 md:pr-12 md:text-right">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Discovery & Analysis</h3>
                  <p className="text-gray-700">
                    We start by examining your current conversion metrics, identifying bottlenecks, and analyzing user behavior to pinpoint where prospects are dropping off in your sales funnel.
                  </p>
                </div>
                
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl z-20">
                  1
                </div>
                
                <div className="md:w-5/12 md:pl-12 md:text-left mt-8 md:mt-0">
                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">What You'll Get:</h4>
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
                        <span className="text-gray-700">Analytics implementation plan</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">Detailed optimization roadmap</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-center relative z-10">
                <div className="md:w-5/12 mb-8 md:mb-0 md:pr-12 md:text-right order-1 md:order-3">
                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">What You'll Get:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start md:justify-end">
                        <span className="text-gray-700 md:order-2">Content strategy document</span>
                        <svg className="w-5 h-5 text-green-500 md:ml-2 mr-2 md:mr-0 flex-shrink-0 mt-1 md:order-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </li>
                      <li className="flex items-start md:justify-end">
                        <span className="text-gray-700 md:order-2">Conversion messaging framework</span>
                        <svg className="w-5 h-5 text-green-500 md:ml-2 mr-2 md:mr-0 flex-shrink-0 mt-1 md:order-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </li>
                      <li className="flex items-start md:justify-end">
                        <span className="text-gray-700 md:order-2">Customer journey mapping</span>
                        <svg className="w-5 h-5 text-green-500 md:ml-2 mr-2 md:mr-0 flex-shrink-0 mt-1 md:order-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl z-20 order-2">
                  2
                </div>
                
                <div className="md:w-5/12 md:pl-12 md:text-left mt-8 md:mt-0 order-3 md:order-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Strategy Development</h3>
                  <p className="text-gray-700">
                    Based on our analysis, we create a tailored conversion strategy that addresses your specific challenges and leverages your unique selling propositions to maximize customer conversion.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-center relative z-10">
                <div className="md:w-5/12 mb-8 md:mb-0 md:pr-12 md:text-right">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Content Creation</h3>
                  <p className="text-gray-700">
                    Our team develops high-converting content assets including landing pages, video scripts, email sequences, and sales materials that guide prospects through each stage of your sales funnel.
                  </p>
                </div>
                
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl z-20">
                  3
                </div>
                
                <div className="md:w-5/12 md:pl-12 md:text-left mt-8 md:mt-0">
                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">What You'll Get:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">Optimized landing pages</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">Sales videos and scripts</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">Email nurture sequences</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-center relative z-10">
                <div className="md:w-5/12 mb-8 md:mb-0 md:pr-12 md:text-right order-1 md:order-3">
                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">What You'll Get:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start md:justify-end">
                        <span className="text-gray-700 md:order-2">Monthly performance reports</span>
                        <svg className="w-5 h-5 text-green-500 md:ml-2 mr-2 md:mr-0 flex-shrink-0 mt-1 md:order-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </li>
                      <li className="flex items-start md:justify-end">
                        <span className="text-gray-700 md:order-2">Ongoing optimization updates</span>
                        <svg className="w-5 h-5 text-green-500 md:ml-2 mr-2 md:mr-0 flex-shrink-0 mt-1 md:order-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </li>
                      <li className="flex items-start md:justify-end">
                        <span className="text-gray-700 md:order-2">Strategy refinement sessions</span>
                        <svg className="w-5 h-5 text-green-500 md:ml-2 mr-2 md:mr-0 flex-shrink-0 mt-1 md:order-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl z-20 order-2">
                  4
                </div>
                
                <div className="md:w-5/12 md:pl-12 md:text-left mt-8 md:mt-0 order-3 md:order-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Implementation & Optimization</h3>
                  <p className="text-gray-700">
                    We deploy the conversion assets, set up tracking systems, and continuously monitor performance to refine and optimize the strategy based on real-world results and data.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Results Banner */}
          <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">The End Result?</h3>
            <p className="text-xl mb-6">
              A fine-tuned conversion system that consistently turns more of your prospects into paying customers, maximizing the ROI from your existing traffic.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                <div className="text-3xl font-bold mb-2">15-40%</div>
                <div className="text-sm">Conversion Rate Increase</div>
              </div>
              <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                <div className="text-3xl font-bold mb-2">2-3x</div>
                <div className="text-sm">Return on Investment</div>
              </div>
              <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                <div className="text-3xl font-bold mb-2">30%</div>
                <div className="text-sm">Reduction in Sales Cycle</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 