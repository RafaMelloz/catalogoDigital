import { Link } from "react-router-dom"
import { cashFormat } from "../utils/cashFormat"

interface card {
    id: number
    name: string
    description?: string
    price: number
    qntProducts: number
    mainImg: string
    overviewImgs: object
}


export function Cards({ info }: { info: card }) {

    return(
        info.qntProducts != 0 ?
            <Link
                to={`/product/${info.id}`}
                className="
                bg-blue-950/20 
                max-w-72 
                w-full
                rounded-lg 
                border-[1px] 
                border-teal-100/20 
                px-4 py-4
                flex 
                flex-col
                
                hover:shadow-md 
                hover:shadow-blue-900
            "
            >
                <img
                    className="max-w-40 mx-auto"
                    src={info.mainImg}
                    alt={info.name}
                />

                <h2 className="text-xl font-semibold">{info.name}</h2>

                <p className="capitalize overflow-hidden text-ellipsis whitespace-nowrap text-white/60 py-2">
                    {info.description}
                </p>

                <h4 className="text-base font-semibold text-cyan-400/90 py-1">R$ {cashFormat(info.price)}</h4>
            </Link>
        :
            <div   
            className="
            bg-blue-950/20 
            max-w-72 
            w-full
            rounded-lg 
            border-[1px] 
            border-teal-100/20 
            px-4 py-4
            flex 
            flex-col
            "
            >
                <img
                    className="max-w-40 mx-auto"
                    src={info.mainImg}
                    alt={info.name}
                />

                <h2 className="text-xl font-semibold">{info.name}</h2>

                <p className="capitalize overflow-hidden text-ellipsis whitespace-nowrap text-white/60 py-2">
                    {info.description}
                </p>

                <h4 className="text-base font-semibold text-white/90 bg-gray-800 py-1 px-3 w-min rounded">Esgotado</h4>
            </div>
        
    )
}