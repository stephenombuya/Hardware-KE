import axios, { AxiosError } from 'axios';

const api = axios.create({
  baseURL: 'https://api.hardware-ke.com/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // Handle errors without throwing symbols or non-cloneable data
    const errorMessage = error.response?.data?.message || 'An error occurred';
    return Promise.reject(new Error(errorMessage));
  }
);

export const authAPI = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },
  register: async (userData: any) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },
  logout: async () => {
    const response = await api.post('/auth/logout');
    return response.data;
  },
};

export const productsAPI = {
  getAll: async () => {
    const response = await api.get('/products');
    return response.data;
  },
  getById: async (id: string) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },
  getReviews: async (productId: string) => {
    const response = await api.get(`/products/${productId}/reviews`);
    return response.data;
  },
};

export const ordersAPI = {
  create: async (orderData: any) => {
    const response = await api.post('/orders', orderData);
    return response.data;
  },
  getHistory: async () => {
    try {
      const response = await api.get('/orders/history');
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to fetch orders: ${error.message}`);
      }
      throw new Error('Failed to fetch orders');
    }
  },
  getById: async (orderId: string) => {
    const response = await api.get(`/orders/${orderId}`);
    return response.data;
  },
};

export const userAPI = {
  getProfile: async () => {
    const response = await api.get('/user/profile');
    return response.data;
  },
  updateProfile: async (userData: any) => {
    const response = await api.put('/user/profile', userData);
    return response.data;
  },
};

export const paymentAPI = {
  createPaymentIntent: async (amount: number) => {
    const response = await api.post('/payments/create-intent', { amount });
    return response.data;
  },
};
