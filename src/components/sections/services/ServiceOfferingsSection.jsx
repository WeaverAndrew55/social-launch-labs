import React from 'react';
import PropTypes from 'prop-types';
import SectionContainer from '../../ui/SectionContainer';
import Card from '../../ui/Card';

/**
 * Service Offerings section component for the Services page
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {string} props.description - Section description
 * @param {Array} props.offerings - Array of service offerings
 * @param {string} props.offerings[].title - Service title
 * @param {string} props.offerings[].description - Service description
 * @param {Array} props.offerings[].features - Service features
 * @param {string} props.offerings[].icon - Service icon name
 */
const ServiceOfferingsSection = ({
  title = "Our Comprehensive Services",
  description = "We offer a suite of tailored social media services designed to help service-based businesses achieve tangible results.",
  offerings = [
    {
      title: "Strategy Development",
      description: "A comprehensive social media strategy aligned with your business goals and target audience.",
      features: [
        "In-depth audience analysis",
        "Competitive landscape review",
        "Channel selection and optimization",
        "Content strategy development",
        "KPI establishment and tracking plan"
      ],
      icon: "light-bulb"
    },
    {
      title: "Content Framework",
      description: "A structured approach to content that establishes your authority while driving engagement and leads.",
      features: [
        "Content pillar development",
        "Authority-building frameworks",
        "Engagement-optimized templates",
        "Repurposing strategies",
        "Calls-to-action that convert"
      ],
      icon: "document-text"
    },
    {
      title: "Lead Generation Systems",
      description: "Proven frameworks to attract and capture qualified leads from your ideal target market.",
      features: [
        "Lead magnet development",
        "Funnel construction",
        "Audience targeting strategies",
        "Conversion path setup",
        "Lead qualification processes"
      ],
      icon: "users"
    },
    {
      title: "Conversion Optimization",
      description: "Data-driven approaches to increase your conversion rates and client acquisition.",
      features: [
        "Social proof integration",
        "Messaging refinement",
        "Objection handling frameworks",
        "A/B testing implementation",
        "Follow-up sequence optimization"
      ],
      icon: "chart-bar"
    }
  ]
}) => {
  // Map of icon names to SVG paths
  const iconMap = {
    'light-bulb': (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    'document-text': (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    'users': (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    'chart-bar': (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    'default': (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  };

  return (
    <SectionContainer bgColor="bg-white" id="service-offerings">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-neutral-800">
          {title}
        </h2>
        <p className="max-w-3xl mx-auto text-neutral-600 text-lg">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {offerings.map((offering, index) => (
          <Card
            key={index}
            className="h-full shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="p-8">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-4">
                  {iconMap[offering.icon] || iconMap['default']}
                </div>
                <h3 className="text-2xl font-display font-bold text-neutral-800">
                  {offering.title}
                </h3>
              </div>
              
              <p className="text-neutral-600 mb-6">
                {offering.description}
              </p>
              
              <h4 className="font-semibold text-neutral-800 mb-3">
                What's included:
              </h4>
              
              <ul className="space-y-2">
                {offering.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
};

ServiceOfferingsSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
      icon: PropTypes.string.isRequired
    })
  )
};

export default ServiceOfferingsSection; 