import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Enhanced Hero Section component that can be used site-wide
 * Based on the design from index3.html
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Main headline
 * @param {string} props.description - Supporting description text
 * @param {Object} props.primaryCta - Primary call-to-action configuration
 * @param {string} props.primaryCta.text - Primary CTA button text
 * @param {string} props.primaryCta.link - Primary CTA button link
 * @param {Object} [props.secondaryCta] - Optional secondary call-to-action configuration
 * @param {string} props.secondaryCta.text - Secondary CTA button text
 * @param {string} props.secondaryCta.link - Secondary CTA button link
 * @param {string} [props.videoSrc] - Optional video source URL
 * @param {string} [props.imageSrc] - Optional image source (used as fallback or placeholder)
 * @param {string} [props.imageAlt] - Optional alt text for the image
 * @param {React.ReactNode} [props.children] - Optional children to render in the right column instead of video/image
 * @param {boolean} [props.reversed=false] - Whether to reverse the layout (content on right, media on left)
 */
const EnhancedHeroSection = ({
  title,
  description,
  primaryCta,
  secondaryCta,
  videoSrc,
  imageSrc,
  imageAlt = "Hero image",
  children,
  reversed = false
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-800">
      <div className="container mx-auto px-4 py-28 md:py-32 relative z-10">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${reversed ? 'md:flex-row-reverse' : ''}`}>
          {/* Text Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {title}
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to={primaryCta.link} 
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
              >
                {primaryCta.text}
              </Link>
              
              {secondaryCta && (
                <Link 
                  to={secondaryCta.link} 
                  className="inline-block bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium py-3 px-6 rounded-md transition-colors duration-300"
                >
                  {secondaryCta.text}
                </Link>
              )}
            </div>
          </div>
          
          {/* Media Content (Video/Image) */}
          {children ? (
            <div className="relative">
              {children}
            </div>
          ) : (
            <div className="relative rounded-lg shadow-xl overflow-hidden">
              {videoSrc ? (
                <video 
                  className="w-full h-full object-cover rounded-lg" 
                  playsInline
                  controls
                >
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : imageSrc ? (
                <img 
                  src={imageSrc} 
                  alt={imageAlt} 
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="bg-neutral-800 w-full aspect-video rounded-lg flex items-center justify-center">
                  <p className="text-neutral-400">Media placeholder</p>
                </div>
              )}
              
              {/* Play Button Overlay (only for videos with image placeholders) */}
              {!videoSrc && imageSrc && (
                <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                  <div className="bg-white bg-opacity-80 hover:bg-opacity-90 transition-all p-4 rounded-full">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-12 w-12 text-primary-700" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Background shapes/effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
    </section>
  );
};

EnhancedHeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  primaryCta: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }).isRequired,
  secondaryCta: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }),
  videoSrc: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  children: PropTypes.node,
  reversed: PropTypes.bool
};

export default EnhancedHeroSection; 