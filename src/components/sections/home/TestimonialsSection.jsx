import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SectionContainer from '../../ui/SectionContainer';
import TestimonialCard from '../../ui/TestimonialCard';

/**
 * Testimonials section component for the homepage
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {string} props.subtitle - Section subtitle
 * @param {string} props.description - Section description
 * @param {Array} props.testimonials - Array of testimonials
 * @param {string} props.spacingClass - Class name for section spacing
 */
const TestimonialsSection = ({
  title,
  subtitle = "Client Success Stories",
  description,
  testimonials,
  spacingClass
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  // Autoplay functionality
  useEffect(() => {
    if (!autoplayEnabled) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex, autoplayEnabled]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplayEnabled(false);
  const handleMouseLeave = () => setAutoplayEnabled(true);

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
    <section className={`bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden ${spacingClass || 'section-spacing-lg'}`}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/3 translate-y-1/2"></div>
      
      <SectionContainer spacing="none">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-4">
            {subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900 leading-tight">
            {title}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            {description}
          </p>
        </div>

        {/* Desktop layout: Grid for larger screens */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              title={testimonial.title}
              image={testimonial.image || `https://WeaverAndrew55.github.io/SLL-Images/assets/testimonials/testimonial-${index + 1}.jpg`}
              rating={testimonial.rating || 5}
            />
          ))}
        </div>

        {/* Tablet layout: 2-column grid */}
        <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              title={testimonial.title}
              image={testimonial.image || `https://WeaverAndrew55.github.io/SLL-Images/assets/testimonials/testimonial-${index + 1}.jpg`}
              rating={testimonial.rating || 5}
            />
          ))}
        </div>

        {/* Mobile: Carousel with one testimonial at a time */}
        <div 
          className="md:hidden" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative px-4">
            <div className="mb-6 transition-opacity duration-300">
              <TestimonialCard
                quote={testimonials[activeIndex].quote}
                author={testimonials[activeIndex].author}
                title={testimonials[activeIndex].title}
                image={testimonials[activeIndex].image || `https://WeaverAndrew55.github.io/SLL-Images/assets/testimonials/testimonial-${activeIndex + 1}.jpg`}
                rating={testimonials[activeIndex].rating || 5}
              />
            </div>
            
            <div className="flex justify-between items-center mt-8">
              <button 
                onClick={handlePrev}
                className="p-3 rounded-full bg-white shadow-md hover:bg-blue-50 transition-colors border border-gray-100 text-blue-600"
                aria-label="Previous testimonial"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={handleNext}
                className="p-3 rounded-full bg-white shadow-md hover:bg-blue-50 transition-colors border border-gray-100 text-blue-600"
                aria-label="Next testimonial"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Social proof metrics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <p className="text-3xl font-bold text-blue-600 mb-2">300+</p>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <p className="text-3xl font-bold text-blue-600 mb-2">98%</p>
            <p className="text-gray-600">Client Retention</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <p className="text-3xl font-bold text-blue-600 mb-2">43%</p>
            <p className="text-gray-600">Avg. Engagement Increase</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <p className="text-3xl font-bold text-blue-600 mb-2">4.9</p>
            <p className="text-gray-600">Average Rating</p>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

TestimonialsSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      title: PropTypes.string,
      image: PropTypes.string,
      rating: PropTypes.number
    })
  ).isRequired,
  spacingClass: PropTypes.string
};

export default TestimonialsSection; 