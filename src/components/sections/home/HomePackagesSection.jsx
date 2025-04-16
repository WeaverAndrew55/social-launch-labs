import React from 'react';
import PropTypes from 'prop-types';
import { MegaphoneIcon, ArrowTrendingUpIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import PackageTabsSection from '../../ui/PackageTabsSection';

/**
 * HomePackagesSection component
 * Uses the reusable PackageTabsSection to display Social Launch Labs' packages on the homepage
 */
const HomePackagesSection = ({
  title = "Strategic Growth Solutions",
  subtitle = "OUR PACKAGES",
  description = "Select the perfect package to achieve your specific business growth objectives, each designed to address a different stage of your marketing funnel.",
  transparentBg = false
}) => {
  // Define package data
  const packages = {
    lead: {
      title: "Lead Generation",
      description: "Attract qualified leads through strategic content and social media positioning.",
      image: "https://WeaverAndrew55.github.io/SLL-Images/assets/LeadGenMaster/LeadGenMaster-1.png",
      funnelStage: "Top of Funnel",
      color: "blue",
      benefits: [
        "Businesses focused on increasing brand awareness",
        "Companies that need to build a lead pipeline",
        "Brands looking to introduce their core values",
        "Services that need more market visibility"
      ],
      link: "/packages/lead-generation-sales",
      secondaryLink: "/contact",
      primaryCta: "Learn More",
      secondaryCta: "Book a Call",
      icon: <MegaphoneIcon />,
      stageDescription: "Awareness & Lead Generation",
      videoId: "jNQXAC9IVRw"
    },
    conversion: {
      title: "Conversion Booster",
      description: "Turn prospects into paying customers with compelling mid-funnel content that builds trust, addresses objections, and encourages the decision to buy.",
      image: "https://WeaverAndrew55.github.io/SLL-Images/assets/Services/Services-2.png",
      funnelStage: "Middle of Funnel",
      color: "green",
      benefits: [
        "Businesses with traffic but low conversion rates",
        "Companies looking to optimize their sales process",
        "Brands that need to demonstrate their solutions",
        "Services with complex offerings that need explanation"
      ],
      link: "/packages/conversion-booster-sales",
      secondaryLink: "/contact",
      primaryCta: "Learn More",
      secondaryCta: "Book a Call",
      icon: <ArrowTrendingUpIcon />,
      stageDescription: "Consideration & Conversion",
      videoId: "9bZkp7q19f0"
    },
    authority: {
      title: "Authority Builder",
      description: "Position your brand as an industry leader with strategic thought leadership content that builds credibility, nurtures existing clients, and attracts premium business.",
      image: "https://WeaverAndrew55.github.io/SLL-Images/assets/Services/Services-3.png",
      funnelStage: "Bottom of Funnel",
      color: "purple",
      benefits: [
        "Established businesses looking to scale",
        "Companies that want to position as industry leaders",
        "Brands with a unique perspective to share",
        "Services targeting premium market segments"
      ],
      link: "/packages/authority-building-sales",
      secondaryLink: "/contact",
      primaryCta: "Learn More",
      secondaryCta: "Book a Call",
      icon: <ShieldCheckIcon />,
      stageDescription: "Authority & Retention",
      videoId: "dQw4w9WgXcQ"
    }
  };

  // Create the funnel visualization for the footer
  const funnelVisualization = (
    <>
      <div className="text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-100 text-blue-600 mx-auto mb-2">
          <MegaphoneIcon className="h-8 w-8" />
        </div>
        <span className="block text-sm font-medium text-gray-700">Awareness</span>
      </div>
      
      <div className="w-16 h-0.5 bg-gray-300"></div>
      
      <div className="text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-green-100 text-green-600 mx-auto mb-2">
          <ArrowTrendingUpIcon className="h-8 w-8" />
        </div>
        <span className="block text-sm font-medium text-gray-700">Conversion</span>
      </div>
      
      <div className="w-16 h-0.5 bg-gray-300"></div>
      
      <div className="text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#EBE1FF] text-[#6C31DF] mx-auto mb-2">
          <ShieldCheckIcon className="h-8 w-8" />
        </div>
        <span className="block text-sm font-medium text-gray-700">Authority</span>
      </div>
    </>
  );

  // Create the side content for the footer
  const sideContent = (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-[#7394D3]">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-[#155DFC]/10 text-[#155DFC] rounded-lg mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <h4 className="text-lg font-bold text-[#1E293C]">Data-Driven Approach</h4>
      </div>
      <p className="text-[#455064] mb-6">Our strategic approach ensures you focus your resources where they'll have the biggest impact on your business metrics.</p>
      
      <div className="flex items-center mb-4">
        <div className="p-2 bg-green-100 text-green-600 rounded-lg mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
          </svg>
        </div>
        <h4 className="text-lg font-bold text-[#1E293C]">Measurable ROI</h4>
      </div>
      <p className="text-[#455064]">Every package includes KPI tracking to measure real performance against your specific business objectives.</p>
    </div>
  );

  // Footer content configuration
  const footerContent = {
    subtitle: "Comprehensive Strategy",
    title: "Full-Funnel Approach",
    description: "You can choose the package that addresses your most pressing business need, or combine multiple packages for a comprehensive marketing strategy.",
    visualization: funnelVisualization,
    additionalDescription: "Not sure which package is right for you? Book a free strategy call and we'll help you determine the best approach for your specific business goals.",
    buttonText: "Book a Free Strategy Call",
    buttonLink: "/contact",
    sideContent: sideContent
  };

  return (
    <PackageTabsSection
      title={title}
      subtitle={subtitle}
      description={description}
      packages={packages}
      defaultActivePackage="lead"
      footerContent={footerContent}
      sectionId="packages-section"
      bgClassName={transparentBg ? "bg-transparent" : "bg-gradient-to-b from-[#B5BCC9]/10 to-white"}
      transparentBg={transparentBg}
    />
  );
};

HomePackagesSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  transparentBg: PropTypes.bool
};

export default HomePackagesSection; 