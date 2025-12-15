import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="chi-siamo" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Non solo un ristorante
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Un luogo dove la tradizione incontra la convivialità. Che sia per una cena romantica 
            o una pizza tra amici, troverai sempre un sorriso.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id} 
              className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group hover:border-brand-gold/30"
            >
              <div className="w-12 h-12 mx-auto bg-brand-cream rounded-xl flex items-center justify-center text-brand-gold mb-4 group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                <feature.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 bg-brand-blue rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
                L'Ospitalità è di casa
              </h3>
              <p className="text-blue-100 max-w-xl text-sm md:text-base leading-relaxed">
                Dall'aperitivo di benvenuto al digestivo a fine pasto, amiamo coccolare i nostri ospiti con piccoli gesti che rendono ogni esperienza unica.
              </p>
            </div>
            <div className="shrink-0 bg-white/10 p-4 rounded-full backdrop-blur-sm">
               <span className="text-3xl md:text-4xl">🥂</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;