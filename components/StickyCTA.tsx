import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 md:hidden animate-bounce-slow">
      <a
        href={`tel:${RESTAURANT_INFO.phone.replace(/\s/g, '')}`}
        className="flex items-center justify-center w-14 h-14 bg-brand-gold text-white rounded-full shadow-2xl hover:bg-amber-600 transition-colors"
        aria-label="Chiama ora"
      >
        <Phone size={24} fill="currentColor" />
      </a>
    </div>
  );
};

export default StickyCTA;