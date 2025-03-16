import React from 'react';
import SectionContainer from '../../../ui/SectionContainer';

/**
 * SolutionSection component for the Authority Builder package
 * Presents the solution to the problems outlined in the ProblemSection
 */
const SolutionSection = () => {
  return (
    <SectionContainer bgColor="bg-gray-50" className="section-spacing-md">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Solution: Authority Builder</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-700">
            Establish unquestionable authority with premium video content designed to position you as the go-to expert in your field.
          </p>
        </div>
        
        {/* Solution Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
              <img 
                src="/images/packages/authority-builder-solution.jpg" 
                alt="Authority Builder Solution" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">A Comprehensive Authority-Building System</h3>
              <p className="text-gray-700 mb-4">
                Our Authority Builder package is strategically designed to position you as the industry leader through premium video content creation. We showcase your expertise, amplify your message, and build deep trust with your ideal audience.
              </p>
              <p className="text-gray-700">
                We combine expert storytelling, high-production value, and strategic distribution to dramatically elevate your industry positioning.
              </p>
            </div>
          </div>
        </div>
        
        {/* Key Methods & Features */}
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Authority-Building Methods</h3>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Method 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                  </svg>
                </div>
              </div>
              <h4 className="ml-4 text-xl font-bold text-gray-900">Expert Positioning</h4>
            </div>
            <p className="text-gray-700">
              We create content that positions you as the authoritative voice in your industry, using your unique insights and expertise as the foundation.
            </p>
          </div>
          
          {/* Method 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                </div>
              </div>
              <h4 className="ml-4 text-xl font-bold text-gray-900">Brand Story Development</h4>
            </div>
            <p className="text-gray-700">
              We craft and communicate your unique brand story in a way that resonates with your audience, creating emotional connections and fostering trust.
            </p>
          </div>
          
          {/* Method 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                  </svg>
                </div>
              </div>
              <h4 className="ml-4 text-xl font-bold text-gray-900">Client Success Stories</h4>
            </div>
            <p className="text-gray-700">
              Compelling testimonial videos showcase your proven results, building powerful social proof that convinces prospects you're the right choice.
            </p>
          </div>
          
          {/* Method 4 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
              </div>
              <h4 className="ml-4 text-xl font-bold text-gray-900">Strategically Engineered Impact</h4>
            </div>
            <p className="text-gray-700">
              Content that integrates seamlessly into your existing marketing funnel—building trust at every stage and moving prospects toward becoming loyal customers.
            </p>
          </div>
        </div>
        
        {/* Call out box */}
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-8 mb-8 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Perfect For Businesses That:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-800">Want to stand out in competitive markets</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-800">Need to establish expertise and build trust quickly</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-800">Aim to command premium pricing for their offerings</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-800">Want to leverage content for long-term growth</span>
              </li>
            </ul>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-100 rounded-full opacity-50"></div>
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-100 rounded-full opacity-50"></div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default SolutionSection; 