import React from 'react';

/**
 * WhyChooseUsSection component for the About page
 * Displays the reasons why clients should choose Social Launch Labs
 */
const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-indigo-100 rounded-full opacity-20 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Commitment to Excellence</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover the key principles that set Social Launch Labs apart
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition hover:scale-105 hover:shadow-xl border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy-First Approach</h3>
              <p className="text-gray-700">We don't just create videos—we build communication frameworks that achieve your business goals and resonate with your ideal audience.</p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition hover:scale-105 hover:shadow-xl border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">True Collaboration</h3>
              <p className="text-gray-700">We work as an extension of your team, combining our expertise with your inside knowledge to create authentic, powerful content.</p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition hover:scale-105 hover:shadow-xl border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Total Transparency</h3>
              <p className="text-gray-700">From pricing to process, we keep everything clear and straightforward so you always know what you're getting and when.</p>
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="bg-white rounded-xl shadow-xl p-8 lg:p-12 relative border border-gray-100">
            <div className="absolute -top-6 left-10 text-blue-600 text-8xl opacity-20">"</div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="md:w-1/3">
                  <img 
                    src="https://placehold.co/300x300/e6efff/1e40af?text=Client" 
                    alt="Happy client testimonial" 
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full border-4 border-white shadow-lg mx-auto md:mx-0"
                  />
                </div>
                <div className="md:w-2/3">
                  <p className="text-xl text-gray-700 italic mb-6">
                    "Working with Social Launch Labs transformed our approach to video marketing. Their strategic guidance and collaborative process made all the difference—we've seen a 40% increase in engagement and significant growth in conversions."
                  </p>
                  <div>
                    <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
                    <p className="text-gray-600">Marketing Director, TechFlow Solutions</p>
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

export default WhyChooseUsSection; 