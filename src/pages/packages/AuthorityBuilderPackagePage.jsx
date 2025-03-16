import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import SectionContainer from '../../components/ui/SectionContainer';
import Button from '../../components/ui/Button';
import EnhancedHeroSection from '../../components/sections/common/EnhancedHeroSection';

const AuthorityBuilderPackagePage = () => {
  const packageData = {
    title: "Authority Builder",
    price: "$4,997",
    description: "Establish yourself as a trusted thought leader in your industry with our comprehensive Authority Builder package.",
    primaryBenefit: "Become the go-to expert in your niche",
    image: "/images/packages/authority-builder.jpg",
    features: [
      "Content Strategy Development",
      "Thought Leadership Content Creation",
      "Guest Posting & Media Features",
      "Podcast Appearance Opportunities",
      "Personal Brand Development",
      "Speaking Opportunity Sourcing",
      "Authority Metrics Dashboard"
    ],
    detailedFeatures: [
      {
        title: "Content Strategy Development",
        description: "We'll create a comprehensive content strategy that positions you as an authority in your industry, identifying key topics, platforms, and content types to maximize your visibility and impact."
      },
      {
        title: "Thought Leadership Content Creation",
        description: "Our team will develop high-quality thought leadership content including articles, white papers, and video scripts that showcase your expertise and unique perspective."
      },
      {
        title: "Guest Posting & Media Features",
        description: "We'll secure opportunities for you to contribute guest posts and be featured in relevant industry publications, expanding your reach and enhancing your credibility."
      },
      {
        title: "Podcast Appearance Opportunities",
        description: "We'll identify and secure podcast interview opportunities, helping you share your expertise with new audiences and build your authority through audio content."
      },
      {
        title: "Personal Brand Development",
        description: "We'll refine your personal brand identity, ensuring consistency across all platforms and communications to strengthen your recognition as an industry leader."
      },
      {
        title: "Speaking Opportunity Sourcing",
        description: "We'll identify speaking opportunities at industry events, webinars, and conferences, helping you establish yourself as a respected voice in your field."
      },
      {
        title: "Authority Metrics Dashboard",
        description: "Track your growing influence with our custom metrics dashboard, monitoring engagement, reach, citation growth, and audience sentiment."
      }
    ],
    idealFor: [
      "Business executives seeking to elevate their personal brand",
      "Entrepreneurs looking to position themselves as industry experts",
      "Consultants wanting to increase their visibility and credibility",
      "Coaches seeking to establish thought leadership in their niche",
      "Professionals transitioning to speaking or advisory roles"
    ],
    expectedResults: [
      "Enhanced professional reputation and industry recognition",
      "Increased inbound opportunities for speaking, partnerships, and business",
      "Higher perceived value of your services or products",
      "Expanded network of industry connections and opportunities",
      "Greater influence within your industry or niche"
    ],
    testimonial: {
      quote: "The Authority Builder package completely transformed my professional reputation. Within six months, I went from being virtually unknown to being invited to speak at major industry conferences and contributing to leading publications. The ROI has been incredible.",
      author: "Dr. Kimberly Chen",
      title: "Founder, Health Innovation Partners"
    }
  };

  // Hero content
  const heroContent = {
    title: packageData.title,
    description: packageData.description,
    primaryCta: {
      text: "Book a Free Consultation",
      link: "/contact"
    },
    secondaryCta: {
      text: "View Package Details",
      link: "#package-details"
    },
    imageSrc: packageData.image
  };

  return (
    <Layout>
      {/* Hero Section */}
      <EnhancedHeroSection
        title={heroContent.title}
        description={heroContent.description}
        primaryCta={heroContent.primaryCta}
        secondaryCta={heroContent.secondaryCta}
        imageSrc={heroContent.imageSrc}
      />

      {/* Overview Section */}
      <section className="bg-white py-16">
        <SectionContainer>
          <h2 className="text-3xl font-bold mb-12 text-center">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packageData.features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">{feature}</h3>
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* Detailed Features Section */}
      <section className="bg-gray-50 py-16">
        <SectionContainer>
          <h2 className="text-3xl font-bold mb-12 text-center">Detailed Package Features</h2>
          <div className="space-y-8">
            {packageData.detailedFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-blue-700">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* Ideal For Section */}
      <section className="bg-white py-16">
        <SectionContainer>
          <h2 className="text-3xl font-bold mb-12 text-center">Ideal For</h2>
          <div className="bg-blue-50 p-8 rounded-xl shadow-md">
            <ul className="space-y-4">
              {packageData.idealFor.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </SectionContainer>
      </section>

      {/* Expected Results Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <SectionContainer>
          <h2 className="text-3xl font-bold mb-12 text-center">Expected Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packageData.expectedResults.map((result, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-800 font-bold text-xl">
                    {index + 1}
                  </div>
                </div>
                <p className="text-center font-medium text-lg">{result}</p>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* Testimonial Section */}
      <section className="bg-white py-16">
        <SectionContainer>
          <h2 className="text-3xl font-bold mb-12 text-center">Client Success Story</h2>
          <div className="bg-blue-700 text-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
            <div className="text-xl italic mb-6">"{packageData.testimonial.quote}"</div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-300 rounded-full mr-4"></div>
              <div>
                <div className="font-bold">{packageData.testimonial.author}</div>
                <div className="text-blue-200">{packageData.testimonial.title}</div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <SectionContainer>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Establish Your Authority?</h2>
            <p className="text-xl mb-8">Take the first step toward becoming a recognized expert in your field. Schedule a consultation today.</p>
            <Button 
              variant="primary" 
              size="lg"
              as={Link}
              to="/contact"
              className="mb-4"
            >
              Schedule a Consultation
            </Button>
            <p className="text-gray-400 mt-4">No long-term contracts. Cancel anytime.</p>
          </div>
        </SectionContainer>
      </section>
    </Layout>
  );
};

export default AuthorityBuilderPackagePage; 