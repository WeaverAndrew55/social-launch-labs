import React from 'react';
import EnhancedHeroSection from '../common/EnhancedHeroSection';

/**
 * ContactHeroSection component
 * Hero section for the Contact page using the standardized EnhancedHeroSection component
 *
 * @param {Object} props - Component props
 * @param {string} [props.bgColor="transparent"] - Optional background color
 * @param {Object} [props.overlayInfo] - Optional overlay information for the hero image
 */
const ContactHeroSection = ({ bgColor = "transparent", overlayInfo }) => {
  // Hero content for Contact page
  const heroContent = {
    title: "Let's Plan Your Next Growth Strategy",
    description: "Our team is ready to discuss your business goals and how our proven video strategies can accelerate your growth.",
    primaryCta: {
      text: "Schedule Your Free Strategy Call",
      link: "#contact-form"
    },
    secondaryCta: {
      text: "View Our Packages",
      link: "/packages"
    },
    imageSrc: "https://WeaverAndrew55.github.io/SLL-Images/assets/Contact/Contact-Hero.png"
  };

  return (
    <div className="relative">
      {/* Background elements and styling */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
        {/* Modern gradient background base - matching homepage */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#E8F0FF] via-[#F6F9FF] to-white w-full h-full"></div>
        
        {/* Subtle geometric elements - matching homepage */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.07]">
          <div className="absolute top-[10%] right-[15%] w-[30vw] h-[30vw] max-w-[600px] max-h-[600px] rounded-full border border-[#155DFC]/20"></div>
          <div className="absolute bottom-[15%] left-[10%] w-[25vw] h-[25vw] max-w-[500px] max-h-[500px] rounded-full border border-[#7394D3]/30"></div>
          <div className="absolute top-[30%] left-[25%] w-[15vw] h-[15vw] max-w-[300px] max-h-[300px] rounded-full border border-[#155DFC]/10"></div>
        </div>
        
        {/* Layered blurred elements for depth - matching homepage */}
        <div className="absolute top-0 right-[10%] w-[40vw] h-[40vw] max-w-[800px] max-h-[800px] bg-[#155DFC] rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.03]"></div>
        <div className="absolute bottom-0 left-[5%] w-[35vw] h-[35vw] max-w-[700px] max-h-[700px] bg-[#7394D3] rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.04]"></div>
        
        {/* Connection lines representing networks and growth - matching homepage */}
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
        
        {/* Strategic framework abstract representation - matching homepage */}
        <div className="absolute inset-0 opacity-[0.02]"
             style={{
               backgroundImage: `
                 linear-gradient(0deg, transparent 98%, #155DFC 98%, #155DFC 100%, transparent 100%),
                 linear-gradient(90deg, transparent 98%, #7394D3 98%, #7394D3 100%, transparent 100%)
               `,
               backgroundSize: '40px 40px'
             }}>
        </div>
        
        {/* Subtle diagonal elements depicting growth - matching homepage */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-[0.04]">
          <div className="absolute -bottom-[10%] -right-[10%] w-[80%] h-[60%] border-t border-l border-[#155DFC]/20 rounded-tl-[100px] transform rotate-[10deg]"></div>
          <div className="absolute -top-[10%] -left-[10%] w-[70%] h-[50%] border-b border-r border-[#7394D3]/20 rounded-br-[100px] transform rotate-[10deg]"></div>
        </div>
      </div>
      
      {/* Hero Section */}
      <EnhancedHeroSection
        title={heroContent.title}
        description={heroContent.description}
        primaryCta={heroContent.primaryCta}
        secondaryCta={heroContent.secondaryCta}
        imageSrc={heroContent.imageSrc}
        bgColor={bgColor}
        textColor="blue"
        announcementText="🔥 Free Video Marketing Strategy Blueprint - Schedule Now!"
        announcementLink="#contact-form"
        overlayInfo={overlayInfo}
      />
    </div>
  );
};

export default ContactHeroSection; 