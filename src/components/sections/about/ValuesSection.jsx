import React from 'react';

/**
 * ValuesSection component for the About page
 * Displays the core values of Social Launch Labs
 */
const ValuesSection = () => {
  // Values data
  const values = [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
      title: "Integrity",
      description: "We believe in complete transparency in our processes, pricing, and partnerships. You'll always know exactly what you're getting."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      title: "Innovation",
      description: "We're constantly evolving our strategies and techniques to stay ahead of industry trends and deliver cutting-edge content."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      title: "Client Partnership",
      description: "We see our clients as partners in the creative process, combining our expertise with your industry knowledge for the best results."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      ),
      title: "Creative Excellence",
      description: "We hold ourselves to the highest standards of quality, ensuring every piece of content we produce represents the best of what's possible."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
        </svg>
      ),
      title: "Results Focus",
      description: "Every strategy and creative decision is made with your business goals in mind. We measure our success by your growth and ROI."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
        </svg>
      ),
      title: "Clear Communication",
      description: "We believe in direct, honest communication at every stage, ensuring you're never left wondering what's happening with your project."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-50 opacity-50 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-indigo-50 opacity-40 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Principles That Guide Our Work</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              These core values define how we approach every project and client relationship
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-xl transition duration-300 flex flex-col"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700 flex-grow">{value.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white rounded-xl shadow-lg p-8 lg:p-10 relative">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
              <div className="md:w-1/3">
                <img 
                  src="https://placehold.co/600x400/e6efff/1e40af?text=Our+Values" 
                  alt="Social Launch Labs values in action" 
                  className="w-full h-auto rounded-xl shadow-md transform hover:scale-105 transition duration-500"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">More Than Just Words</h3>
                <p className="text-lg text-gray-700 mb-6">
                  At Social Launch Labs, our values aren't just statements on a website—they're the principles that guide every decision we make. From our initial strategy calls to final delivery, we live these values through our actions.
                </p>
                <p className="text-lg text-gray-700">
                  We're dedicated to building long-term relationships with our clients, serving as trusted partners in your growth journey. When you work with us, you experience these values firsthand through our process, communication, and results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection; 