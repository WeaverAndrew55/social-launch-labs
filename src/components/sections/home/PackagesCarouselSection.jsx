import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SectionContainer from '../../ui/SectionContainer';

/**
 * Packages Carousel section component
 * Displays packages in an interactive carousel with integrated process steps
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {string} props.subtitle - Section subtitle
 * @param {string} props.description - Section description
 * @param {string} props.processTitle - Process title
 * @param {string} props.processSubtitle - Process subtitle
 * @param {string} props.processDescription - Process description
 * @param {string} props.spacingClass - Class name for section spacing
 */
const PackagesCarouselSection = ({ 
  title = "Our Growth Packages", 
  subtitle = "TAILORED SOLUTIONS", 
  description = "Choose the package that best fits your business goals and growth strategy.",
  processTitle = "How It Works",
  processSubtitle = "SIMPLE PROCESS",
  processDescription = "Getting started is easy",
  spacingClass
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
      title: "Assess Your Needs",
      description: "Identify your primary growth challenge",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      number: "2",
      title: "Choose Package",
      description: "Select the solution that fits your goals",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Strategy Call",
      description: "Customize the approach for your brand",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      number: "4",
      title: "Implementation",
      description: "Watch your social presence transform",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  // Set active tab
  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  // Update active tabs when activeIndex changes
  useEffect(() => {
    // Update active classes when activeIndex changes
    const panels = document.querySelectorAll('.package-panel');
    const videos = document.querySelectorAll('.package-video');

    panels.forEach((panel, index) => {
      if (index === activeIndex) {
        panel.style.display = 'block';
      } else {
        panel.style.display = 'none';
      }
    });

    videos.forEach((video, index) => {
      if (index === activeIndex) {
        video.style.display = 'block';
      } else {
        video.style.display = 'none';
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

  // Calculate the current active package color for process cards
  const activePackageColor = packages[activeIndex]?.badgeColor || 'blue';
  const getProcessNumberBgColor = (color) => {
    const bgColors = {
      blue: 'bg-blue-600',
      purple: 'bg-purple-600',
      orange: 'bg-orange-600'
    };
    return bgColors[color] || bgColors.blue;
  };

  return (
    <div className="w-full py-16 bg-white overflow-hidden" id="new-package-carousel-layout">
      {/* Main title section - centered top */}
      <div className="container mx-auto px-4 mb-10 text-center">
        <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-3">
          {subtitle}
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">{title}</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
        <div className="w-full max-w-3xl mx-auto border-b border-gray-200 mt-6"></div>
      </div>

      {/* Side-by-side layout */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column - How It Works */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <div className="p-6">
                {/* Process section heading */}
                <div className="mb-6">
                  <div className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {processSubtitle}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{processTitle}</h3>
                  <p className="text-gray-600">{processDescription}</p>
                </div>
                
                {/* Process steps - vertical layout with connecting line */}
                <div className="relative pt-4">
                  {/* Connecting line */}
                  <div className="absolute top-0 bottom-0 left-5 w-px bg-gray-200"></div>
                  
                  {/* Process steps */}
                  <div className="space-y-8">
                    {processSteps.map((step, index) => (
                      <div key={index} className="relative flex items-start">
                        {/* Step number circle */}
                        <div 
                          className={`flex-shrink-0 w-10 h-10 rounded-full z-10 flex items-center justify-center text-white font-semibold ${getProcessNumberBgColor(activePackageColor)}`}
                        >
                          {step.number}
                        </div>
                        
                        {/* Step content */}
                        <div className="ml-4">
                          <div className="flex items-center mb-1">
                            <span className="text-gray-800 font-bold">{step.title}</span>
                            <span className="ml-2 text-gray-500">{step.icon}</span>
                          </div>
                          <p className="text-sm text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Link
                    to="/contact"
                    className={`block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white ${getButtonClass(activePackageColor)}`}
                  >
                    Start Your Journey
                  </Link>
                  
                  <div className="mt-4 text-center text-sm text-gray-500">
                    Free consultation - No obligation
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Packages carousel */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
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
                      className={`flex-1 py-4 px-6 text-center text-sm md:text-base font-medium 
                        border-b-2 ${borderColorClass} ${bgColorClass} ${activeColorClass} focus:outline-none 
                        ${isActive ? 'font-semibold' : ''}`}
                      onClick={() => handleTabClick(index)}
                    >
                      <div className="flex flex-col items-center">
                        {/* Small colored dot indicator */}
                        <span className={`w-2 h-2 rounded-full mb-1.5 ${getActiveDotClass(pkg.badgeColor)} 
                          ${isActive ? 'opacity-100' : 'opacity-30'}`}>
                        </span>
                        
                        {pkg.title}
                      </div>
                    </button>
                  );
                })}
              </div>
              
              {/* Content container */}
              <div className="md:grid md:grid-cols-2">
                {/* Left column: Package info */}
                <div>
                  {packages.map((pkg, index) => (
                    <div 
                      key={index}
                      className="package-panel p-6 md:p-8"
                      style={{display: index === activeIndex ? 'block' : 'none'}}
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
                            text-base font-medium rounded-md shadow-sm text-white ${getButtonClass(pkg.badgeColor)}`}
                        >
                          Get Started
                        </Link>
                        <Link 
                          to={pkg.learnMoreLink} 
                          className="inline-flex justify-center items-center px-6 py-3 border border-gray-300 
                            text-base font-medium rounded-md bg-white text-gray-700 hover:bg-gray-50"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Right column: Video preview */}
                <div className="bg-gradient-to-br from-gray-900 to-black relative h-full min-h-[300px] md:min-h-[400px]">
                  {packages.map((pkg, index) => (
                    <div 
                      key={index}
                      className="package-video absolute inset-0"
                      style={{display: index === activeIndex ? 'block' : 'none'}}
                    >
                      <img 
                        src={pkg.videoThumbnail} 
                        alt={`${pkg.title} preview`} 
                        className="w-full h-full object-cover"
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
                          <button className="bg-white rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-blue-50 focus:outline-none group">
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
                  ))}
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
          </div>
        </div>
      </div>
    </div>
  );
};

PackagesCarouselSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  processTitle: PropTypes.string,
  processSubtitle: PropTypes.string,
  processDescription: PropTypes.string,
  spacingClass: PropTypes.string
};

export default PackagesCarouselSection; 