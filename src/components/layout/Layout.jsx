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
    <div className="flex flex-col min-h-screen">
      <Header transparent={transparentHeader} />
      
      {/* Add padding to account for fixed header */}
      <main className="flex-grow pt-16">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  transparentHeader: PropTypes.bool
};

export default Layout; 