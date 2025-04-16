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
 * @param {string} [props.bgColor="blue"] - Color theme for background (blue, purple, amber, or green)
 * @param {string} [props.textColor="blue"] - Color theme for text (blue, purple, amber, or green)
 * @param {string} [props.badge] - Optional badge text to display
 * @param {string} [props.announcementText="🔥 Free Video Strategy Session - Book Your Call Today"] - Optional announcement text
 * @param {string} [props.announcementLink="/contact"] - Optional announcement link
 * @param {boolean} [props.showPlayButton=false] - Whether to show a play button overlay on the image
 * @param {string} [props.customClasses=""] - Optional custom classes to apply to the container
 * @param {Object} [props.overlayInfo] - Optional overlay information for the image
 * @param {string} [props.overlayInfo.text="24hr Response Time"] - Text to display in the overlay
 * @param {string} [props.overlayInfo.icon="info"] - Icon to display (info, check, star, or shield)
 * @param {string} [props.overlayInfo.position="bottom-right"] - Position of the overlay (bottom-right, bottom-left, top-right, or top-left)
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
  showAiInstructions = false,
  bgColor = "blue",
  textColor = "blue",
  badge,
  announcementText = "🔥 Free Video Strategy Session - Book Your Call Today",
  announcementLink = "/contact",
  showPlayButton = false,
  customClasses = "",
  overlayInfo = {
    text: "24hr Response Time",
    icon: "info",
    position: "bottom-right"
  }
}) => {
  const isVideo = !!videoSrc;
  
  // Generate background gradient and text classes based on color theme
  const getBgGradient = () => {
    switch (bgColor) {
      case 'transparent':
        return '';
      case 'purple':
        return 'from-[#7394D3]/20 via-[#7394D3]/10 to-white';
      case 'amber':
        return 'from-amber-50 to-amber-100';
      case 'green':
        return 'from-green-50 to-green-100';
      default: // blue
        return 'from-[#E8F0FF] via-[#F6F9FF] to-white';
    }
  };
  
  const getTextColor = () => {
    switch (textColor) {
      case 'purple':
        return 'text-[#4548c6]';
      case 'amber':
        return 'text-amber-600';
      case 'green':
        return 'text-green-600';
      default: // blue
        return 'text-[#155DFC]';
    }
  };
  
  const getBgShapeColors = () => {
    switch (bgColor) {
      case 'purple':
        return {
          shape1: 'bg-[#7394D3]',
          shape2: 'bg-[#4548c6]',
          shape3: 'bg-[#7394D3]'
        };
      case 'amber':
        return {
          shape1: 'bg-amber-200',
          shape2: 'bg-amber-300',
          shape3: 'bg-amber-200'
        };
      case 'green':
        return {
          shape1: 'bg-green-200',
          shape2: 'bg-green-300',
          shape3: 'bg-green-200'
        };
      default: // blue
        return {
          shape1: 'bg-[#7394D3]',
          shape2: 'bg-[#155DFC]',
          shape3: 'bg-[#7394D3]'
        };
    }
  };
  
  const getOverlayPosition = () => {
    switch (overlayInfo?.position) {
      case 'bottom-left':
        return '-bottom-5 -left-5 rotate-3';
      case 'top-right':
        return '-top-5 -right-5 rotate-3';
      case 'top-left':
        return '-top-5 -left-5 -rotate-3';
      default: // bottom-right
        return '-bottom-5 -right-5 -rotate-3';
    }
  };
  
  const getOverlayIcon = () => {
    switch (overlayInfo?.icon) {
      case 'check':
        return (
          <svg className="w-6 h-6 text-[#155DFC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        );
      case 'star':
        return (
          <svg className="w-6 h-6 text-[#155DFC]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        );
      case 'shield':
        return (
          <svg className="w-6 h-6 text-[#155DFC]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
        );
      default: // info
        return (
          <svg className="w-6 h-6 text-[#155DFC]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
          </svg>
        );
    }
  };
  
  const bgGradient = getBgGradient();
  const textColorClass = getTextColor();
  const bgShapeColors = getBgShapeColors();
  const overlayPosition = getOverlayPosition();
  
  // Calculate the container class based on reversed prop and customClasses prop
  const containerClass = () => {
    let baseClasses = "container mx-auto px-4 relative z-20";
    
    // Add any custom classes
    if (customClasses) {
      baseClasses += ` ${customClasses}`;
    }
    // If no custom classes are provided, use the default padding
    else {
      baseClasses += " py-16 md:py-20 lg:py-24";
    }
    
    return baseClasses;
  };
  
  return (
    <section className={`relative overflow-hidden ${bgColor !== 'transparent' ? `bg-gradient-to-b ${bgGradient}` : ''}`}>
      <div className={containerClass()}>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${reversed ? 'md:flex-row-reverse' : ''}`}>
          {/* Text Content */}
          <div className="text-[#333945]">
            <div className="mb-6">
              {badge && (
                <p className="text-sm uppercase font-semibold text-blue-600 mb-2">
                  {badge}
                </p>
              )}
              <h1 className={`text-4xl md:text-5xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 pb-1`}>
                {title}
              </h1>
            </div>
            <p className="text-lg mb-8 text-[#333945] leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                to={primaryCta.link}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-300/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                {primaryCta.text}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              {secondaryCta && (
                <Link
                  to={secondaryCta.link}
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-blue-100 hover:shadow-blue-100/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  {secondaryCta.text}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
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
            <div className="relative">
              <div className="absolute inset-[-2px] bg-gradient-to-tr from-[#155DFC]/10 to-[#7394D3]/10 rounded-xl blur-[2px] -z-10"></div>
              <AIGeneratedImage
                placeholderSrc={imageSrc || "https://placehold.co/800x450/eef4ff/3b82f6?text=Strategic+Service+Packages&font=playfair-display"}
                alt={imageAlt}
                aiSrc={aiGeneratedSrc}
                isVideo={isVideo}
                className="w-full aspect-video shadow-xl rounded-xl"
                showInstructions={showAiInstructions}
                showPlayButton={showPlayButton}
              />
              
              {/* Image Overlay Element - similar to Contact Us page */}
              {overlayInfo && (
                <div className={`absolute ${overlayPosition} bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg transform border border-[#155DFC]/10`}>
                  <div className="flex items-center space-x-2">
                    {getOverlayIcon()}
                    <span className="font-bold text-[#1E293C]">{overlayInfo.text}</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Announcement Banner - Removed as requested */}
      
      {/* Background shapes/effects - only show if not transparent */}
      {bgColor !== 'transparent' && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className={`absolute -top-24 -left-24 w-96 h-96 ${bgShapeColors.shape1} rounded-full mix-blend-multiply filter blur-[100px] opacity-20`}></div>
          <div className={`absolute -bottom-36 -right-36 w-[30rem] h-[30rem] ${bgShapeColors.shape2} rounded-full mix-blend-multiply filter blur-[120px] opacity-10`}></div>
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] ${bgShapeColors.shape3} rounded-full mix-blend-multiply filter blur-[150px] opacity-5`}></div>
        </div>
      )}
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
  showAiInstructions: PropTypes.bool,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  badge: PropTypes.string,
  announcementText: PropTypes.string,
  announcementLink: PropTypes.string,
  showPlayButton: PropTypes.bool,
  customClasses: PropTypes.string,
  overlayInfo: PropTypes.shape({
    text: PropTypes.string,
    icon: PropTypes.oneOf(['info', 'check', 'star', 'shield']),
    position: PropTypes.oneOf(['bottom-right', 'bottom-left', 'top-right', 'top-left'])
  })
};

export default EnhancedHeroSection; 