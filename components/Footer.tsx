import React from 'react';
import { RESTAURANT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="font-display font-bold text-2xl text-white mb-4">La Locanda dei Pellegrini</h3>
        <p className="mb-8 max-w-md mx-auto">{RESTAURANT_INFO.address}</p>
        <div className="flex justify-center gap-6 mb-8">
            <span className="hover:text-white transition-colors cursor-pointer">Facebook</span>
            <span className="hover:text-white transition-colors cursor-pointer">Instagram</span>
            <span className="hover:text-white transition-colors cursor-pointer">Tripadvisor</span>
        </div>
        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} La Locanda dei Pellegrini. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
};

export default Footer;