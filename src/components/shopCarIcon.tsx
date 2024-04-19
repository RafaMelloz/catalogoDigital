import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CarShopDataContext } from "../context";


export function ShopCarIcon(){

    const { carShop } = useContext(CarShopDataContext)
    return(
        

        <Link to={'/carrinho'}>
            <FaCartShopping  className="text-2xl"/>
            <span>{carShop.length}</span>
        </Link>
    )
}