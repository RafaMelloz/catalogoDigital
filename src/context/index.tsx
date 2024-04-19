import { createContext, useEffect, useState } from "react";

interface CarShopContextType {
    carShop: any[];
    setCarShop: React.Dispatch<React.SetStateAction<any[]>>;
}

const carShopArray: any[] = [];

export const CarShopDataContext = createContext<CarShopContextType>({
    carShop: carShopArray,
    setCarShop: () => { }
});



export const CarShopContextProvider = ({ children }: any) => {
    const [carShop, setCarShop] = useState<any[]>(carShopArray);

    useEffect(() => {
        console.log(carShop)
    }, [carShop])

    return (
        <CarShopDataContext.Provider value={{ carShop, setCarShop }}>
            {children}
        </CarShopDataContext.Provider>
    );
};
