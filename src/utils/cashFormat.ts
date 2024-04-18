export function cashFormat(val: number) {
    if (Number.isInteger(val)) {
        return `${val},00`;
    } else {
        return val.toString();
    }
}