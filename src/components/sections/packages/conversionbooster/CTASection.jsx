import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Call to Action section for the Conversion Booster package
 * Encourages visitors to take the next step
 */
const CTASection = () => {
  return (
    <section className="section-spacing-md bg-gradient-to-br from-green-700 to-green-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Conversion Rates?</h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto">
            Book a free consultation with our conversion specialists to discuss how we can help you turn more of your existing traffic into paying customers.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 rounded-lg bg-white text-green-700 font-bold text-lg hover:bg-green-50 transition-colors duration-300 shadow-lg"
            >
              Book Your Free Consultation
            </Link>
            <a 
              href="tel:+18005551234" 
              className="px-8 py-4 rounded-lg bg-transparent border-2 border-white font-bold text-lg hover:bg-white hover:text-green-700 transition-colors duration-300"
            >
              Call Us: (800) 555-1234
            </a>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center">
              <div className="mr-3">
                <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-green-100">No obligation</span>
            </div>
            
            <div className="flex items-center">
              <div className="mr-3">
                <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-green-100">Free conversion audit</span>
            </div>
            
            <div className="flex items-center">
              <div className="mr-3">
                <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-green-100">Custom strategy</span>
            </div>
          </div>
          
          <div className="mt-16 bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-white p-2">
                  <div className="w-full h-full rounded-full bg-green-700 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="md:w-3/4 text-left">
                <h3 className="text-2xl font-bold mb-4">Limited Time Offer</h3>
                <p className="text-green-100 mb-4">
                  Book your free consultation this month and receive a complimentary conversion audit worth $997. We'll identify your key conversion bottlenecks and provide actionable recommendations.
                </p>
                <div className="text-sm text-green-200">
                  *Offer valid for qualified businesses with existing web traffic. Subject to availability.
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-green-200 mb-4">
              Have questions before booking?
            </p>
            <Link 
              to="/contact" 
              className="text-white underline hover:text-green-300 transition-colors duration-300"
            >
              Contact us with your questions
            </Link>
          </div>
        </div>
      </div>
      
      {/* Shape Dividers */}
      <div className="absolute left-0 right-0 top-0 -mt-10 h-10 w-full overflow-hidden">
        <svg 
          className="absolute bottom-0 w-full h-10 text-green-900 fill-current" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default CTASection; 