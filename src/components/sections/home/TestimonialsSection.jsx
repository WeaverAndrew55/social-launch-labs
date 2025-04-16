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
      <SectionContainer className="pb-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[#7394D3]/20 text-[#155DFC] text-sm font-medium rounded-full mb-4">
            {subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E293C]">{title}</h2>
          <div className="w-20 h-1 bg-[#155DFC] mx-auto mb-6"></div>
          <p className="text-lg text-[#333945] font-medium">{description}</p>
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