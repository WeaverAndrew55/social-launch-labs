import React from 'react';

/**
 * WhyWorkWithUsSection component for the Services page
 * Highlights the advantages of working with Social Launch Labs
 */
const WhyWorkWithUsSection = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Our Advantages
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Work With Social Launch Labs?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choosing the right partner for your content is a big decision. Here's what sets Social Launch Labs apart and why dozens of businesses trust us to elevate their marketing.
            </p>
          </div>

          {/* Why Work With Us Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Feature 1: Efficiency */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="bg-blue-100 rounded-2xl p-4 text-blue-600">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Efficiency Without Cutting Corners</h3>
                  <p className="text-gray-600 mb-4">
                    We provide a streamlined, high-quality content creation process that delivers results faster – without the long, bloated production cycles you might get elsewhere.
                  </p>
                  <p className="text-gray-600">
                    Our efficient approach saves you time while ensuring every video meets our strict quality standards.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Feature 2: Authority-First */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="bg-blue-100 rounded-2xl p-4 text-blue-600">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Authority-First Content Creation</h3>
                  <p className="text-gray-600 mb-4">
                    Everything we create is aligned with your business growth objectives. We go beyond making "just another video" by designing content to build your credibility and position you as a leader in your industry.
                  </p>
                  <p className="text-gray-600">
                    In short, we focus on content that not only looks good, but also strengthens trust with your audience for the long run.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Feature 3: AI + Human */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="bg-blue-100 rounded-2xl p-4 text-blue-600">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">The AI + Human Expertise Advantage</h3>
                  <p className="text-gray-600 mb-4">
                    Our team blends cutting-edge AI tools with human creativity at every step. This means you benefit from data-driven optimizations (for things like timing, distribution, and SEO) and the storytelling finesse that only experienced creators can provide.
                  </p>
                  <p className="text-gray-600">
                    The result is high-impact content produced efficiently, without losing the personal touch.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Feature 4: Reliable Delivery */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="bg-blue-100 rounded-2xl p-4 text-blue-600">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Proven & Reliable Delivery</h3>
                  <p className="text-gray-600 mb-4">
                    Unlike juggling freelancers or DIY solutions that can be hit-or-miss, we have a proven system for delivering high-quality, scalable content on time, every time.
                  </p>
                  <p className="text-gray-600">
                    From day one, you'll notice our professionalism and attention to detail. We pride ourselves on being a reliable long-term partner invested in your success – when you win, we win too.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md relative my-16">
            <div className="absolute -top-5 -left-5 bg-blue-600 text-white p-4 rounded-xl">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            <div className="text-gray-600 text-lg italic mb-6 pt-6">
              "Social Launch Labs transformed our content strategy completely. Their team delivered high-quality videos that not only look professional but actually drive results. The best part is how seamless the process was – they handled everything while we focused on running our business."
            </div>
            <div className="flex items-center">
              <img src="https://WeaverAndrew55.github.io/SLL-Images/assets/Testimonials/Testimonial-1.png" alt="Sarah Johnson" className="w-14 h-14 rounded-full mr-4 object-cover" />
              <div>
                <p className="font-bold text-gray-900">Sarah Johnson</p>
                <p className="text-gray-600 text-sm">CEO, GrowthWave Solutions</p>
              </div>
            </div>
          </div>
          
          {/* Proven Process Overview */}
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Proven Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-blue-600 text-xl font-bold">1</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Strategy</h4>
                <p className="text-sm text-gray-600">We develop a strategic approach tailored to your business goals</p>
              </div>
              <div className="text-center p-4">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-blue-600 text-xl font-bold">2</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Production</h4>
                <p className="text-sm text-gray-600">Our team creates high-quality content efficiently</p>
              </div>
              <div className="text-center p-4">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-blue-600 text-xl font-bold">3</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Optimization</h4>
                <p className="text-sm text-gray-600">We refine the content to maximize impact and performance</p>
              </div>
              <div className="text-center p-4">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-blue-600 text-xl font-bold">4</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Results</h4>
                <p className="text-sm text-gray-600">You get content that builds authority and drives business growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUsSection; 