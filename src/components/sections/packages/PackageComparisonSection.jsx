import React from 'react';
import PropTypes from 'prop-types';
import SectionContainer from '../../ui/SectionContainer';
import { Link } from 'react-router-dom';

/**
 * Package Comparison section component for the Packages page
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {string} props.description - Section description
 * @param {Array} props.features - Array of features to compare
 * @param {Array} props.packages - Array of packages to compare
 */
const PackageComparisonSection = ({
  title = "Compare Our Packages",
  description = "See which package best fits your needs with our detailed comparison.",
  features = [
    { name: "Social Media Audit", description: "Comprehensive analysis of your current social media presence" },
    { name: "Strategy Development", description: "Custom strategy aligned with your business goals" },
    { name: "Content Framework", description: "Structured approach to content creation" },
    { name: "Engagement Campaigns", description: "Strategies to boost meaningful engagement" },
    { name: "Lead Magnet Creation", description: "Valuable resources to capture leads" },
    { name: "Performance Reports", description: "Regular reporting on key metrics" },
    { name: "Conversion Optimization", description: "Improving lead-to-client conversion rates" },
    { name: "Social Proof Integration", description: "Leveraging testimonials and case studies" },
    { name: "A/B Testing", description: "Testing different approaches for best results" },
    { name: "Thought Leadership Content", description: "Position yourself as an industry expert" },
    { name: "Industry Partnerships", description: "Strategic collaborations for expanded reach" },
    { name: "PR Opportunities", description: "Media exposure and public relations" }
  ],
  packages = [
    {
      name: "Lead Generation Mastery",
      price: "$1,997/mo",
      link: "/packages/lead-generation",
      features: {
        "Social Media Audit": true,
        "Strategy Development": true,
        "Content Framework": true,
        "Engagement Campaigns": true,
        "Lead Magnet Creation": true,
        "Performance Reports": true,
        "Conversion Optimization": false,
        "Social Proof Integration": false,
        "A/B Testing": false,
        "Thought Leadership Content": false,
        "Industry Partnerships": false,
        "PR Opportunities": false
      }
    },
    {
      name: "Conversion Booster",
      price: "$2,497/mo",
      link: "/packages/conversion-booster",
      popular: true,
      features: {
        "Social Media Audit": true,
        "Strategy Development": true,
        "Content Framework": true,
        "Engagement Campaigns": true,
        "Lead Magnet Creation": true,
        "Performance Reports": true,
        "Conversion Optimization": true,
        "Social Proof Integration": true,
        "A/B Testing": true,
        "Thought Leadership Content": false,
        "Industry Partnerships": false,
        "PR Opportunities": false
      }
    },
    {
      name: "Authority Builder",
      price: "$3,997/mo",
      link: "/packages/authority-builder",
      features: {
        "Social Media Audit": true,
        "Strategy Development": true,
        "Content Framework": true,
        "Engagement Campaigns": true,
        "Lead Magnet Creation": true,
        "Performance Reports": true,
        "Conversion Optimization": true,
        "Social Proof Integration": true,
        "A/B Testing": true,
        "Thought Leadership Content": true,
        "Industry Partnerships": true,
        "PR Opportunities": true
      }
    }
  ]
}) => {
  return (
    <SectionContainer bgColor="bg-neutral-50" id="package-comparison">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-neutral-800">
          {title}
        </h2>
        <p className="max-w-3xl mx-auto text-neutral-600 text-lg">
          {description}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] border-collapse">
          {/* Table Header */}
          <thead>
            <tr>
              <th className="py-4 px-6 text-left bg-neutral-100 rounded-tl-lg">
                <span className="text-neutral-700 font-semibold">Features</span>
              </th>
              
              {packages.map((pkg, index) => (
                <th 
                  key={index} 
                  className={`py-4 px-6 text-center ${pkg.popular ? 'bg-primary-100' : 'bg-neutral-100'} ${index === packages.length - 1 ? 'rounded-tr-lg' : ''}`}
                >
                  <div className="mb-1">
                    {pkg.popular && (
                      <span className="inline-block bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-bold mb-2">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <span className="block text-lg font-display font-bold text-neutral-800">
                    {pkg.name}
                  </span>
                  <span className="block text-primary-700 font-semibold mt-1">
                    {pkg.price}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          
          {/* Table Body */}
          <tbody>
            {features.map((feature, featureIndex) => (
              <tr 
                key={featureIndex} 
                className={featureIndex % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}
              >
                <td className="py-4 px-6 border-t border-neutral-200">
                  <div className="font-medium text-neutral-800">{feature.name}</div>
                  <div className="text-sm text-neutral-600">{feature.description}</div>
                </td>
                
                {packages.map((pkg, packageIndex) => (
                  <td 
                    key={packageIndex} 
                    className={`py-4 px-6 text-center border-t border-neutral-200 ${pkg.popular ? 'bg-primary-50' : ''}`}
                  >
                    {pkg.features[feature.name] ? (
                      <svg className="h-6 w-6 text-primary-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="h-6 w-6 text-neutral-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </td>
                ))}
              </tr>
            ))}
            
            {/* Action Row */}
            <tr>
              <td className="py-6 px-6 border-t border-neutral-200"></td>
              
              {packages.map((pkg, packageIndex) => (
                <td key={packageIndex} className={`py-6 px-6 text-center border-t border-neutral-200 ${pkg.popular ? 'bg-primary-50' : ''}`}>
                  <Link
                    to={pkg.link}
                    className={`inline-block px-6 py-3 rounded-md font-semibold text-sm transition duration-200 ${
                      pkg.popular 
                        ? 'bg-primary-600 text-white hover:bg-primary-700' 
                        : 'bg-neutral-200 text-neutral-800 hover:bg-neutral-300'
                    }`}
                  >
                    Learn More
                  </Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </SectionContainer>
  );
};

PackageComparisonSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ),
  packages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      popular: PropTypes.bool,
      features: PropTypes.object.isRequired
    })
  )
};

export default PackageComparisonSection; 