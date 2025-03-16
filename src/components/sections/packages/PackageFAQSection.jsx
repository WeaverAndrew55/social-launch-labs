import React from 'react';
import PropTypes from 'prop-types';
import SectionContainer from '../../ui/SectionContainer';
import FAQItem from '../../ui/FAQItem';

/**
 * Package FAQ section component for the Packages page
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {string} props.description - Section description
 * @param {Array} props.faqs - Array of FAQs
 */
const PackageFAQSection = ({
  title = "Frequently Asked Questions",
  description = "Get answers to common questions about our packages and how they work.",
  faqs = [
    {
      question: "How do I know which package is right for my business?",
      answer: "We recommend choosing a package based on your current stage and goals. The Lead Generation Mastery is ideal if you're focusing on building your audience and lead base. The Conversion Booster is perfect if you already have traffic but struggle with conversions. The Authority Builder is best for established businesses ready to become industry leaders."
    },
    {
      question: "Do your packages require a long-term commitment?",
      answer: "Our packages are structured as month-to-month services with a recommended minimum 3-month commitment to see meaningful results. We don't lock you into long-term contracts because we're confident in our results. Most clients choose to continue working with us after seeing the initial results."
    },
    {
      question: "Can I upgrade or downgrade my package later?",
      answer: "Absolutely! We understand that your business needs evolve. You can upgrade to a more comprehensive package at any time. If you need to downgrade, you can do so with 30 days' notice. We'll help ensure a smooth transition either way."
    },
    {
      question: "Do you offer custom packages beyond what's listed?",
      answer: "Yes, we can create custom packages for businesses with unique needs or those that might benefit from elements across different packages. Schedule a consultation call, and we'll discuss your specific requirements and build a tailored solution."
    },
    {
      question: "What kind of results can I expect and how quickly?",
      answer: "Results vary based on your starting point, industry, and package selected. Generally, clients begin seeing improvements in engagement and lead quality within the first month. More substantial results like consistent lead generation typically develop in 2-3 months, while authority building is a longer-term strategy showing significant results in 4-6 months."
    }
  ]
}) => {
  return (
    <SectionContainer bgColor="bg-neutral-50" id="package-faq">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-neutral-800">
          {title}
        </h2>
        <p className="max-w-3xl mx-auto text-neutral-600 text-lg">
          {description}
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

PackageFAQSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired
    })
  )
};

export default PackageFAQSection; 