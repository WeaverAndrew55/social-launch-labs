import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SectionContainer from './SectionContainer';

/**
 * PackageTabsSection - A reusable component for displaying packages or services in a tabbed interface
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Main section title
 * @param {string} props.subtitle - Optional subtitle or badge text
 * @param {string} props.description - Section description
 * @param {Object} props.packages - Object containing package data
 * @param {string} props.defaultActivePackage - Key of the initially active package tab
 * @param {Object} props.footerContent - Content for the footer section (optional)
 * @param {string} props.sectionId - HTML ID for the section (optional)
 * @param {string} props.bgClassName - Background class name (optional)
 * @param {boolean} props.transparentBg - Whether the section has a transparent background
 */
const PackageTabsSection = ({ 
  title, 
  subtitle, 
  description, 
  packages, 
  defaultActivePackage,
  footerContent,
  sectionId = "packages-section",
  bgClassName = "bg-gradient-to-b from-blue-50 to-white",
  transparentBg = false
}) => {
  // State to track which package tab is active
  const [activePackageTab, setActivePackageTab] = useState(defaultActivePackage || Object.keys(packages)[0]);
  
  // Get active package data
  const activePackage = packages[activePackageTab];
  
  // Get color classes based on package
  const getColorClass = (type, color) => {
    const colorMap = {
      blue: {
        bg: 'bg-[#155DFC]',
        bgLight: 'bg-[#7394D3]/20',
        bgHover: 'hover:bg-[#155DFC]/90',
        text: 'text-[#155DFC]',
        border: 'border-[#155DFC]',
        hoverBg: 'hover:bg-[#7394D3]/20',
        hoverBorder: 'hover:border-[#155DFC]'
      },
      green: {
        bg: 'bg-green-600',
        bgLight: 'bg-green-50',
        bgHover: 'hover:bg-green-700',
        text: 'text-green-600',
        border: 'border-green-600',
        hoverBg: 'hover:bg-green-50',
        hoverBorder: 'hover:border-green-600'
      },
      purple: {
        bg: 'bg-[#6C31DF]',
        bgLight: 'bg-[#EBE1FF]',
        bgHover: 'hover:bg-[#5B28BE]',
        text: 'text-[#6C31DF]',
        border: 'border-[#6C31DF]',
        hoverBg: 'hover:bg-[#EBE1FF]',
        hoverBorder: 'hover:border-[#6C31DF]'
      },
      amber: {
        bg: 'bg-amber-600',
        bgLight: 'bg-amber-50',
        bgHover: 'hover:bg-amber-700',
        text: 'text-amber-600',
        border: 'border-amber-600',
        hoverBg: 'hover:bg-amber-50',
        hoverBorder: 'hover:border-amber-600'
      },
      red: {
        bg: 'bg-red-600',
        bgLight: 'bg-red-50',
        bgHover: 'hover:bg-red-700',
        text: 'text-red-600',
        border: 'border-red-600',
        hoverBg: 'hover:bg-red-50',
        hoverBorder: 'hover:border-red-600'
      },
      indigo: {
        bg: 'bg-indigo-600',
        bgLight: 'bg-indigo-50',
        bgHover: 'hover:bg-indigo-700',
        text: 'text-indigo-600',
        border: 'border-indigo-600',
        hoverBg: 'hover:bg-indigo-50',
        hoverBorder: 'hover:border-indigo-600'
      }
    };
    
    return colorMap[color] ? colorMap[color][type] : colorMap.blue[type];
  };

  return (
    <SectionContainer id={sectionId} className={`section-spacing-lg ${bgClassName} relative overflow-hidden`} transparentBg={transparentBg}>
      {/* Decorative Elements - only if not transparent */}
      {!transparentBg && (
        <>
          <div className="hidden lg:block absolute -right-20 top-40 w-80 h-80 bg-blue-50 rounded-full opacity-50 blur-3xl -z-10"></div>
          <div className="hidden lg:block absolute -left-20 bottom-40 w-60 h-60 bg-blue-50 rounded-full opacity-50 blur-2xl -z-10"></div>
        </>
      )}
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        {(title || subtitle || description) && (
          <div className="text-center mb-16 relative">
            {subtitle && (
              <div className="inline-block px-3 py-1 bg-[#7394D3]/20 text-[#155DFC] text-sm font-medium rounded-full mb-4">
                {subtitle}
              </div>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E293C]">{title}</h2>
            )}
            <div className="w-20 h-1 bg-[#155DFC] mx-auto mb-6"></div>
            {description && (
              <p className="text-lg text-[#333945] max-w-3xl mx-auto font-medium">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Package Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(packages).map(([key, pkg]) => (
            <button
              key={key}
              className={`px-6 py-4 rounded-xl transition-all duration-300 focus:outline-none flex items-center gap-3 ${
                activePackageTab === key
                  ? `${getColorClass('bg', pkg.color)} text-white shadow-lg`
                  : `${getColorClass('bgLight', pkg.color)} ${getColorClass('text', pkg.color)} hover:shadow-md`
              }`}
              onClick={() => setActivePackageTab(key)}
            >
              <div className={`${activePackageTab === key ? 'bg-white/20' : 'bg-white'} p-2 rounded-lg`}>
                {React.cloneElement(pkg.icon, { 
                  className: `h-6 w-6 ${activePackageTab === key ? 'text-white' : getColorClass('text', pkg.color)}` 
                })}
              </div>
              <div className="text-left">
                <div className="font-semibold">{pkg.title}</div>
                {pkg.funnelStage && (
                  <div className={`text-xs ${activePackageTab === key ? 'text-white/80' : 'text-gray-600'}`}>
                    {pkg.funnelStage}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Active Package Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Content */}
            <div className="lg:w-1/2 p-8 lg:p-10">
              <div className="mb-6 flex items-center">
                <div className={`h-10 w-1.5 ${getColorClass('bg', activePackage.color)} rounded mr-3`}></div>
                <div>
                  {activePackage.funnelStage && (
                    <span className={`inline-block px-3 py-1 ${getColorClass('bgLight', activePackage.color)} ${getColorClass('text', activePackage.color)} text-xs font-medium rounded-full mb-1`}>
                      {activePackage.funnelStage}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900">{activePackage.title}</h3>
                </div>
              </div>
              
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">{activePackage.description}</p>
              
              {activePackage.benefits && activePackage.benefits.length > 0 && (
                <>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Perfect For:</h4>
                  <ul className="mb-8 space-y-4">
                    {activePackage.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start bg-gray-50 p-3 rounded-lg shadow-sm transition-transform duration-300 hover:transform hover:scale-102">
                        <span className={`p-1 rounded-full ${getColorClass('bgLight', activePackage.color)} ${getColorClass('text', activePackage.color)} mr-3 flex-shrink-0`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                          </svg>
                        </span>
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              
              {/* Features or Additional Content */}
              {activePackage.features && activePackage.features.length > 0 && (
                <>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                  <ul className="mb-8 space-y-4">
                    {activePackage.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className={`p-1 rounded-full ${getColorClass('bgLight', activePackage.color)} ${getColorClass('text', activePackage.color)} mr-3 flex-shrink-0`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                          </svg>
                        </span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4">
                {activePackage.link && (
                  <a 
                    href={activePackage.link} 
                    className={`inline-flex items-center justify-center ${getColorClass('bg', activePackage.color)} text-white px-6 py-3 rounded-lg font-medium ${getColorClass('bgHover', activePackage.color)} transition-all duration-300 shadow-md hover:shadow-lg`}
                  >
                    {activePackage.primaryCta || "Explore This Package"}
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </a>
                )}
                {activePackage.secondaryLink && (
                  <a 
                    href={activePackage.secondaryLink} 
                    className={`inline-flex items-center justify-center border ${getColorClass('border', activePackage.color)} ${getColorClass('text', activePackage.color)} px-6 py-3 rounded-lg font-medium ${getColorClass('hoverBg', activePackage.color)} transition-all duration-300`}
                  >
                    {activePackage.secondaryCta || "Book a Consultation"}
                  </a>
                )}
                {!activePackage.secondaryLink && activePackage.link && (
                  <a 
                    href="/contact" 
                    className={`inline-flex items-center justify-center border ${getColorClass('border', activePackage.color)} ${getColorClass('text', activePackage.color)} px-6 py-3 rounded-lg font-medium ${getColorClass('hoverBg', activePackage.color)} transition-all duration-300`}
                  >
                    Book a Consultation
                  </a>
                )}
              </div>
            </div>
            
            {/* Right Image */}
            <div className="lg:w-1/2 relative">
              <div className={`absolute inset-0 opacity-20 mix-blend-multiply bg-gradient-to-r ${
                activePackage.color === 'blue' ? 'from-blue-600 to-blue-400' : 
                activePackage.color === 'green' ? 'from-green-600 to-green-400' : 
                activePackage.color === 'purple' ? 'from-purple-600 to-purple-400' :
                'from-blue-600 to-blue-400'
              }`}></div>
              
              {/* YouTube Video Container */}
              <div className="relative w-full h-full min-h-[400px]">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${activePackage.videoId}?rel=0&modestbranding=1`}
                  title={`${activePackage.title} Video`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer content - e.g. Full Funnel Strategy */}
        {footerContent && (
          <div className="bg-white rounded-2xl p-8 lg:p-10 border border-blue-100 mt-12 shadow-xl relative z-10 transform transition-all duration-500 hover:shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
              <div className="md:w-2/3">
                {footerContent.subtitle && (
                  <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-3">
                    {footerContent.subtitle}
                  </div>
                )}
                {footerContent.title && (
                  <h3 className="text-2xl font-bold text-gray-900 mb-5">{footerContent.title}</h3>
                )}
                {footerContent.description && (
                  <p className="text-lg text-gray-700 mb-5 leading-relaxed">
                    {footerContent.description}
                  </p>
                )}
                
                {/* Visualization if provided */}
                {footerContent.visualization && (
                  <div className="flex justify-between items-center my-8 px-4">
                    {footerContent.visualization}
                  </div>
                )}
                
                {footerContent.additionalDescription && (
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {footerContent.additionalDescription}
                  </p>
                )}
                
                {footerContent.buttonLink && footerContent.buttonText && (
                  <a 
                    href={footerContent.buttonLink} 
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-xl text-base font-medium hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    {footerContent.buttonText}
                    <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </a>
                )}
              </div>
              
              {/* Right side content (card or custom component) */}
              {footerContent.sideContent && (
                <div className="md:w-1/3 relative">
                  <div className="absolute -z-10 w-full h-full bg-blue-100 rounded-2xl -bottom-3 -right-3 opacity-50"></div>
                  {footerContent.sideContent}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </SectionContainer>
  );
};

PackageTabsSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  packages: PropTypes.object.isRequired,
  defaultActivePackage: PropTypes.string,
  footerContent: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    additionalDescription: PropTypes.string,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
    visualization: PropTypes.node,
    sideContent: PropTypes.node
  }),
  sectionId: PropTypes.string,
  bgClassName: PropTypes.string,
  transparentBg: PropTypes.bool
};

export default PackageTabsSection; 