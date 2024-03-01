import { useContext, useState } from "react";
import useProductsModal from "../hooks/useProductsModal";
import z from "zod";
import axios from "axios";
import { useProducts } from "../hooks/useProducts";
import useProductStore from "../hooks/useProductsModal";
import { ModalAddContext } from "../context/ModalAddContext";

export const CreateProduct = () => {
  const { modal, open, close } = useContext(ModalAddContext);
  const addProduct = useProductStore((state) => state.addProduct);
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    image: "",
    description: "",
    quantity: 0,
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://fakestoreapi.com/products",
        product
      );
      addProduct(response.data);
      setProduct({
        title: "",
        price: 0,
        image: "",
        description: "",
        quantity: 0,
      });
      close();
    } catch (err) {
      console.error(err);
    }
  };

  const title = z
    .string()
    .min(3, { message: "Title should be at least 3 characters" })
    .refine((value) => /^[\p{L}а-яА-Я]+[-'s]?[\p{L}а-яА-Я ]+$/u.test(value), {
      message: "Title should contain only letters and spaces",
    });

  const price = z.number().min(1, { message: "Price should be at least 1" });

  const image = z.string().url({ message: "Image should be a valid URL" });

  const quantity = z
    .number()
    .min(1, { message: "Quantity should be at least 1" });
    
  const description = z
    .string()
    .min(5, { message: "Description should be at least 5 characters" })
    .refine((value) => /^[\p{L}а-яА-Я]+[-'s]?[\p{L}а-яА-Я ]+$/u.test(value), {
      message: "Description should contain only letters and spaces",
    });

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input
        value={product.title}
        onChange={(e) => setProduct({ ...product, title: e.target.value })}
        placeholder="Title"
        type="text"
        name="title"
        required
      />
      <input
        value={product.price}
        onChange={(e) =>
          setProduct({ ...product, price: Number(e.target.value) })
        }
        placeholder="Price"
        type="number"
        name="price"
        required
      />
      <input
        value={product.image}
        onChange={(e) => setProduct({ ...product, image: e.target.value })}
        placeholder="Image"
        type="text"
        name="image"
        required
      />
      <input
        value={product.description}
        onChange={(e) =>
          setProduct({ ...product, description: e.target.value })
        }
        placeholder="Description"
        type="text"
        name="description"
        required
      />
      <input
        value={product.quantity}
        onChange={(e) =>
          setProduct({ ...product, quantity: Number(e.target.value) })
        }
        placeholder="Quantity"
        type="number"
        name="quantity"
        required
      />
      <button
        className="bg-black text-white rounded-3xl px-4 py-2"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};
