import React from 'react';
import { Link } from 'react-router-dom';
import SectionContainer from '../../ui/SectionContainer';

/**
 * PackageDetailsSection component that displays detailed information about each package
 */
const PackageDetailsSection = () => {
  return (
    <SectionContainer bgColor="bg-gray-50" id="packages" className="section-spacing-lg">
      <div className="max-w-5xl mx-auto">
        {/* Lead Generation Package */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-16">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3 bg-blue-600 text-white p-8">
              <div className="sticky top-24">
                <div className="inline-block bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Top of Funnel
                </div>
                <h2 className="text-3xl font-bold mb-4">Lead Generation Mastery</h2>
                <p className="mb-6 text-blue-100">
                  Fill your pipeline with qualified leads who are eager to learn more about your solutions.
                </p>
                <div className="flex">
                  <Link to="/packages/lead-generation" className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-xl text-base font-medium hover:bg-blue-50 transition duration-300">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 p-8">
              <p className="text-lg text-gray-700 mb-6">
                <span className="font-bold">If you're struggling to attract enough high-quality leads or build awareness</span>, Lead Generation Mastery is designed for you. This package focuses on the <span className="font-bold">top of the funnel</span>, creating content that grabs attention and sparks interest in your brand.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">What it does:</h3>
              <p className="text-lg text-gray-700 mb-6">
                We help you showcase your <span className="font-bold">core value proposition</span> and share <span className="font-bold">educational insights</span> to draw in your target audience. By using compelling introductory videos and other valuable resources, Lead Generation Mastery fills your pipeline with eager prospects. The result is a steady stream of <span className="font-bold">qualified leads</span> who are informed about your value and ready to learn more.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Core benefits:</h3>
              <ul className="mb-6 space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-bold">Expand Your Reach:</span> 
                    <span className="text-gray-700">Increase brand visibility and attract new audiences who may not know you yet.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-bold">Spark Initial Interest:</span> 
                    <span className="text-gray-700">Use storytelling and value-driven content to make a memorable first impression.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-bold">Fill Your Funnel:</span> 
                    <span className="text-gray-700">Consistently generate more inquiries, sign-ups, or downloads – giving you a larger pool of potential customers to nurture.</span>
                  </div>
                </li>
              </ul>
              <div className="mt-6 text-center lg:text-left">
                <Link to="/packages/lead-generation" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 group">
                  View Lead Generation Package Details
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Conversion Booster Package */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-16">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3 bg-green-600 text-white p-8">
              <div className="sticky top-24">
                <div className="inline-block bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Middle of Funnel
                </div>
                <h2 className="text-3xl font-bold mb-4">Conversion Booster</h2>
                <p className="mb-6 text-green-100">
                  Turn interested prospects into paying customers with content that builds trust and drives action.
                </p>
                <div className="flex">
                  <Link to="/packages/conversion-booster" className="inline-flex items-center justify-center bg-white text-green-600 px-6 py-3 rounded-xl text-base font-medium hover:bg-green-50 transition duration-300">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 p-8">
              <p className="text-lg text-gray-700 mb-6">
                <span className="font-bold">If you're getting leads but having trouble turning them into paying customers</span>, Conversion Booster addresses that gap. This package zeroes in on the <span className="font-bold">middle and bottom of your funnel</span> – the consideration and decision stages where prospects are evaluating your offer and need an extra push to convert.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">What it does:</h3>
              <p className="text-lg text-gray-700 mb-6">
                We create targeted content that <span className="font-bold">overcomes objections</span>, <span className="font-bold">builds trust</span>, and <span className="font-bold">drives action</span>. From persuasive landing page videos to product demos and FAQ explainers, Conversion Booster gives your prospects the confidence to take the next step. By highlighting your solution's benefits and addressing common concerns, this package helps <span className="font-bold">turn interested leads into loyal customers</span>.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Core benefits:</h3>
              <ul className="mb-6 space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-bold">Accelerate Sales:</span> 
                    <span className="text-gray-700">Shorten your sales cycle by answering questions and removing doubt upfront.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-bold">Improve Conversion Rates:</span> 
                    <span className="text-gray-700">Engage and nurture prospects with content tailored to their needs and pain points, so more of them say "yes."</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-bold">Maximize ROI on Leads:</span> 
                    <span className="text-gray-700">Ensure the hard-earned leads you've collected actually result in revenue and growth for your business.</span>
                  </div>
                </li>
              </ul>
              <div className="mt-6 text-center lg:text-left">
                <Link to="/packages/conversion-booster" className="inline-flex items-center text-green-600 font-medium hover:text-green-700 group">
                  View Conversion Booster Package Details
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Authority Builder Package */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-8">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3 bg-purple-600 text-white p-8">
              <div className="sticky top-24">
                <div className="inline-block bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Bottom of Funnel & Beyond
                </div>
                <h2 className="text-3xl font-bold mb-4">Authority Builder</h2>
                <p className="mb-6 text-purple-100">
                  Establish your brand as a trusted industry leader for long-term growth and loyalty.
                </p>
                <div className="flex">
                  <Link to="/packages/authority-building" className="inline-flex items-center justify-center bg-white text-purple-600 px-6 py-3 rounded-xl text-base font-medium hover:bg-purple-50 transition duration-300">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 p-8">
              <p className="text-lg text-gray-700 mb-6">
                <span className="font-bold">If you find it hard to stand out as a trusted authority in your industry</span>, Authority Builder is the perfect solution. This package focuses on <span className="font-bold">establishing credibility and loyalty</span>, helping you solidify your brand's reputation and deepen customer trust.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">What it does:</h3>
              <p className="text-lg text-gray-700 mb-6">
                We spotlight what makes you <span className="font-bold">unique and credible</span> through powerful storytelling and thought leadership content. This might include compelling brand story videos, customer success stories, webinars or expert interviews – all demonstrating your expertise and the real results you deliver. Authority Builder positions you as the <span className="font-bold">go-to expert</span> in your field. Over time, this not only attracts high-quality leads organically but also fosters stronger loyalty among your existing customers.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Core benefits:</h3>
              <ul className="mb-6 space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-bold">Stand Out in Your Market:</span> 
                    <span className="text-gray-700">Highlight your unique story, values, and expertise so you differentiate from competitors.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-bold">Build Trust and Loyalty:</span> 
                    <span className="text-gray-700">Share authentic success stories and valuable insights that make prospects and clients feel confident choosing you.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-bold">Long-Term Growth:</span> 
                    <span className="text-gray-700">A strong authority foundation leads to more word-of-mouth referrals, repeat business, and opportunities (like partnerships or speaking engagements) that come from being seen as a leader.</span>
                  </div>
                </li>
              </ul>
              <div className="mt-6 text-center lg:text-left">
                <Link to="/packages/authority-building" className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 group">
                  View Authority Builder Package Details
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default PackageDetailsSection; 