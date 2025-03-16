import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Packages Carousel section component
 * Displays packages in an interactive carousel with tabs and process steps
 */
const PackagesCarouselSection = ({ 
  title = "Our Growth Packages", 
  subtitle = "TAILORED SOLUTIONS", 
  description = "Choose the package that best fits your business goals and growth strategy.",
  processTitle = "How the Process Works",
  processSubtitle = "NEXT STEPS",
  processDescription = "Getting started with Social Launch Labs is simple. Follow these steps to move forward:"
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Package data
  const packages = [
    {
      title: "Starter Growth Package",
      badge: "Basic",
      badgeColor: "blue",
      features: [
        "Social media management for 2 platforms",
        "8 posts per month",
        "Basic analytics reporting",
        "Community engagement"
      ],
      price: "$997",
      perMonth: "/mo",
      learnMoreLink: "/packages/starter",
      ctaLink: "/contact",
      videoThumbnail: "https://WeaverAndrew55.github.io/SLL-Images/assets/packages/starter-package.jpg",
      videoDuration: "2:15"
    },
    {
      title: "Professional Growth Package",
      badge: "Popular",
      badgeColor: "purple",
      features: [
        "Social media management for 3 platforms",
        "15 posts per month",
        "Advanced analytics reporting",
        "Community engagement & growth",
        "Monthly strategy calls"
      ],
      price: "$1,997",
      perMonth: "/mo",
      learnMoreLink: "/packages/professional",
      ctaLink: "/contact",
      videoThumbnail: "https://WeaverAndrew55.github.io/SLL-Images/assets/packages/professional-package.jpg",
      videoDuration: "2:45"
    },
    {
      title: "Premium Growth Package",
      badge: "Advanced",
      badgeColor: "orange",
      features: [
        "Social media management for 4 platforms",
        "25 posts per month",
        "Comprehensive analytics dashboard",
        "Advanced community growth",
        "Bi-weekly strategy calls",
        "Content calendar development"
      ],
      price: "$2,997",
      perMonth: "/mo",
      learnMoreLink: "/packages/premium",
      ctaLink: "/contact",
      videoThumbnail: "https://WeaverAndrew55.github.io/SLL-Images/assets/packages/premium-package.jpg",
      videoDuration: "3:05"
    }
  ];

  // Process steps data
  const processSteps = [
    {
      number: "1",
      title: "Determine Your Needs",
      description: "Assess where your business needs the biggest boost - whether it's lead generation, conversion improvement, or industry authority."
    },
    {
      number: "2",
      title: "Select Your Package",
      description: "Choose the package that aligns with your business goals and budget. Each is designed to address specific growth challenges."
    },
    {
      number: "3",
      title: "Customization Call",
      description: "Schedule a strategy call where we'll refine the approach to fit your brand's unique voice and target audience."
    },
    {
      number: "4",
      title: "Implementation",
      description: "Our team executes the strategy, providing regular updates and making adjustments as needed for optimal results."
    }
  ];

  // Set active tab
  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  // Update active tabs when activeIndex changes
  useEffect(() => {
    // Update active classes when activeIndex changes
    const tabs = document.querySelectorAll('.package-tab');
    const panels = document.querySelectorAll('.package-panel');
    const videos = document.querySelectorAll('.package-video');

    tabs.forEach((tab, index) => {
      if (index === activeIndex) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    panels.forEach((panel, index) => {
      if (index === activeIndex) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });

    videos.forEach((video, index) => {
      if (index === activeIndex) {
        video.classList.add('active');
      } else {
        video.classList.remove('active');
      }
    });
  }, [activeIndex]);

  const getTabColor = (color) => {
    const colors = {
      blue: 'text-blue-600',
      purple: 'text-purple-600',
      orange: 'text-orange-600'
    };
    return colors[color] || colors.blue;
  };

  const getTabBgColor = (color, isActive) => {
    const bgColors = {
      blue: isActive ? 'bg-blue-100' : 'hover:bg-blue-50',
      purple: isActive ? 'bg-purple-100' : 'hover:bg-purple-50',
      orange: isActive ? 'bg-orange-100' : 'hover:bg-orange-50'
    };
    return bgColors[color] || bgColors.blue;
  };

  const getTabBorderColor = (color, isActive) => {
    const borderColors = {
      blue: isActive ? 'border-blue-600' : 'border-blue-200 hover:border-blue-300',
      purple: isActive ? 'border-purple-600' : 'border-purple-200 hover:border-purple-300',
      orange: isActive ? 'border-orange-600' : 'border-orange-200 hover:border-orange-300'
    };
    return borderColors[color] || borderColors.blue;
  };

  const getTabInactiveColor = (color) => {
    const inactiveColors = {
      blue: 'text-blue-400 hover:text-blue-600',
      purple: 'text-purple-400 hover:text-purple-600',
      orange: 'text-orange-400 hover:text-orange-600'
    };
    return inactiveColors[color] || inactiveColors.blue;
  };

  const getBadgeClass = (color) => {
    const badgeClasses = {
      blue: 'bg-blue-100 text-blue-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600'
    };
    return badgeClasses[color] || badgeClasses.blue;
  };

  const getButtonClass = (color) => {
    const buttonClasses = {
      blue: 'bg-blue-600 hover:bg-blue-700',
      purple: 'bg-purple-600 hover:bg-purple-700',
      orange: 'bg-orange-600 hover:bg-orange-700'
    };
    return buttonClasses[color] || buttonClasses.blue;
  };

  const getActiveDotClass = (color) => {
    const dotClasses = {
      blue: 'bg-blue-600',
      purple: 'bg-purple-600',
      orange: 'bg-orange-600'
    };
    return dotClasses[color] || dotClasses.blue;
  };

  return (
    <section className="section-spacing-lg relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute top-1/2 left-0 w-1/4 h-32 bg-blue-50 rounded-full filter blur-3xl opacity-30 transform -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-48 bg-indigo-50 rounded-full filter blur-3xl opacity-40 transform translate-x-1/4"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-12 md:mb-16">
          {subtitle && <span className="section-subtitle">{subtitle}</span>}
          {title && <h2 className="section-title">{title}</h2>}
          {description && <p className="section-description mt-4">{description}</p>}
        </div>
        
        {/* Packages carousel */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-7xl mx-auto mb-16">
          {/* Tab navigation */}
          <div className="flex flex-nowrap border-b overflow-x-auto">
            {packages.map((pkg, index) => {
              const isActive = index === activeIndex;
              const activeColorClass = isActive ? getTabColor(pkg.badgeColor) : getTabInactiveColor(pkg.badgeColor);
              const bgColorClass = getTabBgColor(pkg.badgeColor, isActive);
              const borderColorClass = getTabBorderColor(pkg.badgeColor, isActive);
              
              return (
                <button
                  key={index}
                  data-index={index}
                  className={`package-tab relative flex-1 py-4 px-6 text-center text-sm md:text-base font-medium 
                    border-b-2 ${borderColorClass} ${bgColorClass} ${activeColorClass} focus:outline-none 
                    transition-all duration-200 ${isActive ? 'active font-semibold' : ''}`}
                  onClick={() => handleTabClick(index)}
                >
                  <div className="relative flex flex-col items-center">
                    {/* Small colored dot indicator */}
                    <span className={`w-2 h-2 rounded-full mb-1.5 ${getActiveDotClass(pkg.badgeColor)} 
                      ${isActive ? 'opacity-100' : 'opacity-30'}`}>
                    </span>
                    
                    {pkg.title}
                    
                    {isActive && (
                      <span className="absolute -top-3 -right-6 inline-flex h-5 w-5">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${pkg.badgeColor === 'blue' ? 'bg-blue-300' : pkg.badgeColor === 'purple' ? 'bg-purple-300' : 'bg-orange-300'}`}></span>
                        <span className={`relative inline-flex rounded-full h-3 w-3 ${pkg.badgeColor === 'blue' ? 'bg-blue-500' : pkg.badgeColor === 'purple' ? 'bg-purple-500' : 'bg-orange-500'}`}></span>
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
          
          {/* Content container */}
          <div className="md:grid md:grid-cols-2">
            {/* Left column: Package info */}
            <div className="package-info-column">
              {packages.map((pkg, index) => {
                const isActive = index === activeIndex;
                return (
                  <div 
                    key={index}
                    data-index={index}
                    className={`package-panel p-6 md:p-8 ${isActive ? 'active' : ''}`}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getBadgeClass(pkg.badgeColor)}`}>
                          {pkg.badge}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold mt-2">{pkg.title}</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl md:text-3xl font-bold">{pkg.price}</div>
                        <div className="text-sm text-gray-500">{pkg.perMonth}</div>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 my-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-col sm:flex-row gap-3 mt-8">
                      <Link 
                        to={pkg.ctaLink} 
                        className={`inline-flex justify-center items-center px-6 py-3 border border-transparent 
                          text-base font-medium rounded-md shadow-sm text-white ${getButtonClass(pkg.badgeColor)} 
                          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                      >
                        Get Started
                      </Link>
                      <Link 
                        to={pkg.learnMoreLink} 
                        className="inline-flex justify-center items-center px-6 py-3 border border-gray-300 
                          text-base font-medium rounded-md bg-white text-gray-700 hover:bg-gray-50 
                          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Right column: Video preview */}
            <div className="bg-gradient-to-br from-gray-900 to-black relative h-full min-h-[300px] md:min-h-[400px]">
              {packages.map((pkg, index) => {
                const isActive = index === activeIndex;
                return (
                  <div 
                    key={index}
                    data-index={index}
                    className={`package-video absolute inset-0 ${isActive ? 'active' : ''}`}
                  >
                    <img 
                      src={pkg.videoThumbnail} 
                      alt={`${pkg.title} preview`} 
                      className="video-thumbnail w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4 sm:p-6 md:p-8">
                      {/* Video title overlay */}
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-md">
                        <h3 className="text-lg sm:text-xl font-semibold text-white">{pkg.title} Overview</h3>
                        <p className="text-white/80 text-sm mt-1">
                          See how our {pkg.title.toLowerCase()} can transform your social media presence.
                        </p>
                      </div>
                      
                      {/* Play button and duration */}
                      <div className="flex justify-between items-end">
                        <button className="play-button bg-white rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-blue-50 focus:outline-none group">
                          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600 group-hover:text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <div className="bg-black bg-opacity-60 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm font-medium">
                          {pkg.videoDuration}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center py-4 bg-gray-50">
            {packages.map((pkg, index) => {
              const isActive = index === activeIndex;
              const dotColorClass = isActive ? getActiveDotClass(pkg.badgeColor) : 'bg-gray-300';
              
              return (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full mx-1.5 focus:outline-none transition-colors duration-200 ${dotColorClass}`}
                  onClick={() => handleTabClick(index)}
                  aria-label={`View package ${index + 1}`}
                ></button>
              );
            })}
          </div>
        </div>
        
        {/* Process section */}
        <div className="max-w-7xl mx-auto mt-24">
          {/* Process section heading */}
          <div className="text-center mb-12">
            {processSubtitle && (
              <div className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {processSubtitle}
              </div>
            )}
            {processTitle && <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{processTitle}</h2>}
            {processDescription && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{processDescription}</p>}
          </div>
          
          {/* Process cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md p-6 md:p-8 relative hover:shadow-lg transition-shadow duration-300">
                <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 mt-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
          
          {/* Process CTA */}
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
            >
              Schedule Your Free Consultation
              <svg className="ml-2 -mr-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

PackagesCarouselSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  processTitle: PropTypes.string,
  processSubtitle: PropTypes.string,
  processDescription: PropTypes.string
};

export default PackagesCarouselSection; 