import React from 'react';
import PropTypes from 'prop-types';
import SectionContainer from '../../ui/SectionContainer';
import TestimonialCard from '../../ui/TestimonialCard';

/**
 * Service Testimonials section component for the Services page
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {string} props.description - Section description
 * @param {Array} props.testimonials - Array of testimonials
 */
const ServiceTestimonialsSection = ({
  title = "Client Success Stories",
  description = "See how our services have transformed social media results for businesses just like yours.",
  testimonials = [
    {
      quote: "Since implementing Social Launch Labs' framework, we've seen a 43% increase in qualified leads from social media, with a much higher conversion rate than our previous efforts.",
      author: "Sarah Johnson",
      title: "Marketing Director, Apex Consulting",
      image: "/images/testimonial-1.jpg"
    },
    {
      quote: "Their systematic approach completely transformed how we view social media. We're now generating consistent leads without the constant guesswork.",
      author: "Michael Chen",
      title: "CEO, Growth Partners Agency",
      image: "/images/testimonial-2.jpg"
    },
    {
      quote: "I finally feel like I have a sustainable social media strategy that actually brings in clients instead of just vanity metrics. It's been a game-changer for my business growth.",
      author: "Alicia Rodriguez",
      title: "Business Coach & Consultant",
      image: "/images/testimonial-3.jpg"
    },
    {
      quote: "Working with Social Launch Labs has given us a clear roadmap for social media success. Our engagement has tripled and we're consistently getting high-quality leads each week.",
      author: "David Thompson",
      title: "Founder, Elite Financial Advisors",
      image: "/images/testimonial-4.jpg"
    }
  ]
}) => {
  return (
    <SectionContainer bgColor="bg-white" id="service-testimonials">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-neutral-800">
          {title}
        </h2>
        <p className="max-w-3xl mx-auto text-neutral-600 text-lg">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="h-full flex">
            <TestimonialCard
              quote={testimonial.quote}
              author={testimonial.author}
              title={testimonial.title}
              image={testimonial.image}
            />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

ServiceTestimonialsSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      title: PropTypes.string,
      image: PropTypes.string
    })
  )
};

export default ServiceTestimonialsSection; 