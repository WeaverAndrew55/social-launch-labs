import React from 'react';

/**
 * Why Choose Us section for the Conversion Booster package
 * Highlights the company's unique advantages and differentiators
 */
const WhyChooseUsSection = () => {
  return (
    <section className="section-spacing-md bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Social Launch Labs</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto"></div>
            <p className="mt-6 text-xl text-gray-700">
              What makes our approach to conversion optimization different
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              {/* Advantage 1 */}
              <div className="mb-10">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-100">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Data-Driven Approach</h3>
                    <p className="text-gray-700">
                      Every recommendation we make is backed by research, analytics, and proven conversion psychology principles. We don't guess—we test and measure everything.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Advantage 2 */}
              <div className="mb-10">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-100">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Customer-Centric Focus</h3>
                    <p className="text-gray-700">
                      We deeply understand your customers' needs, pain points, and decision-making processes to create conversion content that genuinely resonates with them.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Advantage 3 */}
              <div>
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-100">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
                    <p className="text-gray-700">
                      Our conversion strategies have generated millions in additional revenue for our clients across various industries, with documented success stories and measurable ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              {/* Advantage 4 */}
              <div className="mb-10">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-100">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Customized Solutions</h3>
                    <p className="text-gray-700">
                      No cookie-cutter approaches here. We create tailored conversion strategies that align with your unique business model, audience, and goals.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Advantage 5 */}
              <div className="mb-10">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-100">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Messaging</h3>
                    <p className="text-gray-700">
                      Our team includes experienced copywriters, video producers, and marketing strategists who know how to craft persuasive messages that drive action.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Advantage 6 */}
              <div>
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-100">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">End-to-End Implementation</h3>
                    <p className="text-gray-700">
                      We don't just provide recommendations—we handle the entire implementation process, from strategy development to content creation to technical deployment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-gray-50 rounded-xl p-8 relative">
                <div className="absolute -top-6 left-8">
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-gray-100 overflow-hidden shadow-md">
                    <img src="/images/testimonials/client1.jpg" alt="Client" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="pt-6">
                  <svg className="w-10 h-10 text-green-200 mb-4" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z"></path>
                  </svg>
                  <p className="text-gray-700 mb-4">
                    "Social Launch Labs completely transformed our conversion process. Their strategic approach and content creation helped us increase our conversion rate by 32% in just 45 days. The ROI has been incredible."
                  </p>
                  <div>
                    <div className="font-bold text-gray-900">Sarah Johnson</div>
                    <div className="text-sm text-gray-600">Marketing Director, TechSolutions Inc.</div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-gray-50 rounded-xl p-8 relative">
                <div className="absolute -top-6 left-8">
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-gray-100 overflow-hidden shadow-md">
                    <img src="/images/testimonials/client2.jpg" alt="Client" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="pt-6">
                  <svg className="w-10 h-10 text-green-200 mb-4" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z"></path>
                  </svg>
                  <p className="text-gray-700 mb-4">
                    "Working with the team at Social Launch Labs has been a game-changer for our ecommerce business. Their conversion-focused content has helped us double our sales without increasing our ad spend. I highly recommend them."
                  </p>
                  <div>
                    <div className="font-bold text-gray-900">Michael Williams</div>
                    <div className="text-sm text-gray-600">Founder, EcoLife Products</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Brands/Clients */}
          <div className="mt-20 text-center">
            <h3 className="text-lg font-medium text-gray-700 mb-8">Trusted by innovative companies</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                <img src="/images/clients/client1.svg" alt="Client Logo" className="h-8 mx-auto" />
              </div>
              <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                <img src="/images/clients/client2.svg" alt="Client Logo" className="h-8 mx-auto" />
              </div>
              <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                <img src="/images/clients/client3.svg" alt="Client Logo" className="h-8 mx-auto" />
              </div>
              <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                <img src="/images/clients/client4.svg" alt="Client Logo" className="h-8 mx-auto" />
              </div>
              <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                <img src="/images/clients/client5.svg" alt="Client Logo" className="h-8 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection; 