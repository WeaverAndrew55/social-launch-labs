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
      id: 'lead-gen',
      title: 'Lead Generation',
      badge: 'Most Popular',
      badgeColor: 'blue',
      features: [
        'Brand Story Video',
        'Problem-Solution Video',
        'Testimonial Highlight Video',
        'Lead Magnet Video'
      ],
      price: 'From $3,997',
      learnMoreLink: '/packages/lead-generation',
      videoThumbnail: 'https://WeaverAndrew55.github.io/SLL-Images/assets/LeadGenMaster/LeadGenMaster-1.png',
      videoDuration: '2:45',
      cardTitle: 'Lead Generation Package',
      cardDescription: 'Perfect for businesses looking to build their audience and capture quality leads.'
    },
    {
      id: 'conversion',
      title: 'Conversion Booster',
      badge: 'Best Value',
      badgeColor: 'green',
      features: [
        'Landing Page Explainer',
        'Objection Handling Video',
        'Testimonial & Social Proof',
        'Product Demonstration'
      ],
      price: 'From $4,997',
      learnMoreLink: '/packages/conversion-booster',
      videoThumbnail: 'https://WeaverAndrew55.github.io/SLL-Images/assets/Services/Services-2.png',
      videoDuration: '3:12',
      cardTitle: 'Conversion Booster Package',
      cardDescription: 'Optimized for businesses focused on increasing sales conversions.'
    },
    {
      id: 'authority',
      title: 'Authority Builder',
      badge: 'Premium',
      badgeColor: 'purple',
      features: [
        'Expert Interviews',
        'Educational Content',
        'Success Stories',
        'Industry Trend Analysis'
      ],
      price: 'From $6,997',
      learnMoreLink: '/packages/authority-building',
      videoThumbnail: 'https://WeaverAndrew55.github.io/SLL-Images/assets/Services/Services-3.png',
      videoDuration: '3:38',
      cardTitle: 'Authority Builder Package',
      cardDescription: 'Establish your brand as the definitive authority in your industry.'
    }
  ];

  // Set active tab
  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="packages" className="section-spacing-lg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10"></div>
      <div className="absolute -top-24 left-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="section-heading-wrapper text-center mb-16">
          <span className="section-subtitle">{subtitle || 'Our Packages'}</span>
          <h2 className="section-title">
            {title || 'Strategically Designed '}<span>Video Solutions</span>
          </h2>
          <p className="section-description">
            {description || "We've developed three signature video marketing packages based on real business outcomes, ensuring you have the right content at each stage of your growth."}
          </p>
        </div>

        {/* Premium Package Carousel */}
        <div className="bg-white rounded-2xl p-6 md:p-12 mb-12 relative shadow-xl">
          {/* Floating badge */}
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 py-2 px-6 rounded-full shadow-lg">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-semibold text-white">Premium Packages</span>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Package Details Side */}
            <div className="lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">Find Your Perfect Content Strategy</h3>
              <p className="text-lg text-gray-700 mb-8">
                Explore our most popular packages, each designed to address specific business goals and transform your content marketing with comprehensive video solutions.
              </p>
              
              {/* Package Navigation Tabs */}
              <div className="flex flex-wrap border-b border-gray-200 mb-8 gap-1">
                {packages.map((pkg, index) => {
                  const isActive = activeIndex === index;
                  const activeClasses = isActive 
                    ? pkg.badgeColor === 'blue' 
                      ? 'border-blue-600 text-blue-600' 
                      : pkg.badgeColor === 'green'
                        ? 'border-green-600 text-green-600'
                        : 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700';
                    
                  return (
                    <button 
                      key={pkg.id}
                      className={`package-tab flex-1 text-center py-3 px-4 font-medium rounded-t-lg border-b-2 ${activeClasses} transition-all duration-300`}
                      onClick={() => handleTabClick(index)}
                    >
                      {pkg.title}
                    </button>
                  );
                })}
              </div>
              
              {/* Package Content Panels */}
              <div className="package-panels relative">
                {packages.map((pkg, index) => {
                  // Determine classes based on color
                  const bgColorClass = pkg.badgeColor === 'blue' 
                    ? 'bg-blue-500' 
                    : pkg.badgeColor === 'green' 
                      ? 'bg-green-500' 
                      : 'bg-purple-500';
                  
                  const badgeColorClass = pkg.badgeColor === 'blue'
                    ? 'bg-blue-100 text-blue-800'
                    : pkg.badgeColor === 'green'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-purple-100 text-purple-800';
                  
                  const featureColorClass = pkg.badgeColor === 'blue'
                    ? 'bg-blue-50 hover:bg-blue-100 text-blue-600'
                    : pkg.badgeColor === 'green'
                      ? 'bg-green-50 hover:bg-green-100 text-green-600'
                      : 'bg-purple-50 hover:bg-purple-100 text-purple-600';
                  
                  const buttonColorClass = pkg.badgeColor === 'blue'
                    ? 'bg-blue-600'
                    : pkg.badgeColor === 'green'
                      ? 'bg-green-600'
                      : 'bg-purple-600';
                  
                  const hoverTextColorClass = pkg.badgeColor === 'blue'
                    ? 'text-blue-600 hover:text-blue-800'
                    : pkg.badgeColor === 'green'
                      ? 'text-green-600 hover:text-green-800'
                      : 'text-purple-600 hover:text-purple-800';
                  
                  const hoverBgColorClass = pkg.badgeColor === 'blue'
                    ? 'hover:bg-blue-50'
                    : pkg.badgeColor === 'green'
                      ? 'hover:bg-green-50'
                      : 'hover:bg-purple-50';
                      
                  return (
                    <div 
                      key={pkg.id}
                      className={`package-panel ${activeIndex === index ? 'block' : 'hidden'}`}
                    >
                      <div className={`absolute -left-3 top-0 h-full w-1 ${bgColorClass} rounded-full`}></div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <span className={`${badgeColorClass} text-xs font-medium mr-2 px-2.5 py-0.5 rounded`}>
                          {pkg.badge}
                        </span>
                        {pkg.title} Includes:
                      </h4>
                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feature, featureIndex) => (
                          <li 
                            key={featureIndex} 
                            className={`flex items-start ${featureColorClass} p-3 rounded-lg transition-all`}
                          >
                            <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className={`flex items-center justify-between ${buttonColorClass} text-white p-4 rounded-lg`}>
                        <span className="font-bold text-xl">{pkg.price}</span>
                        <Link 
                          to={pkg.learnMoreLink} 
                          className={`inline-flex items-center bg-white ${hoverTextColorClass} px-4 py-2 rounded-lg font-medium ${hoverBgColorClass} transition-colors`}
                        >
                          Learn more
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Video Preview Side */}
            <div className="lg:w-1/2 relative">
              {packages.map((pkg, index) => {
                // Determine classes based on color
                const fromBgColorClass = pkg.badgeColor === 'blue' 
                  ? 'from-blue-50' 
                  : pkg.badgeColor === 'green' 
                    ? 'from-green-50' 
                    : 'from-purple-50';
                
                const iconColorClass = pkg.badgeColor === 'blue'
                  ? 'text-blue-600 group-hover:text-blue-700'
                  : pkg.badgeColor === 'green'
                    ? 'text-green-600 group-hover:text-green-700'
                    : 'text-purple-600 group-hover:text-purple-700';
                
                const borderColorClass = pkg.badgeColor === 'blue'
                  ? 'border-blue-600'
                  : pkg.badgeColor === 'green'
                    ? 'border-green-600'
                    : 'border-purple-600';
                
                const buttonColorClass = pkg.badgeColor === 'blue'
                  ? 'bg-blue-600'
                  : pkg.badgeColor === 'green'
                    ? 'bg-green-600'
                    : 'bg-purple-600';
                
                const badgeColorClass = pkg.badgeColor === 'blue'
                  ? 'bg-blue-100 text-blue-800'
                  : pkg.badgeColor === 'green'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-purple-100 text-purple-800';
                  
                return (
                  <div 
                    key={pkg.id}
                    className={`package-video ${activeIndex === index ? 'block' : 'hidden'}`}
                  >
                    {/* Video Container with consistent dimensions */}
                    <div className="relative overflow-hidden rounded-xl shadow-xl h-64">
                      <div className={`relative rounded-xl overflow-hidden aspect-video bg-gradient-to-br ${fromBgColorClass} to-gray-100 h-full`}>
                        {/* Package Thumbnail */}
                        <img 
                          src={pkg.videoThumbnail} 
                          alt={pkg.cardTitle} 
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        
                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button className="video-play-button w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-white group">
                            <svg className={`w-10 h-10 ${iconColorClass} transition-colors`} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </button>
                        </div>
                        
                        {/* Duration Badge */}
                        <div className="absolute right-3 bottom-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md z-20">
                          {pkg.videoDuration}
                        </div>
                      </div>
                    </div>
                    
                    {/* Video Info Card */}
                    <div className={`bg-white rounded-xl shadow-lg mt-4 p-4 border-l-4 ${borderColorClass}`}>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`${buttonColorClass} text-white text-xs font-medium px-2.5 py-0.5 rounded`}>{pkg.badge}</span>
                        <span className={`${badgeColorClass} text-xs font-medium px-2.5 py-0.5 rounded`}>{pkg.title}</span>
                      </div>
                      <h4 className="text-xl font-semibold mb-1 text-gray-900">{pkg.cardTitle}</h4>
                      <p className="text-sm text-gray-600">{pkg.cardDescription}</p>
                      
                      {/* Video Progress Bar */}
                      <div className="h-1.5 w-full bg-gray-200 rounded-full mt-3 overflow-hidden">
                        <div className={`h-full ${buttonColorClass} rounded-full`} style={{width: '65%'}}></div>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {/* Navigation Dots */}
              <div className="flex justify-center mt-6 space-x-3">
                {packages.map((pkg, index) => {
                  const isActive = activeIndex === index;
                  const dotColorClass = isActive
                    ? pkg.badgeColor === 'blue'
                      ? 'bg-blue-600 ring-4 ring-blue-100'
                      : pkg.badgeColor === 'green'
                        ? 'bg-green-600 ring-4 ring-green-100'
                        : 'bg-purple-600 ring-4 ring-purple-100'
                    : `bg-gray-300 hover:bg-${pkg.badgeColor}-300`;
                    
                  return (
                    <button 
                      key={`dot-${pkg.id}`}
                      className={`package-dot w-3 h-3 rounded-full ${dotColorClass} transition-all`}
                      onClick={() => handleTabClick(index)}
                    ></button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        {/* Call-to-Action */}
        <div className="text-center mt-10">
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-xl text-base font-bold hover:opacity-90 transition-opacity shadow-lg"
          >
            Book a Free Strategy Call
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

PackagesCarouselSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string
};

export default PackagesCarouselSection; 