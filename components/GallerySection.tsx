import React from 'react';
import { CircularGallery, type GalleryItem } from './CircularGallery';

const galleryItems: GalleryItem[] = [
  { 
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=800&auto=format&fit=crop", 
    text: "Forno a Legna" 
  },
  { 
    image: "https://images.unsplash.com/photo-1599321955726-9048b5b930dc?q=80&w=800&auto=format&fit=crop", 
    text: "Pesce Fresco" 
  },
  { 
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=800&auto=format&fit=crop", 
    text: "Pasta Fresca" 
  },
  { 
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800&auto=format&fit=crop", 
    text: "Vini Selezionati" 
  },
  { 
    image: "https://images.unsplash.com/photo-1551024601-562963525c54?q=80&w=800&auto=format&fit=crop", 
    text: "Dolci Artigianali" 
  },
  { 
    image: "https://images.unsplash.com/photo-1615937651188-cdc93116904d?q=80&w=800&auto=format&fit=crop", 
    text: "Aperitivi" 
  }
];

const GallerySection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-cream relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 md:h-32 bg-gradient-to-b from-white/90 to-transparent z-10 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12 text-center relative z-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">
               Il Nostro Percorso
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-light text-base md:text-lg">
                Scorri tra i sapori che rendono unica la nostra cucina. 
                <span className="hidden sm:inline"> Dalle reti dei pescatori al calore del nostro forno.</span>
            </p>
        </div>

        {/* Adjusted height for mobile to prevent scroll locking feeling */}
        <div className="relative h-[400px] md:h-[600px] w-full cursor-grab active:cursor-grabbing">
            <CircularGallery
                items={galleryItems}
                bend={2}
                borderRadius={0.05}
                scrollEase={0.05}
                className="font-display font-bold text-white text-3xl md:text-4xl"
            />
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-brand-cream to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default GallerySection;