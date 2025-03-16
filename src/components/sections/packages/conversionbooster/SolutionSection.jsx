import React from 'react';

/**
 * Solution section for the Conversion Booster package
 * Explains how the package helps solve conversion problems
 */
const SolutionSection = () => {
  return (
    <section className="section-spacing-md bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Solution: Conversion Booster</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto"></div>
            <p className="mt-6 text-xl text-gray-700">
              Turn more prospects into customers with content that compels action
            </p>
          </div>
          
          {/* Solution Overview */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What is Conversion Booster?</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Conversion Booster</strong> is our specialized package designed to transform your existing traffic into paying customers through compelling, conversion-focused content.
                </p>
                <p className="text-gray-700 mb-4">
                  We create persuasive videos, email sequences, and landing pages that guide prospects through the decision-making process, addressing objections and highlighting your unique value.
                </p>
                <p className="text-gray-700">
                  The result? Higher conversion rates, more sales, and better ROI from your existing marketing.
                </p>
              </div>
              <div className="md:w-1/2 flex items-center justify-center">
                <div className="relative w-full max-w-sm">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-100 rounded-full"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-50 rounded-full"></div>
                  <div className="relative z-10 bg-white p-6 rounded-xl border border-green-100 shadow-lg">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">Boost Conversions</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">Convert 15-40% more prospects</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">Shorten sales cycles</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">Increased customer lifetime value</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Key Benefits */}
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">How Conversion Booster Transforms Your Business</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Benefit 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-100">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                </div>
                <h4 className="ml-4 text-xl font-bold text-gray-900">Clear Value Communication</h4>
              </div>
              <p className="text-gray-700">
                We help you articulate your value proposition in ways that resonate with your target audience, making the benefits of your offer immediately clear and compelling.
              </p>
            </div>
            
            {/* Benefit 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-100">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                </div>
                <h4 className="ml-4 text-xl font-bold text-gray-900">Objection Handling</h4>
              </div>
              <p className="text-gray-700">
                Our content strategically addresses common customer objections before they become roadblocks, creating a smoother path to purchase with fewer drop-offs.
              </p>
            </div>
            
            {/* Benefit 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-100">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                </div>
                <h4 className="ml-4 text-xl font-bold text-gray-900">Urgency Creation</h4>
              </div>
              <p className="text-gray-700">
                We incorporate proven psychological triggers that create genuine urgency and motivation to act now rather than later, reducing the "I'll think about it" response.
              </p>
            </div>
            
            {/* Benefit 4 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-100">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                </div>
                <h4 className="ml-4 text-xl font-bold text-gray-900">Trust Building</h4>
              </div>
              <p className="text-gray-700">
                Our content showcases your expertise and reliability through social proof, case studies, and testimonials, helping prospects feel confident in their decision to choose you.
              </p>
            </div>
          </div>
          
          {/* Call out box */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-8 mb-8 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Perfect For Businesses That:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-800">Have decent traffic but low conversion rates</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-800">Want to maximize ROI from existing marketing efforts</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-800">Need to improve sales processes and close more deals</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-800">Are ready to scale revenue without scaling ad spend</span>
                </li>
              </ul>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-100 rounded-full opacity-50"></div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-green-100 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection; 