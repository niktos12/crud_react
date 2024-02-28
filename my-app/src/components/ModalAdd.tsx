import { useState } from "react"
import useProductsModal from "../hooks/useProductsModal"

export function ModalAdd() {
    const [isOpen, setIsOpen] = useState(false)
    const { addProductToServer } = useProductsModal()
    const [product, setProduct] = useState({
        title: '',
        price: 0,
        image: '',
        description: '',
        quantity: 0
    })

    return (
        <form>
            <div>
                <h1>Modal add</h1>
            </div>
        </form>
    )
}