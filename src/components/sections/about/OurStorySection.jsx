import React from 'react';
import SectionContainer from '../../ui/SectionContainer';

/**
 * OurStorySection component for the About page
 * Displays the company's story and mission with updated styling to match homepage
 * Updated to use transparent backgrounds and match unified design
 */
const OurStorySection = () => {
  return (
    <SectionContainer className="section-spacing-md" transparentBg={true}>
      <div className="max-w-6xl mx-auto">
        {/* Section header - centered with badge styling */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-[#155DFC]/10 text-[#155DFC] text-sm font-medium rounded-full mb-3">
            Our Story
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-[#1E293C]">From Challenge to Solution</h2>
          <p className="text-lg text-[#333945] max-w-2xl mx-auto">
            How we transformed the video marketing experience for businesses
          </p>
          <div className="w-20 h-1 bg-[#155DFC] mx-auto mt-6"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image Column */}
          <div className="lg:w-5/12 relative">
            <div className="relative">
              <img 
                src="https://placehold.co/800x600/e6efff/1e40af?text=Our+Story" 
                alt="The beginning of Social Launch Labs" 
                className="w-full h-auto rounded-xl shadow-xl relative z-10"
              />
            </div>
          </div>
          
          {/* Content Column with upgraded styling */}
          <div className="lg:w-7/12">
            <div className="space-y-4">
              {/* Paragraph 1: Problem */}
              <p className="text-lg text-[#333945] leading-relaxed">
                Many businesses find video marketing complex and frustrating, often leading to unclear messaging and inconsistent results.
              </p>
              {/* Paragraph 2: Action/Solution */}
              <p className="text-lg text-[#333945] leading-relaxed">
                We saw this challenge and created a new approach. By combining strategic storytelling with proven content frameworks, we simplify the entire process, delivering more than just professional videos.
              </p>
              {/* List: Benefits/Result */}
              <div className="pt-2">
                  <h4 className="text-lg font-semibold text-[#1E293C] mb-2">Our approach provides:</h4>
                  <ul className="space-y-2 list-disc list-outside pl-5 text-[#333945]">
                      <li>A clear path to building authority in your industry.</li>
                      <li>Stronger connections with your ideal audience.</li>
                      <li>Measurable business growth driven by strategic content.</li>
                  </ul>
              </div>
            </div>
            
            {/* Timeline boxes with enhanced styling */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#155DFC]/10 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#155DFC] to-[#7394D3] text-white flex items-center justify-center font-semibold">1</div>
                  <h3 className="ml-3 text-lg font-bold text-[#1E293C]">Problem</h3>
                </div>
                <p className="text-[#333945]">Businesses struggled with ineffective, inconsistent video content</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#155DFC]/10 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#155DFC] to-[#7394D3] text-white flex items-center justify-center font-semibold">2</div>
                  <h3 className="ml-3 text-lg font-bold text-[#1E293C]">Solution</h3>
                </div>
                <p className="text-[#333945]">Strategic frameworks and simplified production processes</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-[#155DFC]/10 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#155DFC] to-[#7394D3] text-white flex items-center justify-center font-semibold">3</div>
                  <h3 className="ml-3 text-lg font-bold text-[#1E293C]">Result</h3>
                </div>
                <p className="text-[#333945]">Measurable growth and increased authority for our clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default OurStorySection; 