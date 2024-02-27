function calcularCuotaMensual(prestamo, i, n) {
    return (prestamo * ((Math.pow(1+i,n) * i) / (Math.pow(1+i,n) - 1))).toFixed(2);
}

function convertirPorcentajeDecimal(porcentaje) {
    return valor / 100;
}

function crearPaginaRespuesta(nombre, cuota, prestamo, meses, intereses) {
    return `<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Resultado</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background-color: #f0f0f0;
            }
        </style>
    </head>
    <body>
        <main style="max-width: 400px; width: 100%; padding: 20px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); background-color: #fff; border-radius: 8px;">
            <h2>Respuesta</h2>
            <p style="width: 100%; height: 100%;">${nombre} debe pagar mensualmente una cuota de $${cuota} por el préstamo de $ ${prestamo} con una tasa de interés del ${intereses*100}% a ${meses} meses
            </p>
        </main>
    </body>
    </html>`
}

module.exports = {calcularCuotaMensual, convertirPorcentajeDecimal, crearPaginaRespuesta};
