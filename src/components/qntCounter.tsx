interface qnt {
    quantity:number
    setQuantity: React.Dispatch<React.SetStateAction<number>>
}



export function QntCounter(props: qnt){

    const { quantity, setQuantity } = props

    function addQnt() {
        setQuantity(quantity + 1)
    }

    function removeQnt() {
        if (quantity != 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className="flex gap-5 bg-cyan-500/80  w-min text-gray-200 font-bold rounded  items-center border border-black">
            <button onClick={removeQnt} className="text-xl px-[14px] border-r-2 rounded hover:bg-cyan-500/100">-</button>
            <span>{quantity}</span>
            <button onClick={addQnt} className="text-xl px-3 border-l-2 rounded hover:bg-cyan-500/100 ">+</button>
        </div>
    )
}