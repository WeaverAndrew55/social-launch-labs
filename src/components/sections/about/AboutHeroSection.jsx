import React from 'react';

/**
 * AboutHeroSection component for the About page
 * Displays the hero section with a brief introduction to the company
 */
const AboutHeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 min-h-[70vh] flex items-center py-12">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-10 w-64 h-64 bg-blue-100 rounded-full opacity-50"></div>
        <div className="absolute right-1/3 top-1/4 w-32 h-32 bg-blue-200 rounded-full opacity-30"></div>
        <div className="absolute left-10 bottom-10 w-48 h-48 bg-indigo-100 rounded-full opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your Partner in Strategic Video Marketing
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Transform Expertise Into Content That Connects, Converts, and Scales
            </p>
            <p className="text-base text-gray-700 mb-8 leading-relaxed">
              We're not just another production company—we're your growth partner. Our strategic video content amplifies your brand story and builds lasting market authority.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="/services" 
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-blue-700 transition duration-300"
              >
                Explore Our Services
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 border border-blue-600 text-blue-600 bg-white rounded-xl text-base font-medium hover:bg-blue-50 transition duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://placehold.co/800x600/e6efff/1e40af?text=Marketing+Team"
                alt="Social Launch Labs team" 
                className="w-full h-auto rounded-xl shadow-2xl transform hover:scale-105 transition duration-500"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg transform rotate-3">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className="font-bold">Results-driven video marketing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection; 