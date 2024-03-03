import { IProduct } from "../models";
import { useParams } from "react-router-dom";
import useProductStore from "../hooks/useProductsModal";

interface IInfoPageProps {
    product: IProduct
}
export function InfoPage() {
    const { id } = useParams();
    const { products } = useProductStore();
    const product = products.find(product => product.id === Number(id));
    return (
        <div className="flex flex-row justify-center items-center">
            <img className="w-1/3" src={product?.image} alt={product?.title} />
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold">{product?.title}</h1>
                <p className="text-2xl font-semibold">{product?.description}</p>
                <p className="text-2xl font-bold">{product?.price}$</p>
                <p className="text-2xl font-semibold">Quantity: {product?.quantity}</p>
            </div>
        </div>
    );
}