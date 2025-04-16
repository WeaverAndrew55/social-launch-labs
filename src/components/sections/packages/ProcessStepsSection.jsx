import React from 'react';
import SectionContainer from '../../ui/SectionContainer';
import { Link } from 'react-router-dom';

/**
 * ProcessStepsSection component for the Services page
 * Displays the simple 3-step process for getting started with Social Launch Labs
 */
const ProcessStepsSection = ({ spacingClass }) => {
  // Process steps data array for easier maintenance
  const processSteps = [
    {
      id: 'step1',
      number: 1,
      title: 'Choose Your Focus',
      description: 'Determine your primary marketing challenge:',
      items: [
        'Need more leads?',
        'Low conversion rates?',
        'Need to build authority?'
      ],
      image: 'https://placehold.co/600x400/eef4ff/3b82f6?text=Strategy+Planning&font=playfair-display',
      altText: 'Strategy planning',
      accentColor: 'from-blue-500 to-blue-400'
    },
    {
      id: 'step2',
      number: 2,
      title: 'Personalized Strategy',
      description: 'Our team will customize your chosen package to address your specific:',
      items: [
        'Industry challenges',
        'Business goals',
        'Target audience needs'
      ],
      image: 'https://placehold.co/600x400/eefff4/22c55e?text=Custom+Strategy&font=playfair-display',
      altText: 'Custom strategy development',
      accentColor: 'from-green-500 to-blue-400'
    },
    {
      id: 'step3',
      number: 3,
      title: 'Implementation & Results',
      description: 'We\'ll execute your strategy with professional precision, delivering:',
      items: [
        'High-quality content',
        'Strategic implementation',
        'Measurable growth results'
      ],
      image: 'https://placehold.co/600x400/f4eeff/8b5cf6?text=Growth+Results&font=playfair-display',
      altText: 'Implementation and results',
      accentColor: 'from-purple-500 to-purple-400'
    }
  ];

  return (
    <SectionContainer className={spacingClass || "py-16 md:py-24"} transparentBg={true}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <span className="inline-block px-3 py-1 bg-[#7394D3]/20 text-[#155DFC] text-sm font-medium rounded-full mb-4">
            Getting Started
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293C] mb-4">
            Simple 3-Step Process
          </h2>
          <div className="w-20 h-1 bg-[#155DFC] mx-auto mb-6"></div>
          <p className="text-lg text-[#455064] max-w-2xl mx-auto">
            Working with Social Launch Labs is straightforward. Here's how we'll transform your marketing:
          </p>
        </div>

        {/* Process Steps - Enhanced Visual Layout */}
        <div className="relative mb-16">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#155DFC]/20 hidden md:block transform -translate-x-1/2 z-0"></div>
          
          {/* Decorative Background Elements */}
          <div className="hidden lg:block absolute -left-20 top-1/4 w-40 h-40 bg-blue-50 rounded-full opacity-50 blur-2xl"></div>
          <div className="hidden lg:block absolute -right-16 bottom-1/3 w-32 h-32 bg-blue-50 rounded-full opacity-50 blur-xl"></div>
          
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className={`relative z-10 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center ${index < processSteps.length - 1 ? 'mb-16' : ''}`}
            >
              <div className={`md:w-2/5 flex ${index % 2 === 0 ? 'justify-end md:pr-8' : 'justify-start md:pl-8'} mb-6 md:mb-0`}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#155DFC]/10 overflow-hidden flex flex-col h-full max-w-md">
                  {/* Top accent bar */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${step.accentColor}`}></div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#1E293C] mb-4">{step.number}. {step.title}</h3>
                    <p className="text-[#333945] mb-6">
                      {step.description}
                    </p>
                    <ul className="space-y-3 mb-4">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-[#155DFC] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-[#333945]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className={`bg-gradient-to-r from-[#155DFC] to-[#7394D3] text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold shadow-md z-20`}>
                  {step.number}
                </div>
              </div>
              
              <div className={`md:w-2/5 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} flex items-center mt-6 md:mt-0`}>
                <img 
                  src={step.image} 
                  alt={step.altText}
                  className="w-full max-w-xs mx-auto rounded-xl shadow-md transform transition-all duration-500 hover:shadow-lg hover:scale-[1.02]"
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Final CTA */}
        <div className="text-center relative z-10">
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#155DFC] to-[#7394D3] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg hover:shadow-blue-300/20 transition-all duration-300 transform hover:-translate-y-1 group"
          >
            Start Your Journey Today
            <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProcessStepsSection; 