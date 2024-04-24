import { FaTrash } from "react-icons/fa6"
import { QntCounter } from "./qntCounter"
import { cashFormat } from "../utils/cashFormat"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
interface att{
    id: number
    nome: string
    descricao?: string
    preco: number
    qntProdutos: number
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
    const [preco] = useState(product.preco);
    const [priceXQnt, setPriceXQnt] = useState(0);

    useEffect(() => {
        const updatedPriceXQnt = preco * quantity;
        setPriceXQnt(updatedPriceXQnt);
        updateQuantity(quantity, updatedPriceXQnt); // Atualize a quantidade com o novo valor de priceXQnt
    }, [quantity, preco]); // Adicione 'price' como dependência também

    const updateQuantity = (newQuantity: number, newPriceXQnt: number) => {
        const updatedProduct = { ...product, quantity: newQuantity, preco: newPriceXQnt };
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
            <div className="flex ">
                <img src={product.mainImg} className="max-w-24 " alt="product.name"/>
                <div className="w-full">
                    <Link to={`/produto/${product.id}`} className="text-xl font-semibold mb-2">{product.nome}</Link>
                    <p className="text-sm">{product.descricao}</p>
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
