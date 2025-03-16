import React from 'react';

/**
 * AboutCTASection component for the About page
 * Displays a call to action section at the bottom of the About page
 */
const AboutCTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-white blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://placehold.co/800x600/e6efff/1e40af?text=Success+Story" 
                  alt="Social Launch Labs team" 
                  className="rounded-xl shadow-2xl w-full h-auto object-cover"
                />
                <div className="absolute -bottom-5 -right-5 bg-white text-gray-900 p-5 rounded-lg shadow-xl max-w-xs">
                  <div className="flex items-center gap-3">
                    <svg className="w-8 h-8 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                    </svg>
                    <p className="font-medium">Let's create your success story today</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white/10 p-2 rounded-full inline-block mb-4">
                <span className="text-sm font-medium px-4 py-1">Take the Next Step</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Success Story?</h2>
              <p className="text-lg opacity-90 mb-8">
                Transform your video marketing with our strategic approach. Start creating content that builds authority, connects with your audience, and drives measurable results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center bg-white text-blue-700 px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-50 transition duration-300 shadow-md"
                >
                  Schedule Your Consultation
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
                <a 
                  href="/services" 
                  className="inline-flex items-center justify-center bg-blue-700 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-800 transition duration-300 border border-white/30"
                >
                  Explore Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTASection; 