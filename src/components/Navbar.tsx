
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-techace-blue to-techace-teal rounded-md w-8 h-8" />
            <span className="font-bold text-xl text-techace-dark">Tech Ace Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-techace-gray hover:text-techace-blue transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-techace-gray hover:text-techace-blue transition-colors">
              Services
            </Link>
            <Link to="/portfolio" className="text-techace-gray hover:text-techace-blue transition-colors">
              Portfolio
            </Link>
            <Link to="/blog" className="text-techace-gray hover:text-techace-blue transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-techace-gray hover:text-techace-blue transition-colors">
              Contact
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-gradient-to-r from-techace-blue to-techace-teal hover:opacity-90 transition-opacity"
              asChild
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-techace-gray hover:text-techace-blue transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 animate-fade-in">
            <div className="flex flex-col space-y-4 py-4">
              <Link 
                to="/" 
                className="text-techace-gray hover:text-techace-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="text-techace-gray hover:text-techace-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/portfolio" 
                className="text-techace-gray hover:text-techace-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                to="/blog" 
                className="text-techace-gray hover:text-techace-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="text-techace-gray hover:text-techace-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button 
                className="bg-gradient-to-r from-techace-blue to-techace-teal hover:opacity-90 transition-opacity w-full"
                asChild
                onClick={() => setIsOpen(false)}
              >
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
