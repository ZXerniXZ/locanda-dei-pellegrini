import React, { useRef } from 'react';
import { REVIEWS, RESTAURANT_INFO } from '../constants';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

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

const TripAdvisorCard = () => (
    <div className="bg-white text-slate-900 border border-[#e0e0e0] p-6 md:p-8 rounded-2xl shadow-xl flex flex-col md:flex-row gap-6 md:gap-8 items-start relative overflow-hidden font-sans max-w-4xl mx-auto mb-16">
        
        {/* Main Info */}
        <div className="flex-1 w-full z-10 text-left">
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
        <div className="bg-slate-50 border border-[#e0e0e0] p-4 rounded-lg mb-6 relative hover:bg-slate-100 transition-colors cursor-pointer group">
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
                className="w-20 md:w-28 hover:opacity-90 transition-opacity"
                />
            </a>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350; // Larghezza approssimativa di una card
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount 
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Dicono di Noi
          </h2>
          <div className="h-1 w-16 bg-brand-gold mx-auto rounded-full"></div>
        </div>

        {/* TripAdvisor Component Integrated */}
        <TripAdvisorCard />

        {/* Carousel Header */}
        <div className="flex justify-between items-end mb-6 px-2">
            <div>
                <h3 className="text-xl font-bold text-white">Altre recensioni</h3>
                <p className="text-slate-400 text-sm">Cosa pensano i nostri clienti</p>
            </div>
            <div className="flex gap-2">
                <button 
                    onClick={() => scroll('left')}
                    className="p-2 rounded-full bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-colors"
                    aria-label="Scorri a sinistra"
                >
                    <ChevronLeft size={20} />
                </button>
                <button 
                    onClick={() => scroll('right')}
                    className="p-2 rounded-full bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-colors"
                    aria-label="Scorri a destra"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>

        {/* Reviews Carousel */}
        <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {REVIEWS.map((review) => (
            <div 
                key={review.id} 
                className="min-w-[85vw] md:min-w-[400px] snap-center bg-slate-800 p-8 rounded-2xl relative border border-slate-700 shadow-lg flex flex-col justify-between"
            >
              <div>
                <Quote className="absolute top-6 right-6 text-brand-gold opacity-20 h-10 w-10" />
                <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-brand-gold fill-current" />
                    ))}
                </div>
                <p className="text-slate-300 italic mb-6 leading-relaxed text-base">
                    "{review.text}"
                </p>
              </div>
              <div className="flex justify-between items-end border-t border-slate-700 pt-4">
                <span className="font-bold text-white">{review.author}</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider">su {review.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;