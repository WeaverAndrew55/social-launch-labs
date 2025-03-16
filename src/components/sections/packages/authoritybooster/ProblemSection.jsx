import React from 'react';
import SectionContainer from '../../../ui/SectionContainer';

/**
 * ProblemSection component for the Authority Builder package
 * Outlines the problems that the Authority Builder package solves
 */
const ProblemSection = () => {
  return (
    <SectionContainer bgColor="bg-white" className="section-spacing-md">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Problem: Struggling to Stand Out?</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </div>
        
        <div className="text-lg text-gray-700 mb-10 leading-relaxed">
          <p className="mb-6">
            You're great at what you do, but is your market aware? Many businesses and entrepreneurs find it challenging to establish clear differentiation and strong credibility in their industries.
          </p>
        </div>
        
        {/* Common Problems */}
        <div className="bg-gray-100 rounded-xl p-8 mb-10">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Common issues include:</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-gray-800">Difficulty standing apart from competitors in crowded markets</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-gray-800">Struggling to clearly communicate unique value and expertise</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-gray-800">Failing to consistently showcase client success stories and thought leadership</span>
            </li>
          </ul>
        </div>
        
        {/* Bottom Line */}
        <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 shadow-sm">
          <p className="text-gray-800 font-medium">
            If your audience isn't consistently reminded of your authority and credibility, they'll turn to competitors who visibly demonstrate their expertise. This results in lost opportunities, fewer referrals, and slower growth.
          </p>
          <p className="text-gray-800 font-medium mt-4">
            Authority isn't just nice to have—it's essential to your long-term success. That's why we created the Authority Builder package.
          </p>
        </div>
        
        {/* Problem Illustration */}
        <div className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-6 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Authority Gap</h3>
              <p className="text-gray-700">
                Without a clear authority position, your business blends into the background. This "authority gap" makes it harder to win clients, command premium pricing, and drive sustainable growth.
              </p>
            </div>
            <div className="bg-gray-100 p-6 flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="relative">
                  <div className="h-4 bg-gray-200 rounded-full"></div>
                  <div className="absolute top-0 left-0 h-4 bg-purple-500 rounded-full" style={{width: '35%'}}></div>
                  <div className="mt-2 flex justify-between">
                    <span className="text-sm text-gray-600">Current Authority Perception</span>
                    <span className="text-sm font-medium text-purple-600">35%</span>
                  </div>
                </div>
                
                <div className="relative mt-6">
                  <div className="h-4 bg-gray-200 rounded-full"></div>
                  <div className="absolute top-0 left-0 h-4 bg-purple-700 rounded-full" style={{width: '85%'}}></div>
                  <div className="mt-2 flex justify-between">
                    <span className="text-sm text-gray-600">Desired Authority Position</span>
                    <span className="text-sm font-medium text-purple-700">85%</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                      50% authority gap = missed opportunities
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProblemSection; 