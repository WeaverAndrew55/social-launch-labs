import React from 'react';
import PropTypes from 'prop-types';
import SectionContainer from '../../ui/SectionContainer';
import TestimonialCard from '../../ui/TestimonialCard';

/**
 * Package Testimonials section component for the Packages page
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {string} props.description - Section description
 * @param {Array} props.testimonials - Array of testimonials
 */
const PackageTestimonialsSection = ({
  title = "Results Our Clients Have Achieved",
  description = "Don't just take our word for it. Here's what clients say about our different packages.",
  testimonials = [
    {
      quote: "The Lead Generation Mastery package completely transformed our social media approach. We're now getting 15-20 qualified leads per week compared to just 2-3 before.",
      author: "Rebecca Turner",
      title: "CEO, Wellness Coaching Inc.",
      image: "/images/testimonial-5.jpg",
      package: "Lead Generation Mastery"
    },
    {
      quote: "Our social media was generating interest but not converting. The Conversion Booster package helped us increase our conversion rate by 67% in just three months.",
      author: "James Wilson",
      title: "Director of Marketing, Apex Financial",
      image: "/images/testimonial-6.jpg",
      package: "Conversion Booster"
    },
    {
      quote: "Since implementing the Authority Builder package, I've been featured in industry publications, invited to speak at events, and seen my audience grow exponentially.",
      author: "Melissa Chen",
      title: "Founder, Elite Strategy Partners",
      image: "/images/testimonial-7.jpg",
      package: "Authority Builder"
    }
  ]
}) => {
  return (
    <SectionContainer bgColor="bg-white" id="package-testimonials">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-neutral-800">
          {title}
        </h2>
        <p className="max-w-3xl mx-auto text-neutral-600 text-lg">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="h-full flex">
            <div className="flex flex-col w-full">
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                title={testimonial.title}
                image={testimonial.image}
              />
              <div className="mt-4 text-center">
                <span className="inline-block bg-secondary-100 text-secondary-800 px-4 py-1 rounded-full text-sm font-semibold">
                  {testimonial.package}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

PackageTestimonialsSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      title: PropTypes.string,
      image: PropTypes.string,
      package: PropTypes.string.isRequired
    })
  )
};

export default PackageTestimonialsSection; 