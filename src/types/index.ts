export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  rating: number;
  reviews: Review[];
  stock: number;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  status: 'pending' | 'processing' | 'delivered' | 'cancelled';
  total: number;
  items: Array<{
    product: {
      name: string;
      price: number;
    };
    quantity: number;
  }>;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}
