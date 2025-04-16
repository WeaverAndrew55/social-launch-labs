import React from 'react';
import { ChartBarIcon, RocketLaunchIcon, TrophyIcon } from '@heroicons/react/24/outline';
import BaseTierCardsSection from '../shared/BaseTierCardsSection';

const ConversionTierCardsSection = () => {
  // Package data with added testimonials
  const packages = {
    essentials: {
      title: "Essentials",
      description: "Entry-level package for businesses looking to boost their conversion rates.",
      price: "$2,497",
      frequency: "One-time payment",
      color: "green",
      features: [
        "Conversion Rate Audit & Analysis",
        "Landing Page Optimization",
        "A/B Testing Strategy",
        "30-day implementation support",
        "Conversion tracking setup",
        "Basic heat mapping analysis"
      ],
      videos: [
        {
          title: "Conversion Rate Audit",
          excerpt: "A comprehensive review of your current conversion rates and identification of key improvement areas."
        },
        {
          title: "Landing Page Analysis",
          excerpt: "Detailed assessment of your landing pages with specific optimization recommendations."
        }
      ],
      icon: <ChartBarIcon className="w-6 h-6" />,
      link: "/contact?plan=conversion-essentials",
      testimonial: {
        quote: "The Conversion Booster package helped us identify critical gaps in our funnel. After implementing the recommendations, our conversion rate increased by 45% in just 2 months.",
        author: "David Martinez",
        title: "Digital Marketing Manager, TechFlow Solutions",
        image: "https://placehold.co/200x200/f0fdf4/22c55e?text=DM&font=playfair-display"
      }
    },
    growth: {
      title: "Growth",
      description: "Comprehensive package for businesses ready to scale their conversion optimization.",
      price: "$3,997",
      frequency: "One-time payment",
      color: "green",
      features: [
        "All Essentials features, plus:",
        "Advanced User Journey Mapping",
        "Conversion Funnel Optimization",
        "Multi-variant Testing Suite",
        "60-day premium support",
        "Advanced analytics integration"
      ],
      videos: [
        {
          title: "Conversion Rate Audit",
          excerpt: "A comprehensive review of your current conversion rates and identification of key improvement areas."
        },
        {
          title: "Landing Page Analysis",
          excerpt: "Detailed assessment of your landing pages with specific optimization recommendations."
        },
        {
          title: "User Journey Analysis",
          excerpt: "In-depth mapping and optimization of your customer's journey through your funnel."
        },
        {
          title: "Multi-variant Testing Guide",
          excerpt: "Strategic approach to testing multiple variables for optimal conversion."
        }
      ],
      icon: <RocketLaunchIcon className="w-6 h-6" />,
      link: "/contact?plan=conversion-growth",
      testimonial: {
        quote: "The Growth package transformed our approach to conversion optimization. Our e-commerce conversion rate doubled, and our cost per acquisition dropped by 35%.",
        author: "Emily Watson",
        title: "Head of E-commerce, Retail Plus",
        image: "https://placehold.co/200x200/ecfdf5/10b981?text=EW&font=playfair-display"
      }
    },
    authority: {
      title: "Authority",
      description: "Elite package for businesses demanding maximum conversion optimization.",
      price: "$5,997",
      frequency: "One-time payment",
      color: "green",
      features: [
        "All Growth features, plus:",
        "Custom Conversion Framework",
        "Personalization Strategy",
        "Behavioral Analytics Suite",
        "90-day dedicated support",
        "ROI tracking dashboard"
      ],
      videos: [
        {
          title: "Conversion Rate Audit",
          excerpt: "A comprehensive review of your current conversion rates and identification of key improvement areas."
        },
        {
          title: "Landing Page Analysis",
          excerpt: "Detailed assessment of your landing pages with specific optimization recommendations."
        },
        {
          title: "User Journey Analysis",
          excerpt: "In-depth mapping and optimization of your customer's journey through your funnel."
        },
        {
          title: "Multi-variant Testing Guide",
          excerpt: "Strategic approach to testing multiple variables for optimal conversion."
        },
        {
          title: "Custom Framework Implementation",
          excerpt: "Step-by-step guide to implementing your personalized conversion framework."
        },
        {
          title: "Behavioral Analytics Setup",
          excerpt: "Comprehensive setup and analysis of user behavior patterns."
        }
      ],
      icon: <TrophyIcon className="w-6 h-6" />,
      link: "/contact?plan=conversion-authority",
      testimonial: {
        quote: "The Authority package delivered beyond our expectations. We saw a 150% increase in qualified leads and a 200% boost in conversion rates across all our marketing channels.",
        author: "Jennifer Lee",
        title: "CMO, Enterprise Solutions Inc.",
        image: "https://placehold.co/200x200/f0fdfa/14b8a6?text=JL&font=playfair-display"
      }
    }
  };

  // Add tier-specific styling configuration
  const tierStyles = {
    essentials: {
      gradient: 'from-green-50 to-white',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      selectedBg: 'bg-gradient-to-br from-green-600 to-green-700',
      hoverBg: 'hover:bg-green-50',
      badge: 'Tier 1'
    },
    growth: {
      gradient: 'from-emerald-50 to-white',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      selectedBg: 'bg-gradient-to-br from-emerald-600 to-emerald-700',
      hoverBg: 'hover:bg-emerald-50',
      badge: 'Tier 2'
    },
    authority: {
      gradient: 'from-teal-50 to-white',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600',
      selectedBg: 'bg-gradient-to-br from-teal-600 to-teal-700',
      hoverBg: 'hover:bg-teal-50',
      badge: 'Tier 3'
    }
  };

  // Add tier-specific video content
  const tierVideoContent = {
    essentials: {
      title: "Why Choose The Essentials Tier?",
      description: "Perfect for businesses looking to establish a strong foundation in conversion rate optimization. Learn how our Essentials package helps you identify and fix conversion bottlenecks.",
      benefits: [
        {
          icon: "M13 10V3L4 14h7v7l9-11h-7z",
          text: "Rapid conversion rate improvements"
        },
        {
          icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
          text: "30-day guided implementation"
        },
        {
          icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
          text: "Data-driven optimization strategy"
        }
      ]
    },
    growth: {
      title: "Why Choose The Growth Tier?",
      description: "Scale your conversion optimization with our comprehensive Growth package. Ideal for businesses ready to implement advanced testing and optimization strategies.",
      benefits: [
        {
          icon: "M13 10V3L4 14h7v7l9-11h-7z",
          text: "Advanced testing methodology"
        },
        {
          icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
          text: "60-day premium optimization support"
        },
        {
          icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
          text: "Enhanced analytics integration"
        }
      ]
    },
    authority: {
      title: "Why Choose The Authority Tier?",
      description: "Get the ultimate conversion optimization package. Perfect for businesses seeking enterprise-level optimization and personalization strategies.",
      benefits: [
        {
          icon: "M13 10V3L4 14h7v7l9-11h-7z",
          text: "Custom conversion framework"
        },
        {
          icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
          text: "90-day dedicated support team"
        },
        {
          icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
          text: "Advanced personalization suite"
        }
      ]
    }
  };

  // Default video content
  const defaultVideoContent = {
    title: "Why Choose Our Conversion Packages?",
    description: "Watch our quick explainer video to understand how our strategic conversion optimization packages can transform your business metrics and drive sustainable growth.",
    benefits: [
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        text: "Data-driven optimization approach"
      },
      {
        icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
        text: "Proven conversion frameworks"
      },
      {
        icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
        text: "Measurable ROI improvements"
      }
    ]
  };

  return (
    <BaseTierCardsSection
      packages={packages}
      tierStyles={tierStyles}
      tierVideoContent={tierVideoContent}
      defaultVideoContent={defaultVideoContent}
      colors={{
        primary: 'green',
        secondary: 'green',
        tertiary: 'green'
      }}
    />
  );
};

export default ConversionTierCardsSection; 