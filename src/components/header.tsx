import { ShopCar } from "./shopCar";

export function Header() {
    return(
        <nav className="shadow-md shadow-slate-800"> 
           <a href="">
                <h1 className="text-center text-4xl p-4 font-bold ">LOGO</h1>
           </a>

           <ShopCar/>
        </nav>

        // border - solid border - b - [1px] border - gray - 50 / 50
    )
}