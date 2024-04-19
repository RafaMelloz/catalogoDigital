import { ShopCarIcon } from "./shopCarIcon";

export function Header() {
    return(
        <nav className="shadow-md shadow-slate-800  "> 
            <div className="max-w-[1216px] m-auto flex justify-between items-center max-md:px-3">
                <a href="">
                    <h1 className="text-4xl py-4 font-bold ">LOGO</h1>
                </a>
                <ShopCarIcon />
            </div>
        </nav>
    )
}