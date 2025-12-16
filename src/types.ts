import React from 'react';

export interface WorkHour {
  day: string;
  lunch: string;
  dinner: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  source: string;
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  priceRange?: string;
  category: 'pesce' | 'pizza' | 'dolci';
  image: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}