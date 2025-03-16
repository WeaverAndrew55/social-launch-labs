import React from 'react';
import SectionContainer from '../../ui/SectionContainer';

/**
 * ProcessStepsSection component - explains the step-by-step process for getting started
 */
const ProcessStepsSection = () => {
  return (
    <SectionContainer bgColor="bg-gray-50" className="section-spacing-lg">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 section-header">
          <div className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Next Steps
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How the Process Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Getting started with Social Launch Labs is simple. <span className="font-bold">Follow these three steps to move forward:</span>
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl shadow-md p-8 relative">
            <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">1</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 mt-4">Determine Your Needs</h3>
            <p className="text-gray-700">
              Assess where your business could use the biggest boost. Are you lacking leads, seeing low conversions, or missing a strong presence in your industry? Pinpointing your primary challenge will help you choose the right package.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="bg-white rounded-2xl shadow-md p-8 relative">
            <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">2</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 mt-4">Review the Package Details</h3>
            <p className="text-gray-700">
              Once you know your goal, explore the package that best fits your needs (Lead Generation Mastery, Conversion Booster, or Authority Builder). Review what's included and how it addresses your challenges. You'll see how this service works and the results it can deliver.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="bg-white rounded-2xl shadow-md p-8 relative">
            <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">3</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 mt-4">Book a Consultation</h3>
            <p className="text-gray-700">
              When you're ready to take the next step – or if you want guidance on choosing the ideal package mix – <span className="font-bold">schedule a free consultation</span> with our team. We'll discuss your business goals, answer any questions, and help tailor a solution that achieves the biggest impact for you.
            </p>
          </div>
        </div>
        
        {/* Illustration */}
        <div className="flex justify-center mb-8">
          <img src="https://WeaverAndrew55.github.io/SLL-Images/assets/Services/Services-2.png" alt="Content strategy consultation" className="w-full max-w-2xl h-auto rounded-xl shadow-md" />
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProcessStepsSection; 