import React from 'react';
import PropTypes from 'prop-types';
import SectionContainer from '../../ui/SectionContainer';
import FAQItem from '../../ui/FAQItem';

/**
 * Service FAQ section component for the Services page
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {string} props.description - Section description
 * @param {Array} props.faqs - Array of FAQs
 */
const ServiceFAQSection = ({
  title = "Services FAQ",
  description = "Answers to common questions about our social media services.",
  faqs = [
    {
      question: "What makes your social media services different from other agencies?",
      answer: "Unlike traditional agencies focused on content creation and posting schedules, we build comprehensive lead generation and conversion systems. Our frameworks integrate strategy, content, audience building, engagement, and conversion optimization into a cohesive approach designed to deliver measurable business results, not just vanity metrics."
    },
    {
      question: "How much time will I need to invest in this process?",
      answer: "We've designed our service model specifically for busy professionals. While your expertise and voice are essential, our frameworks minimize your required time investment. Most clients spend 1-2 hours per week on implementation, primarily capturing their insights which we then transform into strategic content and systems."
    },
    {
      question: "Do you work with businesses in my industry?",
      answer: "Our frameworks are specifically designed for service-based businesses including coaches, consultants, professional service providers, agencies, and specialized service providers. We've worked across numerous industries and adapt our approach to your specific audience dynamics and industry requirements."
    },
    {
      question: "Do you handle the implementation or just provide strategy?",
      answer: "We provide both comprehensive strategy and hands-on implementation guidance. Depending on your selected service level, we either provide detailed frameworks for your team to implement with our guidance, or we can manage the implementation process for you through our done-for-you service options."
    },
    {
      question: "How do you measure success?",
      answer: "We establish clear key performance indicators (KPIs) aligned with your business goals, which typically include quality lead generation, engagement from your target audience, content performance metrics, and ultimately conversion rates and ROI. We provide regular reporting on these metrics and continuously optimize based on performance data."
    }
  ]
}) => {
  return (
    <SectionContainer bgColor="bg-neutral-50" id="service-faq">
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

ServiceFAQSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired
    })
  )
};

export default ServiceFAQSection; 