

prompt("Ingrese SI para ver los precios + IVA de los productos que tenemos disponibles")

let productos = [ 
    {nombre: "pochoclera a gas" , precio:120000},
    {nombre: "pochoclera electrica con mostrador grande" , precio:230000},
    {nombre: "pochoclera electrica con mostrador chico" , precio:110000},
    {nombre: "pochoclera industrial" , precio:400000},


]

function agregar_iva ( producto ){
    
    let iva = producto.precio * 0.21;

    return {
        nombre:producto.nombre,

        precio:producto.precio + iva

   
    }
}

let resultado_map = productos.map( agregar_iva );
console.log( " Productos que tenemos disponibles con su iva correspondiente son: " , resultado_map );

function calcula_iva( precio ){

    let iva = precio * 0.21;

    return iva

}

function calcular_cuota( precio, cuotas){

    if( cuotas == 3){
        let cuota = precio * 0.03;
        return cuota
    }
    else if( cuotas == 6){
        let cuota = precio * 0.10;
        return cuota
    }
    else if(cuotas == 12){
        let cuota = precio * 0.20;
        return cuota
    }
}

let producto = prompt ( "Ingrese pochoclera industrial para saber su valor en cuotas o SALIR");


let maquina_industrial = 4000000;



while (producto == "SALIR") {
console.log("No podes calcular el valor final en cuotas");
producto = prompt ( "Ingrese pochoclera para saber su valor en cuotas o SALIR");
}

let cuotas = prompt("Ingrese la cantidad de cuotas 3 , 6 , 12");

let iva = calcula_iva(maquina_industrial);
let monto_cuotas = calcular_cuota(maquina_industrial, cuotas);



console.log("En " , cuotas , "pagas: " , maquina_industrial + iva  + monto_cuotas);
console.log("Por mes pagas: ", calcular_cuota(maquina_industrial, cuotas))


let lista_productos = [ 
    {nombre: "pochoclera a gas" , precio:120000},
    {nombre: "pochoclera electrica con mostrador grande" , precio:230000},
    {nombre: "pochoclera electrica con mostrador chico" , precio:110000},
    {nombre: "pochoclera industrial" , precio:400000},

]

function menor_precio ( producto ) {

    return producto.precio <= 110000

}

let resultado_filter = lista_productos.filter ( menor_precio );
console.log("El precio de la máquina más economica que tenemos disponible es: " , resultado_filter)

