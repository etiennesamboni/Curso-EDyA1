import {calcularCuotaMensual, convertirPorcentajeDecimal} from "./functions.js";

let button_enviar = document.getElementById("enviar");

function mostrarCuota() {
    let input_nombre = document.getElementById("nombre");
    let nombre = input_nombre.value;

    let input_prestamo = document.getElementById("prestamo");
    let prestamo = parseInt(input_prestamo.value);

    let input_meses = document.getElementById("meses");
    let meses = parseInt(input_meses.value);

    let input_interes = document.getElementById("interes");
    let interes = input_interes.value;

    interes = convertirPorcentajeDecimal(interes);

    let out_resultado = document.getElementById("resultado");

    let cuota = calcularCuotaMensual(prestamo, interes, meses);
    cuota = cuota.toFixed(2);
    out_resultado.value = `${nombre} debe pagar $ ${cuota} cada mes por el préstamo de ${prestamo} a ${meses} meses con el interés del ${interes}%`;
}

button_enviar.addEventListener("click", mostrarCuota);
