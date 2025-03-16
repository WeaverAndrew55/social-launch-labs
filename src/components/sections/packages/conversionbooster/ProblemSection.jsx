import React from 'react';

/**
 * Problem section for the Conversion Booster package
 * Explains the common issues with website conversion rates
 */
const ProblemSection = () => {
  return (
    <section className="section-spacing-md bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Problem: Good Traffic, Poor Conversions?</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto"></div>
          </div>
          
          <div className="text-lg text-gray-700 mb-10 leading-relaxed">
            <p className="mb-6">
              Do you have traffic to your site, but fewer conversions than you'd hoped? It's frustrating to invest in marketing, only to see potential customers leave without taking action.
            </p>
          </div>
          
          {/* Common Problems */}
          <div className="bg-gray-100 rounded-xl p-8 mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Many businesses struggle because their websites and content:</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-gray-800">Fail to effectively communicate product/service value</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-gray-800">Don't address customer doubts or objections</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-gray-800">Lack compelling reasons for prospects to buy now</span>
              </li>
            </ul>
          </div>
          
          {/* Bottom Line */}
          <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 shadow-sm">
            <p className="text-gray-800 font-medium">
              <strong>Every lost conversion represents missed revenue.</strong> If your content isn't strategically designed to persuade, you're leaving money on the table. That's why we created the Conversion Booster package.
            </p>
          </div>
          
          {/* Problem Illustration */}
          <div className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">The Conversion Gap</h3>
                <p className="text-gray-700">
                  Most businesses focus heavily on attracting website visitors but underinvest in the crucial step of turning those visitors into customers. This creates a "conversion gap" that costs you sales every day.
                </p>
              </div>
              <div className="bg-gray-100 p-6 flex items-center justify-center">
                <div className="w-full max-w-md">
                  <div className="relative">
                    <div className="h-4 bg-gray-200 rounded-full"></div>
                    <div className="absolute top-0 left-0 h-4 bg-green-500 rounded-full" style={{ width: '65%' }}></div>
                    <div className="mt-2 flex justify-between">
                      <span className="text-sm text-gray-600">Website Traffic</span>
                      <span className="text-sm font-medium text-green-600">65%</span>
                    </div>
                  </div>
                  
                  <div className="relative mt-6">
                    <div className="h-4 bg-gray-200 rounded-full"></div>
                    <div className="absolute top-0 left-0 h-4 bg-red-500 rounded-full" style={{ width: '15%' }}></div>
                    <div className="mt-2 flex justify-between">
                      <span className="text-sm text-gray-600">Conversion Rate</span>
                      <span className="text-sm font-medium text-red-600">15%</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                        50% conversion gap = lost revenue
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection; 