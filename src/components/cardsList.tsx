import { useEffect, useState} from "react";
import { Cards } from "./cards";
import axios from "axios";

interface ProductData {
    id: number;
    nome: string;
    descricao?: string;
    preco: number;
    qntProdutos: number;
    mainImg: string;
    overviewImgs: object;
}

export function CardsList() {
    const [products, setProducts] = useState<ProductData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api-catalog-2da8b465d1fa.herokuapp.com/products');
                const sortedProducts = response.data.products.sort((a: any, b: any) => a.qntProdutos - b.qntProdutos);
                const reversedProducts = sortedProducts.reverse();
                setProducts(reversedProducts);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <main>
            <h1 className="text-center text-5xl font-medium py-16">Smartphones</h1>

            <div className="bg-gray-900/30 p-6">
                <div className="max-w-[1216px] mx-auto flex flex-wrap gap-5 justify-center md:justify-normal">
                    {products.map((product) => (
                        <div key={product.id}>
                            <Cards info={product} />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
