import { useState } from "react"
import { cashFormat } from "../utils/cashFormat"

interface Product {
    name: string
    description?: string
    price: number
    qntProducts: number
    mainImg: string
    overviewImgs: object
}

export function Details({ product }:{product : Product}){

    const [quantity, setQuantity] = useState(1);

    function addQnt() {
        setQuantity(quantity + 1)
    }

    function removeQnt() {
        if (quantity != 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className="max-w-lg w-full my-10 max-md:px-3">
            <h2 className="text-4xl font-semibold">{product.name}</h2>
            <p className="my-5 text-white/90">{product.description}</p>

            <p className="text-xs font-semibold text-white/90 tracking-widest">QUANTIDADE DE PRODUTOS:</p>
            <div className="flex gap-5 bg-cyan-500/80  w-min text-gray-200 font-bold rounded  items-center border border-black">
                <button onClick={removeQnt} className="text-xl px-[14px] border-r-2 rounded hover:bg-cyan-500/100">-</button>
                <span>{quantity}</span>
                <button onClick={addQnt} className="text-xl px-3 border-l-2 rounded hover:bg-cyan-500/100 ">+</button>
            </div>

            <h3 className="text-2xl my-3">R$ {cashFormat(product.price * quantity)}</h3>
            <button
                className=" bg-cyan-500/70 w-full max-w-[220px] my-2 py-2 font-semibold text-lg rounded-full cursor-pointer hover:bg-cyan-500/50 hover:text-white/60">
                Adicionar ao carrinho
            </button>
        </div>
    )
}