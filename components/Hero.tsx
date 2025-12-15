import React from 'react';
import { RESTAURANT_INFO } from '../constants';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/restaurant_interior_warm/1920/1080"
          alt="Interno Ristorante"
          className="w-full h-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center h-full pt-16">
        <span className="inline-block py-1.5 px-4 rounded-full bg-brand-gold/90 backdrop-blur-sm text-white text-xs sm:text-sm font-bold mb-6 tracking-widest uppercase shadow-lg border border-white/20">
          Cassano d'Adda
        </span>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.1] drop-shadow-xl">
          {RESTAURANT_INFO.tagline}
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-slate-200 mb-10 font-light max-w-xl mx-auto leading-relaxed">
          {RESTAURANT_INFO.subTagline}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
          <a
            href="#cucina"
            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-brand-gold hover:text-white transition-all duration-300 shadow-lg active:scale-95 text-center"
          >
            Scopri il Menù
          </a>
          <a
            href="#contatti"
            className="w-full sm:w-auto px-8 py-4 border border-white/40 bg-white/10 text-white rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-md shadow-lg active:scale-95 text-center"
          >
            Prenota un Tavolo
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;