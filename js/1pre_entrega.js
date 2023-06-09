/// CARRITO DE COMPRAS PAQUETES TURISTICOS


let total = 0;
let cantidad;
let opcion;
let continuar = "si";

const PAQUETE01 = 3400;
const PAQUETE02 = 1500;
const PAQUETE03 = 2000;
const PAQUETE04 = 2950;


function calcular(totalCarrito, precio, cantidad) {
    return totalCarrito + precio*cantidad
}

alert ("Bienvenido a Ehrventure!! Presione aceptar para continuar");

do {
    opcion = parseInt (prompt("Seleccione su proxima aventura: "+ "\n" + 
    "Paquete 01: $" + PAQUETE01 + "\n"+
    "Paquete 02: $" + PAQUETE02 + "\n"+
    "Paquete 03: $" + PAQUETE03 + "\n"+
    "Paquete 04: $" + PAQUETE04 + "\n"));
 switch (opcion) {
    case 1:
        cantidad = parseInt(prompt("Ingrese la cantidad de personas al paquete"));
        total = calcular (total,PAQUETE01,cantidad);
        break;
    case 2:
        cantidad = parseInt(prompt("Ingrese la cantidad de personas al paquete"));
        total = calcular (total,PAQUETE02,cantidad);
        break;
    case 3:
        cantidad = parseInt(prompt("Ingrese la cantidad de personas al paquete"));
        total = calcular (total,PAQUETE03,cantidad);
        break;
    case 4:
        cantidad = parseInt(prompt("Ingrese la cantidad de personas al paquete"));
        total = calcular (total,PAQUETE04,cantidad);
        break;
    default:
        resultado = 0; 
 }
   continuar = prompt("Desea agregar proximas aventuras?");
} while (continuar == "si");


alert ("La inversion total de su proxima aventura es de: $" + total);