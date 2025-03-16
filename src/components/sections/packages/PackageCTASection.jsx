import React from 'react';
import { Link } from 'react-router-dom';
import SectionContainer from '../../ui/SectionContainer';

/**
 * PackageCTASection component - Call to action for the packages page
 */
const PackageCTASection = () => {
  return (
    <SectionContainer bgColor="bg-white" id="contact" className="section-spacing-lg">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-20 -mt-32 -mr-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full opacity-20 -mb-32 -ml-32"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Accelerate Your Growth?</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
              No matter which package you choose, you'll be leveraging a <span className="font-bold">proven content strategy</span> to drive your business forward. Our approach is <span className="font-bold">clear, efficient, and results-driven</span> – so you can move ahead with confidence. If you're ready for content that connects with your audience, converts more customers, and elevates your authority, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-xl text-base font-medium hover:bg-blue-50 transition duration-300">
                Book Your Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <a href="tel:+1234567890" className="inline-flex items-center justify-center border border-white text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-blue-700 transition duration-300">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Directly
              </a>
            </div>
            <p className="text-blue-200 text-sm mt-6">
              <span className="font-bold">Take the next step toward growth today. Book your consultation with Social Launch Labs</span> – and let's launch your success story!
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default PackageCTASection; 