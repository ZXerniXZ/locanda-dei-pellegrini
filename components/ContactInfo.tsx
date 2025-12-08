import React from 'react';
import { WORK_HOURS, RESTAURANT_INFO } from '../constants';
import { MapPin, Phone, Clock } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <section id="contatti" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info & Hours */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-8">
              Orari & Posizione
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center text-brand-blue">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Indirizzo</h3>
                  <p className="text-slate-600 mb-2">{RESTAURANT_INFO.address}</p>
                  <a 
                    href={RESTAURANT_INFO.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue hover:text-brand-gold font-medium underline"
                  >
                    Vedi su Google Maps →
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center text-brand-blue">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Telefono</h3>
                  <p className="text-slate-600 mb-2">Consigliata la prenotazione, soprattutto nel weekend.</p>
                  <a 
                    href={`tel:${RESTAURANT_INFO.phone.replace(/\s/g, '')}`}
                    className="text-xl font-bold text-slate-900 hover:text-brand-gold transition-colors"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                    <Clock className="text-brand-gold" size={24} />
                    <h3 className="font-bold text-lg text-slate-900">Orari di Apertura</h3>
                </div>
                <div className="space-y-2">
                  {WORK_HOURS.map((schedule, idx) => (
                    <div key={idx} className="flex justify-between text-sm sm:text-base border-b border-slate-200 last:border-0 pb-2 last:pb-0">
                      <span className="font-medium text-slate-700 w-24">{schedule.day}</span>
                      <div className="text-right text-slate-500 flex-1">
                        <span className="block sm:inline">{schedule.lunch}</span>
                        <span className="hidden sm:inline mx-2 text-slate-300">|</span>
                        <span className="block sm:inline">{schedule.dinner}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map Visual Placeholder */}
          <div className="h-full min-h-[400px] bg-slate-200 rounded-3xl overflow-hidden relative shadow-lg group">
             {/* Since we cannot use a real embedded map without an API key, we use a static image representation linking to the map */}
             <a href={RESTAURANT_INFO.mapLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative cursor-pointer">
                <img 
                    src="https://picsum.photos/seed/map_placeholder/800/800?grayscale" 
                    alt="Mappa Locanda dei Pellegrini" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                    <div className="bg-white px-6 py-3 rounded-full shadow-xl flex items-center gap-2 font-bold text-slate-900 group-hover:scale-105 transition-transform">
                        <MapPin className="text-red-500" fill="currentColor" />
                        Apri Mappa
                    </div>
                </div>
             </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactInfo;