import React from 'react';
import PropTypes from 'prop-types';
import SectionContainer from '../../ui/SectionContainer';

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
 * @param {string} props.spacingClass - Class name for section spacing
 * @param {boolean} props.transparentBg - Whether the section has a transparent background
 */
const ProblemSolutionSection = ({
  problem,
  solution,
  spacingClass,
  transparentBg = false
}) => {
  return (
    <section className="py-20 relative" id="problem-solution">
      <SectionContainer transparentBg={true}>
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex flex-col items-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#155DFC]/10 text-[#155DFC] mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293C] mb-4">
              Strategic Video Marketing Solutions
            </h2>
            <p className="text-lg text-[#333945]/80 max-w-2xl mx-auto font-normal">
              We transform your challenges into opportunities through our proven video marketing framework
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Main Card */}
          <div className="bg-gradient-to-b from-white/80 to-white/40 backdrop-blur-sm rounded-2xl border border-[#155DFC]/[0.08] overflow-hidden">
            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#155DFC]/[0.08]">
              {/* The Challenge Side */}
              <div className="p-8 lg:pr-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1E293C]">The Challenge</h3>
                </div>

                <p className="text-[#333945]/90 text-base leading-relaxed mb-8">
                  Many businesses struggle with video marketing, facing unclear ROI and inconsistent messaging. Without strategic direction, valuable opportunities are missed and audience engagement suffers.
                </p>

                <div className="grid grid-cols-1 gap-2">
                  {['Inconsistent Content', 'Unclear Strategy', 'Resource Drain', 'Missed Opportunities'].map((issue, i) => (
                    <div key={i} className={`flex items-center gap-3 p-3 ${
                      i === 3 ? 'bg-red-500/10' : 'bg-red-500/[0.03]'
                    } rounded-lg group ${
                      i === 3 ? 'hover:bg-red-500/15' : 'hover:bg-red-500/[0.05]'
                    } transition-all duration-300 ${
                      i === 0 ? 'w-full' : 
                      i === 1 ? 'w-[90%]' : 
                      i === 2 ? 'w-[80%]' : 
                      'w-[70%]'
                    }`}>
                      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {i === 3 ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16"></path>
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        )}
                      </svg>
                      <span className="text-[#1E293C] text-sm font-medium group-hover:text-red-500 transition-colors duration-300">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* The Solution Side */}
              <div className="p-8 lg:pl-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1E293C]">Our Solution</h3>
                </div>

                <p className="text-[#333945]/90 text-base leading-relaxed mb-8">
                  Social Launch Labs delivers strategic video marketing through proven frameworks and streamlined production. We handle strategy, scripting, and execution to build authority and drive results.
                </p>

                <div className="grid grid-cols-1 gap-2">
                  {[
                    'Strategic Content Planning',
                    'Expert Script Development',
                    'Professional Execution',
                    'Measurable Business Growth'
                  ].map((benefit, i) => (
                    <div key={i} className={`flex items-center gap-3 p-3 ${
                      i === 3 ? 'bg-green-500/10' : 'bg-green-500/[0.03]'
                    } rounded-lg group ${
                      i === 3 ? 'hover:bg-green-500/15' : 'hover:bg-green-500/[0.05]'
                    } transition-all duration-300 ${
                      i === 0 ? 'w-[70%]' : 
                      i === 1 ? 'w-[80%]' : 
                      i === 2 ? 'w-[90%]' : 
                      'w-full'
                    }`}>
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {i === 3 ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16"></path>
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7"></path>
                        )}
                      </svg>
                      <span className="text-[#1E293C] text-sm font-medium group-hover:text-green-500 transition-colors duration-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
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
  }).isRequired,
  spacingClass: PropTypes.string,
  transparentBg: PropTypes.bool
};

export default ProblemSolutionSection; 