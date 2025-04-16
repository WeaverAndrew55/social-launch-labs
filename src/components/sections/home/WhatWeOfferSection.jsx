import React from 'react';
import { Link } from 'react-router-dom';
import SectionContainer from '../../ui/SectionContainer';
import AIGeneratedImage from '../../ui/AIGeneratedImage';
import PropTypes from 'prop-types';

// Import studio images
import studioImage1 from '../../../assets/STUDIO/05.27.2024 - Social Launch Labs - 2360 Portland St SE_16.png';
import studioImage2 from '../../../assets/STUDIO/05.27.2024 - Social Launch Labs - 2360 Portland St SE_21.png';
import studioImage3 from '../../../assets/STUDIO/05.27.2024 - Social Launch Labs - 2360 Portland St SE_27.png';

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
        title: "3 Defined Packages",
        description: "A suite of strategically defined packages tailored to each stage of your business growth:",
        benefits: [
          { 
            title: "Lead Generation Mastery", 
            description: "Attract qualified leads and increase your brand visibility", 
            icon: "megaphone",
            color: "#3b5998",
            link: "/packages/lead-generation-sales",
            videoId: "YOUR_LEAD_GEN_VIDEO_ID"
          },
          { 
            title: "Conversion Booster", 
            description: "Turn your prospects into loyal customers with persuasive content", 
            icon: "arrow-up-circle",
            color: "#2ecc71",
            link: "/packages/conversion-booster-sales",
            videoId: "YOUR_CONVERSION_VIDEO_ID"
          },
          { 
            title: "Authority Builder", 
            description: "Establish industry leadership through authoritative, high-impact content", 
            icon: "badge-check",
            color: "#8b5cf6",
            link: "/packages/authority-builder-sales",
            videoId: "YOUR_AUTHORITY_VIDEO_ID"
          }
        ],
        ctaText: "Explore our packages",
        ctaLink: "#packages",
        imageSrc: studioImage1,
        aiGeneratedSrc: null,
        imageAlt: "Strategic Content Planning in our Studio",
        floatingCard: {
          title: "Package progress",
          subtitle: "2 Weeks",
          description: "to first content delivery",
          progressPercentage: 75
        }
      },
      {
        title: "Custom Video Solutions",
        description: "Tailored video and audio projects precisely crafted to meet your unique marketing objectives—from promotional videos to educational series and branded storytelling.",
        steps: [
          { title: "Discovery & Strategy", description: "We align on goals and audience" },
          { title: "Content Creation", description: "We produce your content" },
          { title: "Strategic Edits", description: "We polish for perfection" },
          { title: "Launch & Optimize", description: "We measure and refine" }
        ],
        ctaText: "Learn more about our process",
        ctaLink: "#process",
        imageSrc: studioImage2,
        aiGeneratedSrc: null,
        imageAlt: "Our Professional Studio Setup",
        reversed: true
      },
      {
        title: "White-Label Production",
        description: "Expand your agency's capabilities effortlessly with our professional white-label video and audio production services—fully branded under your name.",
        benefits: [
          { 
            title: "Seamless Integration", 
            description: "White-labeled content that perfectly matches your brand identity", 
            icon: "puzzle" 
          },
          { 
            title: "Quality Assurance", 
            description: "Professional-grade production that elevates your agency's offerings", 
            icon: "shield-check" 
          },
          { 
            title: "Flexible Scaling", 
            description: "Scale your content production without increasing overhead", 
            icon: "scale" 
          }
        ],
        ctaText: "See client success metrics",
        ctaLink: "#results",
        imageSrc: studioImage3,
        aiGeneratedSrc: null,
        imageAlt: "Professional Video Production Environment",
        floatingCard: {
          title: "Growth results",
          value: "+147%",
          description: "Average engagement growth",
          rating: 5
        }
      }
    ],
  };

  const YouTubeEmbed = ({ videoId, title }) => (
    <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden shadow-lg">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );

  const renderIcon = (iconName, color) => {
    const iconClasses = `w-8 h-8 transition-colors duration-200`;
    
    switch (iconName) {
      case 'megaphone':
        return (
          <svg className={iconClasses} style={{ color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
        );
      case 'arrow-up-circle':
        return (
          <svg className={iconClasses} style={{ color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
          </svg>
        );
      case 'badge-check':
        return (
          <svg className={iconClasses} style={{ color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        );
      case 'chart-bar':
        return (
          <svg className="w-8 h-8 text-[#155DFC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'pie-chart':
        return (
          <svg className="w-8 h-8 text-[#155DFC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
          </svg>
        );
      case 'trending-up':
        return (
          <svg className="w-8 h-8 text-[#155DFC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        );
      case 'puzzle':
        return (
          <svg className="w-8 h-8 text-[#155DFC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          </svg>
        );
      case 'shield-check':
        return (
          <svg className="w-8 h-8 text-[#155DFC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 'scale':
        return (
          <svg className="w-8 h-8 text-[#155DFC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
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
    <section className={`${spacingClass || 'section-spacing-lg'} relative overflow-hidden`}>
      {/* Section background elements removed to use global background */}
      
      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block px-3 py-1 bg-[#155DFC]/10 text-[#155DFC] text-sm font-medium rounded-full mb-4">
            {content.subtitle || "WHAT WE OFFER"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E293C]">
            {content.title || "Strategic Video Marketing Frameworks"}
          </h2>
          <div className="w-20 h-1 bg-[#155DFC] mx-auto mb-6"></div>
          <p className="text-lg text-[#333945] max-w-3xl mx-auto font-medium">
            {content.description || "Our proven frameworks deliver measurable results through strategic planning, consistent content creation, and data-driven optimization."}
          </p>
        </div>

        {/* Features */}
        {content.features.map((feature, index) => (
          <div key={index} className={`flex flex-col ${feature.reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 mb-24 last:mb-0`}>
            {/* Content Side */}
            <div className="md:w-1/2">
              <div className="relative">
                {feature.badge && (
                  <span className="absolute -top-8 -left-6 inline-block px-3 py-1 bg-[#155DFC]/10 text-[#155DFC] text-sm font-medium rounded-full">{feature.badge}</span>
                )}
                <h3 className="text-xl font-bold text-[#1E293C] mb-2">{feature.title}</h3>
                <p className="text-[#333945] mb-6 font-medium">{feature.description}</p>

                {/* Benefits */}
                {feature.benefits && (
                  <div className="space-y-6 mb-8">
                    {feature.benefits.map((benefit, i) => (
                      feature.title === "White-Label Production" ? (
                        <div key={i} className="flex items-center">
                          <div className="w-16 h-16 rounded-lg bg-[#155DFC]/10 flex items-center justify-center mr-4">
                            {renderIcon(benefit.icon)}
                          </div>
                          <div>
                            <div className="font-medium text-[#1E293C]">{benefit.title}</div>
                            <div className="text-[#455064]">{benefit.description}</div>
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={i}
                          to={benefit.link}
                          className="flex items-center group transition-transform duration-200 hover:translate-x-2"
                        >
                          <div 
                            className="w-16 h-16 rounded-lg flex items-center justify-center mr-4 transition-colors duration-200"
                            style={{ 
                              backgroundColor: `${benefit.color}20`,
                              borderWidth: '1px',
                              borderColor: `${benefit.color}30`
                            }}
                          >
                            {renderIcon(benefit.icon, benefit.color)}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-[#1E293C] transition-colors duration-200">
                              {benefit.title}
                            </div>
                            <div className="text-[#455064] group-hover:text-[#1E293C] transition-colors duration-200">
                              {benefit.description}
                            </div>
                          </div>
                          <svg
                            className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-200"
                            style={{ color: benefit.color }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      )
                    ))}
                  </div>
                )}

                {/* Process Steps */}
                {feature.steps && (
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {feature.steps.map((step, i) => (
                      <div key={i} className="p-4 bg-[#155DFC]/10 rounded-lg border border-[#155DFC]/20 hover:bg-[#155DFC]/15 transition-colors duration-200">
                        <div className="font-medium text-[#155DFC] mb-1">{step.title}</div>
                        <div className="text-sm text-[#1E293C]">{step.description}</div>
                      </div>
                    ))}
                  </div>
                )}

                <Link to={feature.ctaLink} className="inline-flex items-center text-[#155DFC] font-medium hover:text-[#155DFC]/80 transition-colors">
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
                {feature.steps && feature.title !== "1 Proven Process for consistent results" && feature.title !== "Custom Video Solutions" && (
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <div className="flex space-x-3">
                      {feature.steps.map((_, i) => (
                        <div key={i} className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#155DFC] shadow-md">
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Floating card */}
                {feature.floatingCard && (
                  <div className={`absolute -bottom-6 ${feature.reversed ? '-right-6 md:-right-10' : '-left-6 md:-left-10'} bg-white rounded-xl shadow-lg p-4 max-w-[240px]`}>
                    <div className="font-medium text-[#1E293C] mb-2">{feature.floatingCard.title}</div>
                    
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
                          <div className="w-10 h-10 bg-[#155DFC] rounded-full flex items-center justify-center text-white mr-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                            </svg>
                          </div>
                          <div>
                            <div className="text-[#1E293C] font-medium">{feature.floatingCard.subtitle}</div>
                            <div className="text-[#455064] text-sm">{feature.floatingCard.description}</div>
                          </div>
                        </div>
                        <div className="w-full bg-[#B5BCC9]/30 h-2 rounded-full overflow-hidden">
                          <div 
                            className="bg-[#155DFC] h-full rounded-full" 
                            style={{ width: `${feature.floatingCard.progressPercentage}%` }}
                          ></div>
                        </div>
                      </>
                    )}
                    
                    {/* Value display */}
                    {feature.floatingCard.value && (
                      <div className="flex items-center">
                        <div className="text-2xl font-bold text-[#155DFC] mr-2">{feature.floatingCard.value}</div>
                        <div className="text-sm text-[#455064]">{feature.floatingCard.description}</div>
                      </div>
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