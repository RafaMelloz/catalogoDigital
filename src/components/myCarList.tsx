import { useContext } from "react"
import { CarShopDataContext } from "../context"
import { ShopCarCards } from "./shopCarCards"
import { ShopCarSummary } from "./shopCarSummary";
import { errorAlert } from "../utils/alerts";

export function MyCarList() {
    const { carShop, setCarShop } = useContext(CarShopDataContext)

    function removeFromCar(productIdToRemove : number) {
        const updatedCarShop = carShop.filter(item => item.id !== productIdToRemove);
        setCarShop(updatedCarShop);
        errorAlert()
    }   

    return (
        <main className="flex justify-between max-w-5xl m-auto">
            <div className="bg-gray-800/30 max-w-xl w-full p-4">
                <h3 className="text-lg font-bold tracking-wide">Meu carrinho</h3>
                <ul>
                    {carShop.map((product) =>
                        <ShopCarCards product={product} removeFromCar={removeFromCar} setCarShop={setCarShop} />
                    )}
                </ul>
            </div>

            <div className="bg-gray-800/30 max-w-96 w-full max-h-52">
                <ShopCarSummary products={carShop} />
            </div>
        </main>
    )
}
