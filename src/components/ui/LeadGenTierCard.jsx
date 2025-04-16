import React, { useState } from 'react';
import Button from './Button';

const LeadGenTierCard = ({ 
  tier, // 1, 2, or 3
  title,
  subtitle,
  description,
  price,
  originalPrice,
  savings,
  keyPoints,
  features,
  inclusions,
  ctaText,
  ctaLink
}) => {
  const [activeTab, setActiveTab] = useState('inclusions');
  
  // Map tier number to tier name
  const tierNames = {
    1: "Essentials",
    2: "Professional",
    3: "Authority"
  };
  
  // Map tier to color scheme
  const tierColors = {
    1: "blue",
    2: "purple",
    3: "indigo"
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-all hover:shadow-xl">
      {/* Tier Banner */}
      <div className={`bg-${tierColors[tier]}-50 text-${tierColors[tier]}-700 text-center py-2 border-b border-gray-200`}>
        <span className="text-sm font-medium">Tier {tier}: {tierNames[tier]}</span>
      </div>
      
      {/* Main Content */}
      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column - Title and Description */}
          <div className="md:w-7/12">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <h3 className="text-lg text-gray-700 mb-4">{subtitle}</h3>
            <p className="text-gray-600 mb-6">{description}</p>
          </div>
          
          {/* Right Column - Pricing */}
          <div className="md:w-5/12">
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="text-right">
                {originalPrice && (
                  <span className="text-xs text-gray-500 line-through block">${originalPrice}</span>
                )}
                <span className="text-3xl font-bold text-black block mb-1">${price}</span>
                {savings && (
                  <span className="text-green-600 text-xs">You save: ${savings} ({Math.round((savings/originalPrice)*100)}% off)</span>
                )}
              </div>
            </div>
            
            {/* Key Features */}
            <div className="space-y-3">
              {keyPoints.map((point, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-sm mb-1">{point.title}</h4>
                  <p className="text-gray-600 text-xs">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="mt-6">
          <Button 
            variant="primary" 
            size="lg" 
            href={ctaLink}
            className="w-full"
          >
            {ctaText}
          </Button>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex border-t border-b border-gray-200 mt-6">
          <button 
            onClick={() => setActiveTab('inclusions')}
            className={`flex-1 py-3 px-4 text-sm text-center font-medium transition-all ${activeTab === 'inclusions' ? `bg-${tierColors[tier]}-50 text-${tierColors[tier]}-700 border-t-2 border-${tierColors[tier]}-600` : 'hover:bg-gray-50'}`}
          >
            What's Included
          </button>
          <button 
            onClick={() => setActiveTab('bestFor')}
            className={`flex-1 py-3 px-4 text-sm text-center font-medium transition-all ${activeTab === 'bestFor' ? `bg-${tierColors[tier]}-50 text-${tierColors[tier]}-700 border-t-2 border-${tierColors[tier]}-600` : 'hover:bg-gray-50'}`}
          >
            Best For
          </button>
          <button 
            onClick={() => setActiveTab('compare')}
            className={`flex-1 py-3 px-4 text-sm text-center font-medium transition-all ${activeTab === 'compare' ? `bg-${tierColors[tier]}-50 text-${tierColors[tier]}-700 border-t-2 border-${tierColors[tier]}-600` : 'hover:bg-gray-50'}`}
          >
            Compare Tiers
          </button>
        </div>
        
        {/* Tab Content */}
        <div className="py-4">
          {/* What's Included */}
          {activeTab === 'inclusions' && (
            <div className="space-y-4">
              {inclusions.map((category, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <span className={`w-6 h-6 bg-${tierColors[tier]}-600 rounded-full flex items-center justify-center text-white text-sm mr-2`}>
                      {index + 1}
                    </span>
                    {category.name}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-8">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <svg className={`w-5 h-5 text-${tierColors[tier]}-600 mt-0.5 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-sm">{typeof item === 'object' && item.title ? item.title : item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Best For */}
          {activeTab === 'bestFor' && (
            <div className="space-y-4">
              <p className="text-gray-700 mb-4">This package is ideal for:</p>
              <ul className="space-y-3">
                {features.bestFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className={`w-5 h-5 text-${tierColors[tier]}-600 mt-0.5 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Compare Tiers */}
          {activeTab === 'compare' && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead>
                  <tr>
                    <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                    <th className="py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Tier 1<br/>Essentials</th>
                    <th className="py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Tier 2<br/>Professional</th>
                    <th className="py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Tier 3<br/>Authority</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {features.comparison.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-2 px-2">{item.feature}</td>
                      <td className="py-2 px-2 text-center">{renderTierAvailability(item.tier1)}</td>
                      <td className="py-2 px-2 text-center">{renderTierAvailability(item.tier2)}</td>
                      <td className="py-2 px-2 text-center">{renderTierAvailability(item.tier3)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Helper function to render tier availability
const renderTierAvailability = (value) => {
  if (value === true) {
    return <svg className="w-5 h-5 text-green-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
  } else if (value === false) {
    return <svg className="w-5 h-5 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  } else {
    return value;
  }
};

export default LeadGenTierCard; 