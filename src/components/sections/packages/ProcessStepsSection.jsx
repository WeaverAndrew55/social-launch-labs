import React from 'react';
import SectionContainer from '../../ui/SectionContainer';
import { Link } from 'react-router-dom';

/**
 * Optimized ProcessStepsSection component with clearer steps and better visual engagement
 */
const ProcessStepsSection = () => {
  return (
    <SectionContainer bgColor="bg-white" className="section-spacing-lg">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Getting Started
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple 3-Step Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Working with Social Launch Labs is straightforward. Here's how we'll transform your marketing:
          </p>
        </div>

        {/* Process Steps - Enhanced Visual Layout */}
        <div className="relative mb-16">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-100 hidden md:block transform -translate-x-1/2 z-0"></div>
          
          {/* Step 1 */}
          <div className="relative z-10 flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-2/5 flex justify-end pr-0 md:pr-8 mb-6 md:mb-0">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-md transform transition duration-300 hover:scale-[1.02]">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Choose Your Focus</h3>
                <p className="text-gray-700 mb-6">
                  Determine your primary marketing challenge:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Need more leads?</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Low conversion rates?</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Need to build authority?</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="bg-blue-600 text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold shadow-md z-20">1</div>
            </div>
            
            <div className="md:w-2/5 md:pl-8 flex items-center mt-6 md:mt-0">
              <img src="https://placehold.co/600x400/eef4ff/3b82f6?text=Strategy+Planning&font=playfair-display" alt="Strategy planning" className="w-full max-w-xs mx-auto rounded-xl shadow-md" />
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="relative z-10 flex flex-col md:flex-row-reverse items-center mb-16">
            <div className="md:w-2/5 flex justify-start pl-0 md:pl-8 mb-6 md:mb-0">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-md transform transition duration-300 hover:scale-[1.02]">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Personalized Strategy</h3>
                <p className="text-gray-700 mb-6">
                  Our team will customize your chosen package to address your specific:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Industry challenges</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Business goals</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Target audience needs</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="bg-blue-600 text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold shadow-md z-20">2</div>
            </div>
            
            <div className="md:w-2/5 md:pr-8 flex items-center mt-6 md:mt-0">
              <img src="https://placehold.co/600x400/eefff4/22c55e?text=Custom+Strategy&font=playfair-display" alt="Custom strategy development" className="w-full max-w-xs mx-auto rounded-xl shadow-md" />
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="relative z-10 flex flex-col md:flex-row items-center">
            <div className="md:w-2/5 flex justify-end pr-0 md:pr-8 mb-6 md:mb-0">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-md transform transition duration-300 hover:scale-[1.02]">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Implementation & Results</h3>
                <p className="text-gray-700 mb-6">
                  We'll execute your strategy with professional precision, delivering:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">High-quality content</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Strategic implementation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Measurable growth results</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="bg-blue-600 text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold shadow-md z-20">3</div>
            </div>
            
            <div className="md:w-2/5 md:pl-8 flex items-center mt-6 md:mt-0">
              <img src="https://placehold.co/600x400/f4eeff/8b5cf6?text=Growth+Results&font=playfair-display" alt="Implementation and results" className="w-full max-w-xs mx-auto rounded-xl shadow-md" />
            </div>
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="text-center">
          <Link to="/contact" className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-md">
            Start Your Journey Today
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProcessStepsSection; 