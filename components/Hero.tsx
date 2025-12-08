import React from 'react';
import { RESTAURANT_INFO } from '../constants';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/restaurant_interior_warm/1920/1080"
          alt="Interno Ristorante"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="inline-block py-1 px-3 rounded-full bg-brand-gold/90 text-white text-sm font-semibold mb-6 tracking-wide uppercase">
          Cassano d'Adda
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight drop-shadow-lg">
          {RESTAURANT_INFO.tagline}
        </h1>
        <p className="text-xl md:text-2xl text-slate-100 mb-10 font-light max-w-2xl mx-auto">
          {RESTAURANT_INFO.subTagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#cucina"
            className="px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-brand-gold hover:text-white transition-all duration-300 shadow-lg"
          >
            Scopri il Menù
          </a>
          <a
            href="#contatti"
            className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-sm"
          >
            Prenota un Tavolo
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/80">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;