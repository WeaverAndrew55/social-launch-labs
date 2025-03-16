import React from 'react';
import SectionContainer from '../../ui/SectionContainer';

/**
 * LocationsSection - Displays office locations on a map-like visual
 */
const LocationsSection = () => {
  return (
    <SectionContainer bgColor="bg-white" id="locations" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Our Offices
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Where to Find Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Visit one of our offices or connect with us online from anywhere in the world.
          </p>
        </div>

        {/* Map Visual */}
        <div className="relative rounded-2xl overflow-hidden mb-12 shadow-xl">
          <img 
            src="/images/placeholders/locations-map.jpg" 
            alt="Social Launch Labs office locations" 
            className="w-full h-auto object-cover"
          />
          
          {/* Location Pins */}
          <div className="absolute left-[30%] top-[35%] transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative group">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                <p className="font-medium text-sm">San Francisco HQ</p>
              </div>
            </div>
          </div>

          <div className="absolute left-[75%] top-[30%] transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative group">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                <p className="font-medium text-sm">New York Office</p>
              </div>
            </div>
          </div>

          <div className="absolute left-[50%] top-[60%] transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative group">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                <p className="font-medium text-sm">London Partner Office</p>
              </div>
            </div>
          </div>
        </div>

        {/* Location Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* San Francisco */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
            <h3 className="font-bold text-lg text-gray-900 mb-2">San Francisco</h3>
            <p className="text-gray-700 mb-4">123 Market Street<br />Suite 456<br />San Francisco, CA 94105</p>
            <div className="flex items-center text-sm text-gray-600">
              <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>9:00 AM - 5:00 PM PST</span>
            </div>
          </div>

          {/* New York */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
            <h3 className="font-bold text-lg text-gray-900 mb-2">New York</h3>
            <p className="text-gray-700 mb-4">456 Madison Avenue<br />10th Floor<br />New York, NY 10022</p>
            <div className="flex items-center text-sm text-gray-600">
              <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>9:00 AM - 5:00 PM EST</span>
            </div>
          </div>

          {/* London (Partner Office) */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
            <h3 className="font-bold text-lg text-gray-900 mb-2">London (Partner Office)</h3>
            <p className="text-gray-700 mb-4">78 Canon Street<br />3rd Floor<br />London, EC4N 6AG</p>
            <div className="flex items-center text-sm text-gray-600">
              <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>9:00 AM - 5:00 PM GMT</span>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default LocationsSection; 