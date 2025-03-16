import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import SectionContainer from '../components/ui/SectionContainer';
import Button from '../components/ui/Button';

/**
 * Contact page component
 */
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    package: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, here you would send the form data to a server
    console.log('Form submitted:', formData);
    // Simulate form submission success
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      package: ''
    });
  };

  return (
    <Layout>
      <div className="relative py-20 md:py-28 px-4 bg-gradient-to-b from-neutral-900 to-primary-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="absolute inset-0 h-full w-full" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
          </svg>
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Schedule a free strategy call or send us a message to discuss how we can help your business.
            </p>
          </div>
        </div>
      </div>

      <SectionContainer bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-display font-bold mb-6 text-neutral-800">
              Contact Information
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800">Email Us</h3>
                  <p className="text-neutral-600">hello@sociallaunchlabs.com</p>
                  <p className="text-neutral-600 text-sm mt-1">We respond to all messages within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800">Call Us</h3>
                  <p className="text-neutral-600">(555) 123-4567</p>
                  <p className="text-neutral-600 text-sm mt-1">Monday to Friday, 9AM to 5PM EST</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800">Live Chat</h3>
                  <p className="text-neutral-600">Available on our website</p>
                  <p className="text-neutral-600 text-sm mt-1">Get instant answers to quick questions</p>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
              <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                Schedule a Free Strategy Call
              </h3>
              <p className="text-neutral-600 mb-4">
                Book a 30-minute free consultation call to discuss your social media goals and how we can help achieve them.
              </p>
              <Button 
                href="https://calendly.com/sociallaunchlabs/strategy-call" 
                target="_blank"
                variant="primary"
              >
                Book Your Call
              </Button>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-display font-bold mb-6 text-neutral-800">
              Send Us a Message
            </h2>
            
            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <svg className="h-12 w-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">Message Sent!</h3>
                <p className="text-neutral-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 text-primary-600 font-semibold hover:text-primary-700"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="package" className="block text-sm font-medium text-neutral-700 mb-1">
                    I'm Interested In
                  </label>
                  <select
                    id="package"
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    className="block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  >
                    <option value="">Select an option</option>
                    <option value="Lead Generation Mastery">Lead Generation Mastery</option>
                    <option value="Conversion Booster">Conversion Booster</option>
                    <option value="Authority Builder">Authority Builder</option>
                    <option value="Custom Solution">Custom Solution</option>
                    <option value="Not Sure Yet">Not Sure Yet</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  ></textarea>
                </div>
                
                <div>
                  <Button 
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full md:w-auto"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </SectionContainer>
    </Layout>
  );
};

export default ContactPage; 