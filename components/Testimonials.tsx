import React from 'react';
import { REVIEWS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Dicono di Noi
          </h2>
          <div className="h-1 w-20 bg-brand-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-slate-800 p-8 rounded-2xl relative border border-slate-700">
              <Quote className="absolute top-6 right-6 text-brand-gold opacity-20 h-10 w-10" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-brand-gold fill-current" />
                ))}
              </div>
              <p className="text-slate-300 italic mb-6 leading-relaxed">
                "{review.text}"
              </p>
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