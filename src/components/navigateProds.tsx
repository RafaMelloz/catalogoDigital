import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export function NavigateProds({ name }: { name: string | null }) {
    return(
        <div className="
        my-5  
        max-w-[1216px] mx-auto 
        flex items-center gap-3 
        text-slate-400 text-xs 
        font-medium tracking-wider
        max-md:px-3">
            <Link className="hover:text-slate-200" to={'/'}>HOME</Link>
            <IoIosArrowForward />
            {
                name === null
                    ?  <span className="uppercase text-slate-200">Carrinho de compras</span>
                    : <span className="uppercase text-slate-200">{name}</span>
            }
        </div>
    )
}