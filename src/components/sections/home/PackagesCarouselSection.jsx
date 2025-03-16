import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Packages Carousel section component
 * Displays packages in an interactive carousel with tabs
 */
const PackagesCarouselSection = ({ title, subtitle, description }) => {
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
      ctaLink: "/contact"
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
      ctaLink: "/contact"
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
      ctaLink: "/contact"
    },
    {
      title: "Enterprise Solution",
      badge: "Custom",
      badgeColor: "teal",
      features: [
        "Custom platform selection",
        "Tailored posting schedule",
        "Dedicated account manager",
        "Custom reporting dashboard",
        "Weekly strategy sessions",
        "Content calendar & creation",
        "Influencer partnership management"
      ],
      price: "Custom",
      perMonth: "",
      learnMoreLink: "/packages/enterprise",
      ctaLink: "/contact"
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

  const getBadgeClass = (color) => {
    const badgeClasses = {
      blue: 'bg-blue-100 text-blue-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      teal: 'bg-teal-100 text-teal-600'
    };
    return badgeClasses[color] || badgeClasses.blue;
  };

  const getButtonClass = (color) => {
    const buttonClasses = {
      blue: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
      purple: 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500',
      orange: 'bg-orange-600 hover:bg-orange-700 focus:ring-orange-500',
      teal: 'bg-teal-600 hover:bg-teal-700 focus:ring-teal-500'
    };
    return buttonClasses[color] || buttonClasses.blue;
  };

  return (
    <section className="section-spacing-lg relative overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute top-1/2 left-0 w-1/4 h-32 bg-blue-50 rounded-full filter blur-3xl opacity-30 transform -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-48 bg-indigo-50 rounded-full filter blur-3xl opacity-40 transform translate-x-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-16">
          {subtitle && <span className="section-subtitle">{subtitle}</span>}
          {title && <h2 className="section-title">{title}</h2>}
          {description && <p className="section-description mt-4">{description}</p>}
        </div>
        
        {/* Packages carousel */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Left column: Package info */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            {/* Tab navigation */}
            <div className="flex flex-wrap border-b">
              {packages.map((pkg, index) => (
                <button
                  key={index}
                  data-index={index}
                  className={`package-tab flex-1 py-4 px-3 text-sm md:text-base font-medium border-b-2 border-transparent hover:text-gray-900 focus:outline-none ${getBadgeClass(pkg.badgeColor).split(' ')[1]} ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => handleTabClick(index)}
                >
                  {pkg.title}
                </button>
              ))}
            </div>
            
            {/* Content panels */}
            <div className="relative">
              {packages.map((pkg, index) => (
                <div 
                  key={index}
                  data-index={index}
                  className={`package-panel p-6 ${index === activeIndex ? 'active' : ''}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getBadgeClass(pkg.badgeColor)}`}>
                        {pkg.badge}
                      </span>
                      <h3 className="text-xl font-bold mt-2">{pkg.title}</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{pkg.price}</div>
                      <div className="text-sm text-gray-500">{pkg.perMonth}</div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 my-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col sm:flex-row gap-3 mt-8">
                    <Link to={pkg.ctaLink} className={`inline-flex justify-center items-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white ${getButtonClass(pkg.badgeColor)} focus:outline-none focus:ring-2 focus:ring-offset-2`}>
                      Get Started
                    </Link>
                    <Link to={pkg.learnMoreLink} className="inline-flex justify-center items-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right column: Video preview */}
          <div className="relative">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                data-index={index}
                className={`package-video rounded-xl overflow-hidden shadow-xl ${index === activeIndex ? 'active' : ''}`}
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 relative">
                  <img 
                    src={`/images/package-${index + 1}.jpg`} 
                    alt={`${pkg.title} preview`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <button className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full w-16 h-16 flex items-center justify-center transition duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                    2:15
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h4 className="font-medium">{pkg.title} Overview</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    See how our {pkg.title.toLowerCase()} can transform your social media presence.
                  </p>
                </div>
              </div>
            ))}
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-4">
              {packages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full mx-1 focus:outline-none ${index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                  onClick={() => handleTabClick(index)}
                  aria-label={`View package ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA button */}
        <div className="text-center mt-16">
          <Link to="/packages" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            See All Package Details
            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

PackagesCarouselSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string
};

export default PackagesCarouselSection; 