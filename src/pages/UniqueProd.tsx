import { useParams } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavigateProds } from "../components/navigateProds";
import { Details } from "../components/details";
import { CarrosselImg } from "../components/carroselImg";

interface Product {
    id: number
    name: string
    description?: string
    price: number
    qntProducts: number
    mainImg: string
    overviewImgs: GroupImg
}

interface GroupImg {
    firstImg: string,
    secondaryImg: string,
    thirdImg: string
}

export function UniqueProd() {

    const params = useParams();
    const idURL = params.id;

    const [product, setProduct] = useState<Product | undefined>(undefined); 

    useEffect(() => {
        axios.get(`http://localhost:3000/data/${idURL}`)
            .then(function (res) {
                setProduct(res.data)
                console.log('id', product)
            })
            .catch(function (error) {
                console.error("deu esse erro", error)
            })
    }, [idURL])

    return (
        <>
            <Header />
            {product &&
                <>
                    <NavigateProds name={product.name} />
                    <main className="bg-gray-900/40 py-5">
                        <div className="max-w-[1216px] mx-auto flex justify-evenly max-md:flex-col-reverse max-md:items-center">
                        <CarrosselImg imgs={product.overviewImgs}/>
                            <Details product={product} />
                        </div>
                    </main>
                </>
            }
            <Footer />
        </>
    )
}




