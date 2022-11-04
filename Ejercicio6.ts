type StringOrNumber = string | number; //unión de tipos
type PlaceholderOperation = 'Hola' | 'Mundo' // unión de tipos literales

function SumaValores(valor1:StringOrNumber, valor2:StringOrNumber,placeholder:PlaceholderOperation = 'Hola'):StringOrNumber {
  let res;
  if(placeholder === 'Hola'){
    res = +valor1 + +valor2
  }else{
    res = valor1.toString() +  valor2.toString();
  }
  return res;
}

console.log(SumaValores(2,2)); // 4
console.log(SumaValores("2","2", 'Hola'));
