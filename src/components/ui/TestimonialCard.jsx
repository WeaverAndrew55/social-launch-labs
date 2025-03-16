import React from 'react';
import PropTypes from 'prop-types';

/**
 * TestimonialCard component for displaying customer testimonials
 * 
 * @param {Object} props - Component props
 * @param {string} props.quote - Testimonial content
 * @param {string} props.author - Author name
 * @param {string} props.title - Author title
 * @param {string} props.image - Author image
 */
const TestimonialCard = ({
  quote,
  author,
  title,
  image,
  ...rest
}) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6 relative"
      {...rest}
    >
      <div className="absolute top-6 left-6 text-primary-200">
        <svg 
          className="h-12 w-12 transform -translate-x-1/2 -translate-y-1/2 opacity-50" 
          fill="currentColor" 
          viewBox="0 0 32 32"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>
      
      <div className="pt-6">
        <p className="text-neutral-700 italic mb-6">{quote}</p>
        
        <div className="flex items-center">
          {image && (
            <div className="mr-4">
              <img 
                src={image} 
                alt={author}
                className="h-12 w-12 rounded-full object-cover"
              />
            </div>
          )}
          
          <div>
            <p className="font-medium text-neutral-800">{author}</p>
            {title && <p className="text-sm text-neutral-500">{title}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string,
  image: PropTypes.string
};

export default TestimonialCard; 