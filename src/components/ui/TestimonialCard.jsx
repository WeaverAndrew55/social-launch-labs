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
 * @param {number} props.rating - Rating out of 5
 */
const TestimonialCard = ({
  quote,
  author,
  title,
  image,
  rating = 5,
  ...rest
}) => {
  // Function to render star rating
  const renderStars = (count) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        className={`w-4 h-4 ${i < count ? 'text-yellow-400' : 'text-gray-300'}`} 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-lg p-8 relative border border-gray-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col"
      {...rest}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-3xl rounded-tr-xl -z-10 opacity-30"></div>
      
      {/* Quote icon */}
      <div className="text-blue-500 mb-6">
        <svg 
          className="h-10 w-10 opacity-70" 
          fill="currentColor" 
          viewBox="0 0 32 32"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>
      
      {/* Rating stars */}
      <div className="flex mb-4">
        {renderStars(rating)}
      </div>
      
      {/* Quote text */}
      <p className="text-gray-700 font-light text-lg leading-relaxed mb-8 flex-grow">{quote}</p>
      
      {/* Author info */}
      <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
        {image && (
          <div className="mr-4">
            <img 
              src={image} 
              alt={author}
              className="h-14 w-14 rounded-full object-cover border-2 border-white shadow-md"
            />
          </div>
        )}
        
        <div>
          <p className="font-bold text-gray-900">{author}</p>
          {title && <p className="text-sm text-blue-600">{title}</p>}
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string,
  image: PropTypes.string,
  rating: PropTypes.number
};

export default TestimonialCard; 