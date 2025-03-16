import React from 'react';
import SectionContainer from '../../../ui/SectionContainer';

/**
 * WhyChooseUsSection component for the Authority Builder package
 * Explains why clients should choose Social Launch Labs for authority building
 */
const WhyChooseUsSection = () => {
  return (
    <SectionContainer bgColor="bg-gray-50" className="section-spacing-md">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Work With Social Launch Labs?</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-700">
            Choosing Social Launch Labs means choosing clear, measurable authority growth:
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Benefit 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start">
              <span className="text-3xl text-purple-600 mr-4">🏆</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Authority-Driven Results</h3>
                <p className="text-gray-700">
                  Content strategically designed to build genuine credibility and trust with your audience, positioning you as the clear industry leader.
                </p>
              </div>
            </div>
          </div>
          
          {/* Benefit 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start">
              <span className="text-3xl text-purple-600 mr-4">⚡</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Efficient Delivery</h3>
                <p className="text-gray-700">
                  Professional creativity with streamlined processes for quick delivery without compromising quality, getting your authority-building content to market faster.
                </p>
              </div>
            </div>
          </div>
          
          {/* Benefit 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start">
              <span className="text-3xl text-purple-600 mr-4">🤝</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Guided Collaboration</h3>
                <p className="text-gray-700">
                  Expert support from concept through execution, ensuring your unique expertise shines through in every piece of content we create together.
                </p>
              </div>
            </div>
          </div>
          
          {/* Benefit 4 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start">
              <span className="text-3xl text-purple-600 mr-4">📈</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Clear ROI</h3>
                <p className="text-gray-700">
                  Measurable outcomes including stronger brand positioning, increased referrals, and sustained engagement that translate to long-term business growth.
                </p>
              </div>
            </div>
          </div>
          
          {/* Benefit 5 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow col-span-full">
            <div className="flex items-start">
              <span className="text-3xl text-purple-600 mr-4">🔄</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Consistent Brand Integrity</h3>
                <p className="text-gray-700">
                  Strict adherence to Visual Identity Guidelines across all platforms, ensuring your authority-building content reinforces your brand at every touchpoint.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Success Testimonial */}
        <div className="bg-white rounded-xl shadow-lg p-8 relative mt-16">
          <div className="absolute -top-10 left-10">
            <img src="/images/testimonials/testimonial-avatar.jpg" alt="Client Testimonial" className="w-20 h-20 rounded-full border-4 border-white shadow-lg" />
          </div>
          <div className="pt-8">
            <p className="text-gray-700 italic mb-6">
              "Social Launch Labs completely transformed our market position. Their Authority Builder package helped us establish clear expertise in our industry, and we've seen a 40% increase in high-value client inquiries as a direct result."
            </p>
            <div className="flex items-center">
              <div>
                <p className="font-bold text-gray-900">Sarah Johnson</p>
                <p className="text-gray-600 text-sm">CEO, Insight Partners</p>
              </div>
              <div className="ml-auto flex">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default WhyChooseUsSection; 