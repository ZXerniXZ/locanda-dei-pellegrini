import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';
import { cn } from '../lib/utils';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Cucina', href: '#cucina' },
    { name: 'Chi Siamo', href: '#chi-siamo' },
    { name: 'Contatti', href: '#contatti' },
  ];

  return (
    <>
      <nav 
        className={cn(
          "fixed w-full z-50 transition-all duration-300 border-b border-transparent",
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2 border-slate-100" : "bg-transparent py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 relative z-50">
              <div className={cn(
                "p-2 rounded-full text-white transition-colors",
                scrolled || isOpen ? "bg-brand-gold" : "bg-brand-gold/90 backdrop-blur-sm"
              )}>
                <UtensilsCrossed size={20} />
              </div>
              <span className={cn(
                "font-display font-bold text-xl leading-tight transition-colors",
                scrolled || isOpen ? "text-slate-800" : "text-white drop-shadow-md"
              )}>
                La Locanda<br />
                <span className={cn(
                  "text-base",
                  scrolled || isOpen ? "text-brand-blue" : "text-white/90"
                )}>dei Pellegrini</span>
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors uppercase tracking-wider",
                    scrolled ? "text-slate-600 hover:text-brand-blue" : "text-white/90 hover:text-white hover:underline decoration-brand-gold underline-offset-4"
                  )}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={`tel:${RESTAURANT_INFO.phone.replace(/\s/g, '')}`}
                className={cn(
                  "px-5 py-2 rounded-full font-medium transition-all flex items-center gap-2 transform hover:-translate-y-0.5",
                  scrolled 
                    ? "bg-brand-blue text-white hover:bg-slate-800 shadow-md hover:shadow-lg" 
                    : "bg-white text-brand-blue hover:bg-brand-cream shadow-lg"
                )}
              >
                <Phone size={16} />
                Prenota
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "focus:outline-none p-2 rounded-full transition-colors",
                  isOpen ? "text-slate-800 bg-slate-100" : (scrolled ? "text-slate-800" : "text-white bg-black/20 backdrop-blur-sm")
                )}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-center px-8",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="space-y-6 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-3xl font-display font-bold text-slate-800 hover:text-brand-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="pt-8 flex flex-col items-center gap-4">
            <p className="text-slate-500 italic font-serif">
              "Sapori di mare e forno a legna"
            </p>
            <div className="w-16 h-1 bg-brand-gold/30 rounded-full"></div>
            <a 
              href={`tel:${RESTAURANT_INFO.phone.replace(/\s/g, '')}`}
              className="mt-4 w-full max-w-xs bg-brand-blue text-white px-6 py-4 rounded-xl font-bold flex justify-center items-center gap-3 shadow-xl active:scale-95 transition-transform"
            >
              <Phone size={20} />
              Chiama Ora
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;