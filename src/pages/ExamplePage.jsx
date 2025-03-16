import React from 'react';
import Layout from '../components/layout/Layout';
import EnhancedHeroSection from '../components/sections/common/EnhancedHeroSection';
import SectionContainer from '../components/ui/SectionContainer';

/**
 * Example page showcasing the enhanced hero section
 */
const ExamplePage = () => {
  return (
    <Layout>
      {/* Example usage of the enhanced hero section */}
      <EnhancedHeroSection
        title="Content That Connects, Converts & Scales Your Business"
        description="We create professional video content that builds authority, drives leads, and increases conversions - without you spending hours on production."
        primaryCta={{
          text: "Book Free Consultation",
          link: "/contact"
        }}
        secondaryCta={{
          text: "View All Packages",
          link: "/packages"
        }}
        imageSrc="https://picsum.photos/800/450?random=1"
        imageAlt="Professional video content"
      />
      
      {/* Additional content section */}
      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-4 text-center">
            Example Page Content
          </h2>
          <p className="text-lg text-neutral-700 mb-6">
            This page demonstrates the usage of the new EnhancedHeroSection component that was converted from the index3.html design. The component is highly customizable and can be used throughout the site with different content, colors, and layouts.
          </p>
          <p className="text-lg text-neutral-700">
            The component supports various configurations including:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 mb-6 text-neutral-700">
            <li>Custom titles and descriptions</li>
            <li>Primary and optional secondary CTA buttons</li>
            <li>Video content with fallback images</li>
            <li>Option to pass custom content via children props</li>
            <li>Layout reversal (content on right, media on left)</li>
            <li>Responsive design for all screen sizes</li>
          </ul>
        </div>
      </SectionContainer>
      
      {/* Example with reversed layout */}
      <SectionContainer bgColor="bg-neutral-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Another Example: Reversed Layout
          </h2>
          <p className="text-lg text-neutral-700 mb-6 text-center">
            Here's how to use the component with a reversed layout:
          </p>
          <div className="p-4 bg-neutral-200 rounded-lg mb-8">
            <pre className="text-sm overflow-x-auto p-4">
{`<EnhancedHeroSection
  title="Your Compelling Headline Here"
  description="Your detailed description that explains the value proposition."
  primaryCta={{
    text: "Primary Action",
    link: "/primary-link"
  }}
  secondaryCta={{
    text: "Secondary Action",
    link: "/secondary-link"
  }}
  imageSrc="/your-image-path.jpg"
  reversed={true}
/>`}
            </pre>
          </div>
        </div>
      </SectionContainer>
    </Layout>
  );
};

export default ExamplePage; 