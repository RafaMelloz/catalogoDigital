import { Header } from "../components/header";
import { MyCarList } from "../components/myCarList";
import { NavigateProds } from "../components/navigateProds";

export function ShopCar(){
    return (
        <>
            <Header />
            <NavigateProds name={null} />
            <MyCarList/>
        </>
        
    )
}