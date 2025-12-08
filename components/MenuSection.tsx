import React from 'react';
import { HIGHLIGHTS } from '../constants';
import { Utensils } from 'lucide-react';

const MenuSection: React.FC = () => {
  return (
    <section id="cucina" className="py-20 bg-brand-cream/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <span className="text-brand-blue font-semibold tracking-wider uppercase text-sm">Le Nostre Specialità</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mt-2">
              Dal mare al forno a legna
            </h2>
          </div>
          <div className="hidden md:block">
            <Utensils className="text-brand-gold h-12 w-12 opacity-50" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HIGHLIGHTS.map((item) => (
            <div key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-brand-blue">
                  {item.category}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-slate-800 mb-3">{item.name}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-slate-500 italic mb-6">Fascia di prezzo media: €20 – €30 a persona</p>
            <button className="text-brand-blue font-bold hover:text-brand-gold transition-colors underline decoration-2 underline-offset-4">
                Chiedi informazioni sui piatti del giorno
            </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;