import React from 'react';
import SectionContainer from '../../ui/SectionContainer';
import { Link } from 'react-router-dom';

/**
 * Optimized PackageSelectorSection component - helps users decide which package is right for them
 */
const PackageSelectorSection = () => {
  // Define package scenarios grouped by package type for color coordination
  const packageScenarios = {
    leadGeneration: [
      {
        challenge: "Low website traffic and lead generation",
        description: "Our Lead Generation package helps attract more qualified prospects.",
        link: "/packages/lead-generation"
      },
      {
        challenge: "Need to attract more qualified prospects",
        description: "Target the right audience with content that attracts relevant leads.",
        link: "/packages/lead-generation"
      }
    ],
    conversionBooster: [
      {
        challenge: "Good traffic but low conversion rates",
        description: "Our Conversion Booster turns existing audience into paying clients.",
        link: "/packages/conversion-booster"
      },
      {
        challenge: "High bounce rates on marketing content",
        description: "Create compelling content that keeps prospects engaged longer.",
        link: "/packages/conversion-booster"
      }
    ],
    authorityBuilder: [
      {
        challenge: "Need to establish industry credibility",
        description: "Build lasting trust and become the go-to expert in your market.",
        link: "/packages/authority-builder"
      },
      {
        challenge: "Struggling to differentiate from competitors",
        description: "Highlight your unique expertise and value through thought leadership.",
        link: "/packages/authority-builder"
      }
    ]
  };

  return (
    <SectionContainer bgColor="bg-gray-50" className="section-spacing-lg">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Find Your Match
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Not Sure Which Package You Need?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Identify your primary business challenge below to find the package that best addresses your needs.
          </p>
        </div>

        {/* Scenario Cards Grid - Organized by Package Type */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Lead Generation Column - Blue */}
          <div>
            <div className="bg-blue-600 text-white p-4 rounded-t-xl text-center">
              <h3 className="font-bold text-xl">Lead Generation Mastery</h3>
            </div>
            <div className="space-y-6 mt-6">
              {packageScenarios.leadGeneration.map((scenario, index) => (
                <div 
                  key={`lead-${index}`} 
                  className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-blue-50 p-5">
                    <h3 className="font-bold text-gray-900 text-lg">
                      {scenario.challenge}
                    </h3>
                  </div>
                  <div className="bg-white p-5">
                    <p className="text-gray-700 mb-4">
                      {scenario.description}
                    </p>
                    <Link 
                      to={scenario.link} 
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                    >
                      Learn more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conversion Booster Column - Green */}
          <div>
            <div className="bg-green-600 text-white p-4 rounded-t-xl text-center">
              <h3 className="font-bold text-xl">Conversion Booster</h3>
            </div>
            <div className="space-y-6 mt-6">
              {packageScenarios.conversionBooster.map((scenario, index) => (
                <div 
                  key={`conversion-${index}`} 
                  className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-green-50 p-5">
                    <h3 className="font-bold text-gray-900 text-lg">
                      {scenario.challenge}
                    </h3>
                  </div>
                  <div className="bg-white p-5">
                    <p className="text-gray-700 mb-4">
                      {scenario.description}
                    </p>
                    <Link 
                      to={scenario.link} 
                      className="inline-flex items-center text-green-600 font-medium hover:text-green-700"
                    >
                      Learn more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Authority Builder Column - Purple */}
          <div>
            <div className="bg-purple-600 text-white p-4 rounded-t-xl text-center">
              <h3 className="font-bold text-xl">Authority Builder</h3>
            </div>
            <div className="space-y-6 mt-6">
              {packageScenarios.authorityBuilder.map((scenario, index) => (
                <div 
                  key={`authority-${index}`} 
                  className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-purple-50 p-5">
                    <h3 className="font-bold text-gray-900 text-lg">
                      {scenario.challenge}
                    </h3>
                  </div>
                  <div className="bg-white p-5">
                    <p className="text-gray-700 mb-4">
                      {scenario.description}
                    </p>
                    <Link 
                      to={scenario.link} 
                      className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700"
                    >
                      Learn more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-blue-50 rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Still not sure which package is right for you?
          </h3>
          <p className="text-gray-700 mb-4">
            Schedule a free consultation and our team will analyze your specific needs and recommend the best approach.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Expert Recommendation
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
};

export default PackageSelectorSection; 