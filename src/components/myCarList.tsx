import { useContext } from "react"
import { CarShopDataContext } from "../context"

export function MyCarList() {
    const { carShop } = useContext(CarShopDataContext)

    // Criar um objeto para armazenar a quantidade total de cada produto
    const productQuantities : any = {}
    carShop.forEach(product => {
        if (product.id in productQuantities) {
            productQuantities[product.id] += product.quantity
        } else {
            productQuantities[product.id] = product.quantity
        }
    })

    // Criar uma lista de produtos com quantidades somadas
    const productList = Object.keys(productQuantities).map(productId => {
        const product = carShop.find(item => item.id === productId)
        return { ...product, quantity: productQuantities[productId] }
    })

    return (
        <div>
            <h3>Meu carrinho</h3>
            <ul>
                {productList.map((product) =>
                    <li key={product.id}>{product.name} || {product.quantity}</li>
                )}
            </ul>
        </div>
    )
}
