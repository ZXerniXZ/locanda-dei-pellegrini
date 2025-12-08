import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="chi-siamo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            Non solo un ristorante
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Un luogo dove la tradizione incontra la convivialità. Che sia per una cena romantica, 
            una pizza tra amici o un pranzo in famiglia, alla Locanda troverai sempre un sorriso ad accoglierti.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id} 
              className="p-6 rounded-2xl bg-brand-cream border border-amber-100 text-center hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-14 h-14 mx-auto bg-white rounded-full flex items-center justify-center text-brand-gold mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-brand-blue rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
                L'Ospitalità è di casa
              </h3>
              <p className="text-blue-100 max-w-xl">
                Dall'aperitivo di benvenuto al digestivo a fine pasto, amiamo coccolare i nostri ospiti con piccoli gesti che rendono ogni esperienza unica.
              </p>
            </div>
            <div className="shrink-0">
               <span className="text-4xl">🥂</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;