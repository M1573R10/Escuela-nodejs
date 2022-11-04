interface Datos{
    usuario: string;
    clave: string;
    fecha: Date;
    estado?: boolean;
}

let datos: Datos ={
    usuario: 'Kevin',
    clave: 'prueba123',
    fecha: new Date,
    estado: true,
}

let nombres: string[] = [
    'Jhon','Luis','Mateo','Ana'
]

const[,,Mateo,Ana] = nombres
console.log(Mateo,Ana)