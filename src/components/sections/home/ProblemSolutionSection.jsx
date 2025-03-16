import React from 'react';
import PropTypes from 'prop-types';
import SectionContainer from '../../ui/SectionContainer';
import Card from '../../ui/Card';

/**
 * Problem and Solution section component for the homepage
 * 
 * @param {Object} props - Component props
 * @param {Object} props.problem - Problem information
 * @param {string} props.problem.title - Problem title
 * @param {string} props.problem.description - Problem description
 * @param {Object} props.solution - Solution information
 * @param {string} props.solution.title - Solution title
 * @param {string} props.solution.description - Solution description
 */
const ProblemSolutionSection = ({
  problem,
  solution
}) => {
  return (
    <SectionContainer bgColor="bg-white" id="problem-solution">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Problem Column */}
        <Card 
          className="h-full flex flex-col shadow-md hover:shadow-lg transition-shadow border-t-4 border-neutral-700"
        >
          <div className="flex-1 p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 mr-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-neutral-700" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-neutral-800">
                {problem.title}
              </h3>
            </div>
            <p className="text-neutral-600">
              {problem.description}
            </p>
          </div>
        </Card>

        {/* Solution Column */}
        <Card 
          className="h-full flex flex-col shadow-md hover:shadow-lg transition-shadow border-t-4 border-primary-600"
        >
          <div className="flex-1 p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 mr-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-primary-600" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-primary-700">
                {solution.title}
              </h3>
            </div>
            <p className="text-neutral-600">
              {solution.description}
            </p>
          </div>
        </Card>
      </div>
    </SectionContainer>
  );
};

ProblemSolutionSection.propTypes = {
  problem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  solution: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default ProblemSolutionSection; 