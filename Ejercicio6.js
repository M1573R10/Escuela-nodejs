function SumaValores(valor1, valor2, placeholder) {
    if (placeholder === void 0) { placeholder = 'Hola'; }
    var res;
    if (placeholder === 'Hola') {
        res = +valor1 + +valor2;
    }
    else {
        res = valor1.toString() + valor2.toString();
    }
    return res;
}
console.log(SumaValores(2, 2)); // 4
console.log(SumaValores("2", "2", 'Hola'));
