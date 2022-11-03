interface Datos{
    Nombre: string;
    Apellido?: string;
    Edad: number;
    EsPeruano?: boolean;
}

const DatosPersona: Datos = {
    Nombre: "Kevin",
    Apellido: "Medina",
    Edad: 30,
}

function DatosP(Nombre: string, Apellido: string, Edad: number){
    console.log("Su nombre es: " , Nombre , "Apellido: " , Apellido , "Edad: " , Edad)
}

console.log("Datos personales");
DatosP(DatosPersona.Nombre, DatosPersona.Apellido, DatosPersona.Edad);