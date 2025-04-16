import React, { useState } from 'react';
import { MegaphoneIcon, ArrowTrendingUpIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import SectionContainer from '../../../ui/SectionContainer';

/**
 * CompactTierCardsSection - Optimized version with single-scroll view
 * and integrated video explainer
 */
const CompactTierCardsSection = () => {
  const [selectedTier, setSelectedTier] = useState(null);
  const [activeTab, setActiveTab] = useState('features');

  // Handle container click to deselect tier
  const handleContainerClick = (e) => {
    // Only deselect if clicking the container itself, not its children
    if (e.target === e.currentTarget) {
      setSelectedTier(null);
    }
  };

  // Handle tier button click
  const handleTierClick = (e, key) => {
    e.stopPropagation(); // Prevent container click from firing
    setSelectedTier(selectedTier === key ? null : key);
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
    <SectionContainer className="py-12">
      <div className="container mx-auto px-4" onClick={handleContainerClick}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Package Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {Object.entries(packages).map(([key, pkg]) => (
                <button
                  key={key}
                  onClick={(e) => handleTierClick(e, key)}
                  className={`relative p-6 rounded-xl transition-all duration-300 ${
                    selectedTier === key
                      ? `${tierStyles[key].selectedBg} text-white shadow-lg`
                      : `bg-white text-gray-900 border border-gray-200/80 hover:border-gray-300 shadow-sm hover:shadow-md ${tierStyles[key].hoverBg}`
                  }`}
                >
                  {selectedTier === key && (
                    <div className="absolute -top-2.5 left-1/2 transform -translate-x-1/2">
                      <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide uppercase bg-white text-gray-900">
                        {tierStyles[key].badge}
                      </span>
          </div>
        )}

                  <div className="flex flex-col items-center text-center mt-3">
                    <div className={`p-3 rounded-xl mb-4 transition-colors ${
                      selectedTier === key 
                        ? 'bg-white/20' 
                        : `${tierStyles[key].iconBg} ${tierStyles[key].iconColor} group-hover:bg-opacity-75`
                    }`}>
                      {pkg.icon}
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="font-bold text-xl">{pkg.title}</h3>
                      <p className={`text-sm ${selectedTier === key ? 'text-white/90' : 'text-gray-600'}`}>
                        {pkg.description}
                      </p>
                      
                      {selectedTier === key ? (
                        <div className="flex flex-col items-center pt-3 border-t border-white/20">
                          <div className="font-semibold text-3xl tracking-tight">
                            {pkg.price}
                  </div>
                          <div className="text-sm mt-1 text-white/90">
                            {pkg.frequency}
                      </div>
                      </div>
                      ) : (
                        <div className="pt-3 border-t border-gray-100">
                          <button
                            onClick={(e) => handleTierClick(e, key)}
                            className={`w-full px-4 py-2.5 rounded-lg font-medium text-sm transition-all ${
                              key === 'essentials' ? 'text-blue-600 border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-300 hover:shadow-sm' :
                              key === 'growth' ? 'text-sky-600 border-2 border-sky-200 hover:bg-sky-50 hover:border-sky-300 hover:shadow-sm' :
                              'text-cyan-600 border-2 border-cyan-200 hover:bg-cyan-50 hover:border-cyan-300 hover:shadow-sm'
                            }`}
                          >
                            Explore {pkg.title}
                          </button>
                      </div>
                    )}
                  </div>
                  </div>
                </button>
          ))}
        </div>

            {/* Content Area */}
            <div>
              {selectedTier ? (
                <div className={`bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border-2 overflow-hidden ${
                  selectedTier === 'essentials' ? 'border-blue-100' :
                  selectedTier === 'growth' ? 'border-sky-100' :
                  'border-cyan-100'
                }`}>
                  <div className="border-b border-gray-100">
                    <div className="flex">
                      <button
                        onClick={() => setActiveTab('features')}
                        className={`flex-1 px-6 py-3 text-sm font-medium ${
                          activeTab === 'features'
                            ? `${
                                selectedTier === 'essentials' ? 'text-blue-600 border-blue-600' :
                                selectedTier === 'growth' ? 'text-sky-600 border-sky-600' :
                                'text-cyan-600 border-cyan-600'
                              } border-b-2`
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        Features
                      </button>
                      <button
                        onClick={() => setActiveTab('videos')}
                        className={`flex-1 px-6 py-3 text-sm font-medium ${
                          activeTab === 'videos'
                            ? `${
                                selectedTier === 'essentials' ? 'text-blue-600 border-blue-600' :
                                selectedTier === 'growth' ? 'text-sky-600 border-sky-600' :
                                'text-cyan-600 border-cyan-600'
                              } border-b-2`
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        Videos
                      </button>
            <button
                        onClick={() => setActiveTab('testimonial')}
                        className={`flex-1 px-6 py-3 text-sm font-medium ${
                          activeTab === 'testimonial'
                            ? `${
                                selectedTier === 'essentials' ? 'text-blue-600 border-blue-600' :
                                selectedTier === 'growth' ? 'text-sky-600 border-sky-600' :
                                'text-cyan-600 border-cyan-600'
                              } border-b-2`
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        Success Story
            </button>
                    </div>
        </div>

                  <div className="p-6">
                    {activeTab === 'features' ? (
                      <ul className="space-y-3">
                        {packages[selectedTier].features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className={`mt-1 flex-shrink-0 ${
                              selectedTier === 'essentials' ? 'text-blue-600' :
                              selectedTier === 'growth' ? 'text-sky-600' :
                              'text-cyan-600'
                            }`}>
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                            <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                    ) : activeTab === 'videos' ? (
                      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-4 styled-scrollbar">
                        {packages[selectedTier].videos.map((video, index) => (
                          <div key={index} className={`rounded-lg p-4 ${
                            selectedTier === 'essentials' ? 'bg-blue-50' :
                            selectedTier === 'growth' ? 'bg-sky-50' :
                            'bg-cyan-50'
                          }`}>
                            <h4 className="font-medium text-gray-900 mb-2">{video.title}</h4>
                            <p className="text-sm text-gray-600">{video.excerpt}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div className={`rounded-lg p-6 ${
                          selectedTier === 'essentials' ? 'bg-blue-50' :
                          selectedTier === 'growth' ? 'bg-sky-50' :
                          'bg-cyan-50'
                        }`}>
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                              <img
                                src={packages[selectedTier].testimonial.image}
                                alt={packages[selectedTier].testimonial.author}
                                className="w-16 h-16 rounded-full object-cover"
                              />
                </div>
                <div>
                              <p className="text-gray-700 italic mb-4">"{packages[selectedTier].testimonial.quote}"</p>
                              <div className="font-semibold text-gray-900">{packages[selectedTier].testimonial.author}</div>
                              <div className="text-sm text-gray-600">{packages[selectedTier].testimonial.title}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

                    <div className="mt-6 flex gap-4">
                      <a
                        href={packages[selectedTier].link}
                        className={`flex-1 px-6 py-3 rounded-lg font-medium text-center text-white transition-colors ${
                          selectedTier === 'essentials' ? 'bg-blue-600 hover:bg-blue-700' :
                          selectedTier === 'growth' ? 'bg-sky-600 hover:bg-sky-700' :
                          'bg-cyan-600 hover:bg-cyan-700'
                        }`}
                      >
                        Get {packages[selectedTier].title} Package
                      </a>
                      <a
                        href="/contact"
                        className={`flex-1 px-6 py-3 rounded-lg font-medium text-center transition-colors border ${
                          selectedTier === 'essentials' ? 'border-blue-600 text-blue-600 hover:bg-blue-50' :
                          selectedTier === 'growth' ? 'border-sky-600 text-sky-600 hover:bg-sky-50' :
                          'border-cyan-600 text-cyan-600 hover:bg-cyan-50'
                        }`}
                      >
                        Book a Call
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border-2 border-gray-100 p-12 text-center">
                  <div className="max-w-md mx-auto">
                    <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Select a Package Tier</h3>
                    <p className="text-gray-600">
                      Choose a tier above to explore its features, included videos, and success stories from our clients.
                    </p>
              </div>
            </div>
          )}
            </div>
          </div>

          {/* Right Side - Video Explainer */}
          <div className="lg:col-span-1">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 overflow-hidden h-full flex flex-col">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex-1 p-6 overflow-y-auto styled-scrollbar">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {selectedTier ? tierVideoContent[selectedTier].title : defaultVideoContent.title}
              </h3>
                <p className="text-gray-600 mb-4">
                  {selectedTier ? tierVideoContent[selectedTier].description : defaultVideoContent.description}
                </p>
                <div className="space-y-3">
                  {(selectedTier ? tierVideoContent[selectedTier].benefits : defaultVideoContent.benefits).map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        selectedTier ? (
                          selectedTier === 'essentials' ? 'bg-blue-50' :
                          selectedTier === 'growth' ? 'bg-sky-50' :
                          'bg-cyan-50'
                        ) : 'bg-blue-50'
                      }`}>
                        <svg className={`w-5 h-5 ${
                          selectedTier ? (
                            selectedTier === 'essentials' ? 'text-blue-600' :
                            selectedTier === 'growth' ? 'text-sky-600' :
                            'text-cyan-600'
                          ) : 'text-blue-600'
                        }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={benefit.icon} />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">{benefit.text}</span>
                    </div>
                  ))}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .styled-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .styled-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 3px;
        }
        .styled-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        .styled-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </SectionContainer>
  );
};

export default CompactTierCardsSection;