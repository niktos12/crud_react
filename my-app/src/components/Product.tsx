import { IProduct } from "../models";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdDeleteForever } from "react-icons/md";
import useProductStore from "../hooks/useProductsModal";
export interface IProductProps{
    product: IProduct
}


export function Product({product} : IProductProps){
	const removeProduct = useProductStore((state) => state.removeProduct);

	const handleRemoveProduct = () => {
		removeProduct(product.id!);
	}
    return(
        <div
			className="bg-white rounded-3xl p-4 flex flex-col shadow-xl h-[360px] justify-between transition-all
            ease-in duration-150 items-center"
		>
			<Menu as='div' className="relative inline-block text-right w-full">
				<Menu.Button className='hover:bg-slate-100 hover:rounded-full duration-300 p-2'>
					<HiOutlineDotsVertical className="text-3xl" />
				</Menu.Button>
			
			<Transition
          		enter="transition ease-out duration-100"
          		enterFrom="transform opacity-0 scale-95"
          		enterTo="transform opacity-100 scale-100"
          		leave="transition ease-in duration-75"
          		leaveFrom="transform opacity-100 scale-100"
          		leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none'>
					<Menu.Item>
						{({active})=>(
							<button className="w-full px-4 py-2 text-lg flex flex-row items-center gap-2" onClick={handleRemoveProduct}>
								<MdDeleteForever className="text-red-500"/>
								<p>Delete</p>
							</button>
						)}
						
					</Menu.Item>
				</Menu.Items>
			</Transition>
			</Menu>
			<img src={product.image} className="w-[180px] h-[180px] xm:w-[150px] xm:h-[150px]" />
			<p className="font-bold text-xl sm:text-lg">{product.title}</p>
			<p className="font-bold text-lg sm:text-lg">{product.price}$</p>
			<p>About product: {product.description.slice(0, 10) + "..."}</p>
			<p>Quantity: {product.quantity}</p>

			<div className="flex flex-row gap-4 items-center">
				<Link to={`/product/${product.id}`}>
					<button className="bg-black text-white rounded-3xl px-4 py-2">
						Details
					</button>
				</Link>
			</div>
		</div>
    )

}