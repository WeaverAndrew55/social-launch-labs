import React from 'react';
import SectionContainer from '../../../ui/SectionContainer';

/**
 * PackageTiersSection component for the Authority Builder package
 * Displays the different service tiers and their features
 */
const PackageTiersSection = () => {
  return (
    <SectionContainer bgColor="bg-white" className="section-spacing-md" id="package-tiers">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Package</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-700">
            We offer the Authority Builder in three tailored tiers to meet different business needs:
          </p>
        </div>
        
        {/* Package Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Tier 1: Essentials */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-xl">
            <div className="bg-gradient-to-r from-purple-600 to-purple-500 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Essentials Tier</h3>
              <p className="opacity-90">Establish Your Presence</p>
              <div className="flex items-baseline mt-4">
                <span className="text-3xl font-bold">$</span>
                <span className="text-4xl font-bold ml-1">2,495</span>
                <span className="ml-2">one-time</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700"><strong>Brand Story Video:</strong> Clearly and powerfully share who you are, what you stand for, and why it matters</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700"><strong>Client Testimonial Video:</strong> Showcase genuine success stories to instantly build trust</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Professional strategy sessions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Expert scriptwriting</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">High-quality production</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-600 italic mb-4 text-sm">Ideal for businesses seeking foundational authority and improved credibility quickly</p>
                <a href="/contact" className="block w-full text-center py-3 px-6 bg-white border-2 border-purple-600 text-purple-600 font-medium rounded-full hover:bg-purple-50 transition-colors">
                  Get Started
                </a>
              </div>
            </div>
          </div>
          
          {/* Tier 2: Growth */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-100 transform scale-105 z-10 relative">
            <div className="absolute top-0 right-0 mt-4 mr-4">
              <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase">Popular</span>
            </div>
            <div className="bg-gradient-to-r from-purple-700 to-purple-600 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Growth Tier</h3>
              <p className="opacity-90">Enhance Your Influence</p>
              <div className="flex items-baseline mt-4">
                <span className="text-3xl font-bold">$</span>
                <span className="text-4xl font-bold ml-1">3,995</span>
                <span className="ml-2">one-time</span>
              </div>
            </div>
            <div className="p-6">
              <p className="font-medium text-gray-700 mb-3"><span className="text-purple-600 font-semibold">Everything in Essentials PLUS:</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700"><strong>Expert Interview Video:</strong> Highlight your expertise and position yourself as an industry leader</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700"><strong>Educational Insight Video:</strong> Provide valuable insights that build deeper trust with your audience</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Enhanced production quality</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Social media optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Basic performance analytics</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-600 italic mb-4 text-sm">Perfect for businesses ready to strengthen their authority and expand their influence</p>
                <a href="/contact" className="block w-full text-center py-3 px-6 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 transition-colors">
                  Get Started
                </a>
              </div>
            </div>
          </div>
          
          {/* Tier 3: Authority */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-xl">
            <div className="bg-gradient-to-r from-purple-800 to-purple-700 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Authority Tier</h3>
              <p className="opacity-90">Dominate Your Market</p>
              <div className="flex items-baseline mt-4">
                <span className="text-3xl font-bold">$</span>
                <span className="text-4xl font-bold ml-1">5,995</span>
                <span className="ml-2">one-time</span>
              </div>
            </div>
            <div className="p-6">
              <p className="font-medium text-gray-700 mb-3"><span className="text-purple-600 font-semibold">Everything in Growth PLUS:</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700"><strong>Authority Documentary:</strong> A premium showcase of your journey, expertise, and vision</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700"><strong>Case Study Series:</strong> In-depth success stories that demonstrate your proven results</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Premium production package</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Advanced distribution strategy</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Comprehensive analytics dashboard</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-600 italic mb-4 text-sm">The ultimate solution for businesses looking to dominate their market as the undisputed authority</p>
                <a href="/contact" className="block w-full text-center py-3 px-6 bg-white border-2 border-purple-600 text-purple-600 font-medium rounded-full hover:bg-purple-50 transition-colors">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xl text-gray-800 mb-6">
            Not sure which package is right for your business? Schedule a free consultation to discuss your goals.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-4 text-lg font-medium text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            Book Your Free Consultation
          </a>
          <p className="mt-4 text-gray-600">No obligation, cancel anytime.</p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default PackageTiersSection; 