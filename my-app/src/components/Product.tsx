import { IProduct } from "../models";
import { Link } from "react-router-dom";

export interface IProductProps{
    product: IProduct
}

export function Product({product} : IProductProps){
    return(
        <div
			className="bg-white rounded-3xl p-4 flex flex-col shadow-xl h-[360px] justify-between transition-all
            ease-in duration-150 items-center"
			
		>
			<img src={product.image} className="w-[180px] h-[180px] xm:w-[150px] xm:h-[150px]" />
			<p className="font-bold text-xl sm:text-lg">{product.title}</p>
			<p className="font-bold text-lg sm:text-lg">{product.price}$</p>

			<div className="flex flex-row gap-4 items-center">
				{/* <Link to={`/product/${product.id}`}>
					<button className="bg-black text-white rounded-3xl px-4 py-2">
						Details
					</button>
				</Link> */}
			</div>
		</div>
    )

}