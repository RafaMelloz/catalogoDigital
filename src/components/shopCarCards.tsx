import { FaTrash } from "react-icons/fa6"
import { QntCounter } from "./qntCounter"
import { cashFormat } from "../utils/cashFormat"
import { useEffect, useState } from "react"
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
    setCarShop: React.Dispatch<React.SetStateAction<any[]>>
}

export function ShopCarCards({ product, removeFromCar, setCarShop }: ShopCarCardsProps) {

    const [quantity, setQuantity] = useState(product.quantity);
    const [price, setPrice] = useState(product.price);
    const [priceXQnt, setPriceXQnt] = useState(0);

    useEffect(() => {
        const updatedPriceXQnt = price * quantity;
        setPriceXQnt(updatedPriceXQnt);
        updateQuantity(quantity, updatedPriceXQnt); // Atualize a quantidade com o novo valor de priceXQnt
    }, [quantity, price]); // Adicione 'price' como dependência também

    const updateQuantity = (newQuantity: number, newPriceXQnt: number) => {
        const updatedProduct = { ...product, quantity: newQuantity, price: newPriceXQnt };
        setCarShop(prevCarShop => {
            return prevCarShop.map(item => {
                if (item.id === product.id) {
                    return updatedProduct;
                }
                return item;
            });
        });
    }

    return (
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
                <QntCounter quantity={quantity} setQuantity={setQuantity} />
                <h2 className="text-base font-semibold ml-2 mr-4 ">R$ {cashFormat(priceXQnt)}</h2>
            </div>
        </li>
    )
}
