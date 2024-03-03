import create from 'zustand';
import { persist, StateStorage } from 'zustand/middleware';


interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
}

interface ProductState {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
}

const localStorage: StateStorage = {
  getItem: (name: string): string | null => {
    return window.localStorage.getItem(name);
  },
  setItem: (name: string, value: string): void => {
    window.localStorage.setItem(name, value);
  },
  removeItem: (name: string): void => {
    window.localStorage.removeItem(name);
  },
};

const useProductStore = create(
  persist<ProductState>(
    (set) => ({
      products: [],
      
      addProduct: (product) => set((state) => {
        const maxId = Math.max(...state.products.map(product => product.id), 0);
        const newId = maxId + 1;
        return { products: [...state.products, { ...product, id: newId }] };
      }),
      removeProduct: (id) => set((state) => ({ products: state.products.filter(product => product.id !== id) })),
    }),
    {
      name: 'product-storage',
      getStorage: () => localStorage,
    }
  )
);

export default useProductStore;