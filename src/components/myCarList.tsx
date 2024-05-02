import { useContext } from "react"
import { CarShopDataContext } from "../context"
import { ShopCarCards } from "./shopCarCards"
import { ShopCarSummary } from "./shopCarSummary";
import { errorAlert } from "../utils/alerts";

export function MyCarList() {
    const { carShop, setCarShop } = useContext(CarShopDataContext)

    function removeFromCar(productIdToRemove: number) {
        const removedIndex = carShop.findIndex(item => item.id === productIdToRemove);
        if (removedIndex === -1) return; // Se não encontrar o item, não faz nada

        const updatedCarShop = [...carShop.slice(0, removedIndex), ...carShop.slice(removedIndex + 1)];

        // Atualizar os valores dos itens subsequentes
        for (let i = removedIndex; i < updatedCarShop.length; i++) {
            updatedCarShop[i].quantity = updatedCarShop[i + 1]?.quantity ?? updatedCarShop[i].quantity;
            updatedCarShop[i].preco = updatedCarShop[i + 1]?.preco ?? updatedCarShop[i].preco;
        }

        setCarShop(updatedCarShop);
        errorAlert("Produto removido!");
    }

    return (
        <main className="flex justify-between max-w-5xl m-auto pt-8  max-md:flex-direction: column max-md:flex-col max-md:items-center max-md:gap-3  max-md:px-3">
            <div className="bg-gray-800/30 max-w-xl w-full p-4">
                <h3 className="text-lg font-bold tracking-wide">Meu carrinho</h3>

                <ul>
                    { carShop.length != 0 ? 
                        (
                            carShop.map((product) =>
                                <ShopCarCards
                                    key={product.id}
                                    product={product}
                                    removeFromCar={removeFromCar}
                                    setCarShop={setCarShop}
                                />
                            )
                        )
                    :
                     <li className="text-center mt-8 text-xl font-bold">Carrinho Vazio</li>
                    }
                </ul>
            </div>

            <div className="bg-gray-800/30 max-w-96 w-full max-h-40 p-4">
                <ShopCarSummary products={carShop} />
            </div>
        </main>
    )
}
