import React from 'react';
import SectionContainer from '../../../ui/SectionContainer';

/**
 * FeaturesSection component - Highlights the features and benefits of the Lead Generation Mastery package
 */
const FeaturesSection = () => {
  return (
    <SectionContainer bgColor="bg-gray-50" className="section-spacing-md">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Package Features & Deliverables</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-700">
            Everything you need to establish authority and generate consistent leads
          </p>
        </div>
        
        {/* Features and Deliverables */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Feature 1 */}
          <div className="feature-card bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Strategic Content Plan</h3>
              </div>
              <p className="text-gray-700">
                A comprehensive content strategy tailored to your specific industry and audience, focused on establishing authority and generating qualified leads.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Monthly content calendar</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Topic research and selection</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Platform-specific strategy</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="feature-card bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Video Content Production</h3>
              </div>
              <p className="text-gray-700">
                Professional video content that positions you as an authority in your field, designed to engage your audience and generate quality leads.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">4 educational videos per month</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Professional editing & branding</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Platform-optimized formats</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="feature-card bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Lead Magnets</h3>
              </div>
              <p className="text-gray-700">
                High-value resources designed to attract and convert your ideal clients, establishing your authority and building your email list.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">1 premium lead magnet per quarter</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Professional design & copywriting</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Lead capture optimization</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Feature 4 */}
          <div className="feature-card bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Distribution & Promotion</h3>
              </div>
              <p className="text-gray-700">
                Strategic distribution of your content across multiple channels to maximize visibility, engagement, and lead generation.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Multi-platform distribution</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Targeted promotion strategy</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Engagement optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Additional Benefits */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Benefits Include</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Monthly Strategy Calls</h4>
                <p className="text-gray-700">Regular alignment calls to review performance and adjust strategy.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Performance Reporting</h4>
                <p className="text-gray-700">Detailed monthly reports on content performance and lead generation.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Dedicated Account Manager</h4>
                <p className="text-gray-700">Personal point of contact throughout the entire process.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Strategic Guidance</h4>
                <p className="text-gray-700">Expert advice on content strategy, distribution, and lead generation.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Pricing Call-out */}
        <div className="bg-blue-600 text-white rounded-xl shadow-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Lead Generation Mastery Package</h3>
          <p className="text-lg mb-6">Transform your expertise into a consistent lead generation machine</p>
          <div className="text-3xl md:text-4xl font-bold mb-6">$1,997<span className="text-xl font-normal">/month</span></div>
          <a 
            href="/contact" 
            className="inline-block px-8 py-3 text-blue-700 bg-white rounded-lg shadow-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 font-medium"
          >
            Schedule a Free Strategy Call
          </a>
          <p className="mt-4 text-sm text-blue-100">3-month minimum commitment for optimal results</p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default FeaturesSection; 