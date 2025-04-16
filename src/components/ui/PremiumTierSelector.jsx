import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

/**
 * Premium Tier Selector Component - Apple/Google-style pricing display
 */
const PremiumTierSelector = ({ tiers = [], recommendedTier = 2 }) => {
  const [selectedTier, setSelectedTier] = useState(recommendedTier);
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [featuredCategory, setFeaturedCategory] = useState(0);

  // Category and tab management
  const [activeCategory, setActiveCategory] = useState('features');
  
  // Theme colors for each tier
  const tierColors = {
    1: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', hover: 'hover:border-blue-400', accent: 'bg-blue-600' },
    2: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', hover: 'hover:border-purple-400', accent: 'bg-purple-600' },
    3: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', hover: 'hover:border-indigo-400', accent: 'bg-indigo-600' }
  };

  // Feature icons for categories
  const featureIcons = {
    "Lead Generation Framework": (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    "Content Creation": (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    "Growth Tools": (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    "Everything in Essentials Plus": (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    "Enhanced Content System": (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    "Optimization Tools": (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    "Everything in Professional Plus": (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    "Authority Building": (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    "Premium Support": (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  };

  // Helper function to get icon for a category
  const getCategoryIcon = (categoryName) => {
    return featureIcons[categoryName] || (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
    );
  };

  // Render a feature comparision row
  const renderFeatureRow = (feature, isHighlighted = false) => (
    <motion.div 
      variants={itemVariants}
      className={`grid grid-cols-4 py-3 border-b ${isHighlighted ? 'bg-gray-50' : ''} border-gray-100 text-sm`} 
      key={feature.feature}
    >
      <div className="col-span-1 font-medium text-gray-800">{feature.feature}</div>
      <div className="text-center">{renderFeatureValue(feature.tier1, 1, selectedTier)}</div>
      <div className="text-center">{renderFeatureValue(feature.tier2, 2, selectedTier)}</div>
      <div className="text-center">{renderFeatureValue(feature.tier3, 3, selectedTier)}</div>
    </motion.div>
  );

  // Helper to render various feature values
  const renderFeatureValue = (value, thisTier, selectedTier) => {
    const isHighlighted = thisTier === selectedTier;
    if (value === true) {
      return (
        <div className={`mx-auto inline-flex ${isHighlighted ? 'scale-110' : ''} transition-transform duration-200`}>
          <svg className={`w-5 h-5 ${isHighlighted ? 'text-green-600' : 'text-green-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          {isHighlighted && (
            <span className="sr-only">Included in your plan</span>
          )}
        </div>
      );
    } else if (value === false) {
      return <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    } else {
      return <span className={`${isHighlighted ? 'font-medium' : ''} text-gray-700`}>{value}</span>
    }
  };

  // Description for feature items (for expanded view)
  const featureDescriptions = {
    "Social Media Audit": "A comprehensive analysis of your current social media presence, with insights on strengths, weaknesses, and opportunities.",
    "Basic Strategy": "A foundational strategy tailored to your business goals and target audience.",
    "Content Calendar": "A structured plan of what content to post and when to maximize engagement.",
    "Lead Magnet": "A valuable resource designed to capture leads and build your email list.",
    "Monthly Review Call": "A dedicated session to review performance and adjust strategy as needed.",
    "Content Templates": "Pre-designed templates to streamline your content creation process.",
    "Basic Graphics": "Simple, branded visuals to enhance your social media posts.",
    "Post Scheduling": "Automated scheduling of posts for optimal engagement times.",
    "Hashtag Strategy": "Research-based hashtag recommendations to expand your reach.",
    "Engagement Scripts": "Ready-to-use templates for engaging with your audience effectively.",
    "Basic Analytics": "Essential metrics tracking to measure the success of your social media efforts.",
    "Content Performance Review": "Regular analysis of which content performs best and why.",
    "Weekly Email Support": "Ongoing assistance via email to address questions and concerns.",
    "Advanced Social Media Strategy": "A sophisticated, data-driven strategy custom-built for your unique business objectives.",
    "Competitor Analysis": "In-depth research on your top competitors' social media strategies and performance.",
    "Audience Targeting Plan": "Precision targeting to reach your ideal clients with maximum efficiency.",
    "Custom Content Strategy": "A content strategy uniquely designed to position you as an industry authority.",
    "2 Advanced Lead Magnets": "High-value resources designed to attract highly qualified leads.",
    "Premium Content Templates": "Advanced, conversion-focused templates for various content types.",
    "Custom Graphics Package": "Professional, branded visuals that elevate your online presence.",
    "Content Creation Guides": "Comprehensive guides to help streamline your content creation process.",
    "Engagement Strategy": "A systematic approach to meaningful engagement that builds relationships.",
    "A/B Testing Framework": "A methodology for testing different approaches to optimize performance.",
    "Conversion Tracking": "Advanced tracking to measure how social media activities convert to leads and sales.",
    "Performance Dashboard": "A visual dashboard displaying all key metrics in one convenient location.",
    "Bi-weekly Strategy Calls": "Regular strategy sessions to review performance and make adjustments.",
    "Weekly Strategy Calls": "Frequent strategy sessions to ensure maximum performance and quick adjustments.",
    "Custom Analytics Dashboard": "A personalized analytics solution tailored to your specific KPIs.",
    "Quarterly Strategy Reviews": "In-depth quarterly assessments to analyze progress and plan future strategy.",
    "Priority Support": "Expedited support with faster response times for urgent issues.",
    "VIP Access To Group Coaching": "Exclusive access to group coaching sessions with industry experts.",
  };

  // Get description for a feature item
  const getFeatureDescription = (item) => {
    return featureDescriptions[item] || "A key component of our package designed to enhance your lead generation results.";
  };

  // Animation variants for features
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // Helper functions for the Ideal For tab
  const getIdealForIcon = (index) => {
    const icons = [
      // Business owner
      <svg key="business" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>,
      // Marketing professional
      <svg key="marketing" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>,
      // Consultant
      <svg key="consultant" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>,
      // Entrepreneur
      <svg key="entrepreneur" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>,
      // Service provider
      <svg key="service" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>,
      // Online business
      <svg key="online" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ];
    
    return icons[index % icons.length];
  };
  
  const getIdealForDescription = (item, tier) => {
    const descriptions = {
      "Small business owners looking to establish a social media presence": "Perfect for those who need to build a foundation for their social media strategy and start generating leads.",
      "Entrepreneurs with limited marketing budgets": "Cost-effective solution to kick-start your lead generation without breaking the bank.",
      "Startups in early growth phase": "Essential tools and strategies to help your startup attract initial interest and leads.",
      "Solopreneurs managing their own marketing": "Simplified framework that's easy to implement even without a dedicated marketing team.",
      "Local businesses targeting community customers": "Focused approach to connect with local audiences and convert them into leads.",
      "Established businesses looking to improve social media ROI": "Advanced strategies to optimize your existing social media efforts for better lead generation.",
      "Marketing teams needing a comprehensive strategy": "Complete toolkit for marketing professionals to implement a cohesive lead generation system.",
      "Growing businesses ready to scale their lead generation": "Enhanced frameworks and tools designed for businesses experiencing growth.",
      "Service-based businesses with longer sales cycles": "Strategic approach for nurturing leads through extended decision-making processes.",
      "B2B companies focused on relationship building": "Targeted methods for developing business relationships that convert to long-term clients.",
      "Industry thought leaders and experts": "Premium positioning strategies to establish and leverage your authority status.",
      "Businesses targeting high-value clients": "Sophisticated lead generation systems designed to attract quality over quantity.",
      "Established brands looking for competitive edge": "Advanced differentiation strategies to stand out in crowded markets.",
      "Companies ready to dominate their market segment": "Comprehensive authority-building framework to position your brand as the go-to choice.",
      "Businesses with established marketing foundations": "Next-level strategies that build upon your existing marketing success."
    };
    
    return descriptions[item] || "Tailored approach to help you achieve your specific lead generation goals.";
  };
  
  // Helper function to group comparison features by category
  const groupFeaturesByCategory = (features) => {
    const categories = [
      { name: "Strategy & Planning", features: [] },
      { name: "Content & Assets", features: [] },
      { name: "Growth & Optimization", features: [] },
      { name: "Support & Implementation", features: [] }
    ];
    
    // Categorization logic - this is simplified, you may need a more robust approach
    features.forEach(feature => {
      if (feature.feature.includes("Strategy") || feature.feature.includes("Audit") || feature.feature.includes("Plan")) {
        categories[0].features.push(feature);
      } else if (feature.feature.includes("Content") || feature.feature.includes("Template") || feature.feature.includes("Graphics") || feature.feature.includes("Lead Magnet")) {
        categories[1].features.push(feature);
      } else if (feature.feature.includes("Analytics") || feature.feature.includes("Testing") || feature.feature.includes("Tracking") || feature.feature.includes("Dashboard")) {
        categories[2].features.push(feature);
      } else {
        categories[3].features.push(feature);
      }
    });
    
    // Remove empty categories
    return categories.filter(category => category.features.length > 0);
  };

  // State for video playing
  const [videoPlaying, setVideoPlaying] = useState(null);

  // Helper functions for videos and tier information
  const getTierVideoThumbnail = (tier) => {
    // In a real implementation, you would use actual thumbnail URLs
    return tier === 1 
      ? "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
      : tier === 2
        ? "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        : "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
  };

  const getTierVideoUrl = (tier) => {
    // In a real implementation, you would use actual video URLs or YouTube embeds
    // Using a sample YouTube video for demonstration
    return tier === 1 
      ? "https://www.youtube.com/embed/jNQXAC9IVRw?autoplay=1"
      : tier === 2
        ? "https://www.youtube.com/embed/jNQXAC9IVRw?autoplay=1"
        : "https://www.youtube.com/embed/jNQXAC9IVRw?autoplay=1";
  };

  const getTierVideoLength = (tier) => {
    return tier === 1 ? "2:15 min" : tier === 2 ? "3:45 min" : "4:30 min";
  };

  const getTierHighlights = (tier) => {
    if (tier === 1) {
      return [
        "Establish your social media foundation",
        "Start capturing leads within 2 weeks",
        "Easy-to-implement framework",
        "Perfect for small teams and solopreneurs"
      ];
    } else if (tier === 2) {
      return [
        "Grow your audience strategically",
        "Optimize conversion rates",
        "Comprehensive content system",
        "Detailed analytics and reporting"
      ];
    } else {
      return [
        "Position yourself as an industry authority",
        "Premium content creation and distribution",
        "Strategic partnership opportunities",
        "VIP support and dedicated strategy calls"
      ];
    }
  };

  const getTierResults = (tier) => {
    if (tier === 1) {
      return [
        { value: "35%", label: "Avg. Engagement Increase" },
        { value: "25+", label: "Monthly Leads" },
        { value: "2-3x", label: "Social Reach Growth" }
      ];
    } else if (tier === 2) {
      return [
        { value: "65%", label: "Avg. Engagement Increase" },
        { value: "75+", label: "Monthly Leads" },
        { value: "4-5x", label: "Social Reach Growth" }
      ];
    } else {
      return [
        { value: "120%", label: "Avg. Engagement Increase" },
        { value: "150+", label: "Monthly Leads" },
        { value: "8-10x", label: "Social Reach Growth" }
      ];
    }
  };

  const getTierTimeline = (tier) => {
    if (tier === 1) {
      return [
        { name: "Onboarding & Setup", duration: "Week 1", description: "Initial consultation, account setup, and strategy development." },
        { name: "Content Development", duration: "Week 2", description: "Creating your lead magnet and initial content templates." },
        { name: "Launch & Optimize", duration: "Week 3-4", description: "Implementing the strategy and making initial optimizations." }
      ];
    } else if (tier === 2) {
      return [
        { name: "Strategic Planning", duration: "Week 1", description: "Comprehensive audit and detailed strategy development." },
        { name: "Asset Creation", duration: "Week 2-3", description: "Developing premium content assets and advanced lead magnets." },
        { name: "Implementation", duration: "Week 3-4", description: "Executing the strategy across platforms with initial optimizations." },
        { name: "Optimization", duration: "Week 5-6", description: "Data analysis and strategy refinement for maximum performance." }
      ];
    } else {
      return [
        { name: "Authority Strategy", duration: "Week 1", description: "Comprehensive audit and authority positioning strategy." },
        { name: "Premium Asset Development", duration: "Week 2-3", description: "Creating high-value content assets and thought leadership materials." },
        { name: "Authority Implementation", duration: "Week 4-6", description: "Executing the strategy with professional guidance." },
        { name: "Advanced Optimization", duration: "Week 7-8", description: "In-depth analysis and strategic refinements." },
        { name: "Growth Acceleration", duration: "Week 9-12", description: "Leveraging initial results to scale your authority and lead generation." }
      ];
    }
  };

  // State for videos
  const [selectedVideoCategory, setSelectedVideoCategory] = useState('overview');
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Video categories
  const getVideoCategories = () => {
    return [
      { id: 'overview', name: 'Package Overview' },
      { id: 'demos', name: 'Demos & Tutorials' },
      { id: 'results', name: 'Case Studies' },
      { id: 'testimonials', name: 'Client Testimonials' }
    ];
  };

  // Get featured video based on tier and category
  const getTierFeaturedVideo = (tier, category) => {
    // In a real implementation, these would be actual unique video URLs for each tier and category
    const baseUrl = "https://www.youtube.com/embed/";
    const videoIds = {
      overview: ["jNQXAC9IVRw", "ScMzIvxBSi4", "dQw4w9WgXcQ"],
      demos: ["_A6aRXTrwHY", "HXV3zeQKqGY", "rfscVS0vtbw"],
      results: ["YwAYu0WZjDg", "HXV3zeQKqGY", "fNVa1qMbF9Y"],
      testimonials: ["dQw4w9WgXcQ", "ScMzIvxBSi4", "jNQXAC9IVRw"]
    };
    
    return `${baseUrl}${videoIds[category][tier-1]}`;
  };

  // Get video title based on tier and category
  const getTierVideoTitle = (tier, category) => {
    const titles = {
      overview: [
        "Essentials Package: Complete Overview",
        "Professional Package: Comprehensive Guide",
        "Authority Package: Full Walkthrough"
      ],
      demos: [
        "How to Set Up Your Lead Generation System",
        "Advanced Lead Generation Strategies",
        "Authority Building Master Class"
      ],
      results: [
        "Essentials Package: Real Results from Small Business",
        "Professional Package: Case Study with Marketing Agency",
        "Authority Package: Enterprise Success Story"
      ],
      testimonials: [
        "Client Testimonial: Small Business Growth",
        "Marketing Director Michael discusses how the Professional Package transformed their lead generation process.",
        "CEO Jennifer explains how the Authority Package positioned their company as the go-to expert in their industry."
      ]
    };
    
    return titles[category][tier-1];
  };

  // Get video description based on tier and category
  const getTierVideoDescription = (tier, category) => {
    const descriptions = {
      overview: [
        "A comprehensive overview of our Essentials Package, perfect for small businesses and startups looking to establish a social media presence.",
        "Explore the complete Professional Package, designed for growing businesses ready to scale their lead generation.",
        "Discover the premium Authority Package, our most comprehensive solution for established brands seeking to dominate their market."
      ],
      demos: [
        "Learn how to implement the core components of the Essentials Package with this step-by-step tutorial.",
        "See how to leverage advanced lead generation strategies included in the Professional Package.",
        "Master the authority building techniques and strategies included in our premium package."
      ],
      results: [
        "See how a local retail business increased their leads by 35% within 30 days using the Essentials Package.",
        "Discover how a marketing agency doubled their client acquisition rate with our Professional Package.",
        "Learn how an established SaaS company became an industry authority and increased their annual revenue by 43%."
      ],
      testimonials: [
        "Sarah from Bright Start Bakery shares her experience with our Essentials Package and the impact on her business.",
        "Marketing Director Michael discusses how the Professional Package transformed their lead generation process.",
        "CEO Jennifer explains how the Authority Package positioned their company as the go-to expert in their industry."
      ]
    };
    
    return descriptions[category][tier-1];
  };

  // Get videos for a specific category and tier
  const getVideosForCategory = (tier, category) => {
    // Placeholder for demo - in a real implementation, this would come from a database
    const videoCount = tier === 1 ? 3 : (tier === 2 ? 5 : 8);
    const videos = [];
    
    for (let i = 1; i <= videoCount; i++) {
      videos.push({
        id: `${category}-${tier}-${i}`,
        title: `${category === 'overview' ? 'Overview' : category === 'demos' ? 'Tutorial' : category === 'results' ? 'Case Study' : 'Testimonial'} ${i}: ${getTierSpecificTitle(tier, category, i)}`,
        description: `${getTierVideoDescription(tier, category)}`,
        videoUrl: getTierFeaturedVideo(tier, category),
        thumbnail: `https://picsum.photos/id/${(tier * 10) + i}/320/180`,
        duration: `${Math.floor(Math.random() * 5) + 2}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
        views: `${Math.floor(Math.random() * 900) + 100}`,
        isNew: i === 1
      });
    }
    
    return videos;
  };

  // Helper for generating tier-specific video titles
  const getTierSpecificTitle = (tier, category, index) => {
    const tierNames = ["Essentials", "Professional", "Authority"];
    const categoryTitles = {
      overview: ["Getting Started", "Core Features", "Complete Setup", "Advanced Configuration"],
      demos: ["Content Creation", "Lead Magnet Setup", "Analytics Integration", "Audience Targeting"],
      results: ["Increased Engagement", "Lead Generation Results", "ROI Analysis", "Growth Metrics"],
      testimonials: ["Small Business", "Agency Partner", "Enterprise Client", "Service Business"]
    };
    
    return `${tierNames[tier-1]} ${categoryTitles[category][index % 4]}`;
  };

  // Get related videos
  const getRelatedVideos = (tier, currentCategory) => {
    // Get a mix of videos from other categories
    const relatedVideos = [];
    const categories = getVideoCategories().map(cat => cat.id);
    
    // Get one video from each category except the current one
    categories.forEach(category => {
      if (category !== currentCategory) {
        const categoryVideos = getVideosForCategory(tier, category);
        relatedVideos.push(categoryVideos[0]);
      }
    });
    
    // Add some videos from the current category
    const currentCategoryVideos = getVideosForCategory(tier, currentCategory).slice(1, 4);
    
    return [...relatedVideos, ...currentCategoryVideos];
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Tier Selection Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-full p-1 bg-gray-100">
          {tiers.map((tier, index) => (
            <button
              key={index}
              onClick={() => setSelectedTier(tier.tier)}
              className={`
                relative px-6 py-2 text-sm font-medium rounded-full transition-all duration-200
                ${selectedTier === tier.tier 
                  ? 'text-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'}
              `}
            >
              {selectedTier === tier.tier && (
                <motion.div
                  layoutId="activeTab"
                  className={`absolute inset-0 rounded-full ${tierColors[tier.tier].accent}`}
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tier.title.split(':')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Tier Details */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTier}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {tiers.map((tier, index) => tier.tier === selectedTier && (
            <div key={index}>
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2">{tier.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{tier.subtitle}</p>
                <div className="flex justify-center items-baseline">
                  <span className="text-4xl font-bold">${tier.price}</span>
                  {tier.originalPrice && (
                    <span className="ml-2 text-gray-500 line-through text-lg">${tier.originalPrice}</span>
                  )}
                </div>
                {tier.savings && (
                  <p className="text-green-600 text-sm mt-1">
                    You save ${tier.savings} ({Math.round((tier.savings / parseInt(tier.originalPrice.replace(/,/g, ''))) * 100)}% off)
                  </p>
                )}
              </div>

              {/* Feature Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {tier.keyPoints.map((point, idx) => (
                  <div 
                    key={idx} 
                    className={`rounded-lg p-6 ${tierColors[tier.tier].bg} ${tierColors[tier.tier].border} border`}
                  >
                    <h4 className="font-bold mb-2">{point.title}</h4>
                    <p className="text-gray-700 text-sm">{point.description}</p>
                  </div>
                ))}
              </div>

              {/* Category Navigation */}
              <div className="border-b border-gray-200 mb-6">
                <div className="flex space-x-8">
                  <button
                    onClick={() => setActiveCategory('features')}
                    className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                      activeCategory === 'features' 
                        ? `border-${tierColors[tier.tier].accent.split('-')[1]} ${tierColors[tier.tier].text}` 
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    What's Included
                  </button>
                  <button
                    onClick={() => setActiveCategory('videos')}
                    className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                      activeCategory === 'videos' 
                        ? `border-${tierColors[tier.tier].accent.split('-')[1]} ${tierColors[tier.tier].text}` 
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Videos
                  </button>
                  <button
                    onClick={() => setActiveCategory('bestFor')}
                    className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                      activeCategory === 'bestFor' 
                        ? `border-${tierColors[tier.tier].accent.split('-')[1]} ${tierColors[tier.tier].text}` 
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Ideal For
                  </button>
                  <button
                    onClick={() => setActiveCategory('compare')}
                    className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                      activeCategory === 'compare' 
                        ? `border-${tierColors[tier.tier].accent.split('-')[1]} ${tierColors[tier.tier].text}` 
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Compare All Tiers
                  </button>
                </div>
              </div>

              {/* Category Content */}
              <div className="mb-10">
                {/* Enhanced Features/What's Included */}
                {activeCategory === 'features' && (
                  <>
                    {/* Category Navigation Pills */}
                    <div className="flex overflow-x-auto pb-4 mb-6 space-x-2">
                      {tier.inclusions.map((category, idx) => (
                        <button
                          key={idx}
                          onClick={() => setFeaturedCategory(idx)}
                          className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-200 ${
                            featuredCategory === idx
                              ? `${tierColors[tier.tier].accent} text-white`
                              : `${tierColors[tier.tier].bg} text-gray-700 hover:${tierColors[tier.tier].bg} hover:${tierColors[tier.tier].border}`
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>

                    {/* Category Spotlight */}
                    <div className="mb-8">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`w-10 h-10 rounded-full ${tierColors[tier.tier].accent} flex items-center justify-center text-white`}>
                          {getCategoryIcon(tier.inclusions[featuredCategory].name)}
                        </div>
                        <h3 className="text-xl font-bold">{tier.inclusions[featuredCategory].name}</h3>
                      </div>
                      <p className="text-gray-600 mb-6 pl-12">
                        {tier.inclusions[featuredCategory].description || 
                          (featuredCategory === 0 && "Your foundation for success. These essential components establish the framework for your lead generation strategy.") ||
                          (featuredCategory === 1 && "High-quality content is key to attracting and engaging your ideal audience. These tools make content creation seamless.") ||
                          (featuredCategory === 2 && "Tools and resources to accelerate your audience growth and maximize engagement with potential leads.")}
                      </p>
                      
                      {/* Featured Category Items */}
                      <motion.div 
                        className="grid md:grid-cols-2 gap-4 pl-12"
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                      >
                        {tier.inclusions[featuredCategory].items.map((item, idx) => (
                          <motion.div 
                            key={idx}
                            variants={itemVariants}
                            className={`rounded-lg border ${
                              expandedFeature === `${featuredCategory}-${idx}`
                                ? `${tierColors[tier.tier].border} shadow-md`
                                : 'border-gray-200 hover:border-gray-300'
                            } overflow-hidden transition-all duration-200`}
                          >
                            <div 
                              className="p-4 cursor-pointer"
                              onClick={() => setExpandedFeature(expandedFeature === `${featuredCategory}-${idx}` ? null : `${featuredCategory}-${idx}`)}
                            >
                              <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                  <span className={`w-8 h-8 rounded-full ${tierColors[tier.tier].bg} flex items-center justify-center ${tierColors[tier.tier].text} mr-3`}>
                                    {typeof item === 'object' && item.number ? item.number : idx + 1}
                                  </span>
                                  <span className="font-medium">{typeof item === 'object' && item.title ? item.title : item}</span>
                                </div>
                                <svg 
                                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${expandedFeature === `${featuredCategory}-${idx}` ? 'transform rotate-180' : ''}`} 
                                  fill="none" 
                                  viewBox="0 0 24 24" 
                                  stroke="currentColor"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                              </div>
                            </div>
                            
                            {/* Expanded Feature Details */}
                            <AnimatePresence>
                              {expandedFeature === `${featuredCategory}-${idx}` && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="border-t border-gray-200 bg-gray-50"
                                >
                                  <div className="p-4">
                                    <p className="text-gray-600 text-sm">
                                      {typeof item === 'object' && item.description 
                                        ? item.description 
                                        : getFeatureDescription(typeof item === 'object' ? item.title : item)}
                                    </p>
                                    <div className="mt-4 flex justify-between items-center">
                                      <div className="flex items-center">
                                        <span className={`inline-block w-3 h-3 rounded-full ${tierColors[tier.tier].accent} mr-2`}></span>
                                        <span className="text-xs font-medium">Included in {tier.title.split(':')[0]}</span>
                                      </div>
                                      {tier.tier > 1 && (
                                        <div className="text-xs text-gray-500">
                                          {tier.tier === 2 ? 'Enhanced from Essentials' : 'Premium offering'}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>

                    {/* All Features Summary */}
                    <div className="mt-8 p-6 rounded-lg bg-white border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-lg mb-6 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        Complete Package Overview
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Video Preview */}
                        <div className="md:col-span-1 order-2 md:order-1">
                          <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                            <div 
                              className="relative aspect-video cursor-pointer group"
                              onClick={() => setVideoPlaying(tier.tier)}
                            >
                              {videoPlaying !== tier.tier ? (
                                <>
                                  {/* Video Thumbnail */}
                                  <div className="absolute inset-0 bg-gray-900 bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-200"></div>
                                  <img 
                                    src={getTierVideoThumbnail(tier.tier)} 
                                    alt={`${tier.title} overview video`}
                                    className="w-full h-full object-cover"
                                  />
                                  
                                  {/* Play Button */}
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <div className={`w-16 h-16 rounded-full ${tierColors[tier.tier].accent} bg-opacity-90 flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                      </svg>
                                    </div>
                                  </div>
                                  
                                  {/* Video Title */}
                                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                    <span className="text-white text-sm font-medium">
                                      {tier.tier === 1 ? 'Essentials Package Overview' : 
                                       tier.tier === 2 ? 'Professional Package Demo' : 
                                       'Authority Package in Action'}
                                    </span>
                                  </div>
                                </>
                              ) : (
                                <div className="w-full h-full">
                                  <iframe 
                                    className="w-full h-full" 
                                    src={getTierVideoUrl(tier.tier)}
                                    title={`${tier.title} overview video`}
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                  ></iframe>
                                </div>
                              )}
                            </div>
                            
                            {/* Video Description */}
                            <div className="p-3">
                              <div className="flex justify-between items-center">
                                <span className="text-xs font-medium">{getTierVideoLength(tier.tier)}</span>
                                <button 
                                  onClick={() => window.open(getTierVideoUrl(tier.tier), '_blank')}
                                  className="text-xs text-gray-500 hover:text-gray-700"
                                >
                                  Watch on YouTube
                                </button>
                              </div>
                            </div>
                          </div>
                          
                          {/* Package Highlights */}
                          <div className="mt-4 bg-gray-50 rounded-lg p-4 border border-gray-200">
                            <h5 className="font-medium text-sm mb-3">Package Highlights</h5>
                            <ul className="space-y-2">
                              {getTierHighlights(tier.tier).map((highlight, idx) => (
                                <li key={idx} className="flex items-start text-xs">
                                  <svg className={`w-4 h-4 mt-0.5 mr-2 flex-shrink-0 ${tierColors[tier.tier].text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                  <span className="text-gray-700">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      
                        {/* Features List */}
                        <div className="md:col-span-2 order-1 md:order-2">
                          <div className="grid grid-cols-2 gap-6">
                            {tier.inclusions.map((category, catIdx) => (
                              <div key={catIdx} className="col-span-1">
                                <h5 className="text-sm font-semibold mb-2 flex items-center">
                                  <span className={`inline-block w-2 h-2 rounded-full ${tierColors[tier.tier].accent} mr-2`}></span>
                                  {category.name}
                                </h5>
                                <ul className="pl-4 space-y-1">
                                  {category.items.map((item, itemIdx) => (
                                    <li key={itemIdx} className="text-xs text-gray-600 flex items-start">
                                      <span className="text-gray-400 mr-1">•</span>
                                      {typeof item === 'object' && item.title ? item.title : item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          
                          {/* Package Results */}
                          <div className="mt-6 pt-5 border-t border-gray-200">
                            <h5 className="text-sm font-semibold mb-4 flex items-center">
                              <svg className={`w-4 h-4 mr-2 ${tierColors[tier.tier].text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                              Expected Results
                            </h5>
                            
                            <div className="grid grid-cols-3 gap-2">
                              {getTierResults(tier.tier).map((result, idx) => (
                                <div key={idx} className={`p-3 rounded-lg ${tierColors[tier.tier].bg} ${tierColors[tier.tier].border} border text-center`}>
                                  <div className={`text-lg font-bold ${tierColors[tier.tier].text}`}>{result.value}</div>
                                  <div className="text-xs text-gray-600">{result.label}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Implementation Timeline */}
                          <div className="mt-6 pt-4 border-t border-gray-200">
                            <h5 className="text-sm font-semibold mb-3 flex items-center">
                              <svg className={`w-4 h-4 mr-2 ${tierColors[tier.tier].text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              Implementation Timeline
                            </h5>
                            
                            <div className="relative">
                              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                              
                              {getTierTimeline(tier.tier).map((phase, idx) => (
                                <div key={idx} className="relative pl-10 pb-4">
                                  <div className={`absolute left-2 top-0 w-5 h-5 rounded-full ${tierColors[tier.tier].accent} flex items-center justify-center text-white text-xs transform -translate-x-1/2`}>
                                    {idx + 1}
                                  </div>
                                  <div className="text-xs">
                                    <span className={`font-medium ${tierColors[tier.tier].text}`}>{phase.name}</span>
                                    <span className="text-gray-500 ml-2">{phase.duration}</span>
                                    <p className="text-gray-600 mt-1">{phase.description}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                          Total of {tier.inclusions.reduce((acc, cat) => acc + cat.items.length, 0)} features included
                        </p>
                      </div>
                    </div>
                  </>
                )}

                {/* Videos Tab */}
                {activeCategory === 'videos' && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Video Category Selection */}
                    <div className="mb-8">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold">Package Videos</h3>
                        <div className="flex space-x-2">
                          {getVideoCategories().map((category, idx) => (
                            <button
                              key={idx}
                              onClick={() => setSelectedVideoCategory(category.id)}
                              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                                selectedVideoCategory === category.id
                                  ? `${tierColors[tier.tier].accent} text-white`
                                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                              }`}
                            >
                              {category.name}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4">
                        {selectedVideoCategory === 'overview' && 'Get a complete overview of what the package includes and how it works.'}
                        {selectedVideoCategory === 'demos' && 'See our lead generation strategies and tools in action with detailed demonstrations.'}
                        {selectedVideoCategory === 'results' && 'Real client results and case studies showing the impact of our packages.'}
                        {selectedVideoCategory === 'testimonials' && 'Hear directly from our clients about their experience and results.'}
                      </p>
                    </div>

                    {/* Featured Video Player */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="md:col-span-2">
                        <div className="bg-gray-900 rounded-lg overflow-hidden relative aspect-video">
                          <iframe 
                            className="w-full h-full absolute inset-0"
                            src={selectedVideo ? selectedVideo.videoUrl : getTierFeaturedVideo(tier.tier, selectedVideoCategory)}
                            title="Package Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                        
                        <div className="mt-4">
                          <h4 className="font-semibold text-lg">
                            {selectedVideo ? selectedVideo.title : getTierVideoTitle(tier.tier, selectedVideoCategory)}
                          </h4>
                          <p className="text-gray-600 text-sm mt-1">
                            {selectedVideo ? selectedVideo.description : getTierVideoDescription(tier.tier, selectedVideoCategory)}
                          </p>
                        </div>
                      </div>
                      
                      <div className="md:col-span-1">
                        <div className="bg-gray-50 rounded-lg p-4 h-full">
                          <h4 className="font-semibold text-sm mb-3 flex items-center">
                            <svg className="w-4 h-4 mr-2 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                            Playlist
                          </h4>
                          
                          <div className="space-y-2 overflow-y-auto max-h-[400px] pr-2">
                            {getVideosForCategory(tier.tier, selectedVideoCategory).map((video, idx) => (
                              <div 
                                key={idx}
                                onClick={() => setSelectedVideo(video)}
                                className={`flex cursor-pointer rounded-md p-2 ${selectedVideo?.id === video.id ? `bg-${tierColors[tier.tier].accent.split('-')[1]}-50 border-${tierColors[tier.tier].accent.split('-')[1]}-200 border` : 'hover:bg-gray-100'}`}
                              >
                                <div className="relative w-20 h-12 flex-shrink-0 bg-gray-200 rounded overflow-hidden mr-3">
                                  <img 
                                    src={video.thumbnail} 
                                    alt={video.title}
                                    className="w-full h-full object-cover" 
                                  />
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-6 h-6 rounded-full bg-black bg-opacity-60 flex items-center justify-center">
                                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="absolute bottom-0 right-0 bg-black bg-opacity-70 text-white text-[10px] px-1">
                                    {video.duration}
                                  </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h5 className="text-xs font-medium truncate">{video.title}</h5>
                                  <p className="text-gray-500 text-[10px] mt-1">{video.views} views</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Video Grid Section */}
                    <div className="mt-10">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-semibold">More Videos</h4>
                        <a href="#" className={`text-sm ${tierColors[tier.tier].text}`}>View all</a>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {getRelatedVideos(tier.tier, selectedVideoCategory).map((video, idx) => (
                          <div 
                            key={idx} 
                            className="cursor-pointer group"
                            onClick={() => setSelectedVideo(video)}
                          >
                            <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200">
                              <img 
                                src={video.thumbnail} 
                                alt={video.title}
                                className="w-full h-full object-cover" 
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
                                <div className={`w-12 h-12 rounded-full ${tierColors[tier.tier].accent} opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-200`}>
                                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                  </svg>
                                </div>
                              </div>
                              <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-1 py-0.5 rounded">
                                {video.duration}
                              </div>
                              {video.isNew && (
                                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">
                                  NEW
                                </div>
                              )}
                            </div>
                            <h5 className="font-medium text-sm mt-2">{video.title}</h5>
                            <p className="text-gray-500 text-xs mt-1">{video.views} views</p>
                          </div>
                        ))}
                      </div>
                      
                      {/* Get Access CTA */}
                      <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-200 text-center">
                        <h5 className="font-semibold mb-2">Get Full Access to Our Video Library</h5>
                        <p className="text-gray-600 text-sm mb-4">
                          Our complete video library includes over 50+ tutorial videos, case studies, and detailed walkthroughs.
                        </p>
                        <Button
                          variant="primary"
                          size="sm"
                          href={tier.ctaLink}
                        >
                          Get {tier.title.split(':')[0]} Package
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Best For */}
                {activeCategory === 'bestFor' && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="font-semibold text-lg">Who this package is perfect for:</h4>
                      <div className={`px-4 py-1 rounded-full text-sm font-medium ${tierColors[tier.tier].bg} ${tierColors[tier.tier].text}`}>
                        {tier.tier === 1 ? 'Getting Started' : tier.tier === 2 ? 'Growing Business' : 'Established Brand'}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {tier.features.bestFor.map((item, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className={`flex p-5 rounded-lg border hover:shadow-md transition-all duration-200 ${tierColors[tier.tier].border} ${tierColors[tier.tier].bg}`}
                        >
                          <div className={`w-10 h-10 rounded-full ${tierColors[tier.tier].accent} flex-shrink-0 flex items-center justify-center text-white mr-4`}>
                            {getIdealForIcon(idx)}
                          </div>
                          <div>
                            <span className="text-gray-800 font-medium">{item}</span>
                            <p className="text-sm text-gray-600 mt-1">
                              {getIdealForDescription(item, tier.tier)}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="mt-8 p-6 rounded-lg border border-gray-200 bg-white shadow-sm">
                      <div className="flex items-center mb-4">
                        <svg className={`w-6 h-6 ${tierColors[tier.tier].text} mr-2`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        <h4 className="font-bold">Success Stories</h4>
                      </div>
                      <blockquote className="italic text-gray-600 border-l-4 pl-4 border-gray-200">
                        {tier.tier === 1 && 
                          "\"We implemented the Essentials package and saw a 35% increase in social engagement within the first month. The lead magnet they helped create generated over 100 new email subscribers.\""}
                        {tier.tier === 2 && 
                          "\"The Professional package completely transformed our social strategy. We've seen consistent lead generation and a 50% decrease in our cost per acquisition since working with Social Launch Labs.\""}
                        {tier.tier === 3 && 
                          "\"Since upgrading to the Authority package, we've been featured in industry publications and our founder is now regularly invited to speak at events. Our social channels have become genuine lead generation engines.\""}
                      </blockquote>
                      <p className="text-right text-sm font-medium mt-2">
                        {tier.tier === 1 && "— Sarah T., Small Business Owner"}
                        {tier.tier === 2 && "— Michael R., Marketing Director"}
                        {tier.tier === 3 && "— Jennifer L., CEO"}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Compare */}
                {activeCategory === 'compare' && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm mb-6">
                      <div className="grid grid-cols-4 py-4 px-4 border-b border-gray-200">
                        <div className="col-span-1 font-semibold text-gray-700">Features</div>
                        {[1, 2, 3].map((tierNum) => (
                          <div 
                            key={tierNum}
                            className={`text-center ${tierNum === selectedTier ? `${tierColors[tierNum].text} font-semibold` : 'text-gray-600'}`}
                          >
                            <div className="flex flex-col items-center">
                              <span className={`${tierNum === selectedTier ? `text-white ${tierColors[tierNum].accent} shadow-sm` : 'bg-gray-100 text-gray-800'} w-6 h-6 rounded-full flex items-center justify-center text-xs mb-1`}>
                                {tierNum}
                              </span>
                              {tierNum === 1 ? 'Essentials' : tierNum === 2 ? 'Professional' : 'Authority'}
                              {tierNum === selectedTier && (
                                <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full mt-1">Selected</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="px-4">
                        <motion.div
                          variants={containerVariants}
                          initial="hidden"
                          animate="show"
                        >
                          {/* Grouped feature categories */}
                          {groupFeaturesByCategory(tier.features.comparison).map((category, catIdx) => (
                            <div key={catIdx}>
                              <div className="py-2 my-2 bg-gray-50 px-2 rounded font-medium text-sm text-gray-700">{category.name}</div>
                              {category.features.map((feature, idx) => renderFeatureRow(feature, idx % 2 === 0))}
                            </div>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                    
                    <div className="text-center mt-6">
                      <span className={`inline-block ${tierColors[tier.tier].bg} text-sm px-3 py-1 rounded-full ${tierColors[tier.tier].text}`}>
                        <strong>{tier.title.split(':')[0]}</strong> is the best choice for your needs
                      </span>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* CTA */}
              <div className="text-center mt-8">
                <Button
                  variant="primary"
                  size="lg"
                  href={tier.ctaLink}
                  className="px-10"
                >
                  {tier.ctaText}
                </Button>
                <p className="text-sm text-gray-500 mt-3">30-day satisfaction guarantee. No long-term contracts.</p>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PremiumTierSelector; 