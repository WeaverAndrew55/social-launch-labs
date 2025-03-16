import React from 'react';

/**
 * TeamSection component for the About page
 * Displays the team members of Social Launch Labs
 */
const TeamSection = () => {
  // Team member data
  const teamMembers = [
    {
      name: "Emily Richardson",
      role: "Founder & CEO",
      image: "https://placehold.co/300x400/e6efff/1e40af?text=Emily+R",
      bio: "With over 10 years in strategic marketing, Emily specializes in turning complex ideas into clear, compelling video content that drives growth.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "David Chen",
      role: "Creative Director",
      image: "https://placehold.co/300x400/e6efff/1e40af?text=David+C",
      bio: "David combines artistic vision with marketing psychology to create videos that are visually stunning and strategically effective.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Sophia Williams",
      role: "Content Strategist",
      image: "https://placehold.co/300x400/e6efff/1e40af?text=Sophia+W",
      bio: "Sophia's expertise in audience targeting and content frameworks helps clients craft messages that resonate and convert.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Marcus Johnson",
      role: "Production Manager",
      image: "https://placehold.co/300x400/e6efff/1e40af?text=Marcus+J",
      bio: "Marcus ensures every project runs smoothly from concept to delivery, maintaining our high quality standards at every step.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute right-0 top-20 w-1/4 h-1/3 bg-blue-50 opacity-30 -z-10"></div>
      <div className="absolute left-0 bottom-20 w-1/4 h-1/3 bg-indigo-50 opacity-30 -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet the Experts Behind Our Success</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A passionate team of strategists, creatives, and video production specialists dedicated to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-72 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Social Media Overlay */}
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={member.social.linkedin} className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition hover:bg-blue-50">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href={member.social.twitter} className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition hover:bg-blue-50">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Our entire team is committed to one goal: helping your business create video content that establishes authority, builds trust, and drives measurable growth.
            </p>
            <div className="inline-block bg-gray-100 px-6 py-3 rounded-lg text-gray-800 font-medium">
              Ready to work with our team? <a href="/contact" className="text-blue-600 hover:underline">Get in touch →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 