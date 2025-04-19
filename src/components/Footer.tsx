
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-sao2-blue">SAO2 Santé</h3>
            <p className="text-gray-600 mb-4">
              Services d'oxygène médical et de soins à domicile, votre partenaire santé dans le sud de la France.
            </p>
            <address className="text-gray-600 not-italic">
              51 Chemin du Refuge<br />
              06250 Mougins, France
            </address>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-sao2-blue">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-600 hover:text-sao2-blue transition-colors">
                Accueil
              </Link>
              <Link to="/services" className="text-gray-600 hover:text-sao2-blue transition-colors">
                Nos Services
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-sao2-blue transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-sao2-blue">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:octozze@gmail.com" className="block text-gray-600 hover:text-sao2-blue transition-colors">
                octozze@gmail.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} SAO2 Santé. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
