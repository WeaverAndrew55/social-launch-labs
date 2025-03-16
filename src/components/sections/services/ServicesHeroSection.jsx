import React from 'react';

/**
 * Hero section for the Services page
 * Showcases the main value proposition of Social Launch Labs services
 */
const ServicesHeroSection = () => {
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
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Elevate Your Brand with Video That Works
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              At Social Launch Labs, we help growth-minded businesses create professional video and audio content that elevates your brand authority, earns trust, and drives real results. We act as your end-to-end content partner – from strategic planning and scriptwriting to production and multi-platform distribution – making content creation simple and effective.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#core-packages" 
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-blue-700 transition duration-300"
              >
                View Our Packages
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 border border-blue-600 text-blue-600 bg-white rounded-xl text-base font-medium hover:bg-blue-50 transition duration-300"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://WeaverAndrew55.github.io/SLL-Images/assets/Services/Services-Hero.png" 
                alt="Professional video production" 
                className="w-full h-auto rounded-xl shadow-2xl transform hover:scale-105 transition duration-500"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg transform rotate-3">
                <div className="flex items-center space-x-2">
                  <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span className="font-bold">Content that drives results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeroSection; 