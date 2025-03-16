import React from 'react';
import SectionContainer from '../../ui/SectionContainer';

/**
 * Contact Information section
 * Displays various ways to get in touch with Social Launch Labs
 */
const ContactInfoSection = () => {
  return (
    <SectionContainer bgColor="bg-white" id="contact-info" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Can We Help You?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team is ready to answer your questions and help you get started with the right video content solution for your business.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Email Contact */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 p-8 text-center">
            <div className="bg-blue-50 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
            <p className="text-gray-600 mb-4">
              Questions about our services? Send us an email and we'll respond within 24 hours.
            </p>
            <a href="mailto:hello@sociallaunchlabs.com" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
              hello@sociallaunchlabs.com
            </a>
          </div>

          {/* Phone Contact */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 p-8 text-center">
            <div className="bg-blue-50 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
            <p className="text-gray-600 mb-4">
              Prefer a direct conversation? Our team is available Monday-Friday, 9AM-5PM EST.
            </p>
            <a href="tel:+15551234567" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
              (555) 123-4567
            </a>
          </div>

          {/* Live Chat */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 p-8 text-center">
            <div className="bg-blue-50 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Live Chat</h3>
            <p className="text-gray-600 mb-4">
              Need quick answers? Chat with our team online for immediate assistance.
            </p>
            <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
              Start Chat
            </button>
          </div>
        </div>

        {/* Schedule a Call Section */}
        <div id="schedule-call" className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 mt-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Schedule a Free Strategy Call</h3>
              <p className="text-lg text-gray-700 mb-6">
                Book a 30-minute free consultation call to discuss your video content goals and how we can help achieve them. Our specialists will provide personalized guidance based on your specific needs.
              </p>
              <a 
                href="https://calendly.com/sociallaunchlabs/strategy-call" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-blue-700 transition duration-300"
              >
                Book Your Free Call
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
            <div className="md:w-1/3">
              <img 
                src="/images/placeholders/contact-call.jpg" 
                alt="Schedule a strategy call" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactInfoSection; 