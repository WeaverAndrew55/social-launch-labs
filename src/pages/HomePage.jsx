import React from 'react';
import Layout from '../components/layout/Layout';
import EnhancedHeroSection from '../components/sections/common/EnhancedHeroSection';
import ProblemSolutionSection from '../components/sections/home/ProblemSolutionSection';
import ClientIndustriesSection from '../components/sections/home/ClientIndustriesSection';
import WhatWeOfferSection from '../components/sections/home/WhatWeOfferSection';
import ProcessOverviewSection from '../components/sections/home/ProcessOverviewSection';
import CoreServicesSection from '../components/sections/home/CoreServicesSection';
import PackagesOverviewSection from '../components/sections/home/PackagesOverviewSection';
import TestimonialsSection from '../components/sections/home/TestimonialsSection';
import FAQSection from '../components/sections/home/FAQSection';
import CTASection from '../components/sections/home/CTASection';

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

// Import process overview content
const processOverviewContent = {
  title: "Our Proven Process",
  description: "We follow a structured approach to transform your social media from a time-sink to a client-attraction system.",
  steps: [
    {
      number: "01",
      title: "Strategic Foundation",
      description: "We analyze your business goals, ideal clients, and competitive landscape to develop a tailored social media strategy."
    },
    {
      number: "02",
      title: "Framework Implementation",
      description: "We build and implement the custom frameworks your business needs for lead generation, conversions, and authority building."
    },
    {
      number: "03",
      title: "Optimization & Scale",
      description: "We continuously refine your approach based on performance data and scale what's working to maximize your ROI."
    }
  ]
};

// Import core services content
const coreServicesContent = {
  title: "Our Core Services",
  description: "Each service is designed to address a specific aspect of social media success for service-based businesses.",
  services: [
    {
      title: "Strategy Development",
      description: "Custom social media strategy aligned with your business goals and target audience.",
      icon: "light-bulb"
    },
    {
      title: "Content Framework",
      description: "Structured content approach that positions you as an authority while driving engagement.",
      icon: "document-text"
    },
    {
      title: "Lead Generation",
      description: "Systems to attract and capture qualified leads from your ideal target market.",
      icon: "users"
    },
    {
      title: "Conversion Optimization",
      description: "Processes to nurture leads and increase your client conversion rate.",
      icon: "chart-bar"
    }
  ]
};

// Import packages overview content
const packagesOverviewContent = {
  title: "Tailored Packages for Your Goals",
  description: "Choose from our carefully crafted packages designed to meet your specific business needs.",
  packages: [
    {
      title: "Lead Generation Mastery",
      price: "$1,997/mo",
      description: "Turn your social media into a consistent lead generation machine.",
      primaryBenefit: "Ideal for businesses focused on growing their client base",
      features: [
        "Social media audit and strategy",
        "Content calendar development",
        "Engagement campaign setup",
        "Lead magnet creation",
        "Monthly performance reports"
      ],
      ctaText: "Learn More",
      ctaLink: "/packages/lead-generation",
      popular: false
    },
    {
      title: "Conversion Booster",
      price: "$2,497/mo",
      description: "Transform engagement into clients with our conversion-focused system.",
      primaryBenefit: "Perfect for businesses with traffic but low conversion rates",
      features: [
        "Everything in Lead Generation",
        "Conversion path optimization",
        "Social proof integration",
        "Messaging refinement",
        "A/B testing implementation"
      ],
      ctaText: "Learn More",
      ctaLink: "/packages/conversion-booster",
      popular: true
    },
    {
      title: "Authority Builder",
      price: "$3,997/mo",
      description: "Establish yourself as the go-to authority in your niche.",
      primaryBenefit: "Best for established businesses ready to dominate their market",
      features: [
        "Everything in Conversion Booster",
        "Thought leadership content",
        "Industry partnerships",
        "Speaking opportunity outreach",
        "PR and media exposure strategy"
      ],
      ctaText: "Learn More",
      ctaLink: "/packages/authority-builder",
      popular: false
    }
  ]
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
  title: "Ready to Transform Your Social Media Presence?",
  description: "Book a free discovery call to discuss your business goals and how our frameworks can help you achieve them.",
  primaryButton: {
    text: "Book Your Free Call",
    link: "/contact"
  },
  secondaryButton: {
    text: "Explore Our Packages",
    link: "/packages"
  }
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
        showAiInstructions={true} // Always show instructions during development
      />
      <ProblemSolutionSection
        problem={problemSolutionContent.problem}
        solution={problemSolutionContent.solution}
      />
      <ClientIndustriesSection
        title={clientIndustriesContent.title}
        subtitle={clientIndustriesContent.subtitle}
        description={clientIndustriesContent.description}
      />
      <WhatWeOfferSection />
      <ProcessOverviewSection
        title={processOverviewContent.title}
        description={processOverviewContent.description}
        steps={processOverviewContent.steps}
      />
      <CoreServicesSection
        title={coreServicesContent.title}
        description={coreServicesContent.description}
        services={coreServicesContent.services}
      />
      <PackagesOverviewSection
        title={packagesOverviewContent.title}
        description={packagesOverviewContent.description}
        packages={packagesOverviewContent.packages}
      />
      <TestimonialsSection
        title={testimonialsContent.title}
        description={testimonialsContent.description}
        testimonials={testimonialsContent.testimonials}
      />
      <FAQSection
        title={faqContent.title}
        description={faqContent.description}
        faqs={faqContent.faqs}
      />
      <CTASection
        title={ctaContent.title}
        description={ctaContent.description}
        primaryButton={ctaContent.primaryButton}
        secondaryButton={ctaContent.secondaryButton}
      />
    </Layout>
  );
};

export default HomePage; 