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
  const [isPackagesDropdownOpen, setIsPackagesDropdownOpen] = useState(false);
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (packagesDropdownRef.current && !packagesDropdownRef.current.contains(event.target)) {
        setIsPackagesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePackagesDropdown = () => {
    setIsPackagesDropdownOpen(!isPackagesDropdownOpen);
  };
  
  const baseStyles = "fixed w-full top-0 z-50 transition-all duration-300";
  
  // Determine background style based on scroll position and transparency
  let bgStyles;
  if (transparent && !isScrolled) {
    bgStyles = "bg-neutral-900/60 backdrop-blur-sm text-white";
  } else {
    bgStyles = "bg-neutral-800 text-neutral-200 shadow-md";
  }
  
  return (
    <header className={`${baseStyles} ${bgStyles}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className={`text-2xl font-heading font-bold ${(transparent && !isScrolled) ? 'text-white' : 'text-white'}`}>
              Social Launch Labs
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  to="/" 
                  className={`font-medium hover:text-primary-500 transition-colors ${(transparent && !isScrolled) ? 'text-white hover:text-primary-200' : 'text-neutral-400 hover:text-white'}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className={`font-medium hover:text-primary-500 transition-colors ${(transparent && !isScrolled) ? 'text-white hover:text-primary-200' : 'text-neutral-400 hover:text-white'}`}
                >
                  Services
                </Link>
              </li>
              <li className="relative" ref={packagesDropdownRef}>
                <button
                  onClick={togglePackagesDropdown}
                  className={`font-medium hover:text-primary-500 transition-colors flex items-center ${(transparent && !isScrolled) ? 'text-white hover:text-primary-200' : 'text-neutral-400 hover:text-white'}`}
                >
                  <span>Packages</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-4 w-4 ml-1 transition-transform ${isPackagesDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Packages Dropdown */}
                <div 
                  className={`absolute mt-2 w-56 rounded-md shadow-lg bg-neutral-800 ring-1 ring-black ring-opacity-5 transition-all duration-200 ${isPackagesDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
                >
                  <div className="py-1">
                    <Link 
                      to="/packages" 
                      className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-700 hover:text-white"
                      onClick={() => setIsPackagesDropdownOpen(false)}
                    >
                      All Packages
                    </Link>
                    <Link 
                      to="/packages/lead-generation" 
                      className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-700 hover:text-white"
                      onClick={() => setIsPackagesDropdownOpen(false)}
                    >
                      Lead Generation Mastery
                    </Link>
                    <Link 
                      to="/packages/conversion-booster" 
                      className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-700 hover:text-white"
                      onClick={() => setIsPackagesDropdownOpen(false)}
                    >
                      Conversion Booster
                    </Link>
                    <Link 
                      to="/packages/authority-builder" 
                      className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-700 hover:text-white"
                      onClick={() => setIsPackagesDropdownOpen(false)}
                    >
                      Authority Builder
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`font-medium hover:text-primary-500 transition-colors ${(transparent && !isScrolled) ? 'text-white hover:text-primary-200' : 'text-neutral-400 hover:text-white'}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-6 w-6 ${(transparent && !isScrolled) ? 'text-white' : 'text-neutral-400'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-6 w-6 ${(transparent && !isScrolled) ? 'text-white' : 'text-neutral-400'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <Transition
        show={isMenuOpen}
        enter="transition duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition duration-150 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden bg-neutral-800 shadow-lg absolute w-full">
          <nav className="px-4 pt-2 pb-4">
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="block py-2 text-neutral-400 hover:text-white font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="block py-2 text-neutral-400 hover:text-white font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li className="py-2">
                <Link 
                  to="/packages" 
                  className="block text-neutral-400 hover:text-white font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Packages
                </Link>
                {/* Mobile Packages Submenu */}
                <ul className="pl-4 mt-2 space-y-2 border-l border-neutral-700">
                  <li>
                    <Link 
                      to="/packages/lead-generation" 
                      className="block py-1 text-sm text-neutral-500 hover:text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Lead Generation Mastery
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/packages/conversion-booster" 
                      className="block py-1 text-sm text-neutral-500 hover:text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Conversion Booster
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/packages/authority-builder" 
                      className="block py-1 text-sm text-neutral-500 hover:text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Authority Builder
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="block py-2 text-neutral-400 hover:text-white font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Transition>
    </header>
  );
};

Header.propTypes = {
  transparent: PropTypes.bool
};

export default Header; 