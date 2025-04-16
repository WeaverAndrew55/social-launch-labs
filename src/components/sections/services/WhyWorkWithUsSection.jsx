import React from 'react';
import SectionContainer from '../../ui/SectionContainer';

/**
 * WhyWorkWithUsSection component for the Services page
 * Highlights the advantages of working with Social Launch Labs
 */
const WhyWorkWithUsSection = ({ spacingClass }) => {
  // Advantage cards data for easier maintenance
  const advantageCards = [
    {
      id: 'efficiency',
      title: 'Streamlined Production',
      description: 'Get premium video content faster without sacrificing quality. Our efficient process eliminates lengthy production cycles while maintaining the highest standards for every deliverable.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      accentColor: 'from-blue-500 to-blue-400'
    },
    {
      id: 'authority',
      title: 'Authority-Building Content',
      description: 'We create content that positions you as an industry leader. Every video is strategically designed to build your credibility and strengthen audience trust, directly supporting your business growth objectives.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      ),
      accentColor: 'from-green-500 to-blue-400'
    },
    {
      id: 'aiHuman',
      title: 'AI-Enhanced Human Creativity',
      description: 'Get the best of both worlds: data-driven optimization through AI tools combined with the storytelling expertise of seasoned creators. This unique blend delivers high-impact content efficiently without losing the human touch.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
      accentColor: 'from-purple-500 to-purple-400'
    },
    {
      id: 'reliability',
      title: 'Consistent, Reliable Results',
      description: 'Eliminate the uncertainty of freelancers or DIY approaches. Our proven system delivers high-quality content on schedule, every time. We\'re not just a service provider—we\'re a dedicated partner invested in your long-term success.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
        </svg>
      ),
      accentColor: 'from-indigo-600 to-blue-500'
    }
  ];

  return (
    <SectionContainer className={spacingClass || "py-16 md:py-24"} transparentBg={true}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <span className="inline-block px-3 py-1 bg-[#7394D3]/20 text-[#155DFC] text-sm font-medium rounded-full mb-4">
            Our Advantages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293C] mb-4">
            Why Work With Social Launch Labs?
          </h2>
          <div className="w-20 h-1 bg-[#155DFC] mx-auto mb-6"></div>
          <p className="text-lg text-[#455064] max-w-2xl mx-auto">
            Discover why businesses trust us to elevate their marketing with high-impact video content that drives real results.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Decorative Background Elements */}
          <div className="hidden lg:block absolute -left-20 top-1/4 w-40 h-40 bg-blue-50 rounded-full opacity-50 blur-2xl"></div>
          <div className="hidden lg:block absolute -right-16 bottom-1/3 w-32 h-32 bg-blue-50 rounded-full opacity-50 blur-xl"></div>
          
          {advantageCards.map(card => (
            <div 
              key={card.id}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group h-full border border-[#155DFC]/10 flex flex-col relative z-10 overflow-hidden"
            >
              {/* Top accent bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${card.accentColor}`}></div>
              
              <div className="p-8 flex flex-col h-full text-center">
                <div className="bg-[#E8F0FF] rounded-full p-4 mb-6 group-hover:bg-[#7394D3]/20 transition-colors duration-300 w-16 h-16 flex items-center justify-center mx-auto">
                  {card.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold text-[#1E293C] mb-4 group-hover:text-[#155DFC] transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-[#333945] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default WhyWorkWithUsSection; 