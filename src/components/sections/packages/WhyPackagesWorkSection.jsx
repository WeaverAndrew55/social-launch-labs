import React from 'react';
import SectionContainer from '../../ui/SectionContainer';

// Import images directly for reliable path handling by the build tool
import strategicImpactImg from '../../../assets/STUDIO/IMG_6570.png';
import flexibleGrowthImg from '../../../assets/STUDIO/05.27.2024 - Social Launch Labs - 2360 Portland St SE_25.png';
import seamlessIntegrationImg from '../../../assets/STUDIO/05.27.2024 - Social Launch Labs - 2360 Portland St SE_28.png';

/**
 * Redesigned WhyPackagesWorkSection component 
 * Style: Left image / Right stacked text with final polish.
 */
const WhyPackagesWorkSection = ({ transparentBg = false }) => {
  return (
    <SectionContainer transparentBg={transparentBg} className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header - Added Blue Pill */}
        <div className="text-center mb-12 md:mb-16"> {/* Adjusted margin slightly */}
          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
              Our Approach
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Our Strategic Packages Deliver Results
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"> {/* Added leading-relaxed */}
            Our packages are designed not just as services, but as targeted solutions that integrate seamlessly to drive measurable growth at every stage of your customer journey.
          </p>
        </div>

        {/* Polished Left/Right Layout - Changed to items-center */}
        <div className="md:grid md:grid-cols-2 md:gap-16 items-center"> {/* Changed from items-start */}
          
          {/* Left Column: Image and Filler Block */}
          <div className="mb-8 md:mb-0">
            {/* Image */}
            <img 
              src={strategicImpactImg} 
              alt="Social Launch Labs Strategic Packages" 
              className="rounded-lg shadow-xl w-full h-auto object-cover" /* No sticky */
              loading="lazy"
            />
            {/* Filler Block Below Image - Expanded Content */}
            <div className="mt-6 bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-gray-100 shadow-sm text-center">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Need Something Unique?
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                While our packages cover common needs, we also craft bespoke video strategies for specific goals or complex projects. Let's discuss your vision.
              </p>
              {/* Clearer Call to Action */}
              <a href="/contact" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-300">
                Discuss a Custom Project
              </a>
            </div>
          </div>

          {/* Right Column: Stacked Text Content - Enhanced */}
          {/* Added subtle background, padding, and border for definition */}
          <div className="space-y-6 bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-gray-100 shadow-sm"> 
            
            {/* Benefit 1: Strategic Impact */}
            <div>
              {/* Adjusted heading size */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategic Impact at Every Stage</h3> 
              <p className="text-gray-600 text-base"> {/* Adjusted text size slightly */}
                Each package is meticulously crafted to maximize impact at a specific phase of your marketing funnel – whether it's generating initial awareness, driving crucial conversions, or establishing long-term authority. We focus on the right actions at the right time.
              </p>
            </div>

            {/* Benefit 2: Flexible & Adaptable Growth */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible & Adaptable to Your Growth</h3>
              <p className="text-gray-600 text-base">
                Your business isn't static, and your marketing shouldn't be either. Start with the package addressing your most pressing need today, and seamlessly add complementary services as your business evolves and your goals expand. You control the pace.
              </p>
            </div>

            {/* Benefit 3: Seamless Integration */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Seamless Integration for Compound Results</h3>
              <p className="text-gray-600 text-base">
                While powerful individually, our packages are designed to work synergistically. When combined, they create a cohesive and powerful marketing engine that guides customers smoothly from initial awareness all the way to loyal advocacy, amplifying your overall results.
              </p>
            </div>

          </div>
        </div>
        
      </div>
    </SectionContainer>
  );
};

export default WhyPackagesWorkSection; 