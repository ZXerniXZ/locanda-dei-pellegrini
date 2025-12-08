import { Clock, MapPin, Phone, Wifi, Utensils, Baby, Accessibility, Trees } from 'lucide-react';
import { WorkHour, Review, MenuItem, Feature } from './types';

export const RESTAURANT_INFO = {
  name: "La Locanda dei Pellegrini",
  address: "Via Quintino di Vona 31, 20062 Cassano d'Adda (MI)",
  phone: "+39 348 982 1133",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Via+Quintino+di+Vona+31+Cassano+d'Adda",
  tagline: "Sapori di mare e forno a legna: il gusto autentico a Cassano d'Adda.",
  subTagline: "Dove ogni piatto ha un’anima — e ogni serata un profumo di tradizione."
};

export const WORK_HOURS: WorkHour[] = [
  { day: "Lunedì", lunch: "Chiuso", dinner: "—" },
  { day: "Martedì", lunch: "12:00 – 15:00", dinner: "19:00 – 23:00" },
  { day: "Mercoledì", lunch: "12:00 – 15:00", dinner: "19:00 – 22:30" },
  { day: "Giovedì", lunch: "12:00 – 15:00", dinner: "19:00 – 22:30" },
  { day: "Venerdì", lunch: "12:00 – 15:00", dinner: "19:00 – 23:00" },
  { day: "Sabato", lunch: "12:00 – 15:00", dinner: "19:00 – 23:00" },
  { day: "Domenica", lunch: "12:00 – 15:00", dinner: "19:00 – 22:30" },
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Marco R.",
    rating: 5,
    text: "Pizza napoletana vera, cornicione alto e impasto leggerissimo. I dolci fatti in casa sono la fine del mondo!",
    source: "Tripadvisor"
  },
  {
    id: 2,
    author: "Laura B.",
    rating: 5,
    text: "Pesce freschissimo e cucinato con cura. L'accoglienza con l'aperitivo di benvenuto è un tocco di classe che fa la differenza.",
    source: "Google"
  },
  {
    id: 3,
    author: "Alessandro T.",
    rating: 4,
    text: "Ottimo rapporto qualità prezzo. Location informale ma curata, perfetta per una cena tra amici in veranda.",
    source: "Sluurpy"
  }
];

export const FEATURES: Feature[] = [
  { id: 1, title: "Giardino Estivo", description: "Ampia veranda per cene all'aperto", icon: Trees },
  { id: 2, title: "Accessibile", description: "Accesso disabili e servizi dedicati", icon: Accessibility },
  { id: 3, title: "Famiglie", description: "Seggioloni e menù adatti ai bambini", icon: Baby },
  { id: 4, title: "Servizi", description: "Wi-Fi gratuito e pagamenti digitali", icon: Wifi },
];

export const HIGHLIGHTS: MenuItem[] = [
  {
    id: 1,
    name: "Frittura di Paranza",
    description: "Pesce fresco di giornata, croccante e asciutto, servito con verdurine pastellate.",
    category: "pesce",
    image: "https://picsum.photos/seed/seafood1/600/400"
  },
  {
    id: 2,
    name: "Pizza Regina",
    description: "Impasto lievitato 48h, pomodoro San Marzano DOP, mozzarella di bufala e basilico fresco.",
    category: "pizza",
    image: "https://picsum.photos/seed/pizza1/600/400"
  },
  {
    id: 3,
    name: "Tiramisù della Casa",
    description: "Il nostro fiore all'occhiello. Preparato ogni mattina secondo la ricetta tradizionale.",
    category: "dolci",
    image: "https://picsum.photos/seed/tiramisu/600/400"
  }
];