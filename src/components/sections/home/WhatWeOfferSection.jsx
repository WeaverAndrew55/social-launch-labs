import React from 'react';
import { Link } from 'react-router-dom';
import SectionContainer from '../../ui/SectionContainer';
import AIGeneratedImage from '../../ui/AIGeneratedImage';
import PropTypes from 'prop-types';

/**
 * What We Offer Section component
 * 
 * @param {Object} props - Component props
 * @param {string} props.spacingClass - Class name for section spacing
 * @returns {JSX.Element} The What We Offer section
 */
const WhatWeOfferSection = ({ spacingClass }) => {
  // Content for the section
  const content = {
    title: "Complete Video Marketing Solutions",
    description: "A comprehensive system designed to help your business grow through strategic video content at every stage of your marketing funnel.",
    features: [
      {
        title: "3 Strategic Packages designed for your business growth",
        description: "Our packages are strategically designed to support your business growth at every stage. We believe content creation is a journey, and we're here to accompany you every step of the way to better results.",
        listItems: ["Lead Generation", "Conversion Booster", "Authority Builder"],
        ctaText: "Explore our packages",
        ctaLink: "#packages",
        imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        aiGeneratedSrc: "/images/ai-generated/services/strategic-packages.jpg",
        imageAlt: "Strategic Content Planning",
        badge: "Revolutionary!",
        floatingCard: {
          title: "Package progress",
          subtitle: "2 Weeks",
          description: "to first content delivery",
          progressPercentage: 75
        }
      },
      {
        title: "1 Proven Process for consistent results",
        description: "Our streamlined workflow ensures consistent quality content creation and measurable results for your business, with minimal time investment from you.",
        steps: [
          { title: "Discovery & Strategy", description: "We align on goals and audience" },
          { title: "Content Creation", description: "We produce your content" },
          { title: "Strategic Edits", description: "We polish for perfection" },
          { title: "Launch & Optimize", description: "We measure and refine" }
        ],
        ctaText: "Learn more about our process",
        ctaLink: "#process",
        imageSrc: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        aiGeneratedSrc: "/images/ai-generated/services/proven-process.jpg",
        imageAlt: "Proven Content Process",
        reversed: true
      },
      {
        title: "Many Measurable Results that drive business growth",
        description: "Track your success with comprehensive analytics and performance metrics that demonstrate real business impact and return on investment.",
        benefits: [
          { title: "ROI Tracking", description: "Measure the financial impact of your content", icon: "chart-bar" },
          { title: "Performance Analytics", description: "Understand what's working and why", icon: "pie-chart" },
          { title: "Growth Monitoring", description: "Track your audience and engagement growth", icon: "trending-up" }
        ],
        ctaText: "See client success metrics",
        ctaLink: "#results",
        imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        aiGeneratedSrc: "/images/ai-generated/services/measurable-results.jpg",
        imageAlt: "Analytics Dashboard",
        floatingCard: {
          title: "Growth results",
          value: "+147%",
          description: "Average engagement growth",
          rating: 5
        }
      }
    ],
  };

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'chart-bar':
        return (
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'pie-chart':
        return (
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
          </svg>
        );
      case 'trending-up':
        return (
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        );
      default:
        return null;
    }
  };

  const renderStars = (count) => {
    return Array(count).fill(0).map((_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className={`relative overflow-hidden ${spacingClass || ''}`}>
      {/* Subtle background circle */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10"></div>
      
      <SectionContainer spacing="none">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-4">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content.title}</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            {content.description}
          </p>
        </div>

        {/* Features */}
        {content.features.map((feature, index) => (
          <div key={index} className={`flex flex-col ${feature.reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 mb-24`}>
            {/* Content Side */}
            <div className="md:w-1/2">
              <div className="relative">
                {feature.badge && (
                  <span className="absolute -top-8 -left-6 inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">{feature.badge}</span>
                )}
                <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">{feature.title}</h3>
                <p className="text-lg text-gray-600 mb-6">
                  {feature.description}
                </p>

                {/* List Items */}
                {feature.listItems && (
                  <ul className="space-y-3 text-gray-600 mb-8">
                    {feature.listItems.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Process Steps */}
                {feature.steps && (
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {feature.steps.map((step, i) => (
                      <div key={i} className="p-4 bg-blue-50 rounded-lg">
                        <div className="font-medium text-gray-900 mb-1">{step.title}</div>
                        <div className="text-sm text-gray-600">{step.description}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Benefits */}
                {feature.benefits && (
                  <div className="space-y-6 mb-8">
                    {feature.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-16 h-16 rounded-lg bg-blue-500/10 flex items-center justify-center mr-4">
                          {renderIcon(benefit.icon)}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{benefit.title}</div>
                          <div className="text-gray-600">{benefit.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <Link to={feature.ctaLink} className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  {feature.ctaText}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Image Side */}
            <div className="md:w-1/2">
              <div className="relative">
                {/* Main Image */}
                <div className="rounded-xl overflow-hidden shadow-lg">
                  {/* Use direct img tag first with fallback to AIGeneratedImage if needed */}
                  <img 
                    src={feature.imageSrc} 
                    alt={feature.imageAlt} 
                    className="w-full h-auto"
                  />
                </div>

                {/* Process Bubbles */}
                {feature.steps && (
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <div className="flex space-x-3">
                      {feature.steps.map((_, i) => (
                        <div key={i} className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-600 shadow-md">
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Floating card */}
                {feature.floatingCard && (
                  <div className={`absolute -bottom-6 ${feature.reversed ? '-right-6 md:-right-10' : '-left-6 md:-left-10'} bg-white rounded-xl shadow-lg p-4 max-w-[240px]`}>
                    <div className="font-medium text-gray-800 mb-2">{feature.floatingCard.title}</div>
                    
                    {/* Rating stars */}
                    {feature.floatingCard.rating && (
                      <div className="flex items-center space-x-1 mb-3">
                        {renderStars(feature.floatingCard.rating)}
                      </div>
                    )}
                    
                    {/* Progress indicator */}
                    {feature.floatingCard.progressPercentage !== undefined && (
                      <>
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                            </svg>
                          </div>
                          <div>
                            <div className="text-gray-900 font-medium">{feature.floatingCard.subtitle}</div>
                            <div className="text-gray-500 text-sm">{feature.floatingCard.description}</div>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div 
                            className="bg-blue-500 h-full rounded-full" 
                            style={{ width: `${feature.floatingCard.progressPercentage}%` }}
                          ></div>
                        </div>
                      </>
                    )}
                    
                    {/* Value display */}
                    {feature.floatingCard.value && (
                      <>
                        <div className="text-2xl font-bold text-blue-600 mb-1">{feature.floatingCard.value}</div>
                        <div className="text-gray-600 text-sm">{feature.floatingCard.description}</div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </SectionContainer>
    </section>
  );
};

WhatWeOfferSection.propTypes = {
  spacingClass: PropTypes.string
};

export default WhatWeOfferSection; 