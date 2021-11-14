//---------------- monedas ---------------
var PesoArgentino = /** @class */ (function () {
    function PesoArgentino(valor_dolar, nombre_moneda) {
        this.valor_dolar = valor_dolar;
        this.nombre_moneda = nombre_moneda;
    }
    return PesoArgentino;
}());
var PesoUruguayo = /** @class */ (function () {
    function PesoUruguayo(valor_dolar, nombre_moneda) {
        this.valor_dolar = valor_dolar;
        this.nombre_moneda = nombre_moneda;
    }
    return PesoUruguayo;
}());
//--------------- cotizador --------------
var Cotizador = /** @class */ (function () {
    function Cotizador(moneda) {
        this.moneda = moneda;
        this.valor_dolar = moneda.valor_dolar;
        this.nombre_moneda = moneda.nombre_moneda;
    }
    Cotizador.prototype.comprarDolares = function (cantidadDisponible) {
        var dolaresComprados = cantidadDisponible * this.moneda.valor_dolar;
        return dolaresComprados;
    };
    return Cotizador;
}());
//----------------------------------------------
var monedaArg = new PesoArgentino(0.0100, "Peso Argentino");
var cotizadorCompraArg = new Cotizador(monedaArg);
console.log(" ----- Con 100 " + cotizadorCompraArg.nombre_moneda +
    " podes comprar " + cotizadorCompraArg.comprarDolares(1000) + " dolares");
//------------------------------------------------
var monedaUru = new PesoUruguayo(0.023, "Peso Uruguayo");
var cotizadorCompraUru = new Cotizador(monedaUru);
console.log(" ----- Con 100 " + cotizadorCompraUru.nombre_moneda +
    " podes comprar " + cotizadorCompraUru.comprarDolares(1000) + " dolares");
