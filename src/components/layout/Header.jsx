import React, { useState } from 'react';
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
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const baseStyles = "fixed w-full top-0 z-50 transition-all duration-300";
  const bgStyles = transparent 
    ? "bg-transparent text-white" 
    : "bg-white text-neutral-800 shadow-sm";
  
  return (
    <header className={`${baseStyles} ${bgStyles}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className={`text-2xl font-heading font-bold ${transparent ? 'text-white' : 'text-primary-800'}`}>
              Social Launch Labs
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  to="/" 
                  className={`font-medium hover:text-primary-600 transition-colors ${transparent ? 'text-white hover:text-primary-200' : 'text-neutral-700'}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className={`font-medium hover:text-primary-600 transition-colors ${transparent ? 'text-white hover:text-primary-200' : 'text-neutral-700'}`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/packages" 
                  className={`font-medium hover:text-primary-600 transition-colors ${transparent ? 'text-white hover:text-primary-200' : 'text-neutral-700'}`}
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`font-medium hover:text-primary-600 transition-colors ${transparent ? 'text-white hover:text-primary-200' : 'text-neutral-700'}`}
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
                className={`h-6 w-6 ${transparent ? 'text-white' : 'text-neutral-800'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-6 w-6 ${transparent ? 'text-white' : 'text-neutral-800'}`} 
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
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <nav className="px-4 pt-2 pb-4">
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="block py-2 text-neutral-700 hover:text-primary-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="block py-2 text-neutral-700 hover:text-primary-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/packages" 
                  className="block py-2 text-neutral-700 hover:text-primary-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="block py-2 text-neutral-700 hover:text-primary-600 font-medium"
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