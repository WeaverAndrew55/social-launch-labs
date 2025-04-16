import React, { useState } from 'react';
import { MegaphoneIcon, ArrowTrendingUpIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import SectionContainer from '../../ui/SectionContainer';

/**
 * BaseTierCardsSection - Base component for package-specific tier cards
 * Accepts props for customization while maintaining consistent functionality
 */
const BaseTierCardsSection = ({
  packages,
  tierStyles,
  tierVideoContent,
  defaultVideoContent,
  colors = {
    primary: 'blue',
    secondary: 'sky',
    tertiary: 'cyan'
  }
}) => {
  const [selectedTier, setSelectedTier] = useState(null);
  const [activeTab, setActiveTab] = useState('features');

  // Handle container click to deselect tier
  const handleContainerClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedTier(null);
    }
  };

  // Handle tier button click
  const handleTierClick = (e, key) => {
    e.stopPropagation();
    setSelectedTier(selectedTier === key ? null : key);
  };

  return (
    <SectionContainer className="py-12">
      <div className="container mx-auto px-4" onClick={handleContainerClick}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Package Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {Object.entries(packages).map(([key, pkg]) => (
                <div
                  key={key}
                  onClick={(e) => handleTierClick(e, key)}
                  role="button"
                  tabIndex="0"
                  onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && handleTierClick(e, key)}
                  className={`relative p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                    selectedTier === key
                      ? `${tierStyles[key].selectedBg} text-white shadow-lg`
                      : `bg-white text-gray-900 border border-gray-200/80 hover:border-gray-300 shadow-sm hover:shadow-md ${tierStyles[key].hoverBg}`
                  }`}
                >
                  <div className="flex flex-col items-center text-center mt-3">
                    <div className={`p-3 rounded-xl mb-4 transition-colors ${
                      selectedTier === key 
                        ? 'bg-white/20' 
                        : `${tierStyles[key].iconBg} ${tierStyles[key].iconColor} group-hover:bg-opacity-75`
                    }`}>
                      {pkg.icon}
                    </div>
                    
                    <div className="space-y-3">
                      <span className={`block text-xs font-semibold uppercase tracking-wider mb-1 ${selectedTier === key ? 'text-white/60' : 'text-gray-400'}`}>
                        {tierStyles[key].badge}
                      </span>
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
                        <div className="pt-3 border-t border-gray-100 text-center">
                          <a
                            href="#"
                            onClick={(e) => { e.preventDefault(); handleTierClick(e, key); }}
                            className={`inline-block py-2.5 font-medium text-sm transition-colors hover:underline ${
                              key === 'essentials' ? `text-${colors.primary}-600` :
                              key === 'growth' ? `text-${colors.secondary}-600` :
                              `text-${colors.tertiary}-600`
                            }`}
                          >
                            {key === 'essentials' ? 'Explore Essentials Tier' :
                             key === 'growth' ? 'Explore Growth Tier' :
                             'Explore Authority Tier'}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Content Area */}
            <div>
              {selectedTier ? (
                <div className={`bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border-2 overflow-hidden ${
                  selectedTier === 'essentials' ? `border-${colors.primary}-100` :
                  selectedTier === 'growth' ? `border-${colors.secondary}-100` :
                  `border-${colors.tertiary}-100`
                }`}>
                  <div className="border-b border-gray-100">
                    <div className="flex">
                      <button
                        onClick={() => setActiveTab('features')}
                        className={`flex-1 px-6 py-3 text-sm font-medium ${
                          activeTab === 'features'
                            ? `${
                                selectedTier === 'essentials' ? `text-${colors.primary}-600 border-${colors.primary}-600` :
                                selectedTier === 'growth' ? `text-${colors.secondary}-600 border-${colors.secondary}-600` :
                                `text-${colors.tertiary}-600 border-${colors.tertiary}-600`
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
                                selectedTier === 'essentials' ? `text-${colors.primary}-600 border-${colors.primary}-600` :
                                selectedTier === 'growth' ? `text-${colors.secondary}-600 border-${colors.secondary}-600` :
                                `text-${colors.tertiary}-600 border-${colors.tertiary}-600`
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
                                selectedTier === 'essentials' ? `text-${colors.primary}-600 border-${colors.primary}-600` :
                                selectedTier === 'growth' ? `text-${colors.secondary}-600 border-${colors.secondary}-600` :
                                `text-${colors.tertiary}-600 border-${colors.tertiary}-600`
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
                              selectedTier === 'essentials' ? `text-${colors.primary}-600` :
                              selectedTier === 'growth' ? `text-${colors.secondary}-600` :
                              `text-${colors.tertiary}-600`
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
                            selectedTier === 'essentials' ? `bg-${colors.primary}-50` :
                            selectedTier === 'growth' ? `bg-${colors.secondary}-50` :
                            `bg-${colors.tertiary}-50`
                          }`}>
                            <h4 className="font-medium text-gray-900 mb-2">{video.title}</h4>
                            <p className="text-sm text-gray-600">{video.excerpt}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className={`rounded-lg p-6 ${
                        selectedTier === 'essentials' ? `bg-${colors.primary}-50` :
                        selectedTier === 'growth' ? `bg-${colors.secondary}-50` :
                        `bg-${colors.tertiary}-50`
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
                    )}

                    <div className="mt-6 flex gap-4">
                      <a
                        href={packages[selectedTier].link}
                        className={`flex-1 px-6 py-3 rounded-lg font-medium text-center text-white transition-colors ${
                          selectedTier === 'essentials' ? `bg-${colors.primary}-600 hover:bg-${colors.primary}-700` :
                          selectedTier === 'growth' ? `bg-${colors.secondary}-600 hover:bg-${colors.secondary}-700` :
                          `bg-${colors.tertiary}-600 hover:bg-${colors.tertiary}-700`
                        }`}
                      >
                        Get {packages[selectedTier].title} Package
                      </a>
                      <a
                        href="/contact"
                        className={`flex-1 px-6 py-3 rounded-lg font-medium text-center transition-colors border ${
                          selectedTier === 'essentials' ? `border-${colors.primary}-600 text-${colors.primary}-600 hover:bg-${colors.primary}-50` :
                          selectedTier === 'growth' ? `border-${colors.secondary}-600 text-${colors.secondary}-600 hover:bg-${colors.secondary}-50` :
                          `border-${colors.tertiary}-600 text-${colors.tertiary}-600 hover:bg-${colors.tertiary}-50`
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
                          selectedTier === 'essentials' ? `bg-${colors.primary}-50` :
                          selectedTier === 'growth' ? `bg-${colors.secondary}-50` :
                          `bg-${colors.tertiary}-50`
                        ) : `bg-${colors.primary}-50`
                      }`}>
                        <svg className={`w-5 h-5 ${
                          selectedTier ? (
                            selectedTier === 'essentials' ? `text-${colors.primary}-600` :
                            selectedTier === 'growth' ? `text-${colors.secondary}-600` :
                            `text-${colors.tertiary}-600`
                          ) : `text-${colors.primary}-600`
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

export default BaseTierCardsSection;