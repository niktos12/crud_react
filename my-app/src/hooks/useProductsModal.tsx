import create from 'zustand';
import { persist } from 'zustand/middleware';
import { IProduct } from '../models';
interface ProductState {
  products: IProduct[];
  addProduct: (product: IProduct) => void;
  removeProduct: (id: number) => void;
}

const useProductStore = create(
  persist<ProductState>(
    (set) => ({
      products: [],
      
      addProduct: (product) => set((state) => {
        const maxId = Math.max(...state.products.map(product => product.id!), 0);
        const newId = maxId + 1;
        return { products: [...state.products, { ...product, id: newId }] };
      }),
      removeProduct: (id) => set((state) => ({ products: state.products.filter(product => product.id !== id) })),
    }),
    {
      name: 'product-storage',
    }
  )
);

export default useProductStore;