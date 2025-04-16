import React from 'react';
import SectionContainer from '../../ui/SectionContainer';

/**
 * WhyChooseUsSection component for the About page
 * Displays the reasons why clients should choose Social Launch Labs
 */
const WhyChooseUsSection = () => {
  return (
    <SectionContainer 
      className="section-spacing-md"
      transparentBg={true}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header with consistent homepage styling */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-3">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">Our Commitment to Excellence</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the key principles that set Social Launch Labs apart
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Card 1 - Updated with modern styling */}
          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow border border-gray-100 group">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy-First Approach</h3>
            <p className="text-gray-700">We build strategic communication frameworks tailored to your business goals, ensuring every video resonates and delivers results.</p>
          </div>
          
          {/* Card 2 - Updated with modern styling */}
          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow border border-gray-100 group">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">True Collaboration</h3>
            <p className="text-gray-700">Think of us as an extension of your team. We combine our marketing expertise with your industry knowledge for authentic, powerful content.</p>
          </div>
          
          {/* Card 3 - Updated with modern styling */}
          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow border border-gray-100 group">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Total Transparency</h3>
            <p className="text-gray-700">From clear pricing to straightforward processes, you'll always know exactly what to expect. No surprises, just progress.</p>
          </div>

          {/* ADDED: Integrity Card */}
          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow border border-gray-100 group">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
            <p className="text-gray-700">We believe in complete transparency in our processes, pricing, and partnerships. You'll always know exactly what you're getting.</p>
          </div>

          {/* ADDED: Client Partnership Card */}
          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow border border-gray-100 group">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Client Partnership</h3>
            <p className="text-gray-700">We see our clients as partners in the creative process, combining our expertise with your industry knowledge for the best results.</p>
          </div>
          
          {/* ADDED: Results Focus Card */}
          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow border border-gray-100 group">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Results Focus</h3>
            <p className="text-gray-700">Every strategy and creative decision is made with your business goals in mind. We measure our success by your growth and ROI.</p>
          </div>
        </div>

        {/* ADDED: Call to action moved from Team Section */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto p-8 bg-[#155DFC]/5 rounded-xl border border-[#155DFC]/10">
            <p className="text-lg text-gray-700 mb-6">
              Our team is committed to one goal: helping your business leverage social media content that establishes authority, builds trust, and drives measurable growth.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-[#155DFC] hover:bg-[#1149CF] text-white font-medium rounded-lg transition-colors shadow-sm hover:shadow"
            >
              Get in touch with our team
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default WhyChooseUsSection;