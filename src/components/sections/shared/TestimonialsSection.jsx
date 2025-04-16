import React from 'react';
import SectionContainer from '../../ui/SectionContainer';

/**
 * TestimonialsSection - A reusable component for displaying client testimonials
 * Used on both homepage and product pages for consistent styling
 */
const TestimonialsSection = ({ title, description, testimonials, spacingClass = "section-spacing-md" }) => {
  return (
    <SectionContainer className={spacingClass}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-medium text-lg">Client Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">{title}</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8">
              <div className="mb-4 text-6xl text-blue-300 leading-none">
                <span>&#8220;</span>
              </div>
              
              <div className="mb-4 text-yellow-400 flex">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              
              <p className="mb-6 text-gray-700">{testimonial.quote}</p>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default TestimonialsSection; 