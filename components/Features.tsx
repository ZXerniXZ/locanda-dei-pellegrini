import React from 'react';
import { Wifi, Baby, Accessibility, Trees, Wine, Music, Car } from 'lucide-react';
import { cn } from '../lib/utils';

const Features: React.FC = () => {
  return (
    <section id="chi-siamo" className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative blurred blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-brand-gold font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block">
            L'Esperienza
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6 leading-tight">
            Molto più di un <br/> semplice ristorante
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            Abbiamo curato ogni dettaglio per farvi sentire a casa. Dagli spazi all'aperto all'attenzione per i più piccoli, la Locanda è pensata per il vostro benessere.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* Card 1: Giardino Estivo (Large Image Card) */}
          <div className="group md:col-span-2 lg:col-span-2 row-span-2 relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 min-h-[300px] md:min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
              alt="Giardino Estivo" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 text-white">
                <Trees size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">Il Giardino Segreto</h3>
              <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-sm">
                Un'oasi verde dove godersi le serate estive. La nostra veranda è il luogo perfetto per cene romantiche o ritrovi tra amici sotto le stelle.
              </p>
            </div>
          </div>

          {/* Card 2: Ospitalità (Blue Card) */}
          <div className="group md:col-span-1 lg:col-span-2 bg-brand-blue rounded-[2rem] p-8 text-white flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
             <div>
               <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4 text-brand-gold">
                  <Wine size={24} />
               </div>
               <h3 className="text-xl font-display font-bold mb-2">Accoglienza Calda</h3>
               <p className="text-blue-100 text-sm leading-relaxed">
                 Dall'aperitivo di benvenuto al digestivo offerto, ogni gesto è pensato per coccolarvi. Per noi non siete clienti, siete ospiti.
               </p>
             </div>
          </div>

          {/* Card 3: Famiglia (Cream Card) */}
          <div className="group md:col-span-1 bg-[#FFF8F0] border border-brand-gold/10 rounded-[2rem] p-8 flex flex-col justify-center shadow-sm hover:shadow-lg transition-all duration-300">
             <div className="w-12 h-12 bg-brand-gold/20 rounded-2xl flex items-center justify-center mb-4 text-brand-gold group-hover:scale-110 transition-transform">
                <Baby size={24} />
             </div>
             <h3 className="text-lg font-bold text-slate-800 mb-2">Per le Famiglie</h3>
             <p className="text-slate-600 text-sm">
               Seggioloni, menù dedicati e la pazienza che serve. I bambini sono i benvenuti.
             </p>
          </div>

           {/* Card 4: Accessibilità (White Card) */}
           <div className="group md:col-span-1 bg-white border border-slate-100 rounded-[2rem] p-8 flex flex-col justify-center shadow-sm hover:shadow-lg transition-all duration-300">
             <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-4 text-slate-600 group-hover:scale-110 transition-transform">
                <Accessibility size={24} />
             </div>
             <h3 className="text-lg font-bold text-slate-800 mb-2">Senza Barriere</h3>
             <p className="text-slate-600 text-sm">
               Spazi ampi e servizi accessibili per garantire a tutti una serata piacevole.
             </p>
          </div>

          {/* Card 5: Servizi Extra (Wide Bottom Card) */}
          <div className="md:col-span-2 lg:col-span-2 bg-white border border-slate-100 rounded-[2rem] p-6 md:p-8 flex items-center justify-between shadow-sm hover:shadow-lg transition-all duration-300">
             <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div>
                   <h3 className="text-lg font-bold text-slate-800 mb-1">Comfort & Servizi</h3>
                   <p className="text-slate-500 text-sm">Tutto ciò che serve per una cena senza pensieri.</p>
                </div>
                <div className="flex gap-3">
                   <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-xs font-bold text-slate-600 border border-slate-200">
                      <Wifi size={14} /> Wi-Fi Free
                   </div>
                   <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-xs font-bold text-slate-600 border border-slate-200">
                      <Car size={14} /> Parcheggio Facile
                   </div>
                   <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-xs font-bold text-slate-600 border border-slate-200">
                      <Music size={14} /> Musica Ambiente
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;