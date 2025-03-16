import React, { useState } from 'react';
import SectionContainer from '../../../ui/SectionContainer';

/**
 * FAQSection component - Shows frequently asked questions about the Lead Generation Mastery package
 */
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  
  const faqs = [
    {
      question: "What kind of businesses benefit most from the Lead Generation Mastery package?",
      answer: "This package is ideal for knowledge-based businesses that want to establish authority and generate consistent leads. It works especially well for consultants, professional service firms, B2B companies, and specialized solution providers who have expertise that can be showcased through educational content."
    },
    {
      question: "How long does it take to see results?",
      answer: "Most clients begin to see an increase in engagement and lead flow within the first 4-8 weeks. However, the full impact of an authority-based lead generation strategy typically develops over 3-6 months as your content library grows and your audience becomes more familiar with your expertise. This is why we recommend a minimum 3-month commitment."
    },
    {
      question: "What's the difference between this and just hiring a social media manager?",
      answer: "The Lead Generation Mastery package is specifically designed to convert your expertise into inbound leads, not just create social media content. While a social media manager might focus on engagement and brand awareness, our package includes strategic content planning, professional video production, lead magnet creation, and multi-channel distribution—all aligned with your business goals and focused on generating qualified leads."
    },
    {
      question: "Do I need to appear in the videos myself?",
      answer: "While featuring the actual experts in your business tends to create the strongest connection with your audience, we can work with you to find the right approach. Some clients prefer to share their expertise through interviews, narrated presentations, or animated explainer videos if they're not comfortable on camera. We'll help determine the best format for your specific situation and target audience."
    },
    {
      question: "How much time will I need to commit to this process each month?",
      answer: "We've designed this package to be minimally invasive to your schedule. Typically, clients spend about 2-3 hours per month in planning sessions, content reviews, and video recording. Our team handles all the heavy lifting of planning, production, editing, and distribution, allowing you to focus on your core business."
    },
    {
      question: "What if we already have some content created?",
      answer: "Great! We'll start with an audit of your existing content and identify opportunities to optimize, repurpose, or expand upon what you already have. This can accelerate results as we'll integrate your current assets into the new strategy rather than starting from scratch."
    },
    {
      question: "How do you measure success and report on results?",
      answer: "We track key metrics aligned with your business goals, including content reach, engagement rates, lead generation numbers, conversion rates, and ultimately new business acquired. You'll receive detailed monthly reports showing performance across all channels, with insights and recommendations for optimization."
    },
    {
      question: "Can we customize the package to fit our specific needs?",
      answer: "Absolutely. While the Lead Generation Mastery package provides a comprehensive foundation, we understand that each business has unique needs. During our initial strategy session, we'll identify any specific requirements or preferences you have, and can tailor certain elements of the package accordingly."
    }
  ];
  
  return (
    <SectionContainer bgColor="bg-gray-50" className="section-spacing-md">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-700">
            Common questions about our Lead Generation Mastery package
          </p>
        </div>
        
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <span className="flex-shrink-0 ml-4">
                  <svg 
                    className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'}`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Have More Questions?</h3>
          <p className="text-lg text-gray-700 mb-6">
            We're here to help you understand if the Lead Generation Mastery package is right for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 font-medium"
            >
              Schedule a Free Consultation
            </a>
            <a 
              href="mailto:info@sociallaunchlabs.com" 
              className="inline-block px-8 py-4 text-blue-700 bg-white border border-blue-200 rounded-lg shadow-sm hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 font-medium"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default FAQSection; 