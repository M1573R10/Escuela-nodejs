class Rectangulo{
    base: number;
    altura: number;


    constructor (base: number , altura: number){
        this.base = base;
        this.altura = altura;

    }

    getarea(){
        return this.calcArea();
    }

    calcArea(){
        return this.base * this.altura;
    }
}

const rect = new Rectangulo(10,10);
console.log(rect.calcArea);


