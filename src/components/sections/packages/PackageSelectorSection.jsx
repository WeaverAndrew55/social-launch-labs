import React from 'react';
import SectionContainer from '../../ui/SectionContainer';

/**
 * PackageSelectorSection component - helps users decide which package is right for them
 */
const PackageSelectorSection = () => {
  return (
    <SectionContainer bgColor="bg-white" className="section-spacing-lg">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 section-header">
          <div className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Choose Wisely
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Not Sure Which Package You Need?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            If you're unsure where to start, here's a quick comparison of <span className="font-bold">common business challenges</span> and the <span className="font-bold">package best suited to solve them</span>.
          </p>
        </div>

        {/* Package Comparison Table */}
        <div className="overflow-hidden rounded-xl shadow-lg mb-12">
          <table className="w-full">
            <thead>
              <tr>
                <th className="w-1/2 text-lg bg-gray-100 p-4 text-left border-b border-gray-200">Your Challenge</th>
                <th className="w-1/2 text-lg bg-gray-100 p-4 text-left border-b border-gray-200">Recommended Package</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-r border-gray-100 bg-gray-50 p-4">
                  <p className="text-gray-700 italic">"We need more leads and audience attention."</p>
                </td>
                <td className="p-4">
                  <p className="font-bold text-blue-600">Lead Generation Mastery</p>
                  <p className="text-gray-600">Attracts new prospects and fills your funnel with potential customers.</p>
                </td>
              </tr>
              <tr>
                <td className="border-r border-gray-100 bg-gray-50 p-4 border-t border-gray-200">
                  <p className="text-gray-700 italic">"We have interested prospects, but sales are low."</p>
                </td>
                <td className="p-4 border-t border-gray-200">
                  <p className="font-bold text-green-600">Conversion Booster</p>
                  <p className="text-gray-600">Turns warm leads into buyers by addressing their concerns and highlighting value.</p>
                </td>
              </tr>
              <tr>
                <td className="border-r border-gray-100 bg-gray-50 p-4 border-t border-gray-200">
                  <p className="text-gray-700 italic">"Our brand isn't seen as an industry leader."</p>
                </td>
                <td className="p-4 border-t border-gray-200">
                  <p className="font-bold text-purple-600">Authority Builder</p>
                  <p className="text-gray-600">Builds credibility and trust, positioning your business as the go-to authority in your field.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto">
          Using this guide, identify the statement that sounds most like your situation. That's likely the package you should focus on first.
        </p>
      </div>
    </SectionContainer>
  );
};

export default PackageSelectorSection; 