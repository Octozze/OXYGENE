
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`;

  const linkClasses = "relative font-medium transition-colors hover:text-sao2-blue before:absolute before:bottom-[-4px] before:left-0 before:h-0.5 before:w-0 before:bg-sao2-blue before:transition-all hover:before:w-full";
  const activeLinkClasses = "text-sao2-blue before:absolute before:bottom-[-4px] before:left-0 before:h-0.5 before:w-full before:bg-sao2-blue";

  return (
    <header className={navbarClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-xl md:text-2xl font-heading font-bold text-sao2-blue">SAO2 <span className="text-sao2-green-dark">Santé</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <Link 
              key={index} 
              to={item.path} 
              className={`${linkClasses} ${location.pathname === item.path ? activeLinkClasses : ''}`}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild variant="default" className="bg-sao2-blue hover:bg-sao2-blue-dark">
            <Link to="/contact">Nous contacter</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item, index) => (
              <Link 
                key={index} 
                to={item.path} 
                className={`text-lg py-2 ${location.pathname === item.path ? 'text-sao2-blue font-medium' : 'text-gray-700'}`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild variant="default" className="bg-sao2-blue hover:bg-sao2-blue-dark w-full">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
