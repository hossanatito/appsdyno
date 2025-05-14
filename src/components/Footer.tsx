
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background pt-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-brand-500">Apps</span>dyno
            </h3>
            <p className="text-gray-400 mb-6">
              Transforming ideas into powerful digital solutions that drive business growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-secondary/80 p-2 rounded-full hover:bg-brand-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-secondary/80 p-2 rounded-full hover:bg-brand-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-secondary/80 p-2 rounded-full hover:bg-brand-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-secondary/80 p-2 rounded-full hover:bg-brand-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-brand-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand-500 transition-colors">Our Services</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-brand-500 transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-500 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-500 transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-brand-500 transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-500 transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-500 transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-500 transition-colors">Custom Software</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-500 transition-colors">Maintenance</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2 text-brand-500" />
                <a href="mailto:cynosurictechlabs@gmail.com" className="hover:text-brand-500 transition-colors">
                  cynosurictechlabs@gmail.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-2 text-brand-500" />
                <a href="tel:+17722491629" className="hover:text-brand-500 transition-colors">
                  +1 (772) 249-1629
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <a href="#contact" className="inline-flex items-center text-brand-500 hover:text-brand-400 transition-colors">
                Get in touch <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Appsdyno. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 text-sm hover:text-brand-500 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 text-sm hover:text-brand-500 transition-colors">Terms of Service</Link>
              <a href="#" className="text-gray-400 text-sm hover:text-brand-500 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
