import React, { useState, useEffect } from 'react';
import { Phone, ChefHat, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';
import { cn } from '../lib/utils';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Appare dopo aver superato l'80% dell'altezza dello schermo (dopo la Hero)
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div 
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-30 transition-all duration-500 transform w-auto max-w-[90vw]",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none"
      )}
    >
      <div className="flex items-center bg-slate-900/90 backdrop-blur-md text-white p-1.5 rounded-full shadow-2xl border border-white/10 ring-1 ring-black/10">
        
        {/* Pulsante Menu */}
        <a
          href="#cucina"
          className="flex items-center gap-2 px-5 py-3 rounded-full hover:bg-white/10 transition-all active:scale-95 group"
        >
          <ChefHat size={18} className="text-brand-gold group-hover:rotate-12 transition-transform" />
          <span className="font-bold text-sm tracking-wide whitespace-nowrap">Menù</span>
        </a>

        {/* Divisore Verticale */}
        <div className="w-px h-6 bg-white/20 mx-1"></div>

        {/* Pulsante Chiama */}
        <a
          href={`tel:${RESTAURANT_INFO.phone.replace(/\s/g, '')}`}
          className="flex items-center gap-2 px-5 py-3 rounded-full hover:bg-white/10 transition-all active:scale-95 group"
        >
          <Phone size={18} className="text-brand-blue fill-brand-blue group-hover:animate-pulse" />
          <span className="font-bold text-sm tracking-wide whitespace-nowrap">Chiama</span>
        </a>

      </div>
    </div>
  );
};

export default StickyCTA;