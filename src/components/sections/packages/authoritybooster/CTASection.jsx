import React from 'react';
import SectionContainer from '../../../ui/SectionContainer';

/**
 * CTASection component for the Authority Builder package
 * Final call-to-action encouraging visitors to take the next step
 */
const CTASection = () => {
  return (
    <SectionContainer bgColor="bg-gray-900" className="section-spacing-md">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Establish Your Authority?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Take the first step toward becoming the recognized expert in your field. 
          Our Authority Builder package will help you build the credibility and trust 
          that sets you apart from the competition.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <a 
            href="/contact" 
            className="inline-block px-8 py-4 bg-purple-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 w-full md:w-auto"
          >
            Schedule a Free Consultation
          </a>
          <a 
            href="#package-tiers" 
            className="inline-block px-8 py-4 bg-transparent border-2 border-gray-500 text-gray-300 text-lg font-medium rounded-lg hover:bg-gray-800 hover:border-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 w-full md:w-auto"
          >
            View Package Options
          </a>
        </div>
        
        <div className="mt-12 bg-gray-800 p-6 rounded-xl mx-auto max-w-3xl">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-left mb-6 sm:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">Still Have Questions?</h3>
              <p className="text-gray-400">
                Our team is here to help you understand how the Authority Builder can transform your business.
              </p>
            </div>
            <a 
              href="/contact" 
              className="inline-block px-6 py-3 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 whitespace-nowrap"
            >
              Contact Us Today
            </a>
          </div>
        </div>
        
        {/* Trust Signals */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-gray-800 rounded-full p-4 mb-3">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <p className="text-gray-400 text-sm">Secure Payments</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-800 rounded-full p-4 mb-3">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <p className="text-gray-400 text-sm">Satisfaction Guarantee</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-800 rounded-full p-4 mb-3">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <p className="text-gray-400 text-sm">Fast Turnaround</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-800 rounded-full p-4 mb-3">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
            <p className="text-gray-400 text-sm">Expert Support</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default CTASection; 