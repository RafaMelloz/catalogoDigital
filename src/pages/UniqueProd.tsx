import { useParams } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavigateProds } from "../components/navigateProds";
import { Details } from "../components/details";
import { CarrosselImg } from "../components/carroselImg";

interface Product {
    id: string
    nome: string
    descricao?: string
    preco: number
    qntProdutos: number
    mainImg: string
    overviewImg?: string
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
    const [dataImages, setDataImages] = useState<GroupImg | undefined>(undefined);

    useEffect(() => {
        axios.get(`https://apicatalog.onrender.com/products/${idURL}`)
            .then(function (res) {
                setProduct(res.data.product)
                if (res.data.product?.overviewImg) {
                    setDataImages(JSON.parse(res.data.product.overviewImg));
                }
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
                    <NavigateProds name={product.nome} />
                    <main className="bg-gray-900/40 py-5">
                        <div className="max-w-[1216px] mx-auto flex justify-evenly max-md:flex-col-reverse max-md:items-center">
                        <CarrosselImg imgs={dataImages ? dataImages : { firstImg: "", secondaryImg: "", thirdImg: "" }} />
                        <Details product={product} />
                        </div>
                    </main>
                </>
            }
            <Footer />
        </>
    )
}




