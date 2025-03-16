import React from 'react';
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
  return (
    <section className={`${spacingClass || ''}`}>
      <SectionContainer>
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-3">
            {subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">
            {title}
          </h2>
          <p className="text-lg text-gray-600">
            {description}
          </p>
        </div>

        {/* Desktop & tablet layout: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

        {/* Stats section - simplified */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-5 text-center shadow-sm">
            <p className="text-2xl font-bold text-blue-600 mb-1">300+</p>
            <p className="text-gray-600 text-sm">Happy Clients</p>
          </div>
          
          <div className="bg-white rounded-lg p-5 text-center shadow-sm">
            <p className="text-2xl font-bold text-blue-600 mb-1">98%</p>
            <p className="text-gray-600 text-sm">Client Retention</p>
          </div>
          
          <div className="bg-white rounded-lg p-5 text-center shadow-sm">
            <p className="text-2xl font-bold text-blue-600 mb-1">43%</p>
            <p className="text-gray-600 text-sm">Avg. Engagement Increase</p>
          </div>
          
          <div className="bg-white rounded-lg p-5 text-center shadow-sm">
            <p className="text-2xl font-bold text-blue-600 mb-1">4.9</p>
            <p className="text-gray-600 text-sm">Average Rating</p>
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