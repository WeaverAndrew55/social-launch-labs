import React from 'react';

/**
 * OurStorySection component for the About page
 * Displays the company's story and mission
 */
const OurStorySection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-50 opacity-40 -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Story
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">From Challenge to Solution</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              How we transformed the video marketing experience for businesses
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Image Column */}
            <div className="lg:w-5/12 relative">
              <div className="relative">
                <img 
                  src="https://placehold.co/800x600/e6efff/1e40af?text=Our+Story" 
                  alt="The beginning of Social Launch Labs" 
                  className="w-full h-auto rounded-xl shadow-xl transform hover:scale-105 transition duration-500"
                />
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Founded with Purpose</h3>
                      <p className="text-gray-700 text-sm">Creating clarity in content marketing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content Column */}
            <div className="lg:w-7/12">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Businesses struggle with video marketing—unclear messaging, complex production, inconsistent results. We changed that by blending strategic storytelling with proven frameworks, giving you a clear path to authority and measurable growth.
                </p>
                
                <p className="font-medium text-xl text-blue-700">
                  We decided to change that.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  By blending strategic storytelling, human creativity, and advanced content frameworks, we simplified the process. Now, businesses don't just have professional videos—they have a clear path to authority, stronger trust with their audiences, and measurable growth.
                </p>
              </div>
              
              {/* Timeline boxes */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl shadow-md">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">1</div>
                    <h3 className="ml-3 text-lg font-bold text-gray-900">Problem</h3>
                  </div>
                  <p className="text-gray-700">Businesses struggled with ineffective, inconsistent video content</p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl shadow-md">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">2</div>
                    <h3 className="ml-3 text-lg font-bold text-gray-900">Solution</h3>
                  </div>
                  <p className="text-gray-700">Strategic frameworks and simplified production processes</p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl shadow-md">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">3</div>
                    <h3 className="ml-3 text-lg font-bold text-gray-900">Result</h3>
                  </div>
                  <p className="text-gray-700">Measurable growth and increased authority for our clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection; 