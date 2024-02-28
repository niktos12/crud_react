import axios from "axios";
import create from "zustand";
import { IProduct } from "../models";


interface ProductState {
    products: IProduct[];
    addProductToServer: (product: Omit<IProduct, 'id'>) => Promise<void>;
}

const useProductsModal = create<ProductState>((set) => ({
    products: [],
    addProductToServer: async(product) => {
        try{
            const response = await axios.post("https://fakestoreapi.com/products", product)
            set((state) => ({
                products: [...state.products, response.data]
            }));
        }catch(err){
            console.error(err);
        }
    }
}))
export default useProductsModal