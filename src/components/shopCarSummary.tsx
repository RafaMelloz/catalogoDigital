import { useEffect, useState } from "react";
import { cashFormat } from "../utils/cashFormat";
import * as XLSX from 'xlsx';

interface Product {
    id: number;
    nome: string;
    descricao?: string;
    preco: number;
    qntProdutos: number;
    mainImg: string;
    quantity: number;
    overviewImgs: object;
}

interface ShopCarSummaryProps {
    products: Product[];
}

export function ShopCarSummary({ products }: ShopCarSummaryProps) {
    const [priceTotal , setPriceTotal] = useState(0)
    const [qntTotal, setQntTotal]= useState(0)

    useEffect(() => {
        setPriceTotal(products.reduce((acc, item) => acc + item.preco, 0))
        setQntTotal(products.reduce((acc, item) => acc + item.quantity, 0))
    }, [products]);



    const exportToExcel = () => {
        const data = [
            ...products.map(({ mainImg, overviewImgs, qntProdutos, ...rest }) => rest), // Removendo os campos indesejados
            { priceTotal }
        ];

        const wb = XLSX.utils.book_new(); // cria um novo objeto de workbook
        const ws = XLSX.utils.json_to_sheet(data); //Esta linha converte os dados no array 'data' em uma planilha
        XLSX.utils.book_append_sheet(wb, ws, "Pedido");//anexa a planilha recém-criada ao workbook e a da um nome
        XLSX.writeFile(wb, "pedido.xlsx");// Isso iniciará o download do arquivo Excel com os dados do carrinho de compras.
    }

    return (
        <>
            <h3 className="text-lg font-bold tracking-wide">Resumo</h3>
            <h4>Quantidade de produtos: {qntTotal}</h4>
            <h4>Preço total: R${cashFormat(priceTotal)}</h4>
            
            <button onClick={exportToExcel} className="bg-cyan-500/70 w-full my-2 py-2 font-semibold text-lg cursor-pointer hover:bg-cyan-500/50 hover:text-white/60">Baixar pedido</button>
        </>
    );
}
