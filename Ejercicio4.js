var DatosPersona = {
    Nombre: "Kevin",
    Apellido: "Medina",
    Edad: 30
};
function DatosP(Nombre, Apellido, Edad) {
    console.log("Su nombre es: ", Nombre, "Apellido: ", Apellido, "Edad: ", Edad);
}
console.log("Datos personales");
DatosP(DatosPersona.Nombre, DatosPersona.Apellido, DatosPersona.Edad);
