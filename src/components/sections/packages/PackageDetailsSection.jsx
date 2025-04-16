import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionContainer from '../../ui/SectionContainer';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Re-import icons (or ensure they are defined elsewhere)
const WhoIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
const BenefitsIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const CheckIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>;

/**
 * Optimized PackageDetailsSection component using a single-column card layout
 * inspired by Google/Apple design principles for clarity.
 */
const PackageDetailsSection = ({ transparentBg }) => {
  const packages = [
    {
      id: 'lead-gen',
      label: 'PACKAGE 1',
      name: 'Lead Generation Mastery',
      nameColor: 'bg-gradient-to-r from-[#0036C2] to-[#155DFC]',
      description: 'Fill your pipeline with qualified leads eager to learn about your solutions.',
      ctaText: 'Start Generating Leads',
      ctaLink: '/packages/lead-generation-sales',
      ctaGradient: 'bg-gradient-to-r from-[#155DFC] to-[#7394D3]',
      ctaHoverShadow: 'hover:shadow-blue-300/20',
      themeColor: 'text-[#155DFC]',
      whoFor: 'Businesses struggling to generate enough quality leads through social media and content marketing. Ideal if your pipeline feels empty or inconsistent.',
      benefits: [
        { title: 'Attract More Prospects', desc: 'Consistent lead generation through strategic content and engagement.' },
        { title: 'Increase Relevance', desc: 'Target ideal customers with content that addresses their specific needs.' },
        { title: 'Build Your Pipeline', desc: 'Create a consistent flow of opportunities to grow your business.' },
      ]
    },
    {
      id: 'conversion',
      label: 'PACKAGE 2',
      name: 'Conversion Booster',
      nameColor: 'bg-gradient-to-r from-[#16A34A] to-[#22C55E]',
      description: 'Turn your engaged audience into paying clients with proven conversion strategies.',
      ctaText: 'Boost Conversions',
      ctaLink: '/packages/conversion-booster-sales',
      ctaGradient: 'bg-gradient-to-r from-[#22C55E] to-[#4ADE80]',
      ctaHoverShadow: 'hover:shadow-green-300/20',
      themeColor: 'text-[#22C55E]',
      whoFor: 'Businesses with audience engagement but low conversion rates who need to turn more of their traffic into customers.',
      benefits: [
        { title: 'Accelerate Sales', desc: 'Shorten your sales cycle with strategic content that removes barriers.' },
        { title: 'Higher Conversion Rates', desc: 'Turn more prospects into customers with proven conversion strategies.' },
        { title: 'Maximize ROI', desc: 'Get more value from your existing marketing investments and traffic.' },
      ]
    },
    {
      id: 'authority',
      label: 'PACKAGE 3',
      name: 'Authority Builder',
      nameColor: 'bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6]',
      description: 'Build industry authority and attract high-value opportunities.',
      ctaText: 'Build Authority',
      ctaLink: '/packages/authority-builder-sales',
      ctaGradient: 'bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]',
      ctaHoverShadow: 'hover:shadow-purple-300/20',
      themeColor: 'text-[#8B5CF6]',
      whoFor: 'Established businesses looking to dominate their market and build long-term brand value through thought leadership.',
      benefits: [
        { title: 'Stand Out', desc: 'Differentiate from competitors as the recognized expert in your field.' },
        { title: 'Build Trust', desc: 'Create deeper connections with audiences through authentic expertise.' },
        { title: 'Long-Term Growth', desc: 'Generate referrals, partnerships, and opportunities that come with leadership status.' },
      ]
    }
  ];

  // State for dynamic arrow color - Initialize with first package's theme
  const [currentArrowColor, setCurrentArrowColor] = useState(packages[0].themeColor);

  // Handler for slide change
  const handleSlideChange = (swiper) => {
    // Use realIndex due to loop=true
    const currentPackage = packages[swiper.realIndex];
    setCurrentArrowColor(currentPackage.themeColor);
  };

  return (
    <SectionContainer transparentBg={transparentBg} id="packages" className="py-16">
      <div className="max-w-5xl mx-auto relative px-10 md:px-24">
        {/* Section Header - Adjusted Hierarchy, Increased bottom margin */}
        <div className="text-center mb-20">
          {/* De-emphasized Pill */}
          <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
            Our Packages
          </div>
          {/* Title - Increased bottom margin */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Specialized Service Packages</h2>
          {/* De-emphasized Subtitle - Changed to text-lg */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the package that aligns with your specific business goals and marketing challenges.
          </p>
        </div>
        
        {/* Packages Carousel */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: '.package-swiper-next',
            prevEl: '.package-swiper-prev',
          }}
          pagination={{ clickable: true }}
          loop={true}
          autoHeight={true}
          onSlideChange={handleSlideChange}
          className="pb-12"
        >
          {packages.map((pkg) => (
            <SwiperSlide key={pkg.id} style={{ height: 'auto' }}>
              {/* Main card wrapper: Added full subtle themed border */}
              <div 
                className={`rounded-xl shadow-sm border h-full flex flex-col overflow-hidden 
                            ${pkg.id === 'lead-gen' ? 'border-blue-500/30' : 
                              pkg.id === 'conversion' ? 'border-green-500/30' : 
                              pkg.id === 'authority' ? 'border-purple-500/30' : 'border-gray-200/90'}`
              }>
                {/* Top Section: Themed Background + Padding */}
                <div 
                  className={`p-6 md:p-8 text-center 
                              ${pkg.id === 'lead-gen' ? 'bg-blue-50' : 
                                pkg.id === 'conversion' ? 'bg-green-50' : 
                                pkg.id === 'authority' ? 'bg-purple-50' : 'bg-gray-50'}`
                }>
                  {/* De-emphasized Label */}
                  <p className="text-gray-400 text-[0.7rem] font-medium tracking-wider uppercase mb-3">{pkg.label}</p>
                  {/* Name - Increased font size, added bottom margin */}
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">
                    <span className={`bg-clip-text text-transparent ${pkg.nameColor}`}>{pkg.name}</span>
                  </h3>
                  {/* De-emphasized Description */}
                  <p className="text-gray-500 text-base md:text-lg leading-relaxed">{pkg.description}</p>
                </div>

                {/* Remainder container: White Background + Padding (Removed top padding) */}
                <div className="bg-white pb-6 px-6 md:pb-8 md:px-8 flex-grow flex flex-col">
                  {/* Divider - REMOVED */}
                  {/* <hr className={`mb-6 ${pkg.id === 'lead-gen' ? 'border-blue-500/30' : pkg.id === 'conversion' ? 'border-green-500/30' : pkg.id === 'authority' ? 'border-purple-500/30' : 'border-gray-200'}`} /> */}

                  {/* Details Section: Removed border-t and color */}
                  <div 
                    className={`space-y-6 flex-grow pt-6` 
                  }>
                    {/* Who It's For */}
                    <div>
                      <div className="flex items-center mb-3">
                        <span className={`mr-3 ${pkg.themeColor}`}><WhoIcon /></span>
                        <h4 className={`text-lg font-semibold ${pkg.themeColor}`}>Who It's For</h4>
                      </div>
                      <p className="text-gray-600 text-base leading-relaxed pl-9">{pkg.whoFor}</p>
                    </div>

                    {/* Key Benefits */}
                    <div>
                      <div className="flex items-center mb-3">
                        <span className={`mr-3 ${pkg.themeColor}`}><BenefitsIcon /></span>
                        <h4 className={`text-lg font-semibold ${pkg.themeColor}`}>Key Benefits</h4> 
                      </div>
                      <ul className="space-y-3 pl-9">
                        {pkg.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <span className={`mr-2 mt-1 ${pkg.themeColor} flex-shrink-0`}><CheckIcon /></span>
                            <span className="text-gray-700 text-base leading-relaxed">
                              <span className="font-medium text-gray-800">{benefit.title}:</span> {benefit.desc}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Divider - Restore themed color, keep vertical margin */}
                  <hr className={`my-6 ${pkg.id === 'lead-gen' ? 'border-blue-500/30' : pkg.id === 'conversion' ? 'border-green-500/30' : pkg.id === 'authority' ? 'border-purple-500/30' : 'border-gray-200'}`} />

                  {/* CTA Button Section */}
                  <div className="mt-6 text-center">
                    <Link 
                      to={pkg.ctaLink}
                      className={`inline-flex items-center justify-center ${pkg.ctaGradient} text-white px-6 py-2.5 rounded-lg text-base font-medium ${pkg.ctaHoverShadow} transition-all duration-300 transform hover:scale-105 shadow-sm`}
                    >
                      {pkg.ctaText}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div> 
              </div> 
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows - Significantly Further Away & Dynamic Color */}
        <button 
          className={`package-swiper-prev absolute top-1/2 -translate-y-1/2 -left-10 md:-left-24 z-10 ${currentArrowColor} hover:text-gray-600 transition-colors duration-200 cursor-pointer`}
        >
          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button 
          className={`package-swiper-next absolute top-1/2 -translate-y-1/2 -right-10 md:-right-24 z-10 ${currentArrowColor} hover:text-gray-600 transition-colors duration-200 cursor-pointer`}
        >
          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </SectionContainer>
  );
};

export default PackageDetailsSection;