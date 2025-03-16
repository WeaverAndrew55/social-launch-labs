import React, { useState } from 'react';
import SectionContainer from '../../ui/SectionContainer';

/**
 * ContactFAQSection - Displays frequently asked questions about contacting and working with Social Launch Labs
 */
const ContactFAQSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What happens after I submit the contact form?",
      answer: "After you submit the contact form, one of our team members will review your inquiry and respond within 24 hours (during business days). We'll either answer your questions directly or schedule a call to discuss your needs in more detail."
    },
    {
      question: "Do you work with clients outside the US?",
      answer: "Yes! We work with clients globally. While we have physical offices in the US and partner offices in London, our team can collaborate with you remotely from anywhere in the world. We can accommodate different time zones for meetings and calls."
    },
    {
      question: "How long does it take to produce a video?",
      answer: "Production timelines vary depending on the complexity and scope of your project. Typically, our standard projects take 2-4 weeks from kickoff to final delivery. Custom projects may take longer. We'll provide you with a specific timeline during our initial consultation based on your needs."
    },
    {
      question: "What information should I provide in my initial inquiry?",
      answer: "To help us respond most effectively, please include details about your business, the type of content you're interested in creating, your timeline, and any specific goals you have for your video content. The more information you provide, the better we can prepare for our initial conversation."
    },
    {
      question: "Can I see examples of your work before deciding?",
      answer: "Absolutely! During our initial consultation, we'll share relevant examples from our portfolio that align with your business goals and industry. We're happy to provide case studies and testimonials from clients with similar needs."
    },
    {
      question: "What if I'm not sure which package is right for me?",
      answer: "That's completely normal and why we offer free consultations. During our call, we'll discuss your business goals, target audience, and marketing needs to recommend the most appropriate package. You're never obligated to choose a specific package, and we can always customize solutions to fit your requirements."
    }
  ];

  return (
    <SectionContainer bgColor="bg-gray-50" id="contact-faq" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about working with Social Launch Labs.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl overflow-hidden transition-all duration-300 ${
                openFaq === index ? 'shadow-md' : 'shadow-sm'
              }`}
            >
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-blue-600 transform transition-transform duration-300 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openFaq === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Question Prompt */}
        <div className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-100 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Still Have Questions?</h3>
          <p className="text-gray-600 mb-6">
            If you couldn't find what you were looking for, please reach out to us directly.
          </p>
          <a 
            href="#contact-form" 
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-xl text-base font-medium hover:bg-blue-700 transition duration-300"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactFAQSection; 