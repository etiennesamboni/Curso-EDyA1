function calcularCuotaMensual(prestamo, i, n) {
    return prestamo * ((Math.pow(1+i,n) * i) / (Math.pow(1+i,n) - 1));
}

function convertirPorcentajeDecimal(porcentaje) {
    let valor = parseFloat(porcentaje.split("%")[0]);
    return valor / 100;
}

export {calcularCuotaMensual, convertirPorcentajeDecimal};


