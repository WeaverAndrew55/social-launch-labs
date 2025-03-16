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
    <div className="border-b border-neutral-200 py-4" {...rest}>
      <Disclosure defaultOpen={isOpen}>
        {({ open }) => (
          <>
            <Disclosure.Button 
              className="flex w-full justify-between items-center text-left font-medium text-neutral-800 focus:outline-none"
              onClick={handleToggle}
            >
              <span className="font-heading text-lg">{question}</span>
              <span className="ml-6 flex-shrink-0">
                <svg 
                  className={`h-6 w-6 transform transition-transform duration-200 ${open ? 'rotate-180' : ''}`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </Disclosure.Button>
            
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="mt-2 pr-12 text-neutral-600">
                <div className="prose prose-sm max-w-none">
                  {answer}
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