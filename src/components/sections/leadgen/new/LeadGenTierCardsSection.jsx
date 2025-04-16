import React from 'react';
import { MegaphoneIcon, ArrowTrendingUpIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import BaseTierCardsSection from '../../shared/BaseTierCardsSection';

const LeadGenTierCardsSection = () => {
  // Package data with added testimonials
  const packages = {
    essentials: {
      title: "Essentials",
      description: "Entry-level package for businesses establishing lead generation foundations.",
      price: "$1,997",
      frequency: "One-time payment",
      color: "blue",
      features: [
        "Core Value Proposition Video (1-2 minutes)",
        "In-depth Product/Service Overview",
        "Social media platform integration",
        "30-day implementation support",
        "Video scripts and storyboards included",
        "Professional editing and branding"
      ],
      videos: [
        {
          title: "Core Value Proposition Video",
          excerpt: "A concise video highlighting your brand's unique value, mission, and the primary benefit you bring to clients."
        },
        {
          title: "Product/Service Overview Video",
          excerpt: "An in-depth look at your key product or service, showcasing features, benefits, and results."
        }
      ],
      icon: <MegaphoneIcon className="w-6 h-6" />,
      link: "/contact?plan=starter",
      testimonial: {
        quote: "Within 60 days of implementing Social Launch Labs' framework, we started seeing 5-7 qualified leads coming in weekly through social media - a 300% increase from our previous efforts.",
        author: "Sarah Johnson",
        title: "Marketing Director, Apex Consulting",
        image: "https://placehold.co/200x200/eef2ff/3b82f6?text=SJ&font=playfair-display"
      }
    },
    growth: {
      title: "Growth",
      description: "Mid-tier package for businesses ready to scale with sophisticated strategies.",
      price: "$2,997",
      frequency: "One-time payment",
      color: "blue",
      features: [
        "All Essentials features, plus:",
        "Lead Magnet Explainer Video",
        "Educational Webinar Production",
        "3 Professional Client Testimonials",
        "60-day premium support",
        "Custom thumbnails and chapters"
      ],
      videos: [
        {
          title: "Core Value Proposition Video",
          excerpt: "A concise video highlighting your brand's unique value, mission, and the primary benefit you bring to clients."
        },
        {
          title: "Product/Service Overview Video",
          excerpt: "An in-depth look at your key product or service, showcasing features, benefits, and results."
        },
        {
          title: "Lead Magnet Explainer Video",
          excerpt: "A short explainer covering your free resource or giveaway."
        },
        {
          title: "Educational Webinar Video",
          excerpt: "A longer, training-style video delivering authoritative content."
        },
        {
          title: "Client Testimonials (3 total)",
          excerpt: "A powerful collection of three authentic client success stories."
        }
      ],
      icon: <ArrowTrendingUpIcon className="w-6 h-6" />,
      link: "/contact?plan=growth",
      testimonial: {
        quote: "The Lead Generation Mastery package gave us exactly what we needed - a systematic approach to attracting high-quality clients instead of just random followers. Our sales team is now consistently busy with qualified prospects.",
        author: "Michael Chen",
        title: "CEO, Growth Partners Agency",
        image: "https://placehold.co/200x200/f5f3ff/8b5cf6?text=MC&font=playfair-display"
      }
    },
    authority: {
      title: "Authority",
      description: "Premium package for businesses seeking to establish industry authority.",
      price: "$4,997",
      frequency: "One-time payment",
      color: "blue",
      features: [
        "All Growth features, plus:",
        "Email Nurture Video Series",
        "Retargeting Ad Video Production",
        "Lead Magnet Reminder Campaign",
        "Comprehensive FAQ Video",
        "90-day dedicated support team"
      ],
      videos: [
        {
          title: "Core Value Proposition Video",
          excerpt: "A concise video highlighting your brand's unique value, mission, and the primary benefit you bring to clients."
        },
        {
          title: "Product/Service Overview Video",
          excerpt: "An in-depth look at your key product or service, showcasing features, benefits, and results."
        },
        {
          title: "Lead Magnet Explainer Video",
          excerpt: "A short explainer covering your free resource or giveaway."
        },
        {
          title: "Educational Webinar Video",
          excerpt: "A longer, training-style video delivering authoritative content."
        },
        {
          title: "Client Testimonials (3 total)",
          excerpt: "Authentic social proof via short interviews showing real clients' positive outcomes."
        },
        {
          title: "Email Nurture Video",
          excerpt: "Short, targeted videos for email campaigns."
        },
        {
          title: "Retargeting Ad Video",
          excerpt: "A short ad designed for retargeting those who've interacted with your brand."
        },
        {
          title: "Lead Magnet Reminder Video",
          excerpt: "A brief follow-up video reinforcing the value of your lead magnet."
        },
        {
          title: "FAQ Video",
          excerpt: "A comprehensive video addressing common questions and concerns."
        }
      ],
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      link: "/contact?plan=authority",
      testimonial: {
        quote: "After 6 months with their system, I've completely eliminated cold outreach from my business. Qualified leads now come to me consistently through my optimized social channels.",
        author: "Alicia Rodriguez",
        title: "Business Coach & Consultant",
        image: "https://placehold.co/200x200/fef2f2/ef4444?text=AR&font=playfair-display"
      }
    }
  };

  // Add tier-specific styling configuration
  const tierStyles = {
    essentials: {
      gradient: 'from-blue-50 to-white',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      selectedBg: 'bg-gradient-to-br from-blue-600 to-blue-700',
      hoverBg: 'hover:bg-blue-50',
      badge: 'Tier 1'
    },
    growth: {
      gradient: 'from-sky-50 to-white',
      iconBg: 'bg-sky-100',
      iconColor: 'text-sky-600',
      selectedBg: 'bg-gradient-to-br from-sky-600 to-sky-700',
      hoverBg: 'hover:bg-sky-50',
      badge: 'Tier 2'
    },
    authority: {
      gradient: 'from-cyan-50 to-white',
      iconBg: 'bg-cyan-100',
      iconColor: 'text-cyan-600',
      selectedBg: 'bg-gradient-to-br from-cyan-600 to-cyan-700',
      hoverBg: 'hover:bg-cyan-50',
      badge: 'Tier 3'
    }
  };

  // Add tier-specific video content
  const tierVideoContent = {
    essentials: {
      title: "Why Choose The Essentials Tier?",
      description: "Perfect for businesses ready to establish a strong foundation in video-based lead generation. Learn how our Essentials package helps you create compelling content that converts.",
      benefits: [
        {
          icon: "M13 10V3L4 14h7v7l9-11h-7z",
          text: "Quick implementation with core video assets"
        },
        {
          icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
          text: "30-day guided support to ensure success"
        },
        {
          icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
          text: "Start seeing results within 60 days"
        }
      ]
    },
    growth: {
      title: "Why Choose The Growth Tier?",
      description: "Scale your lead generation with our comprehensive Growth package. Ideal for businesses ready to expand their video marketing strategy and capture more qualified leads.",
      benefits: [
        {
          icon: "M13 10V3L4 14h7v7l9-11h-7z",
          text: "Advanced video content strategy"
        },
        {
          icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
          text: "60-day premium support & optimization"
        },
        {
          icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
          text: "Enhanced lead magnet & webinar production"
        }
      ]
    },
    authority: {
      title: "Why Choose The Authority Tier?",
      description: "Establish yourself as the undisputed industry leader with our Authority package. Get a complete video marketing ecosystem that positions you as the go-to expert.",
      benefits: [
        {
          icon: "M13 10V3L4 14h7v7l9-11h-7z",
          text: "Comprehensive video content suite"
        },
        {
          icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
          text: "90-day dedicated support team"
        },
        {
          icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
          text: "Multi-channel video deployment"
        }
      ]
    }
  };

  // Default video content
  const defaultVideoContent = {
    title: "Why Choose Our Video Packages?",
    description: "Watch our quick explainer video to understand how our strategic video packages can transform your lead generation efforts and help you achieve your business goals.",
    benefits: [
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        text: "Strategic approach to video marketing"
      },
      {
        icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
        text: "Proven results and ROI tracking"
      },
      {
        icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
        text: "Scalable growth solutions"
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
        primary: 'blue',
        secondary: 'sky',
        tertiary: 'cyan'
      }}
    />
  );
};

export default LeadGenTierCardsSection; 