import React from 'react';

/**
 * A reusable Call-to-Action section component
 * Used across different pages to prompt user action
 */
const CTASection = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  note,
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = ""
}) => {
  return (
    <section id="contact" className={`bg-white py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className={`bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden`}>
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-20 -mt-32 -mr-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full opacity-20 -mb-32 -ml-32"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h2>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                {primaryButtonText && primaryButtonLink && (
                  <a 
                    href={primaryButtonLink} 
                    className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-xl text-base font-medium hover:bg-blue-50 transition duration-300"
                  >
                    {primaryButtonText}
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </a>
                )}
                
                {secondaryButtonText && secondaryButtonLink && (
                  <a 
                    href={secondaryButtonLink} 
                    className="inline-flex items-center justify-center border border-white text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-blue-700 transition duration-300"
                  >
                    {secondaryButtonLink.startsWith('tel:') && (
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    )}
                    {secondaryButtonText}
                  </a>
                )}
              </div>
              
              {note && (
                <p className="text-blue-200 text-sm mt-6">
                  {note}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 