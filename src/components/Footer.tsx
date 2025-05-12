
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-techace-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-techace-blue to-techace-teal rounded-md w-8 h-8" />
              <span className="font-bold text-xl">Tech Ace Solutions</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering youth through technology education and resources in marginalized communities.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-techace-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-techace-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-techace-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-techace-blue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-techace-blue transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-techace-blue transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-techace-blue transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-techace-blue transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-techace-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-techace-blue transition-colors">Digital Literacy</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-techace-blue transition-colors">Coding Workshops</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-techace-blue transition-colors">Tech Mentorship</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-techace-blue transition-colors">Community Tech Hubs</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-techace-blue transition-colors">Career Guidance</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">123 Tech Avenue</p>
              <p className="mb-2">Nairobi, Kenya</p>
              <p className="mb-2">info@techacesolutions.com</p>
              <p>+254 700 000000</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tech Ace Solutions Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
