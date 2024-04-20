import { useContext, useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CarShopDataContext } from "../context";


export function ShopCarIcon(){

    const { carShop } = useContext(CarShopDataContext)

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const total = carShop.reduce((accumulator, item) => accumulator + item.quantity, 0);
        setCounter(total);
    }, [carShop]);

    return(
        <Link to={'/carrinho'} className="relative">
            <FaCartShopping  className="text-2xl"/>
            {counter > 0 && (
                <span className="absolute -top-4 -right-2 bg-cyan-600 px-1 rounded-full font-semibold">{counter}</span>
            )}
        </Link>
    )
}