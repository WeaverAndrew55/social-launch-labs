import React, { useState } from 'react';

/**
 * AdditionalServicesSection component for the Services page
 * Displays the additional services beyond the core packages
 */
const AdditionalServicesSection = () => {
  // State to track which cards are expanded
  const [expandedCards, setExpandedCards] = useState({
    whiteLabel: false,
    customProjects: false,
    strategy: false
  });

  // Toggle function to expand/collapse cards
  const toggleCard = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 relative">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 shadow-sm">
              Beyond the Packages
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">Additional Services</h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We understand that one size doesn't fit all. In addition to our core packages, Social Launch Labs offers flexible services to meet specific needs.
            </p>
            
            {/* Decorative Elements */}
            <div className="hidden md:block absolute -top-10 -left-12 w-24 h-24 bg-blue-50 rounded-full opacity-70"></div>
            <div className="hidden md:block absolute -bottom-10 -right-12 w-16 h-16 bg-blue-50 rounded-full opacity-70"></div>
          </div>

          {/* Additional Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {/* White Label Production */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 group h-full border border-gray-100 flex flex-col relative z-10">
              <div className="bg-blue-50 rounded-full p-5 inline-block mb-6 group-hover:bg-blue-100 transition-colors duration-300 w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              
              <div className="mb-auto">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">White-Label Video & Audio Production</h3>
                <p className="text-gray-700 leading-relaxed">
                  Are you a marketing agency or consultant needing content for your clients? We've got you covered. Our team can produce fully white-labeled videos and podcasts that seamlessly integrate with your agency's offerings.
                </p>
                
                {/* Toggle Button */}
                <button 
                  onClick={() => toggleCard('whiteLabel')} 
                  className="flex items-center text-blue-600 font-medium mt-4 mb-4 hover:text-blue-700 focus:outline-none group"
                >
                  <span>{expandedCards.whiteLabel ? 'Show Less' : 'Show More'}</span>
                  <svg 
                    className={`w-5 h-5 ml-1.5 transition-transform duration-300 ${expandedCards.whiteLabel ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                {/* Expandable Content */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedCards.whiteLabel ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    We work behind the scenes under your brand, delivering consistent, high-quality results at scale. You get to expand your services (and impress your clients) without the overhead of building a production team from scratch.
                  </p>
                </div>
              </div>
              
              <a href="/for-agencies" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 group">
                <span className="border-b border-transparent group-hover:border-blue-600 pb-0.5">Learn More</span>
                <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
            
            {/* Custom Projects */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 group h-full border border-gray-100 flex flex-col relative z-10">
              <div className="bg-blue-50 rounded-full p-5 inline-block mb-6 group-hover:bg-blue-100 transition-colors duration-300 w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
                </svg>
              </div>
              
              <div className="mb-auto">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">Custom Video/Audio Projects</h3>
                <p className="text-gray-700 leading-relaxed">
                  Have a unique project in mind? We handle custom video and audio projects for businesses that need tailored solutions outside our standard packages. Whether it's a one-off promotional video, a series of training modules, or a specialized podcast initiative, we'll collaborate with you to plan and execute a solution that meets your specific objectives.
                </p>
                
                {/* Toggle Button */}
                <button 
                  onClick={() => toggleCard('customProjects')} 
                  className="flex items-center text-blue-600 font-medium mt-4 mb-4 hover:text-blue-700 focus:outline-none group"
                >
                  <span>{expandedCards.customProjects ? 'Show Less' : 'Show More'}</span>
                  <svg 
                    className={`w-5 h-5 ml-1.5 transition-transform duration-300 ${expandedCards.customProjects ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                {/* Expandable Content */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedCards.customProjects ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Our agile production process adapts to your requirements – ensuring you get the creative content you envision, on your timeline and budget.
                  </p>
                </div>
              </div>
              
              <a href="/contact" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 group">
                <span className="border-b border-transparent group-hover:border-blue-600 pb-0.5">Get a Custom Quote</span>
                <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
            
            {/* Strategy & Execution */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 group h-full border border-gray-100 flex flex-col relative z-10">
              <div className="bg-blue-50 rounded-full p-5 inline-block mb-6 group-hover:bg-blue-100 transition-colors duration-300 w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              
              <div className="mb-auto">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">Strategy & Execution Services</h3>
                <p className="text-gray-700 leading-relaxed">
                  Maybe you already have some content created, or you need help with just one part of the process. We offer stand-alone video strategy and production services including content strategy development, scriptwriting, filming, video editing, and multi-platform content repurposing.
                </p>
                
                {/* Toggle Button */}
                <button 
                  onClick={() => toggleCard('strategy')} 
                  className="flex items-center text-blue-600 font-medium mt-4 mb-4 hover:text-blue-700 focus:outline-none group"
                >
                  <span>{expandedCards.strategy ? 'Show Less' : 'Show More'}</span>
                  <svg 
                    className={`w-5 h-5 ml-1.5 transition-transform duration-300 ${expandedCards.strategy ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                {/* Expandable Content */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedCards.strategy ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    From crafting a comprehensive video marketing plan to editing raw footage or turning a long webinar into bite-sized social media clips – our experts can step in at any stage to maximize your content's impact. Think of it as à la carte support to fill any gaps in your content workflow.
                  </p>
                </div>
              </div>
              
              <a href="/contact" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 group">
                <span className="border-b border-transparent group-hover:border-blue-600 pb-0.5">Discuss Your Needs</span>
                <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
            
            {/* Decorative Background Elements */}
            <div className="hidden lg:block absolute -left-20 top-1/4 w-40 h-40 bg-blue-50 rounded-full opacity-50 blur-2xl"></div>
            <div className="hidden lg:block absolute -right-16 bottom-1/3 w-32 h-32 bg-blue-50 rounded-full opacity-50 blur-xl"></div>
          </div>
          
          {/* Additional Service CTA */}
          <div className="mt-20 text-center relative">
            <div className="inline-block relative z-10">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center bg-blue-600 text-white px-10 py-4 rounded-xl text-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Request a Custom Solution
                <svg className="w-5 h-5 ml-2.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
            {/* Bottom decorative shape */}
            <div className="hidden md:block absolute left-1/4 -bottom-10 w-20 h-20 bg-blue-50 rounded-full opacity-60 blur-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServicesSection; 