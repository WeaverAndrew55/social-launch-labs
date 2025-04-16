import React from 'react';
import SectionContainer from '../../ui/SectionContainer';
import LeadGenTierCard from '../../ui/LeadGenTierCard';

/**
 * TierCardsSection component - Displays all three Lead Generation package tiers
 */
const TierCardsSection = () => {
  // Comparison features for all tiers
  const comparisonFeatures = [
    {
      feature: "Social Media Audit",
      tier1: true,
      tier2: true,
      tier3: true
    },
    {
      feature: "Strategy Development",
      tier1: "Basic",
      tier2: "Advanced",
      tier3: "Premium"
    },
    {
      feature: "Content Framework",
      tier1: true,
      tier2: true,
      tier3: true
    },
    {
      feature: "Lead Magnet Creation",
      tier1: "1 Basic",
      tier2: "2 Advanced",
      tier3: "3 Premium"
    },
    {
      feature: "Thought Leadership Content",
      tier1: false,
      tier2: "Limited",
      tier3: "Comprehensive"
    },
    {
      feature: "Conversion Pathway Setup",
      tier1: "Basic",
      tier2: "Advanced",
      tier3: "Multi-channel"
    },
    {
      feature: "Monthly Strategy Calls",
      tier1: "1 call",
      tier2: "2 calls",
      tier3: "4 calls"
    },
    {
      feature: "Audience Growth Tactics",
      tier1: "Basic",
      tier2: "Advanced",
      tier3: "Premium"
    },
    {
      feature: "Performance Analytics",
      tier1: "Basic",
      tier2: "Advanced",
      tier3: "Advanced + Custom"
    },
    {
      feature: "A/B Testing",
      tier1: false,
      tier2: true,
      tier3: true
    }
  ];

  // Tier 1 (Essentials) Data
  const tier1Data = {
    tier: 1,
    title: "Essentials: Lead Generation Foundations",
    subtitle: "Start generating qualified leads",
    description: "Our entry-level package designed for businesses looking to establish a foundation for consistent lead generation through social media.",
    price: "1,997",
    originalPrice: "2,997",
    savings: 1000,
    keyPoints: [
      {
        title: "Basic Strategy & Setup",
        description: "Get the essential foundation to start generating leads"
      },
      {
        title: "Core Content Framework",
        description: "Simple framework for creating engaging content"
      },
      {
        title: "Monthly Support",
        description: "Regular check-ins to ensure you're on track"
      }
    ],
    features: {
      bestFor: [
        "Small businesses new to social media marketing",
        "Solopreneurs looking to establish a presence",
        "Businesses with limited marketing budget",
        "Companies wanting to test lead generation strategies"
      ],
      comparison: comparisonFeatures
    },
    inclusions: [
      {
        name: "Lead Generation Framework",
        items: [
          "Social Media Audit", 
          "Basic Strategy", 
          "Content Calendar", 
          "Lead Magnet", 
          "Monthly Review Call"
        ]
      },
      {
        name: "Content Creation",
        items: [
          "Content Templates", 
          "Basic Graphics", 
          "Post Scheduling", 
          "Hashtag Strategy"
        ]
      },
      {
        name: "Growth Tools",
        items: [
          "Engagement Scripts",
          "Basic Analytics",
          "Content Performance Review",
          "Weekly Email Support"
        ]
      }
    ],
    ctaText: "Get Essentials Package",
    ctaLink: "/contact"
  };
  
  // Tier 2 (Professional) Data
  const tier2Data = {
    tier: 2,
    title: "Professional: Strategic Lead Generation",
    subtitle: "Accelerate your lead generation",
    description: "Our mid-tier package designed for businesses ready to scale their lead generation with more sophisticated strategies and personalized support.",
    price: "2,997",
    originalPrice: "3,997",
    savings: 1000,
    keyPoints: [
      {
        title: "Advanced Strategy",
        description: "Data-driven strategy tailored to your ideal clients"
      },
      {
        title: "Conversion-Focused Content",
        description: "Content designed to convert followers into leads"
      },
      {
        title: "Enhanced Support",
        description: "Bi-weekly strategy calls and priority support"
      }
    ],
    features: {
      bestFor: [
        "Growing businesses ready to scale lead generation",
        "Companies with some social media presence",
        "Businesses needing higher-quality leads",
        "Teams wanting more strategic guidance"
      ],
      comparison: comparisonFeatures
    },
    inclusions: [
      {
        name: "Everything in Essentials Plus",
        items: [
          "Advanced Social Media Strategy",
          "Competitor Analysis",
          "Audience Targeting Plan",
          "Custom Content Strategy",
          "2 Advanced Lead Magnets"
        ]
      },
      {
        name: "Enhanced Content System",
        items: [
          "Premium Content Templates",
          "Custom Graphics Package",
          "Content Creation Guides",
          "Engagement Strategy"
        ]
      },
      {
        name: "Optimization Tools",
        items: [
          "A/B Testing Framework",
          "Conversion Tracking",
          "Performance Dashboard",
          "Bi-weekly Strategy Calls"
        ]
      }
    ],
    ctaText: "Get Professional Package",
    ctaLink: "/contact"
  };
  
  // Tier 3 (Authority) Data
  const tier3Data = {
    tier: 3,
    title: "Authority: Maximum Lead Generation Impact",
    subtitle: "Dominate your market and generate premium leads",
    description: "Our premium package designed for businesses seeking to establish industry authority while maximizing lead generation efforts with the highest conversion rates.",
    price: "4,997",
    originalPrice: "6,997",
    savings: 2000,
    keyPoints: [
      {
        title: "Premium Strategy & Implementation",
        description: "Comprehensive strategy with done-for-you elements"
      },
      {
        title: "Thought Leadership Content",
        description: "Position yourself as the go-to expert in your field"
      },
      {
        title: "VIP Support & Guidance",
        description: "Weekly guidance from our lead generation experts"
      }
    ],
    features: {
      bestFor: [
        "Established businesses ready for market domination",
        "Companies targeting high-value clients",
        "Businesses wanting to build industry authority",
        "Organizations needing premium lead generation"
      ],
      comparison: comparisonFeatures
    },
    inclusions: [
      {
        name: "Everything in Professional Plus",
        items: [
          "Premium Market Positioning",
          "Industry Authority Strategy",
          "Custom Lead Generation System",
          "3 Premium Lead Magnets",
          "Multi-channel Strategy"
        ]
      },
      {
        name: "Authority Building",
        items: [
          "Thought Leadership Content",
          "Guest Appearance Strategy",
          "Industry Recognition Plan",
          "Personal Brand Development"
        ]
      },
      {
        name: "Premium Support",
        items: [
          "Weekly Strategy Calls",
          "Custom Analytics Dashboard",
          "Quarterly Strategy Reviews",
          "Priority Support",
          "VIP Access To Group Coaching"
        ]
      }
    ],
    ctaText: "Get Authority Package",
    ctaLink: "/contact"
  };
  
  return (
    <SectionContainer className="py-16 bg-neutral-50">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Lead Generation Tier</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Select the perfect package tier based on your business goals, growth stage, and budget
        </p>
      </div>
      
      <div className="space-y-10">
        <LeadGenTierCard {...tier1Data} />
        <LeadGenTierCard {...tier2Data} />
        <LeadGenTierCard {...tier3Data} />
      </div>
    </SectionContainer>
  );
};

export default TierCardsSection; 