export function cashFormat(val: number) {
    // Converte o número em string
    let valStr = val.toString();

    // Divide o número em parte inteira e parte decimal
    let [integerPart, decimalPart] = valStr.split(".");

    // Adiciona um ponto após os três primeiros dígitos da parte inteira
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    // Reagrupa as partes, adicionando a parte decimal se existir
    if (decimalPart) {
        return `${integerPart},${decimalPart}`;
    } else {
        return integerPart;
    }
}
