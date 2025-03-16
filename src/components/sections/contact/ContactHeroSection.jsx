import React from 'react';

/**
 * Hero section for the Contact page
 * Premium design with visual elements consistent with other pages
 */
const ContactHeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 min-h-[60vh] flex items-center py-16 md:py-24">
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
              Let's Connect
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Get in Touch With Our Team
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Ready to transform your brand's content strategy? We're here to help you create video content that drives real business results and establishes your authority.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact-form" 
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-blue-700 transition duration-300"
              >
                Contact Form
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </a>
              <a 
                href="#schedule-call" 
                className="inline-flex items-center justify-center px-8 py-4 border border-blue-600 text-blue-600 bg-white rounded-xl text-base font-medium hover:bg-blue-50 transition duration-300"
              >
                Schedule a Call
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="/images/placeholders/contact-hero.jpg" 
                alt="Contact Social Launch Labs" 
                className="w-full h-auto rounded-xl shadow-2xl transform hover:scale-105 transition duration-500"
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg transform -rotate-3">
                <div className="flex items-center space-x-2">
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span className="font-bold">24hr Response Time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection; 