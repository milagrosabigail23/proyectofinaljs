

function registrarse(){

    let nombre_cliente = document.getElementById("nombre_cliente");
    let mensaje = document.getElementById("mensaje");

    if( nombre_cliente.value == "Camila"){
        let parrafo = document.createElement("p");
        parrafo.innerText = "Bienvenidx a la pagina";
        mensaje.append(parrafo);
    }
    else{
        mensaje.innerHTML = '<h2>NO SOS CLIENTE</h2>'
    
                           '<p>El cliente: ${nombre_cliente.value} no se encontro</p>'
    }

}

let carrito = [];



function agregar_a_carrito(e){

    
    console.log(e.target);
    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;


    let nombre_producto = padre.querySelector("h5").textContent;
    let precio_producto = padre.querySelector("span").textContent;
    let img_producto =  abuelo.querySelector("img").src;

    console.log(nombre_producto);
    console.log(precio_producto);
    console.log(img_producto);


    let producto = {
        nombre: nombre_producto,
        precio: precio_producto,
        img: img_producto,
        cantidad: 1
    };

    
    /* GUARDAR EN LOCALSTORA COMO JSON
    carrito.push(producto);
    */

    mostrar_carrito( producto );
}


function mostrar_carrito( producto){

    let fila = document.createElement("tr");
    fila.innerHTML = `<td><img src="${producto.img}"></td>
                      <td>${producto.nombre}</td>
                      <td>${producto.cantidad}</td>
                      <td>${producto.precio}</td>
                      <td><button class="btn btn-danger borrar_elemento">Borrar</button></td>
                      `;    

    let tabla = document.getElementById("tbody");
    tabla.append( fila );

    let btn_borrar = document.querySelectorAll(".borrar_elemento");


    for( let boton of btn_borrar){

        boton.addEventListener("click" , borrar_producto);
    }

}


function borrar_producto(e){

    let abuelo = e.target.parentNode.parentNode;
    abuelo.remove();

}



let btn_carrito = document.getElementById("mostrar_carrito");


btn_carrito.addEventListener("click", function(){

    let carrito = document.getElementById("carrito");

    if( carrito.style.display != "none"){

        carrito.style.display = "none";
    }

    else{
        carrito.style.display = "block";
    }


})


let btn_compra = document.querySelectorAll(".botonCompra");

console.log(btn_compra);


for( let boton of btn_compra){

    boton.addEventListener("click" , agregar_a_carrito);
}

localStorage.setItem("alquiler_pochoclera" , "Electrica");
localStorage.setItem("valor" , 5000);
localStorage.setItem("colores" , ["rojo" , "azul" , "blanco"])

let pochoclera_uno = localStorage.getItem("alquiler_pochoclera");
let valor_maquina = localStorage.getItem("valor");
let colores = localStorage.getItem("colores");

console.log( pochoclera_uno );
console.log( valor_maquina );
console.log( colores );

