import { useProducts } from "../hooks/useProducts";
import { Product } from "../components/Product";
import { useContext } from "react";
import { ModalAddContext } from "../context/ModalAddContext";
import { ModalAdd } from "../components/ModalAdd";
import { CreateProduct } from "../components/CreateProduct";
import useProductStore from "../hooks/useProductsModal";
export function ProductsPage() {
  const { modal, open, close } = useContext(ModalAddContext);

  
  const products = useProductStore((state) => state.products);

  return (
    <div className="grid grid-cols-[repeat(2,450px)] justify-center gap-4 from-black to-slate-950 bg-gradient-to-r h-full">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      {modal && 
        <ModalAdd onClose={close} title="Create product">
          <CreateProduct/>
        </ModalAdd>
      }
      <button
        className="bg-white text-black rounded-3xl px-4 py-2 fixed top-5 right-5 z-20"
        onClick={open}
      >
        Create product
      </button>
    </div>
  );
}
