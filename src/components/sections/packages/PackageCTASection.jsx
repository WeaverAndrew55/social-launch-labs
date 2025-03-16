import React from 'react';
import { Link } from 'react-router-dom';
import SectionContainer from '../../ui/SectionContainer';

/**
 * Modern, clean PackageCTASection with minimal design
 */
const PackageCTASection = () => {
  return (
    <SectionContainer bgColor="bg-gray-50" id="contact" className="section-spacing-lg">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-gray-100">
          {/* Content */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Ready to transform your marketing?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Schedule a consultation to get a customized strategy that aligns with your business goals.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Link 
              to="/contact" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Book a consultation
            </Link>
            <a 
              href="tel:+18005551234" 
              className="inline-block bg-white text-gray-700 border border-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Call (800) 555-1234
            </a>
          </div>
          
          {/* Trust Signals - Minimal design */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-100 pt-8">
            <div className="text-center">
              <p className="text-gray-700 text-sm font-medium">No-Risk Consultation</p>
            </div>
            <div className="text-center">
              <p className="text-gray-700 text-sm font-medium">Flexible Contracts</p>
            </div>
            <div className="text-center">
              <p className="text-gray-700 text-sm font-medium">Results-Focused</p>
            </div>
            <div className="text-center">
              <p className="text-gray-700 text-sm font-medium">Satisfaction Guaranteed</p>
            </div>
          </div>
        </div>
        
        {/* Testimonial - Simplified */}
        <div className="mt-10 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="text-yellow-400 mr-2">★★★★★</div>
            <p className="text-gray-500 text-sm">5.0 average rating</p>
          </div>
          <blockquote className="text-lg text-gray-700 mb-4">
            "Working with Social Launch Labs transformed our marketing. Our leads increased by 64% and conversion rate doubled within three months."
          </blockquote>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 mr-3">
              MR
            </div>
            <div>
              <p className="font-medium text-gray-900">Michelle Rodriguez</p>
              <p className="text-gray-500 text-sm">CEO, Brightscape Tech</p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default PackageCTASection; 