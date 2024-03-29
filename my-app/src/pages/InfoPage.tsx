import { IProduct } from "../models";
import { useParams } from "react-router-dom";
import useProductStore from "../hooks/useProductsModal";
import { Link } from "react-router-dom";

interface IInfoPageProps {
  product: IProduct;
}
export function InfoPage() {
  const { id } = useParams();
  const { products } = useProductStore();
  const product = products.find((product) => product.id === Number(id));
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-row justify-center gap-20 items-center bg-white rounded-3xl shadow-2xl p-20 w-[90%]">
      <Link
        to="/crud_react"
        className="fixed top-5 left-5 text-2xl font-semibold text-white"
      >
        Back to products
      </Link>
      <img className="w-[500px]" src={product?.image} alt={product?.title} />
      <div className="flex flex-col justify-center items-center gap-2 w-full">
        <h1 className="text-4xl font-bold">{product?.title}</h1>
        <p className="text-2xl font-semibold">{product?.description}</p>
        <button className="text-2xl font-semibold bg-green-500 text-white rounded-3xl px-4 py-2">
          Buy for {product?.price}$
        </button>
        <p className="text-2xl font-semibold">Quantity: {product?.quantity}</p>
      </div>
    </div>
    </div>
    
  );
}
