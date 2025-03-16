import React from 'react';
import PropTypes from 'prop-types';
import SectionContainer from '../../ui/SectionContainer';
import Card from '../../ui/Card';

/**
 * Process Overview section component for the homepage
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {string} props.description - Section description
 * @param {Array} props.steps - Array of process steps
 * @param {string} props.steps[].number - Step number
 * @param {string} props.steps[].title - Step title
 * @param {string} props.steps[].description - Step description
 */
const ProcessOverviewSection = ({
  title,
  description,
  steps
}) => {
  return (
    <SectionContainer bgColor="bg-white" id="process-overview">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-neutral-800">
          {title}
        </h2>
        <p className="max-w-3xl mx-auto text-neutral-600 text-lg">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <Card
            key={index}
            className="h-full flex flex-col shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="p-6 flex-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-secondary-100 text-secondary-600 mb-4">
                  <span className="text-3xl font-display font-bold">{step.number}</span>
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-neutral-800">
                  {step.title}
                </h3>
                <p className="text-neutral-600">
                  {step.description}
                </p>
              </div>
            </div>
            
            {/* Draw connecting lines between cards, except for the last one */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 w-8 h-0.5 bg-secondary-200 transform translate-x-full">
                <div className="absolute right-0 top-1/2 w-2 h-2 rounded-full bg-secondary-400 transform -translate-y-1/2"></div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};

ProcessOverviewSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ProcessOverviewSection; 