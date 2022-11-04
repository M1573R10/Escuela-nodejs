var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Rectangulo.prototype.getarea = function () {
        console.log(this.calcArea);
        //return this.calcArea();
    };
    Rectangulo.prototype.calcArea = function () {
        this.base = 10;
        this.altura = 10;
        return this.base * this.altura;
    };
    return Rectangulo;
}());
