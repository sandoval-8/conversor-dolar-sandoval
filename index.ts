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