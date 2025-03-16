import React from 'react';
import SectionContainer from '../../../ui/SectionContainer';

/**
 * ProblemSection component - Describes the problem that Lead Generation Mastery solves
 */
const ProblemSection = () => {
  return (
    <SectionContainer bgColor="bg-white" className="section-spacing-md">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Problem: Inconsistent Content, Inconsistent Leads</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="text-lg text-gray-700 mb-10 leading-relaxed">
          <p className="mb-6">
            Struggling to keep your sales pipeline full? You're not alone. Many businesses find <strong>lead generation</strong> challenging because their content is inconsistent or off-target.
          </p>
          <p className="mb-6">
            Perhaps you're posting without a clear strategy, or you simply don't have time to create content regularly. The result? Weeks go by without a solid lead, and growth stalls. Inconsistent content means:
          </p>
        </div>
        
        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start">
              <span className="text-3xl text-red-500 mr-4">⚠️</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Missed Opportunities</h3>
                <p className="text-gray-700">When your brand's message isn't out there consistently, potential customers forget you.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start">
              <span className="text-3xl text-red-500 mr-4">⚠️</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Eroded Trust</h3>
                <p className="text-gray-700">Irregular posting or low-value content can make your business appear less credible, causing warm leads to go cold.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start">
              <span className="text-3xl text-red-500 mr-4">⚠️</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Wasted Time & Effort</h3>
                <p className="text-gray-700">Chasing tactics and one-off campaigns often yields disappointing results, leaving you frustrated.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Lead Generation Gap Visualization */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden mb-10">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Lead Generation Gap</h3>
              <p className="text-gray-700 mb-4">
                Most businesses invest heavily in content creation but underinvest in strategic distribution and conversion. This creates a "lead generation gap" that costs you potential customers every day.
              </p>
              <p className="text-gray-700">
                Without a systematic approach to turn content viewers into leads, you'll continue to see high content engagement but low lead conversion – that's money left on the table.
              </p>
            </div>
            <div className="bg-gray-50 p-10 flex flex-col justify-center">
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">Content Engagement</span>
                  <span className="text-green-600 font-bold">68%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-green-500 h-4 rounded-full" style={{ width: '68%' }}></div>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">Lead Conversion Rate</span>
                  <span className="text-red-600 font-bold">12%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-red-500 h-4 rounded-full" style={{ width: '12%' }}></div>
                </div>
              </div>
              
              <div className="bg-yellow-100 text-yellow-800 font-medium px-4 py-3 rounded-lg text-center">
                56% lead generation gap = missed revenue opportunities
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 shadow-sm">
          <p className="text-gray-800 font-medium">
            <strong>Bottom line:</strong> If your content isn't consistent and strategic, you're leaving growth on the table. Your <strong>audience craves valuable, regular content</strong> — and if you don't provide it, your competitors will. This is the gap <strong>Lead Generation Mastery</strong> was created to fill.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProblemSection; 