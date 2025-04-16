import React, { useState } from 'react';
import SectionContainer from '../../ui/SectionContainer';

// Import team member images
import lailaImage from '../../../assets/ABOUT US/Laila.png'; 
import brettImage from '../../../assets/ABOUT US/Brett.png';

/**
 * TeamSection component for the About page
 * Displays the team members of Social Launch Labs with expandable bios
 */
const TeamSection = () => {
  const [expandedBios, setExpandedBios] = useState({});

  // Team member data - updated details for Laila H.
  const teamMembers = [
    {
      name: "Laila H.",
      role: "Operations Director",
      image: lailaImage,
      bioPart1: "Meet Laila, the driving force behind our smooth and efficient operations. With a keen organizational mind and a passion for perfection, Laila ensures that every project runs seamlessly from start to finish. As Operations Director, she oversees everything behind the scenes, ensuring we meet deadlines, exceed expectations, and deliver outstanding results every time.",
      bioPart2: "From interviewing Michelle Obama, Sophie Trudeau, and Ted Danson, Laila is a true powerhouse when it comes to speaking in front of the camera and creating some of the most engaging media out there. With her expertise, she'll make the process effortless and ensure your vision comes to life with ease and impact.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Bretten R.",
      role: "Editor-in-Chief",
      image: brettImage,
      bioPart1: "Meet Bretten, the creative force behind our editing and content strategy. With a sharp eye for detail and a passion for storytelling, Bretten brings every project to life with precision and flair. As our Editor-in-Chief, Bretten ensures that every piece of content is crafted to perfection, whether it's a high-profile campaign or a small business initiative.",
      bioPart2: "From humble beginnings on YouTube in 2008 to generating 17 million views in a single month on Instagram and amassing over 500,000 followers across his platforms, his journey is a testament to creativity, growth, and the power of digital content.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  // Toggle function
  const toggleBio = (index) => {
    setExpandedBios(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <SectionContainer 
      className="section-spacing-lg relative overflow-hidden"
      transparentBg={true}
    >
      {/* Background Elements - REMOVED */}
      {/* <div className="absolute -right-20 top-20 w-80 h-80 bg-blue-50 rounded-full opacity-40 blur-3xl -z-10"></div> */}
      {/* <div className="absolute -left-20 bottom-20 w-80 h-80 bg-indigo-50 rounded-full opacity-40 blur-3xl -z-10"></div> */}
      
      <div className="max-w-6xl mx-auto">
        {/* Section header with consistent homepage styling */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-[#155DFC]/10 text-[#155DFC] text-sm font-medium rounded-full mb-3">
            Our Team
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">Meet the Experts Behind Our Success</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A passionate team of strategists and creative specialists dedicated to transforming your social media presence
          </p>
          <div className="w-20 h-1 bg-[#155DFC] mx-auto mt-6"></div>
        </div>
        
        {/* Enhanced team grid optimized for 2 members */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => {
            const isExpanded = !!expandedBios[index];

            return (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden group transition-all hover:shadow-lg self-stretch flex flex-col">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-80 object-cover object-center transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-[#155DFC] font-medium mb-4">{member.role}</p>
                  
                  {/* Bio Section Wrapper - Allow this section to grow */}
                  <div className="text-gray-700 leading-relaxed space-y-3 flex-grow"> 
                    {/* Removed min-h-[8rem] for natural height */}
                    <p>{member.bioPart1}</p> 
                    
                    {/* Conditionally visible part 2 with transition */}
                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-96 opacity-100 pt-3' : 'max-h-0 opacity-0'}`}
                      aria-hidden={!isExpanded}
                    >
                      <p>{member.bioPart2}</p>
                    </div>
                  </div>

                  {/* Read More / Read Less Button - Moved outside bio text and pushed to bottom */}
                  <button
                    onClick={() => toggleBio(index)}
                    className="text-sm font-medium text-[#155DFC] hover:text-[#1149CF] inline-flex items-center mt-auto pt-4 self-start" // Added mt-auto, pt-4 and self-start
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? 'Read Less' : 'Read More'}
                    <svg className={`w-4 h-4 ml-1 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
};

export default TeamSection; 