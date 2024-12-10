import { Product } from '../types';
import { CATEGORIES } from './categories';

export const PRODUCTS: Product[] = [
  // Building Materials
  {
    id: '1',
    name: 'Premium Portland Cement',
    description: 'High-quality cement suitable for all construction needs. Provides excellent strength and durability.',
    price: 750,
    category: 'building-materials',
    images: ['https://images.unsplash.com/photo-1518709766631-a6a7f45921c3'],
    rating: 4.8,
    reviews: [],
    stock: 500
  },
  {
    id: '2',
    name: 'Steel Reinforcement Bars',
    description: 'Grade 60 steel reinforcement bars for structural concrete. Available in various sizes.',
    price: 2500,
    category: 'building-materials',
    images: ['https://images.unsplash.com/photo-1518391846015-55a9cc003b25'],
    rating: 4.9,
    reviews: [],
    stock: 1000
  },
  {
    id: '3',
    name: 'Construction Sand',
    description: 'Clean, graded sand perfect for concrete mixing and masonry work.',
    price: 450,
    category: 'building-materials',
    images: ['https://images.unsplash.com/photo-1589939705384-5185137a7f0f'],
    rating: 4.7,
    reviews: [],
    stock: 2000
  },
  // Tools
  {
    id: '4',
    name: 'Professional Power Drill Set',
    description: 'Heavy-duty power drill with variable speed control and multiple drill bits included.',
    price: 12500,
    category: 'tools',
    images: ['https://images.unsplash.com/photo-1504148455328-c376907d081c'],
    rating: 4.6,
    reviews: [],
    stock: 50
  },
  {
    id: '5',
    name: 'Measuring Tape Set',
    description: '25ft professional measuring tape with magnetic hook and impact resistant case.',
    price: 850,
    category: 'tools',
    images: ['https://images.unsplash.com/photo-1589939705384-5185137a7f0f'],
    rating: 4.5,
    reviews: [],
    stock: 200
  },
  // Plumbing
  {
    id: '6',
    name: 'PVC Pipe Bundle',
    description: 'Schedule 40 PVC pipes for residential plumbing. Various sizes available.',
    price: 450,
    category: 'plumbing',
    images: ['https://images.unsplash.com/photo-1581094794329-c8112a89af12'],
    rating: 4.7,
    reviews: [],
    stock: 1000
  },
  {
    id: '7',
    name: 'Chrome Kitchen Faucet',
    description: 'Modern single-handle kitchen faucet with pull-down sprayer.',
    price: 7500,
    category: 'plumbing',
    images: ['https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f'],
    rating: 4.8,
    reviews: [],
    stock: 75
  },
  // Electrical
  {
    id: '8',
    name: 'LED Bulb Pack',
    description: 'Energy-efficient LED bulbs, 10W, warm white, pack of 4.',
    price: 1200,
    category: 'electrical',
    images: ['https://images.unsplash.com/photo-1565849904461-04a58ad377e0'],
    rating: 4.9,
    reviews: [],
    stock: 300
  },
  {
    id: '9',
    name: 'Circuit Breaker Panel',
    description: '12-circuit residential electrical panel with main breaker.',
    price: 8500,
    category: 'electrical',
    images: ['https://images.unsplash.com/photo-1565849904461-04a58ad377e0'],
    rating: 4.7,
    reviews: [],
    stock: 50
  },
  // Paint
  {
    id: '10',
    name: 'Premium Wall Paint',
    description: 'High-quality interior wall paint, 20L bucket, various colors available.',
    price: 4500,
    category: 'paint',
    images: ['https://images.unsplash.com/photo-1589939705384-5185137a7f0f'],
    rating: 4.6,
    reviews: [],
    stock: 150
  },
  {
    id: '11',
    name: 'Paint Roller Set',
    description: 'Professional paint roller set with extension pole and multiple roller covers.',
    price: 1800,
    category: 'paint',
    images: ['https://images.unsplash.com/photo-1581094794329-c8112a89af12'],
    rating: 4.5,
    reviews: [],
    stock: 100
  },
  // Hardware
  {
    id: '12',
    name: 'Door Handle Set',
    description: 'Stainless steel door handle set with lock mechanism.',
    price: 3500,
    category: 'hardware',
    images: ['https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f'],
    rating: 4.8,
    reviews: [],
    stock: 80
  },
  {
    id: '13',
    name: 'Cabinet Hinges',
    description: 'Heavy-duty cabinet hinges, pack of 10.',
    price: 950,
    category: 'hardware',
    images: ['https://images.unsplash.com/photo-1581094794329-c8112a89af12'],
    rating: 4.7,
    reviews: [],
    stock: 200
  },
  // Safety Equipment
  {
    id: '14',
    name: 'Safety Helmet',
    description: 'OSHA-approved construction safety helmet with adjustable suspension.',
    price: 1500,
    category: 'safety',
    images: ['https://images.unsplash.com/photo-1581094794329-c8112a89af12'],
    rating: 4.9,
    reviews: [],
    stock: 100
  },
  {
    id: '15',
    name: 'Work Gloves Pack',
    description: 'Heavy-duty work gloves with reinforced palm, pack of 3 pairs.',
    price: 850,
    category: 'safety',
    images: ['https://images.unsplash.com/photo-1589939705384-5185137a7f0f'],
    rating: 4.6,
    reviews: [],
    stock: 150
  }
];