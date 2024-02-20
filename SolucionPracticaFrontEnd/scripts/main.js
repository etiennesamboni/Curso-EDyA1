import {calcularCuotaMensual, convertirPorcentajeDecimal} from "./functions.js";

let button_enviar = document.getElementById("enviar");
let button_limpiar = document.getElementById("limpiar");
let button_reporteObjetos = document.getElementById("reporteObjetos");
let input_nombre = document.getElementById("nombre");
let input_prestamo = document.getElementById("prestamo");
let input_meses = document.getElementById("meses");
let input_interes = document.getElementById("interes");
let out_resultado = document.getElementById("resultado");


let arreglo = [];

function mostrarCuota() {
    let nombre = input_nombre.value;

    let prestamo = parseInt(input_prestamo.value);

    let meses = parseInt(input_meses.value);

    let interes = input_interes.value;

    interes = convertirPorcentajeDecimal(interes);


    let cuota = calcularCuotaMensual(prestamo, interes, meses);
    cuota = cuota.toFixed(2);
    out_resultado.value = `${nombre} debe pagar $ ${cuota} cada mes por el préstamo de ${prestamo} a ${meses} meses con el interés del ${interes}%`;

    agregarObjeto(nombre, prestamo, meses, interes, cuota);
}

function agregarObjeto(nombre, prestamo, meses, interes, cuota) {
    let persona = {
        nombre: nombre,
        prestamo: prestamo,
        meses: meses,
        interes: interes,
        cuota: cuota,
    };

    arreglo.push(persona);
    return true;
}


function limpiarCasillas() {
    input_nombre.value = "";
    input_prestamo.value = "";
    input_meses.value = "";
    input_interes.value = "";
    out_resultado.value = "";
}

function mostrarClientes() {
    let res = "";
    arreglo.forEach(x => res += `{nombre: ${x.nombre}, préstamo: ${x.prestamo}, meses: ${x.meses}, interés: ${x.interes}, cuota: ${x.cuota}}\n`);
    console.log(res);
    out_resultado.value = res;
}

button_enviar.addEventListener("click", mostrarCuota);
button_limpiar.addEventListener("click", limpiarCasillas);
button_reporteObjetos.addEventListener("click", mostrarClientes);


