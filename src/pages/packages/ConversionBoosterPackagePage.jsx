import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import SectionContainer from '../../components/ui/SectionContainer';
import Button from '../../components/ui/Button';
import EnhancedHeroSection from '../../components/sections/common/EnhancedHeroSection';

/**
 * Conversion Booster Package page component
 */
const ConversionBoosterPackagePage = () => {
  // Package data
  const packageData = {
    title: "Conversion Booster",
    price: "$2,497/mo",
    description: "Transform engagement into clients with our conversion-focused system.",
    primaryBenefit: "Perfect for businesses with traffic but low conversion rates",
    image: "/images/packages/conversion-booster.jpg",
    features: [
      "Everything in Lead Generation",
      "Conversion path optimization",
      "Social proof integration",
      "Messaging refinement",
      "A/B testing implementation"
    ],
    detailedFeatures: [
      {
        title: "Complete Lead Generation Framework",
        description: "All features from the Lead Generation Mastery package, providing a solid foundation for generating qualified leads."
      },
      {
        title: "Conversion Path Mapping",
        description: "We analyze your entire conversion process from first touch to closed client, identifying friction points and optimizing each step for maximum conversion."
      },
      {
        title: "Strategic Social Proof",
        description: "Implementation of systematic social proof at key decision points, including testimonials, case studies, and success metrics that influence prospect decisions."
      },
      {
        title: "Messaging Optimization",
        description: "Refinement of your value proposition, addressing objections, and developing persuasive messaging that resonates with your ideal clients."
      },
      {
        title: "Conversion Psychology",
        description: "Application of psychological principles to improve conversion rates, including scarcity, authority positioning, and commitment techniques."
      },
      {
        title: "Continuous A/B Testing",
        description: "Systematic testing of different approaches to continuously improve conversion rates from your social media leads."
      }
    ],
    idealFor: [
      "Businesses that already have decent social media traffic but struggle to convert",
      "Service providers who want to improve their close rate from social media leads",
      "Companies that need to optimize their messaging and offers",
      "Businesses wanting to leverage their existing audience more effectively"
    ],
    results: [
      {
        metric: "Conversion Rate",
        value: "40-60%",
        period: "increase",
        description: "Higher percentage of leads becoming paying clients"
      },
      {
        metric: "Client Value",
        value: "25-35%",
        period: "increase",
        description: "Enhanced client value through improved offer positioning"
      },
      {
        metric: "Sales Cycle",
        value: "30%",
        period: "shorter",
        description: "Reduced time from initial contact to closed deal"
      }
    ],
    testimonial: {
      quote: "Our social media was generating interest but not converting. The Conversion Booster package helped us increase our conversion rate by 67% in just three months.",
      author: "James Wilson",
      title: "Director of Marketing, Apex Financial",
      image: "/images/testimonial-6.jpg"
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
      <SectionContainer bgColor="bg-white" id="package-details">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-secondary-600 font-semibold mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-neutral-800">
              Transform Your Social Media From Engagement to Conversion
            </h2>
            <p className="text-neutral-600 mb-6">
              The Conversion Booster package is designed for businesses that already have social media traffic but struggle to convert that audience into paying clients. We'll help you implement conversion-focused frameworks to transform that interest into revenue.
            </p>
            <p className="text-neutral-600 mb-8">
              {packageData.primaryBenefit}
            </p>
            
            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200 mb-8">
              <h3 className="font-semibold text-neutral-800 mb-3">
                What's Included:
              </h3>
              <ul className="space-y-2">
                {packageData.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="bg-secondary-600 hover:bg-secondary-700"
              >
                Get Started Now
              </Button>
              <Button
                href="/packages"
                variant="outline"
                size="lg"
              >
                Compare All Packages
              </Button>
            </div>
          </div>
          
          <div className="bg-neutral-100 rounded-lg overflow-hidden h-80 lg:h-full">
            <div className="w-full h-full" style={{
              backgroundImage: `url(${packageData.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}></div>
          </div>
        </div>
      </SectionContainer>

      {/* Detailed Features Section */}
      <SectionContainer bgColor="bg-neutral-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-neutral-800">
            What You'll Get
          </h2>
          <p className="max-w-3xl mx-auto text-neutral-600 text-lg">
            Detailed breakdown of everything included in the Conversion Booster package.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packageData.detailedFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
              <h3 className="text-xl font-semibold mb-3 text-neutral-800">
                {feature.title}
              </h3>
              <p className="text-neutral-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Ideal For Section */}
      <SectionContainer bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-neutral-800">
              Is This Package Right For You?
            </h2>
            <p className="text-neutral-600 mb-8">
              The Conversion Booster package is perfect for:
            </p>
            
            <ul className="space-y-4 mb-8">
              {packageData.idealFor.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-secondary-100 text-secondary-600 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-neutral-600 mb-6">
              Not sure if this package is the right fit? Schedule a free consultation to discuss your specific needs.
            </p>
            <Button
              href="/contact"
              variant="primary"
              className="bg-secondary-600 hover:bg-secondary-700"
            >
              Book Your Free Consultation
            </Button>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-neutral-800">
              Expected Results
            </h2>
            <p className="text-neutral-600 mb-8">
              While results vary based on your industry and starting point, here's what typical clients achieve:
            </p>
            
            <div className="space-y-6">
              {packageData.results.map((result, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-16 h-16 bg-secondary-100 rounded-lg flex flex-col items-center justify-center mr-4 shrink-0">
                    <span className="text-xl font-bold text-secondary-600">{result.value}</span>
                    <span className="text-xs text-secondary-800">{result.period}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800">{result.metric}</h3>
                    <p className="text-neutral-600">{result.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Testimonial Section */}
      <SectionContainer bgColor="bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src={packageData.testimonial.image}
                alt={packageData.testimonial.author}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <svg className="h-10 w-10 text-secondary-200 mb-4" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <blockquote className="text-xl text-neutral-700 mb-6 italic">
                {packageData.testimonial.quote}
              </blockquote>
              <div>
                <div className="font-semibold text-neutral-800">{packageData.testimonial.author}</div>
                <div className="text-neutral-600">{packageData.testimonial.title}</div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer bgColor="bg-secondary-900 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Transform Engagement Into Clients?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book a free consultation call to discuss how the Conversion Booster package can help you achieve higher conversion rates.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
            >
              Book Your Free Call
            </Button>
            <Button
              href="/packages"
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              View All Packages
            </Button>
          </div>
        </div>
      </SectionContainer>
    </Layout>
  );
};

export default ConversionBoosterPackagePage; 