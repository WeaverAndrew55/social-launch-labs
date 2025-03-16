import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SectionContainer from '../../ui/SectionContainer';
import TestimonialCard from '../../ui/TestimonialCard';

/**
 * Testimonials section component for the homepage
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {string} props.description - Section description
 * @param {Array} props.testimonials - Array of testimonials
 */
const TestimonialsSection = ({
  title,
  description,
  testimonials
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <SectionContainer bgColor="bg-neutral-50" id="testimonials">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-neutral-800">
          {title}
        </h2>
        <p className="max-w-3xl mx-auto text-neutral-600 text-lg">
          {description}
        </p>
      </div>

      {/* Desktop: Show multiple testimonials in a grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="h-full flex">
            <TestimonialCard
              quote={testimonial.quote}
              author={testimonial.author}
              title={testimonial.title}
              image={testimonial.image || `https://WeaverAndrew55.github.io/SLL-Images/assets/testimonials/testimonial-${index + 1}.jpg`}
            />
          </div>
        ))}
      </div>

      {/* Mobile: Show one testimonial at a time with navigation */}
      <div className="md:hidden">
        <div className="relative px-4">
          <div className="mb-4">
            <TestimonialCard
              quote={testimonials[activeIndex].quote}
              author={testimonials[activeIndex].author}
              title={testimonials[activeIndex].title}
              image={testimonials[activeIndex].image || `https://WeaverAndrew55.github.io/SLL-Images/assets/testimonials/testimonial-${activeIndex + 1}.jpg`}
            />
          </div>
          
          <div className="flex justify-between items-center mt-4">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full bg-white shadow-md hover:bg-primary-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full ${
                    index === activeIndex ? 'bg-primary-600' : 'bg-neutral-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-white shadow-md hover:bg-primary-50 transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

TestimonialsSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      title: PropTypes.string,
      image: PropTypes.string
    })
  ).isRequired
};

export default TestimonialsSection; 