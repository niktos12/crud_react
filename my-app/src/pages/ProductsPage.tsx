import { Product } from "../components/Product";
import { useContext } from "react";
import { ModalAddContext } from "../context/ModalAddContext";
import { ModalAdd } from "../components/ModalAdd";
import { CreateProduct } from "../components/CreateProduct";
import useProductStore from "../hooks/useProductsModal";
import { useState } from "react";
export function ProductsPage() {
  const [displayedCount, setDisplayedCount] = useState(5);
  const { modal, open, close } = useContext(ModalAddContext);
  const loadMoreProducts = () => {
    setDisplayedCount((prevCount) => prevCount + 5);
  };
  const products = useProductStore((state) => state.products);
  const displayedProducts = products.slice(0, displayedCount);

  return (
    <>
      <div className="grid grid-cols-[repeat(2,450px)] justify-center gap-4 content-center h-full ">
        {displayedProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}

        {modal && (
          <ModalAdd onClose={close} title="Create product">
            <CreateProduct />
          </ModalAdd>
        )}
        <button
          className="bg-green-500 text-white rounded-3xl px-4 py-2 fixed top-5 right-5 z-20"
          onClick={open}
        >
          Create
        </button>
      </div>
      {displayedProducts.length > 0 &&
        displayedProducts.length < products.length && (
          <button
            onClick={loadMoreProducts}
            className="text-2xl font-semibold bg-black rounded-3xl px-4 py-2 w-full text-center mt-4 text-white rounded-3xl"
          >
            Загрузить еще
          </button>
        )}
    </>
  );
}
