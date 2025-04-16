import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SectionContainer from '../../ui/SectionContainer';
import FinalCTASection from '../../ui/FinalCTASection';

/**
 * Package FAQ section component for the Packages page
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {string} props.description - Section description
 * @param {Array} props.faqs - Array of FAQs
 * @param {boolean} props.transparentBg - Whether the section has a transparent background
 * @param {string} props.spacingClass - Additional class names for the section
 */
const PackageFAQSection = ({
  title,
  description,
  faqs,
  transparentBg = false,
  spacingClass = "section-spacing-md"
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionContainer 
      transparentBg={transparentBg}
      className={`${spacingClass}`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-[#7394D3]/20 text-[#155DFC] text-sm font-medium rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E293C]">{title}</h2>
          <div className="w-20 h-1 bg-[#155DFC] mx-auto mb-6 opacity-20"></div>
          <p className="text-lg text-[#333945] max-w-2xl mx-auto">{description}</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border border-[#7394D3]/10 transition-all duration-200 ${
                openIndex === index ? 'shadow-lg' : 'hover:shadow-md'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#155DFC]/20 rounded-xl"
              >
                <span className="text-lg font-semibold text-[#1E293C] pr-8">{faq.question}</span>
                <span className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-[#155DFC] transition-transform duration-200 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-[#333945] leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA Section */}
        <FinalCTASection className="mt-24" />
      </div>
    </SectionContainer>
  );
};

PackageFAQSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired
    })
  ).isRequired,
  transparentBg: PropTypes.bool,
  spacingClass: PropTypes.string
};

export default PackageFAQSection; 