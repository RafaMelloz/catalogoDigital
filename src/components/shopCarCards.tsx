import { FaTrash } from "react-icons/fa6"
import { QntCounter } from "./qntCounter"
import { cashFormat } from "../utils/cashFormat"
import { useState } from "react"

interface att{
    id: number
    name: string
    description?: string
    price: number
    qntProducts: number
    mainImg: string
    quantity: number
    overviewImgs: object
}

interface ShopCarCardsProps {
    product: att;
    removeFromCar: (productIdToRemove: number) => void;
}

export function ShopCarCards({ product, removeFromCar }: ShopCarCardsProps){

    const [quantity, setQuantity] = useState(product.quantity)

    return(
        <li key={product.id} className=" bg-gray-950/50 py-3 my-3">
            <div className="flex">
                <img src={product.mainImg} className="max-w-24 " alt="product.name" />

                <div>
                    <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                    <p className="text-sm">{product.description}</p>
                </div>

                <FaTrash className="w-7 mx-3" onClick={() => removeFromCar(product.id)} />
            </div>

            <div className="flex items-center justify-end">
                <QntCounter quantity={quantity} setQuantity={setQuantity}/>
                <h2 className="text-base font-semibold ml-2 mr-4 ">R$ {cashFormat(product.price * quantity)}</h2>
            </div>
        </li>
    )
}