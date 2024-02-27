const misFunciones = require('./scripts/utils.js')

const express = require('express');

const app = express();
const port = 8097;

app.use(express.urlencoded({extended: true}));

app.get('/calcularCuota', (req, res) => {
    res.sendFile(__dirname+'/static/calculacuota.html');
    console.log('en get/calculaCuota');
});

app.get('/calcularCuota/style.css', (req, res) => {
    res.sendFile(__dirname+"/static/style.css");
    console.log('en get/calculaCuota/style.css');
}) ;


app.post('/respuesta', (req, res) => {
    const datos = req.body;
    console.log(datos);

    const nombre = datos.nombre;
    const prestamo = datos.prestamo;
    const intereses = datos.interes / 100;
    const meses = datos.meses;

    const cuota = misFunciones.calcularCuotaMensual(prestamo, intereses, meses);


    res.send(misFunciones.crearPaginaRespuesta(nombre, cuota, prestamo, meses, intereses));
    console.log('en post /calcularCuota');
});

app.listen(port, () => {
    console.log(`Aplicación corriendo en http://localhost:${port}`);
});
