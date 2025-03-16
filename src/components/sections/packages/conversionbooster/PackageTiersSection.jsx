import React from 'react';

/**
 * Package Tiers section for the Conversion Booster package
 * Shows different pricing tiers and included features
 */
const PackageTiersSection = () => {
  return (
    <section id="package-tiers" className="section-spacing-lg bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Package</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto"></div>
            <p className="mt-6 text-xl text-gray-700">
              Select the level of conversion optimization that fits your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Essential Package */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-transform hover:scale-105 duration-300">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Essential</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-gray-900">$2,497</span>
                  <span className="ml-2 text-gray-600">one-time</span>
                </div>
                <p className="text-gray-700 mb-6">
                  Perfect for small businesses looking to improve their conversion rates with foundational optimizations.
                </p>
                <a 
                  href="/contact" 
                  className="block w-full py-3 px-6 text-center text-white font-medium bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                >
                  Get Started
                </a>
              </div>
              
              <div className="bg-gray-50 p-8">
                <div className="text-gray-900 font-semibold mb-4">What's Included:</div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Conversion audit & strategy</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">1 landing page optimization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">5-email nurture sequence</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">1 sales video script (60-90 sec)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">30 days of optimization support</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Premium Package */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-green-500 transform scale-105 z-10">
              <div className="bg-green-500 py-2 text-white text-center font-semibold">
                MOST POPULAR
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-gray-900">$4,997</span>
                  <span className="ml-2 text-gray-600">one-time</span>
                </div>
                <p className="text-gray-700 mb-6">
                  Comprehensive conversion optimization for established businesses ready to scale their results.
                </p>
                <a 
                  href="/contact" 
                  className="block w-full py-3 px-6 text-center text-white font-medium bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                >
                  Get Started
                </a>
              </div>
              
              <div className="bg-gray-50 p-8">
                <div className="text-gray-900 font-semibold mb-4">What's Included:</div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Advanced conversion strategy</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">3 landing page optimizations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">10-email nurture sequence</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">2 sales video scripts with production</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">90 days of optimization support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">A/B split testing implementation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Monthly strategy calls</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Ultimate Package */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-transform hover:scale-105 duration-300">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ultimate</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-gray-900">$9,997</span>
                  <span className="ml-2 text-gray-600">one-time</span>
                </div>
                <p className="text-gray-700 mb-6">
                  Enterprise-level conversion system for businesses ready for significant growth and scale.
                </p>
                <a 
                  href="/contact" 
                  className="block w-full py-3 px-6 text-center text-white font-medium bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                >
                  Get Started
                </a>
              </div>
              
              <div className="bg-gray-50 p-8">
                <div className="text-gray-900 font-semibold mb-4">What's Included:</div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Custom conversion system design</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Complete sales funnel creation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">20-email nurture & sales sequence</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Premium video production package</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">6 months of optimization support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Dedicated conversion specialist</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Customer research & persona creation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Custom Solutions */}
          <div className="bg-white rounded-xl shadow-md p-8 mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Our conversion specialists can create a tailored package that addresses your specific business challenges and goals. We'll work with you to design a custom solution that fits your timeline and budget.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center py-3 px-6 text-white font-medium bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
            >
              Request Custom Quote
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
          
          {/* Satisfaction Guarantee */}
          <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-xl p-6 mt-12">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-1">100% Satisfaction Guarantee</h4>
              <p className="text-gray-700">
                If you're not completely satisfied with our service, we'll work with you until you are. Your success is our priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageTiersSection; 