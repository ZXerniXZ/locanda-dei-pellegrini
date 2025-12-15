import React from 'react';
import { RESTAURANT_INFO } from '../constants';

const RatingBubbles = () => (
  <div className="flex gap-[2px]">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="w-4 h-4 rounded-full bg-[#00AA6C]"></div>
    ))}
    {/* Half bubble implementation */}
    <div className="w-4 h-4 rounded-full bg-slate-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-1/2 bg-[#00AA6C]"></div>
    </div>
  </div>
);

const TripAdvisorSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Container che simula la card embedded */}
        <div className="bg-white border border-[#e0e0e0] p-6 md:p-8 rounded-sm shadow-[0_2px_4px_rgba(0,0,0,0.1)] flex flex-col md:flex-row gap-6 md:gap-8 items-start relative overflow-hidden font-sans">
          
          {/* Main Info */}
          <div className="flex-1 w-full z-10">
            {/* Official Logo */}
            <div className="mb-4">
                <img 
                    src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_slate.svg" 
                    alt="Tripadvisor" 
                    className="h-6 md:h-8"
                />
            </div>

            <div className="flex flex-col gap-1 mb-3">
                <a 
                    href={RESTAURANT_INFO.tripAdvisorLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl md:text-2xl font-bold text-black hover:underline decoration-1 underline-offset-2 cursor-pointer"
                >
                    {RESTAURANT_INFO.name}
                </a>
                
                <div className="flex items-center gap-2">
                    <RatingBubbles />
                    <span className="text-sm font-bold text-[#333]">342 recensioni</span>
                </div>
            </div>

            <div className="text-sm text-[#333] mb-5 space-y-1">
                <p>
                    <span className="text-[#333] font-bold">N. 1</span> di 26 Ristoranti a Cassano d'Adda
                </p>
                <p className="text-[#666]">
                    €€ - €€€ • Italiana, Pesce, Mediterranea
                </p>
            </div>

            {/* Snippet Recensione Recente */}
            <div className="bg-white border border-[#e0e0e0] p-4 rounded-sm mb-6 relative hover:bg-slate-50 transition-colors cursor-pointer group">
                <p className="text-sm italic text-[#333] mb-2 font-medium group-hover:underline">"Una conferma assoluta"</p>
                <div className="flex items-center gap-2">
                    <div className="flex gap-[1px]">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="w-2 h-2 rounded-full bg-[#00AA6C]"></div>
                        ))}
                    </div>
                    <span className="text-xs text-[#666]">Recensito ieri</span>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
                <a 
                    href={RESTAURANT_INFO.tripAdvisorLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none text-center px-6 py-2.5 bg-black text-white font-bold rounded-full text-sm hover:bg-[#333] transition-colors"
                >
                    Leggi le recensioni
                </a>
                <a 
                    href={RESTAURANT_INFO.tripAdvisorLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none text-center px-6 py-2.5 bg-white border border-black text-black font-bold rounded-full text-sm hover:bg-[#f2f2f2] transition-colors"
                >
                    Scrivi una recensione
                </a>
            </div>
          </div>

          {/* Badge Travelers' Choice Reale */}
          <div className="absolute top-4 right-4 md:static md:block shrink-0">
             <a 
                href={RESTAURANT_INFO.tripAdvisorLink}
                target="_blank" 
                rel="noopener noreferrer"
             >
                 <img 
                    src="https://www.tripadvisor.com/img/cdsi/img2/awards/v2/tc_2024_L-14348-2.png" 
                    alt="Travelers' Choice 2024" 
                    className="w-24 md:w-28 hover:opacity-90 transition-opacity"
                 />
             </a>
          </div>

        </div>
        
        <div className="text-center mt-3">
            <span className="text-[10px] text-[#666]">
                Tripadvisor LLC © {new Date().getFullYear()}
            </span>
        </div>

      </div>
    </section>
  );
};

export default TripAdvisorSection;