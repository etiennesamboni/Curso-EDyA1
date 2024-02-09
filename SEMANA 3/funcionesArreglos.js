let data = [{ nombre:"Linda", dorsal: 10, goles: 20},
            { nombre: "Catalina", dorsal: 11, goles: 30},
            { nombre: "Leicy", dorsal: 10, goles: 5},
            { nombre:"Maira", dorsal: 9, goles: 15},
            { nombre:"Manuela", dorsal: 2, goles: 6},
            { nombre:"Diana", dorsal: 4, goles: 3},
            { nombre:"Maria Camila", dorsal: 22, goles: 7}];

/* Función denominada solucion1(info) para un info que es un arreglo 
con los objetos javascripts indicados con antelación, la cual retorna una
cadena con los nombres y dorsales almacenados. */

function solucion1(info) {
    let res = '';
    info.forEach((element) => res+=`${element.nombre} : ${element.dorsal}; `);
    return res;
}

console.log(solucion1(data));

/* Función denominada solucion2(info, cantidad) para un info que es un
arreglo  con los objetos javascripts indicados con antelación, la cual
retorna un arreglo con los objetos que tienen más goles que la cantidad
suministrada. */

function solucion2(info, cantidad) {
    return info.filter((element) => element.goles > cantidad);
}

console.log(solucion2(data, 19));

/* Función denominada solucion3(info) para un info que es un arreglo 
con los objetos javascripts indicados con antelación, la cual retorna un
arreglo en la que solamente aparezcan los números de los dorsales
(probar luego en decrementarles 2). */

function solucion3(info) {
        return info.map((element) => element.dorsal);
}

console.log(solucion3(data));

function solucion3(info) {
        return info.map((element) => element.dorsal - 2);
}

console.log(solucion3(data));

/* Función denominada solucion4(info, cantidad) para un info que es un
arreglo  con los objetos javascripts indicados con antelación, la cual
retorna un arreglo con los nombres de los objetos que tienen más goles
que la cantidad suministrada en limite (intentarlo en una ). */

function solucion4(info, cantidad) {
        return info.filter((element) => element.goles > cantidad).map((element) => element.nombre);
}

console.log(solucion4(data, 29));
