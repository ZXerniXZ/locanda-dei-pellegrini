import React from 'react';
import { HIGHLIGHTS } from '../constants';
import { Utensils } from 'lucide-react';

const MenuSection: React.FC = () => {
  return (
    <section id="cucina" className="py-16 md:py-24 bg-brand-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-12 gap-4">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-brand-blue font-bold tracking-widest uppercase text-xs md:text-sm">Le Nostre Specialità</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mt-2">
              Dal mare al forno
            </h2>
          </div>
          <div className="hidden md:block">
            <Utensils className="text-brand-gold h-10 w-10 opacity-50" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {HIGHLIGHTS.map((item) => (
            <div key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 md:hover:-translate-y-1 border border-slate-100">
              <div className="h-56 md:h-64 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wide text-brand-blue shadow-sm">
                  {item.category}
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-display font-bold text-slate-800 mb-2">{item.name}</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center px-4">
            <p className="text-slate-500 italic mb-4 text-sm md:text-base">Fascia di prezzo media: €20 – €30 a persona</p>
            <button className="text-brand-blue font-bold hover:text-brand-gold transition-colors underline decoration-2 underline-offset-4 text-sm md:text-base">
                Chiedi informazioni sui piatti del giorno
            </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;