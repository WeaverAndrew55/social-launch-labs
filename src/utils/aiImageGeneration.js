/**
 * AI Image Generation Utilities
 * 
 * This file provides guidance and tools for working with AI-generated images in the project.
 */

/**
 * Recommended AI Image Generation Services
 */
export const AIImageServices = {
  images: [
    { name: "Midjourney", url: "https://www.midjourney.com/" },
    { name: "DALL-E", url: "https://openai.com/dall-e/" },
    { name: "Stable Diffusion", url: "https://stability.ai/" },
    { name: "Leonardo.ai", url: "https://leonardo.ai/" }
  ],
  videos: [
    { name: "Colossyan Creator", url: "https://www.colossyan.com/" },
    { name: "InVideo AI", url: "https://invideo.io/make/ai-video-generator/" },
    { name: "Synthesia", url: "https://www.synthesia.io/" },
    { name: "HeyGen", url: "https://www.heygen.com/" }
  ]
};

/**
 * Sample prompts for generating consistent project imagery
 */
export const SamplePrompts = {
  hero: "Professional business social media marketing, modern clean design, confident digital marketing expert with laptop, blue and teal color scheme, 16:9 ratio, high quality, photorealistic",
  services: "Social media strategy planning session, professionals collaborating, modern office environment, blue accent lighting, high-end corporate setting, 16:9 ratio, photorealistic",
  packages: "Digital marketing results dashboard, professional visualization of social media metrics, growth graphs, modern UI, blue color scheme, 16:9 ratio, photorealistic",
  testimonials: "Confident professional business person in modern office environment, neutral background for testimonial, headshot style, well-lit professional portrait, 1:1 ratio, photorealistic"
};

/**
 * Image specifications for different sections
 */
export const ImageSpecifications = {
  hero: {
    width: 1600,
    height: 900,
    format: "jpg",
    quality: "high",
    aspectRatio: "16:9"
  },
  services: {
    width: 1200,
    height: 800,
    format: "jpg",
    quality: "high",
    aspectRatio: "3:2"
  },
  packages: {
    width: 800,
    height: 600,
    format: "jpg",
    quality: "high",
    aspectRatio: "4:3"
  },
  testimonials: {
    width: 400,
    height: 400,
    format: "jpg",
    quality: "high",
    aspectRatio: "1:1"
  }
};

/**
 * Guide for using AI-generated images in the project
 * 
 * 1. Generate images using one of the recommended services
 * 2. Save images to the appropriate public/images/ directory
 * 3. Update the component props to use aiGeneratedSrc instead of placeholders
 * 
 * Example:
 * ```jsx
 * // Before
 * const heroContent = {
 *   // ...other props
 *   imageSrc: "https://picsum.photos/800/450?random=1",
 *   aiGeneratedSrc: null
 * };
 * 
 * // After
 * const heroContent = {
 *   // ...other props
 *   imageSrc: "https://picsum.photos/800/450?random=1",
 *   aiGeneratedSrc: "/images/ai-generated/hero-main.jpg"
 * };
 * ```
 */

/**
 * Checks if the provided path is likely an AI-generated image
 */
export const isAiGeneratedImage = (path) => {
  if (!path) return false;
  
  // Check if the path includes indicators of AI generation
  return (
    path.includes('/ai-generated/') || 
    path.includes('ai-gen') || 
    path.includes('ai_generated')
  );
};

/**
 * Lists all AI-generated images in use in the project
 * This is a placeholder function that would need implementation
 * in a real project, using something like webpack context
 */
export const listAllAiImages = () => {
  console.log("This function would list all AI-generated images in use");
  return [];
};

export default {
  AIImageServices,
  SamplePrompts,
  ImageSpecifications,
  isAiGeneratedImage,
  listAllAiImages
}; 