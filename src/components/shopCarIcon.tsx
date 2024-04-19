import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CarShopDataContext } from "../context";


export function ShopCarIcon(){

    const { carShop } = useContext(CarShopDataContext)
    return(
        

        <Link to={'/carrinho'} className="relative">
            <FaCartShopping  className="text-2xl"/>
            {carShop.length > 0 
                
                ? <span className="absolute -top-4 -right-2 bg-cyan-600 px-1 rounded-full font-semibold">{carShop.length}</span>
                :null
            }
        </Link>
    )
}