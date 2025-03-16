import React from 'react';
import SectionContainer from '../../../ui/SectionContainer';

/**
 * TestimonialsSection component - Shows client testimonials for the Lead Generation Mastery package
 */
const TestimonialsSection = () => {
  return (
    <SectionContainer bgColor="bg-white" className="section-spacing-md">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-700">
            Real results from clients who've transformed their lead generation
          </p>
        </div>
        
        {/* Testimonials */}
        <div className="space-y-10">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-3">
              <div className="md:col-span-1 bg-blue-600 text-white p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
                  <p className="text-blue-100 text-sm">CEO, Financial Advisory Firm</p>
                </div>
                <div className="mt-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-300 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 p-6">
                <div className="flex items-start mb-4">
                  <svg className="w-8 h-8 text-blue-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
                  </svg>
                  <div>
                    <p className="text-gray-700 text-lg mb-4">
                      "The Lead Generation Mastery package completely transformed our approach to client acquisition. Within just two months, we saw a 40% increase in qualified leads coming through our funnel. The professional video content they created positioned us as thought leaders in the financial advisory space, and their strategic distribution ensured we reached the right audience."
                    </p>
                    <p className="text-gray-700">
                      "What impressed me most was how they translated our complex knowledge into accessible, engaging content that resonated with our ideal clients. The ROI has been exceptional."
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-right">
                  <div className="inline-flex items-center justify-center px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    <span>40% increase in qualified leads</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-3">
              <div className="md:col-span-1 bg-blue-600 text-white p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Michael Reeves</h3>
                  <p className="text-blue-100 text-sm">Founder, Tech Solutions Inc.</p>
                </div>
                <div className="mt-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-300 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 p-6">
                <div className="flex items-start mb-4">
                  <svg className="w-8 h-8 text-blue-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
                  </svg>
                  <div>
                    <p className="text-gray-700 text-lg mb-4">
                      "Consistency was always our biggest challenge. We had the knowledge but struggled to create and distribute content regularly. The Lead Generation Mastery package solved this problem completely. Their systematic approach to content creation and strategic distribution has resulted in a steady stream of inbound leads from our target market."
                    </p>
                    <p className="text-gray-700">
                      "The lead magnets they created for us have been particularly effective, with conversion rates of over 30% on our landing pages. I highly recommend this service to any knowledge-based business looking to grow."
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-right">
                  <div className="inline-flex items-center justify-center px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    <span>30% conversion on lead magnets</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-3">
              <div className="md:col-span-1 bg-blue-600 text-white p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Jennifer Torres</h3>
                  <p className="text-blue-100 text-sm">Director, Healthcare Consultancy</p>
                </div>
                <div className="mt-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-300 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 p-6">
                <div className="flex items-start mb-4">
                  <svg className="w-8 h-8 text-blue-400 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
                  </svg>
                  <div>
                    <p className="text-gray-700 text-lg mb-4">
                      "In the healthcare consulting space, establishing authority is critical. The Lead Generation Mastery package helped us cut through the noise and position ourselves as trusted advisors through strategic, educational content."
                    </p>
                    <p className="text-gray-700">
                      "We've doubled our monthly inbound leads and seen a 65% increase in our social media engagement. The combination of professional video content, strategic distribution, and targeted lead magnets has been the perfect formula for our growth. Working with the team has been a seamless experience - they truly understand our business and audience."
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-right">
                  <div className="inline-flex items-center justify-center px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    <span>2x increase in monthly leads</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-12 bg-gray-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Generate More Qualified Leads?</h3>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            Join these successful businesses and transform your expertise into a consistent lead generation machine.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Schedule Your Free Strategy Call
          </a>
          <p className="mt-4 text-sm text-gray-500">No obligations. Discover if this package is right for your business.</p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default TestimonialsSection; 