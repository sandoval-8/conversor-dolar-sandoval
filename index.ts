interface Moneda {
    valor_dolar: number;
    nombre_moneda: string;
}
//---------------- monedas ---------------
class PesoArgentino implements Moneda {
    valor_dolar: number;
    nombre_moneda: string;
    constructor(valor_dolar:number, nombre_moneda:string){
        this.valor_dolar = valor_dolar;
        this.nombre_moneda = nombre_moneda;
    }
}
class PesoUruguayo implements Moneda {
    valor_dolar: number;    
    nombre_moneda: string;
    constructor(valor_dolar:number, nombre_moneda:string){
        this.valor_dolar = valor_dolar;
        this.nombre_moneda = nombre_moneda;
    }
}
//--------------- cotizador --------------
class Cotizador {
    valor_dolar:number;   
    nombre_moneda: string;

    constructor(public moneda:Moneda){
        this.valor_dolar = moneda.valor_dolar;
        this.nombre_moneda = moneda.nombre_moneda;
    }

    comprarDolares(cantidadDisponible: number):number{
        let dolaresComprados = cantidadDisponible * this.moneda.valor_dolar;
        return dolaresComprados;
    }
}
//----------------------------------------------
let monedaArg = new PesoArgentino(0.0100, "Peso Argentino");

let cotizadorCompraArg = new Cotizador(monedaArg);

console.log(" ----- Con 100 " + cotizadorCompraArg.nombre_moneda + 
" podes comprar "+ cotizadorCompraArg.comprarDolares(1000) + " dolares");