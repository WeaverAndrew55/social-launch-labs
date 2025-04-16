import React from 'react';
import EnhancedHeroSection from '../../sections/common/EnhancedHeroSection';

/**
 * ServicesHeroSection component
 * Hero section for the Services page using the standardized EnhancedHeroSection component
 * 
 * @param {Object} props - Component props
 * @param {Object} [props.heroOverlay] - Optional overlay information for the hero image
 */
const ServicesHeroSection = ({ heroOverlay }) => {
  // Hero content for Services page
  const heroContent = {
    title: "Video Marketing Services That Drive Real Business Growth",
    description: "From strategy to scripting & production, we provide end-to-end video marketing services designed to generate leads, boost conversions, and position you as the go-to expert in your field.",
    primaryCta: {
      text: "Book a Free Strategy Call",
      link: "/contact"
    },
    secondaryCta: {
      text: "View Service Packages",
      link: "#core-packages"
    },
    imageSrc: "https://WeaverAndrew55.github.io/SLL-Images/assets/Services/Services-Hero.png",
    aiGeneratedSrc: null
  };

  return (
    <>
      {/* Hero section with background and content */}
      <div className="relative">
        {/* Background container includes both the gradient background and the wave divider */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          {/* Modern gradient background base */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#E8F0FF] via-[#F6F9FF] to-white w-full h-full"></div>
          
          {/* Subtle geometric elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.07]">
            <div className="absolute top-[10%] right-[15%] w-[30vw] h-[30vw] max-w-[600px] max-h-[600px] rounded-full border border-[#155DFC]/20"></div>
            <div className="absolute bottom-[15%] left-[10%] w-[25vw] h-[25vw] max-w-[500px] max-h-[500px] rounded-full border border-[#7394D3]/30"></div>
            <div className="absolute top-[30%] left-[25%] w-[15vw] h-[15vw] max-w-[300px] max-h-[300px] rounded-full border border-[#155DFC]/10"></div>
          </div>
          
          {/* Layered blurred elements for depth */}
          <div className="absolute top-0 right-[10%] w-[40vw] h-[40vw] max-w-[800px] max-h-[800px] bg-[#155DFC] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.03]"></div>
          <div className="absolute bottom-0 left-[5%] w-[35vw] h-[35vw] max-w-[700px] max-h-[700px] bg-[#7394D3] rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.04]"></div>
          
          {/* Connection lines representing networks and growth - matching HomePage exactly */}
          <div className="absolute inset-0 w-full h-full opacity-[0.05]" 
               style={{
                 backgroundImage: `
                   linear-gradient(30deg, transparent 49.5%, #155DFC 49.5%, #155DFC 50.5%, transparent 50.5%),
                   linear-gradient(60deg, transparent 49.5%, #7394D3 49.5%, #7394D3 50.5%, transparent 50.5%),
                   linear-gradient(120deg, transparent 49.5%, #155DFC 49.5%, #155DFC 50.5%, transparent 50.5%)
                 `,
                 backgroundSize: '60px 60px, 70px 70px, 80px 80px'
               }}>
          </div>
          
          {/* Strategic framework abstract representation - matching HomePage exactly */}
          <div className="absolute inset-0 opacity-[0.02]"
               style={{
                 backgroundImage: `
                   linear-gradient(0deg, transparent 98%, #155DFC 98%, #155DFC 100%, transparent 100%),
                   linear-gradient(90deg, transparent 98%, #7394D3 98%, #7394D3 100%, transparent 100%)
                 `,
                 backgroundSize: '40px 40px'
               }}>
          </div>
          
          {/* Subtle diagonal elements depicting growth - matching HomePage exactly */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-[0.04]">
            <div className="absolute -bottom-[10%] -right-[10%] w-[80%] h-[60%] border-t border-l border-[#155DFC]/20 rounded-tl-[100px] transform rotate-[10deg]"></div>
            <div className="absolute -top-[10%] -left-[10%] w-[70%] h-[50%] border-b border-r border-[#7394D3]/20 rounded-br-[100px] transform rotate-[10deg]"></div>
          </div>
        </div>
        
        <EnhancedHeroSection
          title={heroContent.title}
          description={heroContent.description}
          primaryCta={heroContent.primaryCta}
          secondaryCta={heroContent.secondaryCta}
          imageSrc={heroContent.imageSrc}
          aiGeneratedSrc={heroContent.aiGeneratedSrc}
          announcementText="🔥 Limited Time Offer: Free Video Strategy Session - Schedule Now!"
          announcementLink="/contact"
          bgColor="transparent"
          showPlayButton={true}
          overlayInfo={heroOverlay}
        />
      </div>
      
      {/* Wave divider as a separate section element */}
      <div className="bg-white relative">
        <div className="absolute -top-0 w-full h-16 overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute w-full h-full">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#155DFC" opacity="0.1"></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default ServicesHeroSection; 