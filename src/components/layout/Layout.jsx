import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

/**
 * Layout component that wraps the entire application with header and footer
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content
 * @param {boolean} [props.transparentHeader=false] - Whether header should be transparent
 */
const Layout = ({
  children,
  transparentHeader = false
}) => {
  return (
    <div className="relative">
      {/* Global page background that spans all sections */}
      <div className="fixed inset-0 w-full h-full overflow-hidden -z-20">
        {/* Base gradient that spans the entire page */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F6F9FF] via-white to-[#F6F9FF] w-full h-full"></div>
        
        {/* Extremely subtle global patterns */}
        <div className="absolute inset-0 w-full h-full opacity-[0.02]" 
            style={{
              backgroundImage: `
                linear-gradient(0deg, transparent 95%, #155DFC 95%, #155DFC 96%, transparent 96%),
                linear-gradient(90deg, transparent 97%, #7394D3 97%, #7394D3 98%, transparent 98%)
              `,
              backgroundSize: '80px 80px, 70px 70px'
            }}>
        </div>
        
        {/* Decorative fixed elements - extremely subtle */}
        <div className="absolute top-0 -right-[10%] w-[70%] h-[70%] border-l border-[#155DFC]/5 rounded-l-full"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] border-t border-r border-[#7394D3]/5 rounded-tr-full"></div>
      </div>
    
      <div className="flex flex-col min-h-screen">
        <Header transparent={transparentHeader} />
        
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  transparentHeader: PropTypes.bool
};

export default Layout; 