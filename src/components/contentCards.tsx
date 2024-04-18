import { useEffect, useState } from "react";
import { Cards } from "./cards";
import axios from "axios";
interface data{
    id: number
    name: string
    description?: string
    price: number
    qntProducts: number
    mainImg: string
    overviewImgs: object
}

export function ContentCards() {

    const [products, setProducts] = useState<data[]>([])

    useEffect(() =>{
        axios.get('http://localhost:3000/data')
        .then(function(res){           
            setProducts(res.data)
        })
        .catch(function (error) {
            console.error(error)
        })
    },[])

    return(
        <main>
            <h1 className="text-center text-5xl font-medium py-16">Smartphones</h1>
            <div className="bg-gray-900/30 p-6">
                <div className="max-w-[1216px] mx-auto flex flex-wrap gap-5 justify-center md:justify-normal">
                    {products.map((product) =>{
                        return(
                            <div key={product.id}>
                                <Cards info={product} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}