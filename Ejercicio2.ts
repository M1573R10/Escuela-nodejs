interface Casa{
    area: number;
    ambientes: number;
    colorParedes: string;
}

const DatosCasa: Casa = {
    area: 80,
    ambientes: 3,
    colorParedes: "Azul"
};

console.log("Datos de la Casa");
console.log("El área de la casa es: ", DatosCasa.area);
console.log("La cantidad de ambientes de la casa es: ", DatosCasa.ambientes);
console.log("El color de la pared de la casa es: ", DatosCasa.colorParedes);