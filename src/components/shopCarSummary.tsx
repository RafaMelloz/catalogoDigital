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
            <h3>Resumo</h3>
            <button>Baixar pedido</button>
            <h4>Quantidade de produtos: {qntTotal}</h4>
            {/* Aqui você pode calcular o total com base nos produtos */}
            <h4>Total : {cashFormat(priceTotal)}</h4>
        </>
    );
}
