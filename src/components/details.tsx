import { useContext, useState } from "react"
import { cashFormat } from "../utils/cashFormat"
import { CarShopDataContext } from "../context"
import { QntCounter } from "./qntCounter"
import { successAlert } from "../utils/alerts"

interface Product {
    id:number,
    name: string
    description?: string
    price: number
    qntProducts: number
    mainImg: string
    overviewImgs: object
}

export function Details({ product }:{product : Product}){

    const [quantity, setQuantity] = useState(1);
    const { carShop, setCarShop } = useContext(CarShopDataContext)


    function addToCar(){
        const existingProductIndex = carShop.findIndex(item => item.id === product.id);

        if (existingProductIndex !== -1) {
            const updatedCarShop = [...carShop];
            updatedCarShop[existingProductIndex].quantity += quantity;
            setCarShop(updatedCarShop);
        } else {
            setCarShop([...carShop, { ...product, quantity: quantity }]);
        }
        successAlert()
    }

    return(
        <div className="max-w-lg w-full my-10 max-md:px-3">
            <h2 className="text-4xl font-semibold">{product.name}</h2>
            <p className="my-5 text-white/90">{product.description}</p>

            <p className="text-xs font-semibold text-white/90 tracking-widest">QUANTIDADE DE PRODUTOS:</p>
            <QntCounter quantity={quantity} setQuantity={setQuantity} />

            <h3 className="text-2xl my-3">R$ {cashFormat(product.price * quantity)}</h3>
            <button 
            onClick={addToCar}
                className=" bg-cyan-500/70 w-full max-w-[220px] my-2 py-2 font-semibold text-lg rounded-full cursor-pointer hover:bg-cyan-500/50 hover:text-white/60">
                Adicionar ao carrinho
            </button>
        </div>
    )
}