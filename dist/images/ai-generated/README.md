# AI-Generated Images for Social Launch Labs

This directory contains AI-generated images used throughout the Social Launch Labs website.

## Directory Structure

- `/hero`: Hero section images (16:9 aspect ratio, 1600x900px recommended)
- `/services`: Service-related images (3:2 aspect ratio, 1200x800px recommended)
- `/packages`: Package-related images (4:3 aspect ratio, 800x600px recommended)
- `/testimonials`: Testimonial profile images (1:1 aspect ratio, 400x400px recommended)

## Generating and Using AI Images

### Step 1: Generate Images

Use one of these recommended AI image generation services:

**For Images:**
- [Midjourney](https://www.midjourney.com/)
- [DALL-E](https://openai.com/dall-e/)
- [Stable Diffusion](https://stability.ai/)
- [Leonardo.ai](https://leonardo.ai/)

**For Videos:**
- [Colossyan Creator](https://www.colossyan.com/)
- [InVideo AI](https://invideo.io/make/ai-video-generator/)
- [Synthesia](https://www.synthesia.io/)
- [HeyGen](https://www.heygen.com/)

### Step 2: Use Consistent Prompts

For consistent branding, use these prompt templates:

**Hero Images:**
```
Professional business social media marketing, modern clean design, confident digital marketing expert with laptop, blue and teal color scheme, 16:9 ratio, high quality, photorealistic
```

**Service Images:**
```
Social media strategy planning session, professionals collaborating, modern office environment, blue accent lighting, high-end corporate setting, 16:9 ratio, photorealistic
```

**Package Images:**
```
Digital marketing results dashboard, professional visualization of social media metrics, growth graphs, modern UI, blue color scheme, 16:9 ratio, photorealistic
```

**Testimonial Images:**
```
Confident professional business person in modern office environment, neutral background for testimonial, headshot style, well-lit professional portrait, 1:1 ratio, photorealistic
```

### Step 3: Save Images

1. Download the generated image
2. Save it to the appropriate folder in this directory
3. Use a descriptive name, e.g., `hero-main.jpg`, `services-strategy.jpg`

### Step 4: Update Component Props

In your component files, update the `aiGeneratedSrc` prop:

```jsx
// Before
const heroContent = {
  // ...other props
  imageSrc: "https://picsum.photos/800/450?random=1",
  aiGeneratedSrc: null
};

// After
const heroContent = {
  // ...other props
  imageSrc: "https://picsum.photos/800/450?random=1",
  aiGeneratedSrc: "/images/ai-generated/hero/hero-main.jpg"
};
```

## Legal Considerations

Ensure you have proper rights to use AI-generated images:

1. Check the terms of service of the AI generation tool you're using
2. Keep records of the prompts used to generate each image
3. Avoid generating images of real people or trademarked content

## Additional Resources

For more detailed guidance, see the `aiImageGeneration.js` utility file in the project's `src/utils/` directory.

## Examples in the Project

The project includes an example of an AI-generated image implementation on the Packages page. The hero section uses a simulated AI-generated image to demonstrate how the `aiGeneratedSrc` prop works in practice.

To see this example:
1. Open `src/pages/PackagesPage.jsx`
2. Note how the `heroContent` object includes both a placeholder image and an AI-generated image path
3. The `EnhancedHeroSection` component is configured to use the AI-generated image when available

This demonstrates the intended workflow for gradually replacing placeholder images with AI-generated content across the site. 