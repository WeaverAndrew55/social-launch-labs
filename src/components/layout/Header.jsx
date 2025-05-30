import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';

/**
 * Header component with responsive navigation
 * 
 * @param {Object} props - Component props
 * @param {boolean} [props.transparent=false] - Whether header should be transparent (for hero sections)
 */
const Header = ({ transparent = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdowns, setActiveDropdowns] = useState({
    services: false,
    packages: false
  });
  
  const packagesDropdownRef = useRef(null);
  
  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial check in case page is loaded scrolled down
    handleScroll();
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (packagesDropdownRef.current && !packagesDropdownRef.current.contains(event.target)) {
        setActiveDropdowns(prev => ({ ...prev, packages: false }));
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Add event listeners for dropdowns
  useEffect(() => {
    // Select all dropdown content elements
    const mobileDropdownContents = document.querySelectorAll('.mobile-dropdown-content');
    
    // Update classes when dropdown state changes
    Object.entries(activeDropdowns).forEach(([key, isOpen]) => {
      const dropdown = document.querySelector(`.mobile-dropdown-content[data-dropdown="${key}"]`);
      if (dropdown) {
        if (isOpen) {
          dropdown.classList.add('open');
        } else {
          dropdown.classList.remove('open');
        }
      }
    });
    
    return () => {
      // Clean up any event listeners if needed
    };
  }, [activeDropdowns]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    // Close other dropdowns when opening a new one
    setActiveDropdowns(prev => {
      const newState = { ...prev };
      Object.keys(newState).forEach(key => {
        newState[key] = key === dropdown ? !prev[key] : false;
      });
      return newState;
    });
  };
  
  const closeDropdowns = () => {
    setActiveDropdowns({
      services: false,
      packages: false
    });
  };
  
  const handleMobileDropdownClick = (e, dropdown) => {
    e.preventDefault();
    setActiveDropdowns(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };
  
  // Header styles - Reverted to original light theme
  let headerClasses = "bg-white/95 backdrop-blur-sm shadow-sm sticky-header border-b border-[#155DFC]/5";
  if (transparent && !isScrolled) {
    headerClasses = "bg-transparent sticky-header";
  } else if (isScrolled) {
    headerClasses = "bg-white/95 backdrop-blur-sm shadow-md sticky-header border-b border-[#155DFC]/10";
  }
  
  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-[#155DFC] to-[#7394D3] bg-clip-text text-transparent">Social Launch Labs</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            <Link 
              to="/" 
              className="px-4 py-2 text-[#1E293C] rounded hover:bg-[#155DFC]/5 hover:text-[#155DFC] transition duration-200"
            >
              Home
            </Link>
            
            {/* Services Main Link */}
            <Link 
              to="/services" 
              className="px-4 py-2 text-[#1E293C] rounded hover:bg-[#155DFC]/5 hover:text-[#155DFC] transition duration-200"
            >
              Services
            </Link>
            
            {/* Packages Dropdown */}
            <div className="relative dropdown-container" ref={packagesDropdownRef}>
              <button 
                className="dropdown-toggle px-4 py-2 text-[#1E293C] rounded hover:bg-[#155DFC]/5 hover:text-[#155DFC] transition duration-200 flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown('packages');
                }}
              >
                Packages
                <svg 
                  className={`w-4 h-4 ml-1 dropdown-arrow transition-transform duration-200 transform rotate-0`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <Transition
                show={activeDropdowns.packages}
                as={React.Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <div 
                  className={`dropdown-menu absolute left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-md shadow-lg border border-[#155DFC]/5`}
                  style={{ zIndex: 100 }}
                >
                  <div className="py-1 rounded-md bg-white/95 shadow-xs">
                    <Link 
                      to="/packages" 
                      className="block px-4 py-2 text-[#1E293C] font-medium border-b border-[#155DFC]/10"
                      onClick={closeDropdowns}
                    >
                      All Packages
                    </Link>
                    <Link 
                      to="/packages/lead-generation-sales" 
                      className="block px-4 py-2 text-[#1E293C] hover:bg-blue-600/10 hover:text-blue-700"
                      onClick={closeDropdowns}
                    >
                      Lead Generation
                    </Link>
                    <Link 
                      to="/packages/conversion-booster-sales" 
                      className="block px-4 py-2 text-[#1E293C] hover:bg-green-600/10 hover:text-green-700"
                      onClick={closeDropdowns}
                    >
                      Conversion Booster
                    </Link>
                    <Link 
                      to="/packages/authority-building-sales" 
                      className="block px-4 py-2 text-[#1E293C] hover:bg-purple-600/10 hover:text-purple-700"
                      onClick={closeDropdowns}
                    >
                      Authority Building
                    </Link>
                  </div>
                </div>
              </Transition>
            </div>

            {/* Regular Nav Items */}
            <Link 
              to="/about" 
              className="px-4 py-2 text-[#1E293C] rounded hover:bg-[#155DFC]/5 hover:text-[#155DFC] transition duration-200"
            >
              About Us
            </Link>
            <Link 
              to="/faq" 
              className="px-4 py-2 text-[#1E293C] rounded hover:bg-[#155DFC]/5 hover:text-[#155DFC] transition duration-200"
            >
              FAQ
            </Link>

            {/* CTA Button */}
            <Link 
              to="/contact" 
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-[#155DFC] to-[#7394D3] text-white rounded-xl hover:shadow-md hover:from-[#155DFC] hover:to-[#155DFC] transition duration-300 text-base font-medium"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              className="text-[#1E293C] hover:text-[#155DFC] focus:outline-none transition duration-200"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <Transition
          show={isMenuOpen}
          enter="transition duration-300 ease-out"
          enterFrom="transform -translate-y-10 opacity-0"
          enterTo="transform translate-y-0 opacity-100"
          leave="transition duration-150 ease-in"
          leaveFrom="transform translate-y-0 opacity-100"
          leaveTo="transform -translate-y-10 opacity-0"
          className="lg:hidden pb-6"
        >
          <div className="flex flex-col space-y-1">
            <Link 
              to="/" 
              className="px-4 py-2 text-[#1E293C] hover:bg-[#155DFC]/5 hover:text-[#155DFC] transition duration-200 rounded font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* Mobile Services Link */}
            <Link 
              to="/services" 
              className="px-4 py-2 text-[#1E293C] hover:bg-[#155DFC]/5 hover:text-[#155DFC] transition duration-200 rounded font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div className="mobile-dropdown">
              <button 
                className="mobile-dropdown-toggle w-full text-left px-4 py-2 text-[#1E293C] hover:bg-[#155DFC]/5 hover:text-[#155DFC] transition duration-200 font-medium flex justify-between items-center rounded"
                onClick={(e) => handleMobileDropdownClick(e, 'services')}
              >
                For
                <svg 
                  className={`w-4 h-4 mobile-dropdown-icon transition-transform duration-200 transform ${activeDropdowns.services ? 'rotate-180' : 'rotate-0'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div 
                className={`mobile-dropdown-content pl-4 ${activeDropdowns.services ? 'block' : 'hidden'}`}
                data-dropdown="services"
              >
                <Link 
                  to="/services/for-businesses" 
                  className="block px-4 py-2 text-[#1E293C] hover:bg-[#155DFC]/5 hover:text-[#155DFC] transition duration-200 rounded"
                  onClick={() => {
                    closeDropdowns();
                    setIsMenuOpen(false);
                  }}
                >
                  For Businesses
                </Link>
                <Link 
                  to="/services/for-agencies" 
                  className="block px-4 py-2 text-[#1E293C] hover:bg-[#155DFC]/5 hover:text-[#155DFC] transition duration-200 rounded"
                  onClick={() => {
                    closeDropdowns();
                    setIsMenuOpen(false);
                  }}
                >
                  For Agencies
                </Link>
              </div>
            </div>

            {/* Mobile Packages Dropdown */}
            <div className="mobile-dropdown">
              <button 
                className="mobile-dropdown-toggle w-full text-left px-4 py-2 text-[#1E293C] hover:bg-[#155DFC]/5 hover:text-[#155DFC] transition duration-200 font-medium flex justify-between items-center rounded"
                onClick={(e) => handleMobileDropdownClick(e, 'packages')}
              >
                Packages
                <svg 
                  className={`w-4 h-4 mobile-dropdown-icon transition-transform duration-200 transform rotate-0`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div 
                className={`mobile-dropdown-content pl-4 ${activeDropdowns.packages ? 'block' : 'hidden'}`}
                data-dropdown="packages"
              >
                <Link 
                  to="/packages" 
                  className="block px-4 py-2 text-[#1E293C] transition duration-200 rounded font-medium"
                  onClick={() => {
                    closeDropdowns();
                    setIsMenuOpen(false);
                  }}
                >
                  All Packages
                </Link>
                <Link 
                  to="/packages/lead-generation-sales" 
                  className="block px-4 py-2 text-[#1E293C] hover:bg-blue-600/10 hover:text-blue-700 transition duration-200 rounded"
                  onClick={() => {
                    closeDropdowns();
                    setIsMenuOpen(false);
                  }}
                >
                  Lead Generation
                </Link>
                <Link 
                  to="/packages/conversion-booster-sales" 
                  className="block px-4 py-2 text-[#1E293C] hover:bg-green-600/10 hover:text-green-700 transition duration-200 rounded"
                  onClick={() => {
                    closeDropdowns();
                    setIsMenuOpen(false);
                  }}
                >
                  Conversion Booster
                </Link>
                <Link 
                  to="/packages/authority-building-sales" 
                  className="block px-4 py-2 text-[#1E293C] hover:bg-purple-600/10 hover:text-purple-700 transition duration-200 rounded"
                  onClick={() => {
                    closeDropdowns();
                    setIsMenuOpen(false);
                  }}
                >
                  Authority Building
                </Link>
              </div>
            </div>
            
            {/* Mobile Regular Nav Items */}
            <Link 
              to="/about" 
              className="px-4 py-2 text-[#1E293C] hover:bg-[#155DFC]/5 hover:text-[#155DFC] transition duration-200 rounded font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/faq" 
              className="px-4 py-2 text-[#1E293C] hover:bg-[#155DFC]/5 hover:text-[#155DFC] transition duration-200 rounded font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            
            {/* Mobile CTA Button */}
            <Link 
              to="/contact" 
              className="mt-4 px-6 py-3 bg-gradient-to-r from-[#155DFC] to-[#7394D3] text-white rounded-xl hover:shadow-md hover:from-[#155DFC] hover:to-[#155DFC] transition duration-300 text-center text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </Transition>
      </div>
    </header>
  );
};

Header.propTypes = {
  transparent: PropTypes.bool
};

export default Header; 