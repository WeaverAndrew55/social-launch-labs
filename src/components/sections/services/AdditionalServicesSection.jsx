import React, { useState } from 'react';
import SectionContainer from '../../ui/SectionContainer';

/**
 * AdditionalServicesSection component for the Services page
 * Displays the additional services beyond the core packages
 */
const AdditionalServicesSection = ({ spacingClass }) => {
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

  // Service cards data for easier maintenance
  const serviceCards = [
    {
      id: 'whiteLabel',
      title: 'White-Label Video Production',
      summary: 'Marketing agencies and consultants: Expand your service offerings with our white-label video production. We handle the creation while you maintain client relationships.',
      details: 'Get professional video content delivered under your brand, ready to impress your clients without the overhead of an in-house production team.',
      icon: (
        <svg className="w-8 h-8 text-[#155DFC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      )
    },
    {
      id: 'customProjects',
      title: 'Create Custom Video Projects',
      summary: 'Need something unique? From promotional videos to training modules, we create custom video solutions tailored to your specific business objectives.',
      details: 'Our flexible production process adapts to your vision, timeline, and budget, ensuring you get exactly the content you need.',
      icon: (
        <svg className="w-8 h-8 text-[#155DFC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
        </svg>
      )
    },
    {
      id: 'strategy',
      title: 'Strategy & Production Services',
      summary: 'Need help with specific parts of your video content? We offer individual services including strategy development, scriptwriting, filming, editing, and content repurposing.',
      details: 'Whether you need a complete video strategy or help turning existing content into social media clips, our team can step in at any stage of your project.',
      icon: (
        <svg className="w-8 h-8 text-[#155DFC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      )
    }
  ];

  return (
    <SectionContainer className={spacingClass || "py-20 md:py-28"} transparentBg={true}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <span className="inline-block px-3 py-1 bg-[#7394D3]/20 text-[#155DFC] text-sm font-medium rounded-full mb-4">
            Beyond the Packages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293C] mb-4">
            Additional Services
          </h2>
          <div className="w-20 h-1 bg-[#155DFC] mx-auto mb-6"></div>
          <p className="text-lg text-[#455064] max-w-2xl mx-auto">
            We understand that one size doesn't fit all. In addition to our core packages, Social Launch Labs offers flexible services to meet specific needs.
          </p>
        </div>

        {/* Additional Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {serviceCards.map(card => (
            <div 
              key={card.id}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group h-full border border-[#155DFC]/10 flex flex-col relative z-10 overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 to-blue-400"></div>
              
              <div className="p-8 flex flex-col h-full">
                <div className="bg-[#E8F0FF] rounded-full p-5 mb-6 group-hover:bg-[#7394D3]/20 transition-colors duration-300 w-16 h-16 flex items-center justify-center mx-auto">
                  {card.icon}
                </div>
                
                <div className="flex flex-col h-full text-center">
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-[#1E293C] mb-4 group-hover:text-[#155DFC] transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-[#333945] leading-relaxed mb-6">
                      {card.summary}
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-2 flex flex-col items-center">
                    {/* Toggle Button */}
                    <button 
                      onClick={() => toggleCard(card.id)} 
                      className="flex items-center text-[#155DFC] font-medium hover:text-[#155DFC]/80 focus:outline-none transition-all duration-300 bg-blue-50/50 hover:bg-blue-50 py-2 px-4 rounded-full"
                      aria-expanded={expandedCards[card.id]}
                      aria-controls={`details-${card.id}`}
                    >
                      <span>{expandedCards[card.id] ? 'Show Less' : 'Show More'}</span>
                      <svg 
                        className={`w-5 h-5 ml-1.5 transition-transform duration-300 ${expandedCards[card.id] ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    
                    {/* Expandable Content */}
                    <div 
                      id={`details-${card.id}`}
                      className={`w-full transition-all duration-500 ease-in-out ${
                        expandedCards[card.id] ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-4 py-4 bg-blue-50/30 rounded-lg">
                        <p className="text-[#333945] leading-relaxed text-center">
                          {card.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Decorative Background Elements */}
          <div className="hidden lg:block absolute -left-20 top-1/4 w-40 h-40 bg-blue-50 rounded-full opacity-50 blur-2xl"></div>
          <div className="hidden lg:block absolute -right-16 bottom-1/3 w-32 h-32 bg-blue-50 rounded-full opacity-50 blur-xl"></div>
        </div>
        
        {/* Additional Service CTA */}
        <div className="mt-20 text-center relative">
          <div className="inline-block relative z-10">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#155DFC] to-[#7394D3] text-white px-10 py-4 rounded-xl text-lg font-medium hover:shadow-lg hover:shadow-blue-300/20 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              Request a Custom Solution
              <svg className="w-5 h-5 ml-2.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AdditionalServicesSection; 