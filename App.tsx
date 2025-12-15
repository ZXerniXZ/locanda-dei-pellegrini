import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GallerySection from './components/GallerySection';
import Features from './components/Features';
import TripAdvisorSection from './components/TripAdvisorSection';
import Testimonials from './components/Testimonials';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-cream font-sans text-slate-800 antialiased selection:bg-brand-gold selection:text-white">
      <Header />
      <main>
        <Hero />
        <GallerySection />
        <Features />
        <TripAdvisorSection />
        <Testimonials />
        <ContactInfo />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;