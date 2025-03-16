import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import SectionContainer from '../../components/ui/SectionContainer';
import Button from '../../components/ui/Button';

/**
 * Lead Generation Mastery Package page component
 */
const LeadGenerationPackagePage = () => {
  // Package data
  const packageData = {
    title: "Lead Generation Mastery",
    price: "$1,997/mo",
    description: "Turn your social media into a consistent lead generation machine.",
    primaryBenefit: "Ideal for businesses focused on growing their client base",
    image: "/images/packages/lead-generation.jpg",
    features: [
      "Social media audit and strategy",
      "Content calendar development",
      "Engagement campaign setup",
      "Lead magnet creation",
      "Monthly performance reports"
    ],
    detailedFeatures: [
      {
        title: "Comprehensive Social Media Audit",
        description: "We analyze your current social media presence, identify strengths, weaknesses, and opportunities for lead generation. This forms the foundation for your strategy."
      },
      {
        title: "Strategic Content Calendar",
        description: "Develop a systematic content plan designed to attract your ideal clients, showcase your expertise, and incorporate strategic calls-to-action."
      },
      {
        title: "Lead Generation Campaigns",
        description: "Creation of targeted campaigns specifically designed to capture qualified leads through social media, including audience targeting and optimization."
      },
      {
        title: "Custom Lead Magnets",
        description: "Development of valuable lead magnets (guides, worksheets, templates) that solve specific problems for your target audience and incentivize them to join your list."
      },
      {
        title: "Engagement Strategies",
        description: "Implementation of proven tactics to increase meaningful engagement with potential clients and build relationships that convert."
      },
      {
        title: "Performance Tracking",
        description: "Monthly analytics reports focusing on lead generation metrics, conversion tracking, and actionable insights for continuous improvement."
      }
    ],
    idealFor: [
      "Service providers looking to grow their client base",
      "Businesses with established services but inconsistent lead flow",
      "Companies with limited social media results that need a strategic approach",
      "Professionals who want to develop a systematic lead generation process"
    ],
    results: [
      {
        metric: "Qualified Leads",
        value: "15-20",
        period: "per week",
        description: "Consistent flow of targeted potential clients interested in your services"
      },
      {
        metric: "Audience Growth",
        value: "25-40%",
        period: "in 90 days",
        description: "Expansion of your following with relevant, high-quality prospects"
      },
      {
        metric: "Engagement Rate",
        value: "3-5×",
        period: "increase",
        description: "More meaningful interactions with your content from potential clients"
      }
    ],
    testimonial: {
      quote: "The Lead Generation Mastery package completely transformed our social media approach. We're now getting 15-20 qualified leads per week compared to just 2-3 before.",
      author: "Rebecca Turner",
      title: "CEO, Wellness Coaching Inc.",
      image: "/images/testimonial-5.jpg"
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative py-20 px-4 bg-gradient-to-br from-primary-900 to-primary-800 overflow-hidden">
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
              {packageData.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              {packageData.description}
            </p>
            <div className="flex justify-center items-center space-x-2 mb-8">
              <span className="text-3xl md:text-4xl font-bold text-white">{packageData.price}</span>
              <span className="text-white/80">per month</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
              >
                Book a Free Consultation
              </Button>
              <Button
                href="#package-details"
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                View Package Details
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <SectionContainer bgColor="bg-white" id="package-details">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary-600 font-semibold mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-neutral-800">
              Transform Your Social Media Into a Lead Generation System
            </h2>
            <p className="text-neutral-600 mb-6">
              The Lead Generation Mastery package is designed for service-based businesses looking to create a consistent flow of qualified leads from social media. We'll help you implement proven frameworks to attract your ideal clients, engage them effectively, and convert them into leads.
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
                    <svg className="h-5 w-5 text-primary-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            Detailed breakdown of everything included in the Lead Generation Mastery package.
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
              The Lead Generation Mastery package is perfect for:
            </p>
            
            <ul className="space-y-4 mb-8">
              {packageData.idealFor.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-3 mt-0.5">
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
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex flex-col items-center justify-center mr-4 shrink-0">
                    <span className="text-xl font-bold text-primary-600">{result.value}</span>
                    <span className="text-xs text-primary-800">{result.period}</span>
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
              <svg className="h-10 w-10 text-primary-200 mb-4" fill="currentColor" viewBox="0 0 32 32">
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
      <SectionContainer bgColor="bg-primary-900 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Transform Your Social Media Into a Lead Generation Machine?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book a free consultation call to discuss how the Lead Generation Mastery package can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              href="/contact"
              variant="secondary"
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

export default LeadGenerationPackagePage; 