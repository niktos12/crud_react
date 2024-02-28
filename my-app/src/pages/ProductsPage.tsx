import { useProducts } from "../hooks/useProducts";
import { Product } from "../components/Product";
export function ProductsPage(){
    const {products} = useProducts();
    return(
        <div className="grid grid-cols-[repeat(2,450px)] justify-center gap-4 from-black to-slate-950 bg-gradient-to-r h-full">
            {products.map(product => <Product key={product.id} product={product}/>)}
            <button 
                className="bg-white text-black rounded-3xl px-4 py-2 fixed top-5 right-5 z-20"
            >
                Create product
            </button>
        </div>
    )
}