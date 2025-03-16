import React from 'react';
import PropTypes from 'prop-types';
import SectionContainer from '../../ui/SectionContainer';
import FAQItem from '../../ui/FAQItem';

/**
 * FAQ section component for the homepage
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {string} props.description - Section description
 * @param {Array} props.faqs - Array of FAQs
 * @param {string} props.faqs[].question - Question
 * @param {string} props.faqs[].answer - Answer
 * @param {string} props.spacingClass - Class name for section spacing
 */
const FAQSection = ({
  title,
  description,
  faqs,
  spacingClass
}) => {
  return (
    <section className={`bg-gray-50 ${spacingClass || 'section-spacing-lg'}`}>
      <SectionContainer spacing="none">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">
              {title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {description}
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

FAQSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired
    })
  ).isRequired,
  spacingClass: PropTypes.string
};

export default FAQSection; 