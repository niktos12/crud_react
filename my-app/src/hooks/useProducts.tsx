import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { IProduct } from "../models";


export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get<IProduct[]>("https://fakestoreapi.com/products?limit=6");
      setProducts(response.data);
    } catch (e) {
      const error = e as AxiosError;
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (newProduct: IProduct) => {
    try {
      setLoading(true);
      const response = await axios.post<IProduct>("https://fakestoreapi.com/products", newProduct);
      setProducts(prevProducts => [...prevProducts, response.data]);
    } catch (e) {
      const error = e as AxiosError;
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error, fetchProducts, addProduct };
}
