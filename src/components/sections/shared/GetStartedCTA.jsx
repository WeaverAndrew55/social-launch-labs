import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SectionContainer from '../../ui/SectionContainer';

/**
 * GetStartedCTA - A reusable call-to-action section for prompting users to take action
 * Can be used across different pages with customizable content and styling
 * Matches the exact design of the FinalCTASection in the FAQ component
 */
const GetStartedCTA = ({
  badge = "Ready to Get Started?",
  title = "Transform Your Video Marketing Strategy Today",
  description = "Join successful businesses who have elevated their brand presence and consistently generate quality leads through strategic video content.",
  buttonText = "Book Your Free Call",
  buttonLink = "/contact",
  spacingClass = "py-16",
  transparentBg = true
}) => {
  // Trust indicators with icons
  const trustIndicators = [
    {
      text: "No-Risk Consultation",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      )
    },
    {
      text: "Satisfaction Guaranteed",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      )
    },
    {
      text: "Quick Implementation",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      )
    }
  ];

  return (
    <SectionContainer className={spacingClass} transparentBg={transparentBg}>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Background Design */}
          <div className="absolute inset-0 rounded-2xl bg-[#E8F0FF]"></div>
          
          {/* Content Container */}
          <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl border border-[#155DFC]/10 p-12 text-center">
            <div className="inline-block px-4 py-1 bg-[#7394D3]/20 text-[#155DFC] text-sm font-medium rounded-full mb-6">
              {badge}
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-[#1E293C] mb-6">
              {title}
            </h3>
            
            <p className="text-lg text-[#333945] max-w-2xl mx-auto mb-8">
              {description}
            </p>
            
            <div className="flex justify-center">
              <Link
                to={buttonLink}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#155DFC] text-white font-semibold rounded-xl hover:bg-[#155DFC]/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] min-w-[200px]"
              >
                {buttonText}
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-[#155DFC]/10">
              <div className="flex flex-wrap justify-center items-center gap-6">
                {trustIndicators.map((indicator, index) => (
                  <div key={index} className="flex items-center text-[#333945]">
                    <svg className="w-5 h-5 text-[#155DFC] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {indicator.icon}
                    </svg>
                    <span>{indicator.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

GetStartedCTA.propTypes = {
  badge: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  spacingClass: PropTypes.string,
  transparentBg: PropTypes.bool
};

export default GetStartedCTA; 