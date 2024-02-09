// para realización del item1

/* Ingresar a la opción de consola, existente al interior de las herramientas del desarrollador, que
proporciona el navegador web que se utiliza y en ella copiar las instrucciones presentes en el
archivo base para la realización del item1. Posteriormente, realizar los ajustes necesarios para que
se despliegue el nombre, índice de masa corporal (imc es igual a peso/(estatura*estatura)) y
estado nutricional de una persona.  */

{
    let nombre = prompt('Digite su nombre', 'Marcial')
    let peso = parseFloat(prompt('Digite su peso', 65.0))
    
    // incluir lectura de la estatura y computo del IMC
    let estatura = parseFloat(prompt('Digite su estatura', 1.75))
    let imc = peso/(estatura ** 2)
    let estadoN 
    if (imc < 18.5){
        estadoN = 'Bajopeso'
    }else if (imc < 24.9){
        estadoN = 'Normal'
    } else
    {
        estadoN = 'Sobrepeso u Obeso'
    }
    alert(nombre+'  IMC: '+imc+' EstadoNutricional: '+estadoN)
}

// para realización del item2

/*
Actualizar la versión anterior, para solicitar la información de 5 personas y al final desplegar en una
sola ventana, el nombre, índice de masa corporal (imc es igual a peso/(estatura*estatura)) y
estado nutricional de una persona. 
*/

{
    let res = '';
    let estadoN;

    for(let i = 1; i <= 5; i++) {
        let nombre = prompt('Digite su nombre', 'Marcial');
        let peso = parseFloat(prompt('Digite su peso', 65.0));
        let estatura = parseFloat(prompt('Digite su estatura', 1.75));
        let imc = peso/(estatura ** 2);
        imc.toFixed(1);

        if (imc < 18.5) {
            estadoN = 'Bajopeso';
        } else if (imc < 24.9) {
            estadoN = 'Normal';
        } else {
        estadoN = 'Sobrepeso u Obeso';
        }

        res += nombre + '  IMC: ' + imc + ' EstadoNutricional: ' + estadoN + '\n';
    }

    alert(res)
}

// Trabajo en casa

/*
    En el item1, la salida se almacene en el objeto persona con las propiedades; nombre, peso, estatura e imc
*/

{
    let nombre = prompt('Digite su nombre', 'Marcial')
    let peso = parseFloat(prompt('Digite su peso', 65.0))
    
    // incluir lectura de la estatura y computo del IMC
    let estatura = parseFloat(prompt('Digite su estatura', 1.75))
    let imc = peso/(estatura ** 2)
    let estadoN 
    if (imc < 18.5){
        estadoN = 'Bajopeso'
    }else if (imc < 24.9){
        estadoN = 'Normal'
    } else
    {
        estadoN = 'Sobrepeso u Obeso'
    }

    let persona  = {
        nombre: nombre,
        peso: peso,
        estatura: estatura,
        imc: imc,
    };

    alert(persona.nombre+'  IMC: '+persona.imc+' EstadoNutricional: '+estadoN)
}

/*
En el item2, cada nuevo resultado se almacene en un arreglo de objetos persona
*/

{
    let lista = [];
    let persona = {};
    let res = '';
    let estadoN;


    for(let i = 1; i <= 5; i++) {
        let nombre = prompt('Digite su nombre', 'Marcial');
        let peso = parseFloat(prompt('Digite su peso', 65.0));
        let estatura = parseFloat(prompt('Digite su estatura', 1.75));
        let imc = peso/(estatura ** 2);
        imc.toFixed(1);

        if (imc < 18.5) {
            estadoN = 'Bajopeso';
        } else if (imc < 24.9) {
            estadoN = 'Normal';
        } else {
        estadoN = 'Sobrepeso u Obeso';
        }

        persona  = {
            nombre: nombre,
            peso: peso,
            estatura: estatura,
            imc: imc,
        };

        lista.push(persona);
        
        res += nombre + '  IMC: ' + imc + ' EstadoNutricional: ' + estadoN + '\n';
    }
    
    alert(res)
}