import React from 'react';
import PropTypes from 'prop-types';

/**
 * AIGeneratedImage component for displaying placeholder images with AI-generation instructions
 * 
 * @param {Object} props - Component props
 * @param {string} props.placeholderSrc - Temporary placeholder image source
 * @param {string} props.alt - Alt text for the image
 * @param {string} [props.aiSrc] - Path to the AI-generated image if available
 * @param {boolean} [props.isVideo=false] - Whether this is a video placeholder
 * @param {string} [props.className] - Additional CSS classes
 * @param {Object} [props.style] - Additional inline styles
 * @param {boolean} [props.showInstructions=false] - Whether to show AI generation instructions
 */
const AIGeneratedImage = ({
  placeholderSrc,
  alt,
  aiSrc,
  isVideo = false,
  className = '',
  style = {},
  showInstructions = false
}) => {
  // Use AI source if available, otherwise use placeholder
  const imageSrc = aiSrc || placeholderSrc;
  
  return (
    <div className={`relative rounded-lg overflow-hidden ${className}`} style={style}>
      {/* Main Image/Video Content */}
      {isVideo && aiSrc ? (
        <video 
          className="w-full h-full object-cover rounded-lg" 
          playsInline
          controls
        >
          <source src={aiSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img 
          src={imageSrc} 
          alt={alt} 
          className="w-full h-full object-cover rounded-lg"
        />
      )}
      
      {/* Placeholder Indicator */}
      {!aiSrc && (
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-sm p-2 text-center">
          AI-generated {isVideo ? 'video' : 'image'} will appear here in production
        </div>
      )}
      
      {/* Play Button for Video */}
      {isVideo && !aiSrc && (
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
      
      {/* AI Generation Instructions (only visible in development) */}
      {showInstructions && !aiSrc && (
        <div className="absolute top-0 left-0 right-0 bg-blue-600 bg-opacity-90 text-white text-sm p-2">
          <p className="font-bold">INSTRUCTIONS FOR AI-GENERATED {isVideo ? 'VIDEO' : 'IMAGE'}:</p>
          <ul className="list-disc pl-5 text-xs mt-1">
            <li>Use services like Midjourney, DALL-E, Stable Diffusion, or Leonardo.ai</li>
            <li>For videos: Colossyan Creator, InVideo AI, Synthesia, or HeyGen</li>
            <li>Download the file and replace the placeholder in public directory</li>
            <li>Update the component props to use the new file path</li>
          </ul>
        </div>
      )}
    </div>
  );
};

AIGeneratedImage.propTypes = {
  placeholderSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  aiSrc: PropTypes.string,
  isVideo: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  showInstructions: PropTypes.bool
};

export default AIGeneratedImage; 