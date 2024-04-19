import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";


export function ShopCarIcon(){
    return(
        <Link to={'/carrinho'}>
            <FaCartShopping  className="text-2xl"/>
        </Link>
    )
}