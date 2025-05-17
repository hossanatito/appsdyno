
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, Axis3d } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: isHomePage ? '#home' : '/' },
    { name: 'About', href: isHomePage ? '#about' : '/#about' },
    { name: 'Services', href: isHomePage ? '#services' : '/#services' },
    { name: 'Testimonials', href: isHomePage ? '#testimonials' : '/#testimonials' },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-xl md:text-2xl font-bold text-white flex items-center">
            <Axis3d className="mr-2 text-brand-500 h-6 w-6 md:h-7 md:w-7" />
            <span className="text-brand-500">Apps</span>dyno
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href.startsWith('#') ? link.href : link.href}
              className="text-gray-300 hover:text-white transition-colors"
              onClick={(e) => {
                if (link.href.startsWith('#')) {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }
              }}
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-brand-600 hover:bg-brand-700" size="sm">
            Get a Free Quote
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary/95 backdrop-blur-md border-t border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name} 
                  to={link.href.startsWith('#') ? link.href : link.href}
                  className="text-gray-300 hover:text-white transition-colors py-2"
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    if (link.href.startsWith('#')) {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="bg-brand-600 hover:bg-brand-700 w-full">
                Get a Free Quote
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
