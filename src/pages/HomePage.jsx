import React from 'react';
import Layout from '../components/layout/Layout';
import EnhancedHeroSection from '../components/sections/common/EnhancedHeroSection';
import ProblemSolutionSection from '../components/sections/home/ProblemSolutionSection';
import ClientIndustriesSection from '../components/sections/home/ClientIndustriesSection';
import WhatWeOfferSection from '../components/sections/home/WhatWeOfferSection';
import PackagesCarouselSection from '../components/sections/home/PackagesCarouselSection';
import TestimonialsSection from '../components/sections/home/TestimonialsSection';
import FAQSection from '../components/sections/home/FAQSection';
import CtaSection from '../components/sections/shared/CtaSection';

// Import hero content
const heroContent = {
  title: "Launch Your Digital Presence With Confidence",
  description: "We help service-based businesses build strategic social media frameworks that attract high-quality leads and establish genuine authority.",
  primaryCta: {
    text: "See Our Packages",
    link: "/packages"
  },
  secondaryCta: {
    text: "Learn More",
    link: "#how-it-works"
  },
  imageSrc: "https://picsum.photos/800/450?random=1", // Placeholder image
  aiGeneratedSrc: null // Set to path of AI-generated image when available
};

// Import problem-solution content
const problemSolutionContent = {
  problem: {
    title: "The Challenge",
    description: "Many service providers struggle with inconsistent social media results, wasting time on platforms that don't generate qualified leads or build meaningful authority in their industry."
  },
  solution: {
    title: "Our Solution",
    description: "We've developed a systematic approach that transforms your social media presence from scattered and ineffective to strategic and results-driven, focusing on the metrics that actually matter for your business growth."
  }
};

// Client industries content
const clientIndustriesContent = {
  title: "Who We Work With",
  subtitle: "Our Clients",
  description: "We create content for businesses looking to grow their brand authority, increase conversions, and build customer trust."
};

// Import testimonials content
const testimonialsContent = {
  title: "What Our Clients Say",
  description: "Don't just take our word for it. Here's what our clients have to say about working with Social Launch Labs.",
  testimonials: [
    {
      quote: "Since implementing Social Launch Labs' framework, we've seen a 43% increase in qualified leads from social media, with a much higher conversion rate than our previous efforts.",
      author: "Sarah Johnson",
      title: "Marketing Director, Apex Consulting",
      image: "/images/testimonial-1.jpg"
    },
    {
      quote: "Their systematic approach completely transformed how we view social media. We're now generating consistent leads without the constant guesswork.",
      author: "Michael Chen",
      title: "CEO, Growth Partners Agency",
      image: "/images/testimonial-2.jpg"
    },
    {
      quote: "I finally feel like I have a sustainable social media strategy that actually brings in clients instead of just vanity metrics.",
      author: "Alicia Rodriguez",
      title: "Business Coach & Consultant",
      image: "/images/testimonial-3.jpg"
    }
  ]
};

// Import FAQ content
const faqContent = {
  title: "Frequently Asked Questions",
  description: "Have questions about our services? Find answers to commonly asked questions below.",
  faqs: [
    {
      question: "How long before I start seeing results?",
      answer: "Most clients begin to see measurable improvements within 60-90 days. This includes increased engagement, growing follower counts of qualified prospects, and early lead generation. More substantial results in terms of consistent lead flow and conversions typically develop within 3-6 months, with continued growth beyond that point as we optimize the system based on performance data."
    },
    {
      question: "Do I need to create all the content myself?",
      answer: "No. While your expertise and voice are essential, we handle the heavy lifting of content strategy, creation frameworks, and optimization. We'll work with you to establish efficient processes for capturing your insights, then transform them into engaging social media content. Our goal is to minimize your time investment while maximizing your authority and results."
    },
    {
      question: "Will this work for my industry?",
      answer: "Our frameworks are specifically designed for service-based businesses and have proven effective across numerous industries including coaching, consulting, professional services, agencies, and specialized service providers. During our initial strategy phase, we adapt our approach to your specific industry dynamics and target audience behaviors."
    },
    {
      question: "How is this different from hiring a social media agency?",
      answer: "Unlike traditional agencies that focus primarily on content creation and posting schedule, we build comprehensive lead generation and conversion systems. Our approach integrates strategy, content, audience building, engagement, and conversion optimization into a cohesive framework designed to deliver measurable business results, not just vanity metrics."
    },
    {
      question: "What social media platforms do you work with?",
      answer: "We focus on the platforms where your ideal clients are most active and receptive. For most service-based businesses, this typically includes LinkedIn, Instagram, and/or Twitter, but may also include others depending on your specific audience. Rather than trying to be everywhere, we concentrate efforts on 2-3 platforms for maximum ROI."
    }
  ]
};

// Import CTA content
const ctaContent = {
  title: "Ready to Elevate Your Social Media Strategy?",
  description: "Take your brand's social presence to the next level with our proven strategies tailored specifically for your business goals.",
  primaryButtonText: "Book a Free Strategy Call",
  primaryButtonLink: "/contact",
  secondaryButtonText: "Browse All Services",
  secondaryButtonLink: "/services",
  bgColor: "purple"
};

// Packages Carousel content
const packagesCarouselContent = {
  title: 'Strategically Designed',
  subtitle: 'Our Packages',
  description: "We've developed three signature video marketing packages based on real business outcomes, ensuring you have the right content at each stage of your growth."
};

/**
 * Home page component
 */
const HomePage = () => {
  return (
    <Layout transparentHeader={true}>
      <EnhancedHeroSection
        title={heroContent.title}
        description={heroContent.description}
        primaryCta={heroContent.primaryCta}
        secondaryCta={heroContent.secondaryCta}
        imageSrc={heroContent.imageSrc}
        aiGeneratedSrc={heroContent.aiGeneratedSrc}
      />
      <ProblemSolutionSection
        problem={problemSolutionContent.problem}
        solution={problemSolutionContent.solution}
        spacingClass="section-spacing-lg"
      />
      <ClientIndustriesSection
        title={clientIndustriesContent.title}
        subtitle={clientIndustriesContent.subtitle}
        description={clientIndustriesContent.description}
        spacingClass="section-spacing-lg"
      />
      <WhatWeOfferSection spacingClass="section-spacing-lg" />
      <PackagesCarouselSection
        title={packagesCarouselContent.title}
        subtitle={packagesCarouselContent.subtitle}
        description={packagesCarouselContent.description}
        spacingClass="section-spacing-lg"
      />
      <TestimonialsSection
        title={testimonialsContent.title}
        description={testimonialsContent.description}
        testimonials={testimonialsContent.testimonials}
        spacingClass="section-spacing-lg"
      />
      <FAQSection
        title={faqContent.title}
        description={faqContent.description}
        faqs={faqContent.faqs}
        spacingClass="section-spacing-lg"
      />
      <CtaSection
        title={ctaContent.title}
        description={ctaContent.description}
        primaryButtonText={ctaContent.primaryButtonText}
        primaryButtonLink={ctaContent.primaryButtonLink}
        secondaryButtonText={ctaContent.secondaryButtonText}
        secondaryButtonLink={ctaContent.secondaryButtonLink}
        bgColor={ctaContent.bgColor}
        spacingClass="section-spacing-md"
      />
    </Layout>
  );
};

export default HomePage; 