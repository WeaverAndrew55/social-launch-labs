import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Disclosure, Transition } from '@headlessui/react';

/**
 * FAQItem component for displaying expandable question/answer pairs
 * 
 * @param {Object} props - Component props
 * @param {string} props.question - Question text
 * @param {string} props.answer - Answer text
 * @param {boolean} [props.isOpen=false] - Initial open state
 * @param {Function} [props.onClick] - Function to call when toggling
 * @param {number} [props.index] - Index for tracking
 */
const FAQItem = ({
  question,
  answer,
  isOpen = false,
  onClick,
  index,
  ...rest
}) => {
  const [isOpenState, setIsOpenState] = useState(isOpen);
  
  const handleToggle = () => {
    const newState = !isOpenState;
    setIsOpenState(newState);
    if (onClick) {
      onClick(index, newState);
    }
  };
  
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl border border-blue-100/50 shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md" {...rest}>
      <Disclosure defaultOpen={isOpen}>
        {({ open }) => (
          <>
            <Disclosure.Button 
              className="flex w-full justify-between items-center text-left px-6 py-5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={handleToggle}
            >
              <span className="font-semibold text-lg text-gray-900 pr-6">{question}</span>
              <div className={`flex-shrink-0 rounded-full p-2 transition-colors duration-200 ${open ? 'bg-blue-100 text-blue-700' : 'text-gray-400 hover:text-gray-500'}`}>
                <svg 
                  className={`w-5 h-5 transform transition-transform duration-300 ${open ? 'rotate-180' : ''}`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </Disclosure.Button>
            
            <Transition
              enter="transition duration-200 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-150 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="px-6 pb-6">
                <div className="prose prose-blue max-w-none">
                  <p className="text-gray-700 leading-relaxed">{answer}</p>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  index: PropTypes.number
};

export default FAQItem; 