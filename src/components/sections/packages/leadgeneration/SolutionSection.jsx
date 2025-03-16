import React from 'react';
import SectionContainer from '../../../ui/SectionContainer';

/**
 * SolutionSection component - Describes the solution (Lead Generation Mastery package)
 */
const SolutionSection = () => {
  return (
    <SectionContainer bgColor="bg-gray-50" className="section-spacing-md">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Solution: Lead Generation Mastery</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-700">
            Transform your expertise into a consistent stream of qualified leads
          </p>
        </div>
        
        {/* Clean white card layout */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What is Lead Generation Mastery?</h3>
              <p className="text-gray-700 mb-4">
                <strong>Lead Generation Mastery</strong> is our specialized package designed to transform your expertise into a consistent source of high-quality leads through strategic content creation and distribution.
              </p>
              <p className="text-gray-700 mb-4">
                We create compelling videos, educational content, and strategic assets that guide prospects through the awareness stage into your sales pipeline. Every piece is carefully crafted to showcase your authority.
              </p>
              <p className="text-gray-700">
                The result? More qualified leads, consistent visibility, and a predictable pipeline of opportunities.
              </p>
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-50 rounded-full"></div>
                <div className="relative z-10 bg-white p-6 rounded-xl border border-blue-100 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path>
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Boost Lead Generation</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Generate 2-3x more qualified leads</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Establish consistent content delivery</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Transform expertise into lead magnets</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Key Benefits */}
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">How Lead Generation Mastery Transforms Your Business</h3>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Benefit 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start">
              <span className="text-3xl text-blue-600 mr-4">🏆</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Authority-Focused Approach</h3>
                <p className="text-gray-700">
                  We elevate your brand's authority through educational content that builds trust and establishes you as the go-to expert in your field.
                </p>
              </div>
            </div>
          </div>
          
          {/* Benefit 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start">
              <span className="text-3xl text-blue-600 mr-4">⚡</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Efficiency</h3>
                <p className="text-gray-700">
                  Streamlined, efficient processes that leverage technology and human expertise for faster results without compromising quality.
                </p>
              </div>
            </div>
          </div>
          
          {/* Benefit 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start">
              <span className="text-3xl text-blue-600 mr-4">🤝</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Guided Expertise & Support</h3>
                <p className="text-gray-700">
                  We guide you through every step from strategy to deployment in a collaborative partnership that makes the entire process smooth and effective.
                </p>
              </div>
            </div>
          </div>
          
          {/* Benefit 4 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start">
              <span className="text-3xl text-blue-600 mr-4">📈</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results & Social Proof</h3>
                <p className="text-gray-700">
                  Clients report doubling monthly inbound leads and 35% increases in qualified prospects through our strategic content approach.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call out box */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-8 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Perfect For Businesses That:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-800">Need to establish authority in their industry</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-800">Want to attract more qualified leads with less effort</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-800">Struggle with consistent content creation and distribution</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default SolutionSection; 