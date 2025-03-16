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
  
  const servicesDropdownRef = useRef(null);
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
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setActiveDropdowns(prev => ({ ...prev, services: false }));
      }
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
  
  // Header styles
  let headerClasses = "bg-white shadow-sm sticky-header";
  if (transparent && !isScrolled) {
    headerClasses = "bg-transparent sticky-header";
  } else if (isScrolled) {
    headerClasses = "bg-white shadow-md sticky-header";
  }
  
  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">Social Launch Labs</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            <Link 
              to="/" 
              className="px-4 py-2 text-blue-600 rounded bg-gray-100 font-medium"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative dropdown-container" ref={servicesDropdownRef}>
              <button 
                className="dropdown-toggle px-4 py-2 text-gray-700 rounded hover:bg-gray-100 hover:text-blue-600 transition duration-200 flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown('services');
                }}
              >
                Services
                <svg 
                  className={`w-4 h-4 ml-1 dropdown-arrow transition-transform duration-200 ${activeDropdowns.services ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {/* Position absolute relative to the button */}
              <div 
                className={`dropdown-menu absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg ${activeDropdowns.services ? 'block' : 'hidden'}`}
                style={{ zIndex: 100 }}
              >
                <div className="py-1 rounded-md bg-white shadow-xs">
                  <Link 
                    to="/services/for-businesses" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    onClick={closeDropdowns}
                  >
                    For Businesses
                  </Link>
                  <Link 
                    to="/services/for-agencies" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    onClick={closeDropdowns}
                  >
                    For Agencies
                  </Link>
                </div>
              </div>
            </div>

            {/* Packages Dropdown */}
            <div className="relative dropdown-container" ref={packagesDropdownRef}>
              <button 
                className="dropdown-toggle px-4 py-2 text-gray-700 rounded hover:bg-gray-100 hover:text-blue-600 transition duration-200 flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown('packages');
                }}
              >
                Packages
                <svg 
                  className={`w-4 h-4 ml-1 dropdown-arrow transition-transform duration-200 ${activeDropdowns.packages ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div 
                className={`dropdown-menu absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg ${activeDropdowns.packages ? 'block' : 'hidden'}`}
                style={{ zIndex: 100 }}
              >
                <div className="py-1 rounded-md bg-white shadow-xs">
                  <Link 
                    to="/packages" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 font-medium border-b border-gray-100"
                    onClick={closeDropdowns}
                  >
                    All Packages
                  </Link>
                  <Link 
                    to="/packages/lead-generation" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    onClick={closeDropdowns}
                  >
                    Lead Generation
                  </Link>
                  <Link 
                    to="/packages/conversion-booster" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    onClick={closeDropdowns}
                  >
                    Conversion Booster
                  </Link>
                  <Link 
                    to="/packages/authority-building" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    onClick={closeDropdowns}
                  >
                    Authority Building
                  </Link>
                </div>
              </div>
            </div>

            {/* Regular Nav Items */}
            <Link 
              to="/about" 
              className="px-4 py-2 text-gray-700 rounded hover:bg-gray-100 hover:text-blue-600 transition duration-200"
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="px-4 py-2 text-gray-700 rounded hover:bg-gray-100 hover:text-blue-600 transition duration-200"
            >
              Contact
            </Link>
            <Link 
              to="/faq" 
              className="px-4 py-2 text-gray-700 rounded hover:bg-gray-100 hover:text-blue-600 transition duration-200"
            >
              FAQ
            </Link>

            {/* CTA Button */}
            <Link 
              to="/contact" 
              className="ml-4 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300 text-base font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-600 focus:outline-none transition duration-200"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <Transition
          show={isMenuOpen}
          enter="transition duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="lg:hidden pb-4">
            <Link 
              to="/" 
              className="block px-4 py-2 text-blue-600 bg-gray-50 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* Mobile Services */}
            <div className="mobile-dropdown">
              <button 
                className="mobile-dropdown-toggle w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition duration-200 font-medium flex justify-between items-center"
                onClick={(e) => handleMobileDropdownClick(e, 'services')}
              >
                Services
                <svg 
                  className={`w-4 h-4 mobile-dropdown-icon transition-transform duration-200 ${activeDropdowns.services ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="mobile-dropdown-content" data-dropdown="services">
                <Link 
                  to="/services/for-businesses" 
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  For Businesses
                </Link>
                <Link 
                  to="/services/for-agencies" 
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  For Agencies
                </Link>
              </div>
            </div>

            {/* Mobile Packages */}
            <div className="mobile-dropdown">
              <button 
                className="mobile-dropdown-toggle w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition duration-200 font-medium flex justify-between items-center"
                onClick={(e) => handleMobileDropdownClick(e, 'packages')}
              >
                Packages
                <svg 
                  className={`w-4 h-4 mobile-dropdown-icon transition-transform duration-200 ${activeDropdowns.packages ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="mobile-dropdown-content" data-dropdown="packages">
                <Link 
                  to="/packages" 
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 font-medium border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  All Packages
                </Link>
                <Link 
                  to="/packages/lead-generation" 
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Lead Generation
                </Link>
                <Link 
                  to="/packages/conversion-booster" 
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Conversion Booster
                </Link>
                <Link 
                  to="/packages/authority-building" 
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Authority Building
                </Link>
              </div>
            </div>
            
            {/* Mobile Regular Nav Items */}
            <Link 
              to="/about" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/faq" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            
            {/* Mobile CTA */}
            <div className="mt-4 px-4">
              <Link 
                to="/contact" 
                className="block text-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
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