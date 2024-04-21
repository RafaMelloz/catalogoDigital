import { useEffect, useState } from "react";
import { cashFormat } from "../utils/cashFormat";

interface Product {
    id: number;
    name: string;
    description?: string;
    price: number;
    qntProducts: number;
    mainImg: string;
    quantity: number;
    overviewImgs: object;
}

interface ShopCarSummaryProps {
    products: Product[];
}

export function ShopCarSummary({ products }: ShopCarSummaryProps) {
    const [priceTotal , setPriceTotal] = useState(0)
    const [qntTotal, setQntTotal]= useState(0)

    useEffect(() => {

        setPriceTotal(products.reduce((acc, item) => acc + item.price, 0))
        setQntTotal(products.reduce((acc, item) => acc + item.quantity, 0))


    }, [products]);

    return (
        <>
            <h3 className="text-lg font-bold tracking-wide">Resumo</h3>
            <h4>Quantidade de produtos: {qntTotal}</h4>
            <h4>Preço total: R${cashFormat(priceTotal)}</h4>
            <button className="bg-cyan-500/70 w-full my-2 py-2 font-semibold text-lg cursor-pointer hover:bg-cyan-500/50 hover:text-white/60">Baixar pedido</button>

        </>
    );
}
