import React, { useState } from 'react';
import { Menu, X, Phone, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Cucina', href: '#cucina' },
    { name: 'Chi Siamo', href: '#chi-siamo' },
    { name: 'Contatti', href: '#contatti' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-brand-gold p-2 rounded-full text-white">
              <UtensilsCrossed size={24} />
            </div>
            <span className="font-display font-bold text-xl md:text-2xl text-slate-800 leading-tight">
              La Locanda<br /><span className="text-brand-blue text-lg">dei Pellegrini</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-brand-blue font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`tel:${RESTAURANT_INFO.phone.replace(/\s/g, '')}`}
              className="bg-brand-blue text-white px-6 py-2 rounded-full font-medium hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Phone size={18} />
              Prenota
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-brand-blue focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 rounded-md text-base font-medium text-slate-700 hover:text-brand-blue hover:bg-slate-50 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a 
                href={`tel:${RESTAURANT_INFO.phone.replace(/\s/g, '')}`}
                className="w-full bg-brand-gold text-white px-4 py-3 rounded-md font-bold flex justify-center items-center gap-2"
              >
                <Phone size={20} />
                Chianaci: {RESTAURANT_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;