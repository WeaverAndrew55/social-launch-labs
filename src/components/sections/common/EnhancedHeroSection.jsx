import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AIGeneratedImage from '../../ui/AIGeneratedImage';

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
 * @param {string} [props.aiGeneratedSrc] - Optional AI-generated image/video path
 * @param {string} [props.imageAlt] - Optional alt text for the image
 * @param {React.ReactNode} [props.children] - Optional children to render in the right column instead of video/image
 * @param {boolean} [props.reversed=false] - Whether to reverse the layout (content on right, media on left)
 * @param {boolean} [props.showAiInstructions=false] - Whether to show AI generation instructions (dev only)
 */
const EnhancedHeroSection = ({
  title,
  description,
  primaryCta,
  secondaryCta,
  videoSrc,
  imageSrc,
  aiGeneratedSrc,
  imageAlt = "Hero image",
  children,
  reversed = false,
  showAiInstructions = process.env.NODE_ENV === 'development'
}) => {
  const isVideo = !!videoSrc;
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-28 md:py-32 relative z-10">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${reversed ? 'md:flex-row-reverse' : ''}`}>
          {/* Text Content */}
          <div className="text-gray-800">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-blue-600">
              {title}
            </h1>
            <p className="text-xl mb-8 text-gray-600">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to={primaryCta.link} 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
              >
                {primaryCta.text}
              </Link>
              
              {secondaryCta && (
                <Link 
                  to={secondaryCta.link} 
                  className="inline-block bg-transparent hover:bg-blue-50 text-blue-600 border border-blue-300 font-medium py-3 px-6 rounded-md transition-colors duration-300"
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
            <AIGeneratedImage
              placeholderSrc={"https://placehold.co/800x450/eef4ff/3b82f6?text=Strategic+Service+Packages&font=playfair-display"}
              alt={imageAlt}
              aiSrc={aiGeneratedSrc}
              isVideo={isVideo}
              className="w-full aspect-video shadow-xl rounded-xl"
              showInstructions={showAiInstructions}
            />
          )}
        </div>
      </div>
      
      {/* Background shapes/effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
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
  aiGeneratedSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  children: PropTypes.node,
  reversed: PropTypes.bool,
  showAiInstructions: PropTypes.bool
};

export default EnhancedHeroSection; 