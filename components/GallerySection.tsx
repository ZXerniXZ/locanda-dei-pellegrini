import React, { useState, useCallback } from 'react';
import { CircularGallery, type GalleryItem } from './CircularGallery';
import { Quote, Star, User, Calendar } from 'lucide-react';

interface ExtendedGalleryItem extends GalleryItem {
  review: {
    author: string;
    contributions: string;
    title: string;
    text: string;
    date?: string;
    rating?: number;
  };
}

const galleryItems: ExtendedGalleryItem[] = [
  { 
    image: "https://lh3.googleusercontent.com/d/1vDqdTnmscD1wfiJnLbBCgD4klUO3JUNk", 
    text: "Pizze Speciali",
    review: {
      author: "Journey13195400893",
      contributions: "5 contributi",
      title: "Tutto buonooo",
      text: "Posto meraviglioso, giardino incantevole, atmosfera romantica. Il pesce piu buono che abbiamo mai mangiato, il fritto squisito, la pizza semplicemente la migliore, la mozzarella ti si scioglie in bocca. Camerieri sempre attenti, appena arrivi ti accolgono e ti versano l'acqua, tutti gentili. Tornerò tutte le volte che potrò, ve lo consiglio vivamente.",
      date: "Ottobre 2025",
      rating: 5
    }
  },
  { 
    image: "https://lh3.googleusercontent.com/d/1WhRE8R2Y_YEnRZ76WqqV53tyWxlj0D8l", 
    text: "Pesce Fresco",
    review: {
      author: "Fam ASD",
      contributions: "1628 contributi",
      title: "Ottima ristorante!",
      text: "Siamo stati a cena con amici presso questo ristorante su indicazione di un ottimo fritto proposto. Ambiente carino, curato, personale gentile e molto attento. Abbiamo provato diverse portate, tutte molto buone ma il fritto l'ha fatta sicuramente da padrone! I prezzi sono corretti per la qualità offerta e le porzioni generose! Molto graditi i digestivi offerti. Consigliatissimo!!!",
      rating: 5
    }
  },
  { 
    image: "https://lh3.googleusercontent.com/d/17H6xu6WLrE-A0l2rWQX7Pae-GuRSHQNK", 
    text: "Primi Piatti",
    review: {
      author: "Viola",
      contributions: "241 contributi",
      title: "Buona cena",
      text: "Ristorante molto carino, d'estate il giardino è molto bello. La tagliata era ottima (anche la cottura come richiesto), il risotto pure.",
      rating: 4
    }
  },
  { 
    image: "https://lh3.googleusercontent.com/d/1MqLn86mwjJhjeHPDZpF4iXAUoO69hi-1", 
    text: "Secondi",
    review: {
      author: "Marika G",
      contributions: "14 contributi",
      title: "Bontà in zona",
      text: "Ottimo rapporto qualità prezzo. Servizio ricercato, attento al dettaglio e impeccabile. Menù vario per tutte le esigenze. Ricercatezza nei piatti e nella selezione di ingredienti di qualità. Ho cenato differenti volte presso questo ristorante e lo consiglio vivamente soprattutto per l'offerta del ristorante.",
      rating: 5
    }
  },
  { 
    image: "https://lh3.googleusercontent.com/d/1YN1HjhyogKWNjWaNSyesTZGNdd7Rz2K7", 
    text: "Dolci Fatti in Casa",
    review: {
      author: "Luke",
      contributions: "698 contributi",
      title: "Piacevole scoperta",
      text: "Piacevole scoperta! Andavo spesso parecchi anni fa, ma con la locanda dei pellegrini non avevo ancora provato. Tutto veramente ottimo: dal servizio/accoglienza, alle portate eccellenti in qualità e quantità, al prezzo giusto! Ottimo L’antipasto di pesce dei pellegrini, gli spaghetti allo scoglio e la paranza. Ci ritornerò sicuramente!!!!",
      date: "Marzo 2022",
      rating: 5
    }
  },
  { 
    image: "https://lh3.googleusercontent.com/d/1NCb67jxm5IgIx0e9XwvKspTK-FnQmyp4", 
    text: "Aperitivi",
    review: {
      author: "Oscar A",
      contributions: "174 contributi",
      title: "Serata gradevole",
      text: "Bel locale diviso in salette. Servizio veloce cordiale e simpatico. Pesce buono, porzioni abbondanti. Unico neo il vociare dei gruppi che sovrasta la tranquillità di una serata altrimenti perfetta. Ritornerò, magari non di sabato.",
      date: "Febbraio 2022",
      rating: 4
    }
  }
];

const GallerySection: React.FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const handleItemClick = useCallback((index: number | null) => {
    setActiveItemIndex(index);
  }, []);

  const activeReview = activeItemIndex !== null ? galleryItems[activeItemIndex % galleryItems.length].review : null;

  return (
    <section id="cucina" className="py-16 md:py-24 bg-brand-cream relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 md:h-32 bg-gradient-to-b from-white/90 to-transparent z-10 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12 text-center relative z-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">
               Il Nostro Percorso
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-light text-base md:text-lg">
                Clicca su un piatto per scoprire cosa dicono i nostri ospiti.
            </p>
        </div>

        <div className="relative h-[600px] md:h-[700px] w-full">
            <CircularGallery
                items={galleryItems}
                bend={2}
                borderRadius={0.05}
                scrollEase={0.05}
                className="font-display font-bold text-white text-3xl md:text-4xl"
                onItemClick={handleItemClick}
            />

            {/* Review Overlay */}
            {activeReview && (
              <div 
                className="absolute bottom-4 left-0 right-0 z-30 flex justify-center px-4 animate-fade-in-up"
                style={{ animationDuration: '0.5s' }}
              >
                <div className="bg-white/95 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-2xl max-w-2xl w-full border border-slate-200/50 text-left">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-brand-cream rounded-full flex items-center justify-center text-brand-gold">
                        <User size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 leading-tight">{activeReview.author}</h4>
                        <span className="text-xs text-slate-500">{activeReview.contributions}</span>
                      </div>
                    </div>
                    {activeReview.date && (
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-50 px-3 py-1 rounded-full">
                        <Calendar size={12} />
                        {activeReview.date}
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-3">
                    <div className="flex gap-1 mb-2">
                       {[...Array(activeReview.rating || 5)].map((_, i) => (
                         <Star key={i} size={14} className="fill-brand-gold text-brand-gold" />
                       ))}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">{activeReview.title}</h3>
                  </div>

                  <p className="text-slate-600 text-sm md:text-base leading-relaxed italic relative pl-4 border-l-2 border-brand-gold/30">
                     "{activeReview.text}"
                  </p>
                </div>
              </div>
            )}
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-brand-cream to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default GallerySection;