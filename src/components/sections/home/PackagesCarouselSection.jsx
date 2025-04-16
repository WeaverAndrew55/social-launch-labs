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
  title = "Strategic Growth Solutions", 
  subtitle = "OUR PACKAGES", 
  description = "Select the perfect package to achieve your specific business growth objectives, each with a comprehensive digital strategy included.",
  processTitle = "How It Works",
  processSubtitle = "SIMPLE PROCESS",
  processDescription = "Getting started is easy",
  spacingClass
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Package data with feature icons
  const packages = [
    {
      title: "Lead Generation Package",
      subtitle: "Starter Growth",
      badge: "Essential",
      badgeColor: "blue",
      overview: "Build a strong foundation for attracting qualified leads through strategic social media positioning.",
      keyOutcome: "Start attracting qualified leads consistently through social media",
      features: [
        {
          text: "Strategic content calendar for 2 platforms",
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          )
        },
        {
          text: "8 optimized posts per month",
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          )
        },
        {
          text: "Audience targeting & growth strategy",
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          )
        },
        {
          text: "Monthly performance analytics",
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
          )
        }
      ],
      price: "$997",
      perMonth: "/mo",
      learnMoreLink: "/packages/lead-generation-sales",
      ctaLink: "/contact",
      ctaText: "Start Generating Leads"
    },
    {
      title: "Conversion Booster Package",
      subtitle: "Professional Growth",
      badge: "Most Popular",
      badgeColor: "purple",
      overview: "Transform engagement into conversions with advanced strategies designed to nurture and convert your audience.",
      keyOutcome: "Convert your growing audience into qualified business opportunities",
      features: [
        {
          text: "Strategic content for 3 platforms",
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          )
        },
        {
          text: "15 conversion-focused posts monthly",
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          )
        },
        {
          text: "Engagement sequence development",
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          )
        },
        {
          text: "Lead magnet optimization",
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          )
        },
        {
          text: "Bi-weekly strategy calls",
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
          )
        }
      ],
      price: "$1,997",
      perMonth: "/mo",
      learnMoreLink: "/packages/conversion-booster",
      ctaLink: "/contact",
      ctaText: "Boost Your Conversions"
    },
    {
      title: "Authority Builder Package",
      subtitle: "Premium Growth",
      badge: "Advanced",
      badgeColor: "orange",
      overview: "Establish yourself as the go-to authority in your industry with comprehensive thought leadership strategies.",
      keyOutcome: "Position yourself as the undisputed expert in your industry",
      features: [
        {
          text: "Comprehensive content for 4 platforms",
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
            </svg>
          )
        },
        {
          text: "25 authority-building posts monthly",
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          )
        },
        {
          text: "Thought leadership positioning",
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
          )
        },
        {
          text: "Industry networking & partnerships",
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          )
        },
        {
          text: "Media opportunities development",
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
            </svg>
          )
        },
        {
          text: "Weekly strategy sessions",
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
          )
        }
      ],
      price: "$2,997",
      perMonth: "/mo",
      learnMoreLink: "/packages/authority-builder",
      ctaLink: "/contact",
      ctaText: "Build Your Authority"
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

  // Initialize on component mount
  useEffect(() => {
    // Set first tab as active by default
    setActiveIndex(0);
  }, []);

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
    <SectionContainer className={`py-16 bg-white overflow-hidden ${spacingClass || ''}`} id="new-package-carousel-layout">
      {/* Main title section - centered top */}
      <div className="container mx-auto px-4 mb-10 text-center">
        <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-3">
          {subtitle}
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">{title}</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
        <div className="w-full max-w-3xl mx-auto border-b border-gray-200 mt-6"></div>
      </div>

      {/* Package carousel - full width */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Tab navigation - equal widths */}
          <div className="flex border-b">
            {packages.map((pkg, index) => {
              const isActive = index === activeIndex;
              const activeColorClass = isActive ? getTabColor(pkg.badgeColor) : getTabInactiveColor(pkg.badgeColor);
              const bgColorClass = getTabBgColor(pkg.badgeColor, isActive);
              const borderColorClass = getTabBorderColor(pkg.badgeColor, isActive);
              
              return (
                <button
                  key={index}
                  className={`w-1/3 py-4 px-2 text-center text-sm md:text-base font-medium 
                    border-b-2 ${borderColorClass} ${bgColorClass} ${activeColorClass} focus:outline-none 
                    transition-colors duration-200 ${isActive ? 'font-semibold' : ''}`}
                  onClick={() => handleTabClick(index)}
                >
                  <div className="flex flex-col items-center">
                    {/* Small colored dot indicator */}
                    <div className={`w-2 h-2 rounded-full mb-1.5 ${getActiveDotClass(pkg.badgeColor)} 
                      ${isActive ? 'opacity-100' : 'opacity-50'}`}>
                    </div>
                    
                    <span className="whitespace-normal leading-tight">{pkg.title}</span>
                  </div>
                </button>
              );
            })}
          </div>
          
          {/* Compact content container */}
          <div className="bg-white h-full p-6 border-t border-gray-100 flex flex-col">                
            {/* Package header - enhanced layout */}
            <div className="flex flex-wrap md:flex-nowrap justify-between items-start mb-5 gap-4">
              <div className="flex flex-col">
                <div className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${getBadgeClass(packages[activeIndex].badgeColor)} mb-2 self-start`}>
                  {packages[activeIndex].badge}
                </div>
                <div className="text-xs text-gray-500 mb-1">{packages[activeIndex].subtitle}</div>
                <h3 className="text-2xl font-bold">{packages[activeIndex].title}</h3>
              </div>
              <div className="text-right bg-gray-50 p-3 rounded-lg shadow-sm">
                <div className="text-xs font-medium text-gray-500">Starting at</div>
                <div className="text-2xl font-bold">{packages[activeIndex].price}</div>
                <div className="text-xs text-gray-500">{packages[activeIndex].perMonth}</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                {/* Package overview - improved visual hierarchy */}
                <div className={`p-4 rounded-lg mb-5 h-full ${
                  packages[activeIndex].badgeColor === 'blue' ? 'bg-blue-50' : 
                  packages[activeIndex].badgeColor === 'purple' ? 'bg-purple-50' : 
                  packages[activeIndex].badgeColor === 'green' ? 'bg-green-50' : 
                  'bg-orange-50'}`}>
                  <h4 className="text-sm font-semibold mb-2">Package Overview</h4>
                  <p className="text-sm text-gray-800">{packages[activeIndex].overview}</p>
                </div>
              </div>
              
              <div className="flex flex-col">
                {/* Key outcome - more prominent */}
                <div className="mb-5 border-l-3 pl-3 border-green-500 bg-green-50 p-4 rounded-r-lg h-full">
                  <h4 className="text-sm font-semibold text-green-700 mb-2">Key Outcome</h4>
                  <p className="text-sm text-gray-800 font-medium">{packages[activeIndex].keyOutcome}</p>
                </div>
              </div>
            </div>
            
            {/* Features with icons - enhanced layout */}
            <div className="border-t border-gray-100 pt-4 mt-2">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">What's included:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-5 mb-3">
                {packages[activeIndex].features.map((feature, i) => (
                  <li key={i} className="flex items-start p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className={`mr-2 ${
                      packages[activeIndex].badgeColor === 'blue' ? 'text-blue-500' : 
                      packages[activeIndex].badgeColor === 'purple' ? 'text-purple-500' : 
                      packages[activeIndex].badgeColor === 'green' ? 'text-green-500' : 
                      'text-orange-500'} flex-shrink-0 mt-0.5`}>
                      {feature.icon}
                    </div>
                    <div>
                      <div className="flex items-center">
                        <svg className="h-4 w-4 text-green-500 mr-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-sm font-medium text-gray-800">{feature.text}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center py-3 bg-gray-50">
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
          
          {/* CTA buttons outside carousel */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 py-5 px-6 border-t border-gray-100 bg-gray-50">
            <Link 
              to={packages[activeIndex].learnMoreLink} 
              className={`inline-flex justify-center items-center px-6 py-3 border border-transparent 
                text-base font-medium rounded-md shadow-sm text-white ${getButtonClass(packages[activeIndex].badgeColor)} w-full sm:w-auto
                transition-all duration-200 hover:shadow-lg`}
              >
                {packages[activeIndex].ctaText}
              </Link>
            <Link 
              to="/packages" 
              className="inline-flex justify-center items-center px-6 py-3 border border-gray-300 
                text-base font-medium rounded-md bg-white text-gray-700 hover:bg-gray-50 w-full sm:w-auto
                transition-all duration-200 hover:shadow-md"
            >
              Compare All Packages
            </Link>
          </div>
        </div>
      </div>
      
      {/* Simple Process Section - Horizontal layout below packages */}
      <div className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div className="p-6">
            {/* Process section heading */}
            <div className="text-center mb-8">
              <div className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-2">
                {processSubtitle}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{processTitle}</h3>
              <p className="text-gray-600 max-w-xl mx-auto">{processDescription}</p>
            </div>
            
            {/* Process steps - horizontal layout */}
            <div className="relative mb-6">
              {/* Connecting line */}
              <div className="absolute top-10 left-0 right-0 h-0.5 bg-gray-200 z-0 hidden md:block"></div>
              
              {/* Process steps */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex flex-col items-center text-center">
                      {/* Step number circle */}
                      <div 
                        className={`w-12 h-12 rounded-full z-10 flex items-center justify-center text-white font-semibold mb-3 ${getProcessNumberBgColor(activePackageColor)}`}
                      >
                        {step.number}
                      </div>
                      
                      {/* Step content */}
                      <div className="flex flex-col items-center">
                        <div className="flex items-center mb-1">
                          <h4 className="text-gray-800 font-bold text-lg">{step.title}</h4>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
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