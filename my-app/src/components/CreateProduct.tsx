import React, { useContext } from "react";
import z from "zod";
import axios from "axios";
import useProductStore from "../hooks/useProductsModal";
import { ModalAddContext } from "../context/ModalAddContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IProduct } from "../models";

const productSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title should be at least 3 characters" }),
  price: z.number().min(1, { message: "Price should be at least 1" }),
  image: z.string().url({ message: "Image should be a valid URL" }),
  quantity: z.number().min(1, { message: "Quantity should be at least 1" }),
  description: z
    .string()
    .min(5, { message: "Description should be at least 5 characters" }),
});

type Product = z.infer<typeof productSchema>;

export const CreateProduct: React.FC = () => {
  const { close } = useContext(ModalAddContext);
  const addProduct = useProductStore((state) => state.addProduct);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Product>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: "",
      price: undefined,
      image: "",
      description: "",
      quantity: undefined,
    },
  });

  const onSubmit = async (data: IProduct) => {
    try {
      const response = await axios.post(
        "https://fakestoreapi.com/products",
        data
      );
      addProduct(data);
      reset();
      close();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <p className="text-lg">Title</p>
        <input {...register("title")} placeholder="Backpack" type="text" required className="border border-gray-300 rounded-3xl px-4 py-2"/>
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}

        </div>
      <div>
        <p className="text-lg">Price</p>
        <input
        {...register("price", { valueAsNumber: true })}
        placeholder="24.99"
        type="number"
        required
        className="border border-gray-300 rounded-3xl px-4 py-2 w-full"
      />
      {errors.price && <p className="text-red-500">{errors.price.message}</p>}
      </div>
      
      <div className="">
        <p className="text-lg">Image</p>
        <input
        {...register("image")}
        placeholder="https://example.com/image.jpg"
        type="text"
        required
        className="border border-gray-300 rounded-3xl px-4 py-2 w-full"
      />
      {errors.image && <p className="text-red-500">{errors.image.message}</p>}
      </div>
      
      <div>
        <p className="text-lg">Description</p>
        <input
        {...register("description")}
        placeholder="Backpack made of leather and fabric..." 
        type="text"
        required
        className="border border-gray-300 rounded-3xl px-4 py-2 w-full"
      />
      {errors.description && (
        <p className="text-red-500">{errors.description.message}</p>
      )}
      </div>
      
      <div>
        <p className="text-lg">Quantity</p>
        <input
        {...register("quantity", { valueAsNumber: true })}
        placeholder="5"
        type="number"
        required
        className="border border-gray-300 rounded-3xl px-4 py-2 w-full"
      />
      {errors.quantity && (
        <p className="text-red-500">{errors.quantity.message}</p>
      )}
      </div>
      

      <button
        className="bg-black text-white rounded-3xl px-4 py-2"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default CreateProduct;
