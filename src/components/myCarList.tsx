import { useContext } from "react"
import { CarShopDataContext } from "../context"
import { ShopCarCards } from "./shopCarCards"
import Swal from "sweetalert2";

export function MyCarList() {
    const { carShop, setCarShop } = useContext(CarShopDataContext)

    function removeFromCar(productIdToRemove : number) {
        const updatedCarShop = carShop.filter(item => item.id !== productIdToRemove);
        setCarShop(updatedCarShop);

        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1900,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "error",
            title: "Produto removido!"
        });
    }

    return (
        <main className="flex justify-between max-w-5xl m-auto">
            <div className="bg-gray-800/30 max-w-xl w-full p-4">
                <h3 className="text-lg font-bold tracking-wide">Meu carrinho</h3>
                <ul>
                    {carShop.map((product) =>
                        <ShopCarCards product={product} removeFromCar={removeFromCar} />
                    )}
                </ul>
            </div>

            <div className="bg-gray-800/30 max-w-96 w-full max-h-52">


            </div>
        </main>
    )
}
