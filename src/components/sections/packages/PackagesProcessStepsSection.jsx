import React from 'react';
import SectionContainer from '../../ui/SectionContainer';
import { Link } from 'react-router-dom';

/**
 * PackagesProcessStepsSection component specifically for the Packages page
 * Displays the process illustrating how Social Launch Labs packages deliver results.
 * Uses a horizontal flex layout with connecting arrows on desktop.
 */
const PackagesProcessStepsSection = ({ spacingClass, transparentBg }) => {
  // Process steps data - Simplified
  const processSteps = [
    {
      id: 'step1',
      number: 1,
      title: 'Choose Your Focus',
      description: 'Identify your primary marketing goal – leads, conversions, or authority. We start by understanding your core needs.',
    },
    {
      id: 'step2',
      number: 2,
      title: 'Personalized Strategy',
      description: 'We tailor your chosen package to your unique industry, objectives, and target audience for maximum impact.',
    },
    {
      id: 'step3',
      number: 3,
      title: 'Implementation & Results',
      description: 'Our team executes the strategy with precision, delivering high-quality content and tracking measurable growth.',
    }
  ];

  // Simple SVG Arrow Component - Now accepts a color class prop
  const Arrow = ({ colorClass = 'text-blue-300' }) => (
    <svg className={`w-12 h-12 ${colorClass} mx-4 hidden md:block`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
    </svg>
  );

  return (
    <SectionContainer className={spacingClass || "pt-20 md:pt-28 pb-16"} transparentBg={transparentBg}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header - Adjusted margin */}
        <div className="text-center mb-12 md:mb-16">
           {/* Apply reference pill styling */}
           <div className="inline-block bg-[#155DFC]/20 text-[#155DFC] px-3 py-1 rounded-full text-sm font-semibold mb-4">
             Our Proven Process
           </div>
           {/* Apply reference title styling */}
           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
             How Our Packages Deliver Results
           </h2>
           {/* Removed gradient underline */}
           {/* Apply reference description styling */}
           <p className="text-lg text-gray-700 max-w-3xl mx-auto">
             We follow a clear, strategic path to ensure your investment translates into tangible marketing success.
           </p>
        </div>

        {/* Process Steps - Wrapped in a single card */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-y-10 md:gap-x-8 bg-white rounded-2xl border border-gray-100 shadow-lg shadow-blue-500/10 p-8 md:p-12">
           {/* Map through steps and add arrows between them */} 
           {processSteps.map((step, index) => (
             <React.Fragment key={step.id}>
               {/* Step Item */} 
               <div
                 // Use flex-1 to allow items to grow and fill space, but base width on content
                 className={`flex flex-col items-center text-center px-4 md:flex-1`}
                 // Removed background, border, shadow, backdrop-blur
               >
                 {/* Step Number */} 
                 <div className="flex-shrink-0 mb-5">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-[#155DFC] to-[#7394D3] text-white flex items-center justify-center text-2xl font-bold shadow-md border-4 border-white`}>
                       {step.number}
                    </div>
                 </div>

                 {/* Content */} 
                 <div className="w-full">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                        {step.description}
                    </p>
                 </div>
               </div>

               {/* Render Arrow between items (not after the last one) */} 
               {index < processSteps.length - 1 && (
                 <div className="flex-shrink-0 hidden md:flex items-center justify-center">
                    {/* Pass colorClass based on index */}
                    <Arrow colorClass={index === 0 ? 'text-green-300' : 'text-purple-300'} />
                 </div>
               )}
             </React.Fragment>
           ))}
        </div>
        
        {/* Final CTA - Removed */}
        {/* 
        <div className="text-center relative z-10 mt-20 md:mt-24">
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl hover:shadow-blue-300/40 transition-all duration-300 transform hover:-translate-y-1 group"
          >
            Discuss Your Project
            <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </div>
        */}
      </div>
    </SectionContainer>
  );
};

export default PackagesProcessStepsSection; 