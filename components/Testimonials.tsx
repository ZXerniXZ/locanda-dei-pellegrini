import React from 'react';
import { REVIEWS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Dicono di Noi
          </h2>
          <div className="h-1 w-16 bg-brand-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-slate-800 p-6 md:p-8 rounded-2xl relative border border-slate-700 shadow-lg">
              <Quote className="absolute top-6 right-6 text-brand-gold opacity-20 h-8 w-8 md:h-10 md:w-10" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-brand-gold fill-current" />
                ))}
              </div>
              <p className="text-slate-300 italic mb-6 leading-relaxed text-sm md:text-base">
                "{review.text}"
              </p>
              <div className="flex justify-between items-end border-t border-slate-700 pt-4">
                <span className="font-bold text-white text-sm md:text-base">{review.author}</span>
                <span className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wider">su {review.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;