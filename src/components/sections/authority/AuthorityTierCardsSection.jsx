import React from 'react';
import { StarIcon, SparklesIcon, SunIcon } from '@heroicons/react/24/outline';
import BaseTierCardsSection from '../shared/BaseTierCardsSection';

const AuthorityTierCardsSection = () => {
  // Package data with added testimonials
  const packages = {
    essentials: {
      title: "Essentials",
      description: "Build your authority foundation with this essential entry-level package.",
      price: "$2,997",
      frequency: "One-time payment",
      color: "purple",
      features: [
        "Personal Brand Assessment",
        "Content Strategy Development",
        "Social Media Optimization",
        "30-day implementation support",
        "Basic Analytics Dashboard",
        "Monthly Content Calendar"
      ],
      videos: [
        {
          title: "Brand Assessment Overview",
          excerpt: "A comprehensive review of your current brand positioning and authority status."
        },
        {
          title: "Content Strategy Guide",
          excerpt: "Strategic approach to developing authoritative content that resonates with your audience."
        }
      ],
      icon: <StarIcon className="w-6 h-6" />,
      link: "/contact?plan=authority-essentials",
      testimonial: {
        quote: "The Authority Builder package helped us establish a strong foundation for our brand. Our social media engagement increased by 200% within the first three months.",
        author: "Rachel Thompson",
        title: "Founder, Digital Growth Co.",
        image: "https://placehold.co/200x200/faf5ff/9333ea?text=RT&font=playfair-display"
      }
    },
    growth: {
      title: "Growth",
      description: "Scale your industry influence with this comprehensive growth package.",
      price: "$4,997",
      frequency: "One-time payment",
      color: "purple",
      features: [
        "All Essentials features, plus:",
        "Thought Leadership Program",
        "Content Distribution Strategy",
        "Influencer Collaboration Plan",
        "60-day premium support",
        "Advanced Analytics Suite"
      ],
      videos: [
        {
          title: "Brand Assessment Overview",
          excerpt: "A comprehensive review of your current brand positioning and authority status."
        },
        {
          title: "Content Strategy Guide",
          excerpt: "Strategic approach to developing authoritative content that resonates with your audience."
        },
        {
          title: "Thought Leadership Blueprint",
          excerpt: "Framework for establishing yourself as a recognized industry expert."
        },
        {
          title: "Influencer Strategy Guide",
          excerpt: "Strategic approach to building valuable industry relationships."
        }
      ],
      icon: <SparklesIcon className="w-6 h-6" />,
      link: "/contact?plan=authority-growth",
      testimonial: {
        quote: "The Growth package transformed our market position. We're now regularly featured in industry publications and our CEO is invited to speak at major conferences.",
        author: "Marcus Chen",
        title: "CEO, Innovation Labs",
        image: "https://placehold.co/200x200/f5f3ff/7c3aed?text=MC&font=playfair-display"
      }
    },
    authority: {
      title: "Authority",
      description: "Aim for industry leadership and market dominance with this elite package.",
      price: "$7,997",
      frequency: "One-time payment",
      color: "purple",
      features: [
        "All Growth features, plus:",
        "Custom Authority Framework",
        "Media Relations Strategy",
        "Speaking Opportunity Program",
        "90-day dedicated support",
        "Executive Visibility Plan"
      ],
      videos: [
        {
          title: "Brand Assessment Overview",
          excerpt: "A comprehensive review of your current brand positioning and authority status."
        },
        {
          title: "Content Strategy Guide",
          excerpt: "Strategic approach to developing authoritative content that resonates with your audience."
        },
        {
          title: "Thought Leadership Blueprint",
          excerpt: "Framework for establishing yourself as a recognized industry expert."
        },
        {
          title: "Influencer Strategy Guide",
          excerpt: "Strategic approach to building valuable industry relationships."
        },
        {
          title: "Media Relations Playbook",
          excerpt: "Comprehensive guide to building strong media relationships and securing coverage."
        },
        {
          title: "Speaking Program Strategy",
          excerpt: "Plan for securing and delivering impactful speaking engagements."
        }
      ],
      icon: <SunIcon className="w-6 h-6" />,
      link: "/contact?plan=authority-elite",
      testimonial: {
        quote: "The Authority package exceeded all expectations. We've become the go-to experts in our industry, with regular media appearances and a waiting list of clients.",
        author: "Victoria Adams",
        title: "Managing Director, Elite Strategies",
        image: "https://placehold.co/200x200/f3f0ff/6d28d9?text=VA&font=playfair-display"
      }
    }
  };

  // Add tier-specific styling configuration
  const tierStyles = {
    essentials: {
      gradient: 'from-purple-50 to-white',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      selectedBg: 'bg-gradient-to-br from-purple-600 to-purple-700',
      hoverBg: 'hover:bg-purple-50',
      badge: 'Tier 1'
    },
    growth: {
      gradient: 'from-violet-50 to-white',
      iconBg: 'bg-violet-100',
      iconColor: 'text-violet-600',
      selectedBg: 'bg-gradient-to-br from-violet-600 to-violet-700',
      hoverBg: 'hover:bg-violet-50',
      badge: 'Tier 2'
    },
    authority: {
      gradient: 'from-indigo-50 to-white',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      selectedBg: 'bg-gradient-to-br from-indigo-600 to-indigo-700',
      hoverBg: 'hover:bg-indigo-50',
      badge: 'Tier 3'
    }
  };

  // Add tier-specific video content
  const tierVideoContent = {
    essentials: {
      title: "Why Choose The Essentials Tier?",
      description: "Perfect for businesses looking to establish their authority foundation. Learn how our Essentials package helps you build a strong brand presence.",
      benefits: [
        {
          icon: "M13 10V3L4 14h7v7l9-11h-7z",
          text: "Establish your brand foundation"
        },
        {
          icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
          text: "30-day guided implementation"
        },
        {
          icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
          text: "Content strategy development"
        }
      ]
    },
    growth: {
      title: "Why Choose The Growth Tier?",
      description: "Scale your industry influence with our comprehensive Growth package. Ideal for businesses ready to establish thought leadership.",
      benefits: [
        {
          icon: "M13 10V3L4 14h7v7l9-11h-7z",
          text: "Thought leadership program"
        },
        {
          icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
          text: "60-day premium support"
        },
        {
          icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
          text: "Influencer collaboration strategy"
        }
      ]
    },
    authority: {
      title: "Why Choose The Authority Tier?",
      description: "Become the undisputed leader in your industry. Perfect for businesses aiming for maximum visibility and influence.",
      benefits: [
        {
          icon: "M13 10V3L4 14h7v7l9-11h-7z",
          text: "Custom authority framework"
        },
        {
          icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
          text: "90-day dedicated support team"
        },
        {
          icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
          text: "Executive visibility program"
        }
      ]
    }
  };

  // Default video content
  const defaultVideoContent = {
    title: "Why Choose Our Authority Packages?",
    description: "Watch our quick explainer video to understand how our strategic authority building packages can transform your brand's position in the market.",
    benefits: [
      {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        text: "Strategic brand positioning"
      },
      {
        icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
        text: "Industry influence building"
      },
      {
        icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
        text: "Measurable authority growth"
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
        primary: 'purple',
        secondary: 'purple',
        tertiary: 'purple'
      }}
    />
  );
};

export default AuthorityTierCardsSection; 