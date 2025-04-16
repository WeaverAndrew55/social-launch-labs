import React from 'react';
import SectionContainer from '../../ui/SectionContainer';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button'; // Keep Button import

// Icons for cards (Keep existing or use placeholders)
const LeadGenIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mb-4 text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>;
const ConversionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mb-4 text-green-600"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /></svg>;
const AuthorityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mb-4 text-purple-600"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>;
// Removed CheckIcon as it's no longer needed for quiz

/**
 * Redesigned Package Selector Section focusing on user goals with a static card layout.
 */
const PackageSelectorSection = ({ transparentBg }) => {

  // Define content for the goal-oriented cards
  const goalCards = [
    {
      icon: <LeadGenIcon />,
      goal: "\"I need more qualified leads\"",
      challenge: "Your website attracts visitors, but they aren't turning into actionable leads or consultations.",
      recommendation: "Our <strong>Lead Generation Mastery</strong> package is designed to fill your pipeline.",
      ctaText: "Explore Lead Gen Package",
      link: "/packages/lead-generation-sales",
      borderColor: "border-blue-200",
      hoverBorderColor: "hover:border-blue-400",
      shadowColor: "hover:shadow-blue-100",
      buttonBg: "bg-blue-600",
      buttonHoverBg: "hover:bg-blue-700",
      buttonFocusRing: "focus:ring-blue-500"
    },
    {
      icon: <ConversionIcon />,
      goal: "\"I need to convert more prospects\"",
      challenge: "You have engagement and traffic, but struggle to turn interested prospects into paying clients.",
      recommendation: "Our <strong>Conversion Booster</strong> package focuses on optimizing your sales funnel.",
      ctaText: "Explore Conversion Package",
      link: "/packages/conversion-booster-sales",
      borderColor: "border-green-200",
      hoverBorderColor: "hover:border-green-400",
      shadowColor: "hover:shadow-green-100",
      buttonBg: "bg-green-600",
      buttonHoverBg: "hover:bg-green-700",
      buttonFocusRing: "focus:ring-green-500"
    },
    {
      icon: <AuthorityIcon />,
      goal: "\"I need to build industry authority\"",
      challenge: "You want to be recognized as the go-to expert, commanding premium pricing and attracting ideal clients.",
      recommendation: "Our <strong>Authority Builder</strong> package establishes your thought leadership.",
      ctaText: "Explore Authority Package",
      link: "/packages/authority-builder-sales",
      borderColor: "border-purple-200",
      hoverBorderColor: "hover:border-purple-400",
      shadowColor: "hover:shadow-purple-100",
      buttonBg: "bg-purple-600",
      buttonHoverBg: "hover:bg-purple-700",
      buttonFocusRing: "focus:ring-purple-500"
    }
  ];

  // Main component render using SectionContainer
  return (
    <SectionContainer
        id="find-match"
        className={`py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 ${transparentBg ? 'bg-transparent' : ''}`}
        width="wide"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase bg-blue-100 text-blue-700 mb-4">
          Find Your Solution
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Which package aligns with your goals?
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 md:mb-16">
          Select the outcome that best matches your current business priority to see how we can help you achieve it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {goalCards.map((card, index) => (
            <div
              key={index}
              className={`
                flex flex-col items-center text-center
                bg-white p-6 md:p-8 rounded-xl shadow-sm border ${card.borderColor}
                transition-all duration-300 ease-in-out transform hover:-translate-y-2 ${card.hoverBorderColor} hover:shadow-lg ${card.shadowColor}
              `}
            >
              {card.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-3 min-h-[3.5rem] flex items-center justify-center">
                {card.goal}
              </h3>
              <p className="text-gray-600 mb-5 flex-grow">
                {card.challenge}
              </p>
              <p className="text-sm text-gray-500 mb-6">
                <span dangerouslySetInnerHTML={{ __html: card.recommendation }} />
              </p>
              <Button
                as={Link}
                to={card.link}
                variant="custom"
                className={`
                  mt-auto w-full inline-flex justify-center items-center 
                  px-6 py-3 border border-transparent 
                  text-base font-medium rounded-md shadow-sm text-white 
                  ${card.buttonBg} ${card.buttonHoverBg} 
                  focus:outline-none focus:ring-2 focus:ring-offset-2 ${card.buttonFocusRing}
                  transition-colors duration-200
                `}
              >
                {card.ctaText}
              </Button>
            </div>
          ))}
        </div>

        {/* Add new paragraph emphasizing synergy */}
        <p className="mt-16 text-center text-gray-500 italic max-w-2xl mx-auto">
          While powerful on their own, these packages are strategically designed to work synergistically, amplifying results across your marketing journey.
        </p>

      </div>
    </SectionContainer>
  );
};

export default PackageSelectorSection;
// Removed all quiz-related state, functions, hooks, and JSX rendering logic.
// Replaced with static card layout.
// Adjusted SectionContainer background and padding.
// Enhanced header text and styling.
// Implemented card grid with icons, goal-based text, recommendations, and CTAs.
// Added hover effects and subtle styling to cards.
// Included link for custom solutions.
// --- Refinements ---
// Adjusted header element sizing/margins.
// Updated recommendation strings to use <strong> tags.
// Dynamically styled card CTA buttons to match card themes. 