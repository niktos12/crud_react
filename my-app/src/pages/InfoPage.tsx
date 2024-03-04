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
    <div className="flex flex-row justify-center gap-20 items-start mt-20 bg-slate-200 shadow-lg p-20">
      <Link
        to="/crud_react"
        className="fixed top-5 left-5 text-2xl font-semibold"
      >
        Back to products
      </Link>
      <img className="w-1/3" src={product?.image} alt={product!.title} />
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-4xl font-bold">{product?.title}</h1>
        <p className="text-2xl font-semibold">{product?.description}</p>
        <button className="text-2xl font-semibold bg-green-500 text-white rounded-3xl px-4 py-2">
          Buy for {product?.price}$
        </button>
        <p className="text-2xl font-semibold" onClick={() => console.log(product!.quantity)}>Quantity: {product?.quantity}</p>
      </div>
    </div>
  );
}
