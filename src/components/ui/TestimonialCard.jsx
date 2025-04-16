import React from 'react';
import PropTypes from 'prop-types';

/**
 * Testimonial Card component for displaying customer testimonials
 */
const TestimonialCard = ({
  quote,
  author,
  title,
  company,
  avatarSrc,
  className = '',
  rating
}) => {
  // Generate stars for rating display
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`star-${i}`} className="w-5 h-5 text-[#155DFC]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <svg key="half-star" className="w-5 h-5 text-[#155DFC]" fill="currentColor" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="halfStarGradient">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#cbd5e1" />
            </linearGradient>
          </defs>
          <path fill="url(#halfStarGradient)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    // Add empty stars to reach 5
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-star-${i}`} className="w-5 h-5 text-[#B5BCC9]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    return stars;
  };

  return (
    <div className={`relative flex flex-col h-full bg-white rounded-xl shadow-sm overflow-hidden border border-[#7394D3]/20 p-1 ${className}`}>
      <div className="flex-1 p-6">
        {/* Decorative quote icon */}
        <div className="relative z-10">
          <div className="absolute -top-5 -left-5 w-12 h-12 flex items-center justify-center rounded-full bg-[#7394D3]/20">
            <svg className="w-6 h-6 text-[#155DFC]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.625 1.5c0 1.69-1.337 3.063-3 3.063H3.25v.124c0 3.3 2.673 5.996 6 5.996V12.5c-4.314 0-7.75-3.457-7.75-7.812V1.5h5.125zm9.75 0c0 1.69-1.337 3.063-3 3.063h-.375v.124c0 3.3 2.673 5.996 6 5.996V12.5c-4.314 0-7.75-3.457-7.75-7.812V1.5h5.125z" />
            </svg>
          </div>
        </div>
        
        {/* Rating stars if provided */}
        {rating && (
          <div className="flex items-center mb-3 mt-2">
            {renderStars()}
          </div>
        )}
        
        {/* Testimonial content */}
        <blockquote className="mt-4">
          <p className="text-[#333945] text-lg leading-relaxed font-medium">{quote}</p>
        </blockquote>
      </div>
      
      {/* Author info */}
      <div className="p-6 border-t border-[#7394D3]/20 mt-auto">
        <div className="flex items-center">
          {avatarSrc && (
            <div className="flex-shrink-0 mr-4">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src={avatarSrc}
                alt={`${author} avatar`}
              />
            </div>
          )}
          <div>
            <div className="text-[#1E293C] font-semibold">{author}</div>
            <div className="text-sm text-[#155DFC]">{title}{company && `, ${company}`}</div>
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
  company: PropTypes.string,
  avatarSrc: PropTypes.string,
  className: PropTypes.string,
  rating: PropTypes.number
};

export default TestimonialCard; 