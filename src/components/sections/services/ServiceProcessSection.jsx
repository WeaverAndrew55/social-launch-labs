import React from 'react';
import PropTypes from 'prop-types';
import SectionContainer from '../../ui/SectionContainer';

/**
 * Service Process section component for the Services page
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {string} props.description - Section description
 * @param {Array} props.steps - Array of process steps
 * @param {string} props.steps[].title - Step title
 * @param {string} props.steps[].description - Step description
 * @param {number} props.steps[].number - Step number
 */
const ServiceProcessSection = ({
  title = "Our Proven Process",
  description = "We follow a structured approach to transform your social media from a time-sink to a client-attraction system.",
  steps = [
    {
      number: 1,
      title: "Discovery & Analysis",
      description: "We dive deep into your business goals, ideal client profiles, competitive landscape, and current social media performance to establish a clear baseline and direction."
    },
    {
      number: 2,
      title: "Strategic Planning",
      description: "Based on our findings, we develop a customized social media strategy, selecting the optimal platforms, content types, and lead generation approaches for your specific business."
    },
    {
      number: 3,
      title: "Framework Implementation",
      description: "We build and implement your tailored frameworks for content, lead generation, and conversion, setting up all necessary systems and processes."
    },
    {
      number: 4,
      title: "Optimization & Measurement",
      description: "Using data-driven insights, we continuously refine your approach, A/B test elements, and scale what's working to maximize your ROI and results."
    },
    {
      number: 5,
      title: "Strategic Growth",
      description: "Once core systems are performing well, we identify opportunities to expand your reach, authority, and conversion capacity through advanced tactics and partnerships."
    }
  ]
}) => {
  return (
    <SectionContainer bgColor="bg-neutral-50" id="service-process">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-neutral-800">
          {title}
        </h2>
        <p className="max-w-3xl mx-auto text-neutral-600 text-lg">
          {description}
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Process step */}
            <div className="flex mb-12 md:mb-16 relative z-10">
              {/* Step number circle */}
              <div className="w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                {step.number}
              </div>
              
              {/* Step content */}
              <div className="ml-6">
                <h3 className="text-2xl font-display font-bold mb-2 text-neutral-800">
                  {step.title}
                </h3>
                <p className="text-neutral-600">
                  {step.description}
                </p>
              </div>
            </div>
            
            {/* Connector line between steps (except for the last one) */}
            {index < steps.length - 1 && (
              <div className="absolute top-14 left-7 w-0.5 h-12 bg-primary-200 -ml-0.5"></div>
            )}
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

ServiceProcessSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  )
};

export default ServiceProcessSection; 